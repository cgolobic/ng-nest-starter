import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGreeting } from '../../../shared/interfaces/greeting';
import { logMessage } from '../../../shared/utilities/logger';
import { LinkService } from './services/link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-client';
  greeting = '';

  constructor(private _http: HttpClient, private _link: LinkService) {}

  ngOnInit() {
    logMessage('app', 'creating app component...');
    this._http.get(`${this._link.apiBase()}/hello`).subscribe((res: IGreeting) => this.greeting = res.greeting);
  }

}
