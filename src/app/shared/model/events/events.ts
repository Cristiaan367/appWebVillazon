export class Evento {

  $key: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  images: string;
  priority: number;
  date:string;

  static fromJSON({$key, title, description, latitude, longitude, images, priority, date}: any): Evento {
    return new Evento($key, title, description, latitude, longitude, images, priority, date );
  }

  static fromJSONArray(json: any[]): Evento[] {
    return json.map(Evento.fromJSON);
  }

  constructor(
    $key: string,
    title: string,
    description: string,
    latitude: number,
    longitude: number,
    images: string,
    priority: number,
    date: string
  ) {

    this.$key = $key || '';
    this.title = title || '';
    this.description = description || '';
    this.latitude = latitude || 0;
    this.longitude = longitude || 0;
    this.images = images || '';
    this.priority = priority || 0;
    this.date = date || Date();
  }

}
