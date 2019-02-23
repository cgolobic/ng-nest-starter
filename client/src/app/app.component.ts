import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGreeting } from '../../../shared/interfaces/greeting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-client';
  greeting = '';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('http://localhost:3000/api/hello').subscribe((res: IGreeting) => this.greeting = res.greeting);
  }

}
