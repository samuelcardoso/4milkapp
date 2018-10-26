import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemEditPage } from './item-edit';

@NgModule({
  declarations: [
    ItemEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemEditPage
  ]
})
export class ItemEditPageModule { }
