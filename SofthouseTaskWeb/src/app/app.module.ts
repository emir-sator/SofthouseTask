import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { ApiModule } from 'src/auto-generated-api/api.module';
import { environment } from 'src/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EditDogComponent } from './components/dogs/dialogs/edit-dog/edit-dog.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogsComponent,
    FavouritesComponent,
    EditDogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDogComponent]
})
export class AppModule { }
