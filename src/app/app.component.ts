import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie';
  navbg: any;

  @HostListener('document:scroll') scrollover = () => {
    if(window.pageYOffset > 0){
      this.navbg = {
        'background-color': '#000000'
      }
    }
    else{ 
      this.navbg = {
      'background-color': 'transparent'
    }
    }
  }
}
