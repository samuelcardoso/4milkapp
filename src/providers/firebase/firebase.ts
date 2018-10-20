import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getFlocks() {
    return this.afd.list('flocks');
  }
 
  addItem(item) {
    this.afd.list('flocks').push({
      name: item._name,
      surname: item._surname,
      image: item._image
    });
  }
 
  removeItem(id) {
    this.afd.list('flocks').remove(id);
  }

}
