import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ClassementComponent } from './classement/classement.component';
import { SecondToTimePipe } from './second-to-time.pipe';
import { SpecialesComponent } from './speciales/speciales.component';
import { SpecialeSingleComponent } from './speciale-single/speciale-single.component';
import { RamdompipePipe } from './ramdompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClassementComponent,
    SecondToTimePipe,
    SpecialesComponent,
    SpecialeSingleComponent,
    RamdompipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/index-full-classement',
        pathMatch: 'full'
      },
      {
        path: 'index-full-classement',
        component: ClassementComponent
      },
      {
        path: 'all-speciales',
        component: SpecialesComponent
      },
      {
        path: 'classement-speciale/:id_speciale',
        component: SpecialeSingleComponent
        
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
