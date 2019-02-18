import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { ProductoPage } from '../producto/producto';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  items=[];
  PPage=ProductoPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.items=this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }
  Ver(item)
  {
    this.navCtrl.push(this.PPage,{vidcon:item});
  }

}
