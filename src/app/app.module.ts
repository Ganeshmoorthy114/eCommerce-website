import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooderComponent } from './fooder/fooder.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatashareService } from './service/datashare.service';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';
import { Arraival1Component } from './arraival1/arraival1.component';
import { Arraival2Component } from './arraival2/arraival2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DealsComponent } from './deals/deals.component';
import { ShowComponent } from './show/show.component';
import { UnderComponent } from './under/under.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', redirectTo: 'Newarrivals', pathMatch: 'full'},
  { path: 'Newarrivals', component: NewarrivalsComponent,
  children:[
    { path: '', redirectTo: 'Arrival', pathMatch: 'full'},  
    { path: 'Arrival', component: Arraival1Component},
    { path: 'Arrival2', component: Arraival2Component}
  ]
},
{ path: 'deals', component: DealsComponent},
{ path: 'aboutus', component: AboutusComponent},
{ path: 'Contactus', component: ContactusComponent},
{ path: 'Show', component: ShowComponent},
{ path: 'Under', component: UnderComponent},
{ path: 'table', component: TableComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooderComponent,
    HomeComponent,
    NewarrivalsComponent,
    Arraival1Component,
    Arraival2Component,
    AboutusComponent,
    ContactusComponent,
    DealsComponent,
    ShowComponent,
    UnderComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatashareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
