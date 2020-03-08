import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertTeamComponent } from './components/insert-team/insert-team.component';
import { TableVictoryComponent } from './components/table-victory/table-victory.component';

const routes: Routes = [
  {
    path: 'insertteam',
    component: InsertTeamComponent,
    data: { title: 'Inserir Equipe' }
  },
  {
    path: 'tablevictory',
    component: TableVictoryComponent,
    data: { title: 'Tabela dos Campeões' }
  },
  { path: '',
    redirectTo: '/tablevictory',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/tablevictory', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
