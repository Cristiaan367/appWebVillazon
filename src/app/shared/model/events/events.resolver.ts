import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Evento } from "./events";
import { Observable } from "rxjs/Observable";
import { EventService } from "./events.service";


@Injectable()
export class EventResolver implements Resolve<Evento> {


    constructor(private eventService: EventService) {}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Evento> {
        return this.eventService.find(route.params['id']).first();
    }

} 
