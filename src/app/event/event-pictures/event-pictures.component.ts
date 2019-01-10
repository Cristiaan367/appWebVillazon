import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../shared/model/events/events.service';
import { Evento } from '../../shared/model/events/events';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogMessageComponent, DialogMessage } from '../../components/html/dialog-message/dialog-message.component';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'event-pictures',
  templateUrl: './event-pictures.component.html',
  styleUrls: ['./event-pictures.component.css']
})
export class EventPicturesComponent implements OnInit {

  event: Evento;
  enableUpload: boolean = true;

  constructor(private router:Router, private route: ActivatedRoute, private eventService:EventService, public dialog: MdDialog) { 
    route.data.subscribe(data => this.event = data['event']);
  }

  ngOnInit() {
  }

  enableUploadMorePictures() {
    this.enableUpload = true;
  }

  uploadFiles(files) {
    this.eventService.uploadImages(this.event, files);
    this.enableUpload = false;
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
