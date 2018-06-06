import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myData: Array<any>;
  displayedColumns: Array<any>;

  constructor(private http: HttpClient) {

  }
  getData() {
    console.log('hello');
    this.http.get(`http://localhost:3003/get/2017/MAY/29/bhav`)
      .subscribe(res => {
        this.displayedColumns = res.fields;
        this.myData = res.row
      });
  }
}
