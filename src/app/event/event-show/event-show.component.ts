import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../../shared/model/events/events';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  event: Evento;

  constructor(private route: ActivatedRoute) {
    route.data.subscribe(data => this.event = data['event']);
  }
  ngOnInit() {
  }

}
