import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';
import { ProductoPage } from '../producto/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  vidcons=[];
  FPage=FavoritosPage;
  BPage=BuscarPage;
  PPage=ProductoPage;

  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe
    (data => { 
    if (data.hasOwnProperty('list_ads'))
    {
      this.vidcons = data.list_ads;
    }
    
    }, 
     error => {console.log(JSON.stringify(error));
     });

  }
  favoritos()
  {
    this.navCtrl.push(this.FPage);  
  }
  buscar()
  {
    this.navCtrl.push(this.BPage, {bp:this.vidcons});
  }
  verp(vidcon)
  {
    this.navCtrl.push(this.PPage,{vidcon:vidcon});
  }

}
