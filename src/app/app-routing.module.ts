import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';


const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
