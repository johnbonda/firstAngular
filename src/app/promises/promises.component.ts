import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

export const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  response:any;
  result: any;
  status: any;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.getCustomers();
    // this.postCustomer();
  }

  getCustomers(){
    this.http.get("http://localhost:3000/customers")
          .toPromise()
          .then(data => this.response = data)
          .catch(error => console.error("error came", error))
          ,(error => console.error("error with comma", error));
  }

  getThroughTypicode() {
    this.http.get("http://jsonplaceholder.typicode.com/posts")
          .toPromise()
          .then(data => {console.log(data);})
          .catch(error => console.error("error came", error))
          ,(error => console.error("error with comman", error));
  }

  postCustomer() {
    this.http.post("http://localhost:3000/customers", {
      "name": "Customer0020",
      "email": "customer008@gmail.com",
      "tel": "0005676596"
    })
    .toPromise()
    .then(()=> {this.result = "Customer creation successful"})

    this.getCustomers();
  }

  putCall() {
    this.http.put("http://localhost:3000/customers/2", {
      "name": "NewCustomer001",
      "email": "newcustomer001@gmail.com",
      "tel": "0000252525"
    })
    .toPromise()
    .then(data => {
      console.log("PUT request is successful ", data);
      this.status = "PUT request is successful";
    }),
    error => {
      console.log("Error", error);
      this.status = "Error";
    }
  }

  deleteCall() {
    this.http.delete("http://localhost:3000/customers/1")
      .toPromise()
      .then(data => {
        console.log("Delete Request is successful ", data);
        this.status = "Delete Request is successful";
      })
      .catch(error => {
        console.log("Error", error);
        this.status = "Error";
      });
  }
}
