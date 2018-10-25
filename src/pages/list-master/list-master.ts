import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  items: Observable<Item[]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public firebaseProvider: FirebaseProvider) {
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.items = this.firebaseProvider.getFlocks();
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  async addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(async (item) => {
      if (item) {
        await this.firebaseProvider.addFlock(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  async deleteItem(item) {
    await this.firebaseProvider.deleteFlock(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
