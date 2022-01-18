import { Component, OnInit,HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { 
    
  }
  

  
  ngOnInit() {
      

  }



  header_nav_menu=false;

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop>150  || document.documentElement.scrollTop >150){
      this.header_nav_menu=true;
    }else{
      this.header_nav_menu=false;
    }
  }




}
