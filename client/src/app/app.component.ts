import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGreeting } from '../../../shared/interfaces/greeting';
import { logMessage } from '../../../shared/utilities/logger';

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
    logMessage('app', 'creating app component...');
    this._http.get('http://localhost:3000/api/hello').subscribe((res: IGreeting) => this.greeting = res.greeting);
  }

}
