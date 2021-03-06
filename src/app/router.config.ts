import { Route } from '@angular/router';
import { AppComponent } from './app.component';

import { AreaComponent } from "app/area/area/area.component";
import { AreasListComponent } from './area/areas-list/areas-list.component';
import { AreaShowComponent } from './area/area-show/area-show.component';
import { AreaNewComponent } from './area/area-new/area-new.component';
import { AreaEditComponent } from './area/area-edit/area-edit.component';
import { AreaPicturesComponent } from './area/area-pictures/area-pictures.component';
import { AreaResolver } from './shared/model/area/area.resolver';

import { PlaceComponent } from "app/place/place/place.component";
import { PlacesListComponent } from './place/places-list/places-list.component';
import { PlaceShowComponent } from './place/place-show/place-show.component';
import { PlaceNewComponent } from './place/place-new/place-new.component';
import { PlaceEditComponent } from './place/place-edit/place-edit.component';
import { PlacePicturesComponent } from './place/place-pictures/place-pictures.component';
import { PlaceResolver } from './shared/model/place/place.resolver';
//event
import { EventComponent} from 'app/event/event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventShowComponent } from './event/event-show/event-show.component';
import { EventNewComponent } from './event/event-new/event-new.component'
import { EventEditComponent } from './event/event-edit/event-edit.component'
import { EventPicturesComponent } from './event/event-pictures/event-pictures.component'
import { EventResolver } from './shared/model/events/events.resolver'

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/security/auth.guard';


export const RouterConfig: Route[] = [
  {
    path: 'areas',
    component: AreaComponent,
    children: [
      {
        path: '',
        component: AreasListComponent
      },
      {
        path: 'new',
        component: AreaNewComponent
      },
      {
        path: ':id',
        resolve: {
          area: AreaResolver
        },
        children: [
          {
            path: '',
            component: AreaShowComponent
          },
          {
            path: 'edit',
            component: AreaEditComponent
          },
          {
            path: 'pictures',
            component: AreaPicturesComponent
          }
        ]
      }
    ],
    canActivate: [AuthGuard]
  },


  {
    path: 'places',
    component: PlaceComponent,
    children: [
      {
        path: '',
        component: PlacesListComponent
      },
      {
        path: 'new',
        component: PlaceNewComponent
      },
      {
        path: ':id',
        resolve: {
          place: PlaceResolver
        },
        children: [
          {
            path: '',
            component: PlaceShowComponent
          },
          {
            path: 'edit',
            component: PlaceEditComponent
          },
          {
            path: 'pictures',
            component: PlacePicturesComponent
          }
        ]
      }
    ],
    canActivate: [AuthGuard]

  },
  
  {
    path: 'events',
    component: EventComponent,
    children: [
      {
        path: '',
        component: EventListComponent
      },
      {
        path: 'new',
        component: EventNewComponent
      },
      {
        path: ':id',
        resolve: {
          event: EventResolver
        },
        children: [
          {
            path: '',
            component: EventShowComponent
          },
          {
            path: 'edit',
            component: EventEditComponent
          },
          {
            path: 'pictures',
            component: EventPicturesComponent
          }
        ]
      }
    ],
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '**',
    redirectTo: 'areas'
  }
]

