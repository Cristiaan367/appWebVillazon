import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from "@angular/forms";
import { EventService } from '../../shared/model/events/events.service';
import { Evento } from '../../shared/model/events/events';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogMessageComponent, DialogMessage } from '../../components/html/dialog-message/dialog-message.component';
import { TdMediaService, TdDialogService } from '@covalent/core';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

 constructor(private router:Router, private eventService: EventService, public dialog: MdDialog, private dialogService: TdDialogService, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}

  save(form: FormGroup) {

    let event: Evento = Evento.fromJSON(form.value);
    this.eventService.create(event).subscribe(
      () => {
        this.showDialogMessage(new DialogMessage('primary', 'thumb_up', 'Evento guardado!'));
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
