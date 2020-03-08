import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableVictoryComponent } from '../table-victory/table-victory.component';

@Component({
  selector: 'app-insert-team',
  templateUrl: './insert-team.component.html',
  styleUrls: ['./insert-team.component.scss']
})
export class InsertTeamComponent {
  
  constructor(
    public dialogRef: MatDialogRef<TableVictoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}