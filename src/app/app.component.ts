// I went through a tutorial that helped add the proxy.conf.json
// It hooks up the http calls to the correct server Url. At least to test it.
// when running ng serve, write "ng serve --proxy-config proxy.conf.json" to make it work

import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Music-App';

  constructor (private service: AppServiceService) {

  }
  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi() {

    // this.service.getData()
    // .subscribe((res) => {
    //   console.log('Response from API is ', res);
    // }, (error) => {
    //   console.log('Error from API is ', error);
    // })
  }
}
