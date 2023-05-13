import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills!:Bill[]
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<Bill[]>('http://localhost:8083/allBills').subscribe(
        (data)=>{
          console.log(data)
          this.bills=data
          console.log(this.bills[0].customer["id"])

        });
  
  }
}
