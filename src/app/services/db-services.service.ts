import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DbServicesService {

  constructor(public db: AngularFireDatabase) { 
  }
  
  createChampionship(){
    let tiles = [
      { itemDetails: {text: 'time 1'}, cols: 1, rows: 1, id: 1, isAdd: true },
      { itemDetails: {text: 'time 1/2' }, cols: 1, rows: 2, id: 5 },
      { itemDetails: {text: 'Vencedor' }, cols: 1, rows: 4, id: 7 },
      { itemDetails: {text: 'time 2' }, cols: 1, rows: 1, id: 2, isAdd: true },
      { itemDetails: {text: 'time 3' }, cols: 1, rows: 1, id: 3, isAdd: true },
      { itemDetails: {text: 'time 3/4' }, cols: 1, rows: 2, id: 6 },
      { itemDetails: {text: 'time 4' }, cols: 1, rows: 1, id: 4, isAdd: true },
    ];

    this.insertTeam(tiles);
  }

  list(){
    return this.db.list('/table-victories').valueChanges();
  }
  
  insertTeam(tiles){
    this.db.database.ref('/table-victories').set(tiles);
  }
}