import * as firebase from	'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class DetailProvider{
	public dbm;

	constructor(){
		this.dbm = firebase.database().ref('/');
	}

	createDetail(id, detalle, precio){


	}
}