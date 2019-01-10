import { InjectionToken } from '@angular/core';
import { Marker } from "app/shared/model/marker/marker";

//Defaults to Madrid coordenates
export const MARKER_DEFAULT_CONFIG: Marker = {
  latitude: -22.09102149327675,
  longitude: -65.59570089641727,
  isDraggable: true
};

export let MARKER_DEFAULT_CONFIG_PROVIDER = new InjectionToken<Marker>('marker.default.config');

export const GOOGLE_MAPS_API_KEY = 'AIzaSyD8fAyrlo8ix9UoFeDFSjQ8rsFDX2wHBvs';
