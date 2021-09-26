import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';  
import { throwError } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { catchError } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {ViewEncapsulation} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { map } from 'rxjs/operators';


export interface employee {
  type: any;
  id: number;
  name: string;
  email: any;
  role: string;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class EmployeeTableComponent implements OnInit {

  // public pageSize = 10;
  employeeData:employee[] =[];
  // length = 50;
  length: number;
  pageSize: number;
  pageSizeOptions = [5, 10, 50];
  searchText= '';
  toggleSearch: boolean = false;
  dataSource = new MatTableDataSource<employee>(this.employeeData);

  // public event: PageEvent = new PageEvent;
  selection = new SelectionModel<employee>(true,[]);

  @ViewChild(MatPaginator, {static: false}) paginator : MatPaginator;

  @ViewChild('searchbar') searchbar! : ElementRef;

 

  constructor(private dataService: DataServiceService){
    // this.dataSource = new MatTableDataSource<employee>(this.employeeData);
  }
// 
  displayedColumns: string[] = ['select','id', 'name', 'email', 'role', 'actions'];

  ngOnInit(): void{
    this.getData('');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 

  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator; }

  getData(queryParam: any) {
    this.dataService.getData().subscribe((data: any) => {
      this.employeeData = data;
      if (queryParam !== ''){
        this.dataSource.data = this.employeeData.filter(function(it){
            return  it.name.toLowerCase().includes(queryParam.toLowerCase()) 
            || it.email.toLowerCase().includes(queryParam.toLowerCase())
            || it.role.toLowerCase().includes(queryParam.toLowerCase());
        }); 
      }else{
         this.dataSource.data = this.employeeData;
      }
      this.length=this.employeeData.length;

    }), catchError(error => {
      return throwError('Something went wrong')
    })
  }  

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }

  delete(id:any){
    this.dataSource.data = this.dataSource.data.filter(function(item){
      return item.id != id
    })
  }

  removeSelectedRows() {
    let selectedIds : number[] = []
    this.selection.selected.forEach(item => { selectedIds.push(item.id) })

    this.dataSource.data = this.dataSource.data.filter(function(item){
      return !selectedIds.includes(item.id)
    })
  }
}




