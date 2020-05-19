import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchdataComponent } from './searchdata/searchdata.component'
import { SearchresultsComponent } from './searchresults/searchresults.component'
import { ShowrecommendationsComponent } from './showrecommendations/showrecommendations.component';


const routes: Routes = [
  { path: 'search-component', component: SearchdataComponent },
  { path: 'result-component', component: SearchresultsComponent },
  { path: '',   redirectTo: '/search-component', pathMatch: 'full' },
  { path: 'recommend-component', component: ShowrecommendationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
