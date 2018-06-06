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
  myDate: any;

  constructor(private http: HttpClient) {

  }
  getData() {
    const dte = new Date(this.myDate);
    console.log(dte.getDate(), dte.getFullYear());
    const months = [ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'NOVEMBER', 'DECEMBER' ];
    this.http.get(`http://localhost:3003/get/${dte.getFullYear()}/${months[dte.getMonth()]}/${dte.getDate()}/bhav`)
      .subscribe(res => {
        const { fields, row } = res
        this.displayedColumns = fields;
        this.myData = row
      });
  }
}
