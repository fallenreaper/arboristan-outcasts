import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arbora Nova';
  twitterHandle = 'HelloWorld'
  emailContact = 'foo@gmail.com'


  isHeaderExpanded = false
  toggleHamburger(){
    console.log("Key Data", this.isHeaderExpanded)
    this.isHeaderExpanded = !this.isHeaderExpanded
  }

  constructor(private router: Router){
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }
}
