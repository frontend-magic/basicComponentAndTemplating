export class EventModel {
  name: string;
  id: number;
  pic?: string;

  constructor(name = '', id = 0, pic = '') {
    this.name = name;
    this.id = id;
    this.pic = pic;
  }
}
