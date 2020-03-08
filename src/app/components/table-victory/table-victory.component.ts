import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertTeamComponent } from '../insert-team/insert-team.component';
import { DbServicesService } from 'src/app/services/db-services.service';

@Component({
  selector: 'app-table-victory',
  templateUrl: './table-victory.component.html',
  styleUrls: ['./table-victory.component.scss']
})
export class TableVictoryComponent implements OnInit {

  tableVictories = [];

  constructor(public dialog: MatDialog, public dbs: DbServicesService) {
    this.dbs.list().subscribe(res => {
      this.tableVictories = res;
    });
  }
  
  ngOnInit(): void {
  }

  createChampionship(){
    this.dbs.createChampionship();
  }

  openDialog(tile): void {
    const dialogRef = this.dialog.open(InsertTeamComponent, {
      width: '250px',
      data: tile
    });

    dialogRef.afterClosed().subscribe(result => {
      tile.itemDetails.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.dbs.insertTeam(this.tableVictories);
    });
  }

  nextTrial(tile){
    let idNext;
    if (tile.id == 1 || tile.id == 2){
      idNext = 5
    } else if (tile.id == 3 || tile.id == 4){
      idNext = 6
    } else {
      idNext = 7
    }

    let itemIndex = this.tableVictories.findIndex(item => item.id == idNext);
    this.tableVictories[itemIndex].itemDetails = tile.itemDetails;

    this.dbs.insertTeam(this.tableVictories);
  }
}