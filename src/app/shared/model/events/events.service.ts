import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../common/firebase.service';
import { Evento } from './events';
import * as firebase from 'firebase';
import * as _ from 'lodash';


@Injectable()
export class EventService extends FirebaseService {

  constructor(private db: AngularFireDatabase) {
    super();
  }


  find(key: string): Observable<Evento> {
    return this.db.object(`/events/${key}`).map(Evento.fromJSON);
  }

  findAll(query?: any): Observable<Evento[]> {
    let options: any = query ? { query } : {};
    return this.db.list('/events', options).map(Evento.fromJSONArray);
  }

  create(event: Evento): Observable<any> {
    delete event.$key;
    const action: firebase.Promise<any> = this.db.list('/events').push(event);
    return super.actionAsObservable(action);
  }

  update(event:Evento): Observable<any> {
    let updatedEvent: Evento = Object.assign({}, event);
    delete updatedEvent.$key;
    const action: firebase.Promise<any> = this.db.list('/events').update(event.$key, updatedEvent);
    return super.actionAsObservable(action);
  }

  delete(key: string): Observable<any> {
    const action: firebase.Promise<any> = this.db.list('/events').remove(key);
    return super.actionAsObservable(action);
  }


  uploadImages(event:Evento, files: File[] | File): void {
    if (files instanceof FileList) {
      _.each(files, (file) => this.uploadImage(event, file));
    } else {
      this.uploadImage(event, files);
    }
  }  

  uploadImage(event:Evento, file: any): void {
    let storageRef: firebase.storage.Reference = firebase.storage().ref();
    let uploadTask: firebase.storage.UploadTask = storageRef.child(`eventos/images/${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => { console.log('Area files uploaded'); },
      (error) => { console.warn('Area error uploading files:', error.message); },
      () => {
        event.images = uploadTask.snapshot.downloadURL;
        this.update(event);
      }
    );

  }

}
