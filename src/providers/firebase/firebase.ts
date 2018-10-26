import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from 'ionic-angular';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  flocksCollection: AngularFirestoreCollection<Item>;
  bulkDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    this.flocksCollection = this.afs.collection('flocks');
  }

  getFlocks() {
    return this.flocksCollection.valueChanges(); 
  }

  async addFlock(flock: Item) {
    flock.id = this.afs.createId();
    const bulkDoc = this.afs.doc(`flocks/${flock.id}`);
    try {
      bulkDoc.set(flock);
    } catch(error) {
      console.log(error);
      debugger;
    }
  }

  async deleteFlock(flock: Item) {
    const bulkDoc = this.afs.doc(`flocks/${flock.id}`);
    try {
      await bulkDoc.delete();
    } catch(error) {
      console.log(error);
      debugger;
    }
  }

  async updateFlock(flock: Item) {
    const bulkDoc = this.afs.doc(`flocks/${flock.id}`);
    try {
      await bulkDoc.update(flock);
    } catch(error) {
      console.log(error);
      debugger;
    }
  }

}
