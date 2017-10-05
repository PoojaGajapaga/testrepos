import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem, DataTable, LazyLoadEvent, DialogModule } from "primeng/primeng";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import Dexie from 'dexie';
import { Observable } from "rxjs";
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {ButtonModule} from 'primeng/primeng';

const MAX_EXAMPLE_RECORDS = 1000;

@Component({
  selector: 'at-alltimes',
  templateUrl: './alltimes.component.html',
  styleUrls: ['./alltimes.component.css']
})
export class AlltimesComponent implements OnInit {

  @ViewChild("dt") dt : DataTable;

  allTimesheetData = [];

  addForm: FormGroup;

  displayAddForm = false;

  allProjectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];

  allProjects = this.allProjectNames.map((proj) => {
    return { label: proj, value: proj }
  });


  selectedRows: Array<any>;

  contextMenu: MenuItem[];

  recordCount : number;

  

  constructor(private apollo: Apollo, private formBuild: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formBuild.group({

      User : ['', [Validators.required]],
      Project : ['', [Validators.required]],
      Category : ['', [Validators.required]],
      StartTime : ['', [Validators.required]],
      EndTime : ['', [Validators.required]]

    })

    const AllClientsQuery = gql`
    query allTimesheets {
      allTimesheets {
          id
          user
          project
          category
          startTime
          endTime
        }
    }`;

    const queryObservable = this.apollo.watchQuery({

      query: AllClientsQuery, pollInterval: 150

    }).subscribe(({ data, loading }: any) => {

      this.allTimesheetData = data.allTimesheets;
      this.recordCount = data.allTimesheets.length;

    });

  }

  onSaveComplete(){

    const user = this.addForm.value.User;
    const project = this.addForm.value.Project;
    const category = this.addForm.value.Category;
    const startTime = this.addForm.value.StartTime;
    const endTime = this.addForm.value.EndTime;

    const submitSheet = gql`

      mutation submitSheet ($user: String!, $project: String!, $category: String!, $startTime: Int!, $endTime: String!, $date: DateTime!){
        submitSheet(user: $user, project: $project, category: $category, startTime: $startTime, endTime: $endTime, date: $date)
      }
    
    `;

    this.apollo.mutate({
      mutation: submitSheet,
      variables:{
        user: user,
        project: project,
        category: category,
        startTime: startTime,
        endTime: endTime,
        date: new Date()
      }
    }).subscribe(({data}) => {
      console.log('received data', data);

    },(error) => {
      console.log('error occured while sending query', error);
    });

      this.displayAddForm = false;
  }

}