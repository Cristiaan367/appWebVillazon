import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { EventService } from '../../shared/model/events/events.service';
import { Evento } from '../../shared/model/events/events';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogMessageComponent, DialogMessage } from '../../components/html/dialog-message/dialog-message.component';
import { TdDialogService } from "@covalent/core";


@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events$: Observable<Evento[]>;

  constructor(private eventService:EventService, public dialog: MdDialog, private dialogService: TdDialogService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.events$ = this.eventService.findAll();
  }

  delete(event:Evento) {

    this.confirmDeletion(event).subscribe((accept: boolean) => {

      if (!accept) return;

      this.eventService.delete(event.$key).subscribe(
        () => this.showDialogMessage(new DialogMessage('primary', 'thumb_up', 'Categoria eliminada!')),
        err => this.showDialogMessage(new DialogMessage('warn', 'thumb_down', err))
      );

    });

  }

  private confirmDeletion(event:Evento) {

    return this.dialogService.openConfirm({
      message: `Categoria '${event.title}' esta seguro de aliminarlo?`,
      disableClose: true,
      viewContainerRef: this.viewContainerRef,
      title: 'Confirm',
      cancelButton: 'Disagree',
      acceptButton: 'Agree'
    }).afterClosed();

  }


  showDialogMessage(dialogMessage: DialogMessage) {

    let config: MdDialogConfig = {
      disableClose: true,
      data: dialogMessage
    }

    let dialogRef: MdDialogRef<DialogMessageComponent> = this.dialog.open(DialogMessageComponent, config);

  }

}
