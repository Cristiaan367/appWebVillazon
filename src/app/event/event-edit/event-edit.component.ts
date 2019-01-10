import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup} from '@angular/forms'
import { EventService } from '../../shared/model/events/events.service';
import { Evento } from '../../shared/model/events/events';
import { MdDialog, MdDialogRef, MdDialogConfig, } from '@angular/material';
import { DialogMessageComponent, DialogMessage } from '../../components/html/dialog-message/dialog-message.component';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

	event: Evento;

  constructor(private router:Router, private route:ActivatedRoute, private eventService:EventService, public dialog: MdDialog) {
  	route.data.subscribe(data => this.event = data['event']);
  }


  ngOnInit() {
  }

  

  update(form: FormGroup) {
    
    this.event = Object.assign(this.event, form.value);
    this.eventService.update(this.event).subscribe(
      () => {
        this.showDialogMessage(new DialogMessage('primary', 'thumb_up', 'Evento Actualizado!'));
        this.router.navigate(['events'])
      },
      err => this.showDialogMessage(new DialogMessage('warn', 'thumb_down', err))
    );

  }


  cancel() {
    this.router.navigate(['events']);
  }


  showDialogMessage(dialogMessage: DialogMessage) {

    let config: MdDialogConfig = {
      disableClose: true,
      data: dialogMessage
    }

    let dialogRef: MdDialogRef<DialogMessageComponent> = this.dialog.open(DialogMessageComponent, config);

  }

}
