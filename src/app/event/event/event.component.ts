import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, AfterViewInit {

  constructor(public router: Router, public media:TdMediaService) { }

  ngOnInit() {
  
  }

  ngAfterViewInit():void{
  	this.media.broadcast();
  }

}
