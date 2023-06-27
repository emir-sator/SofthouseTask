import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DogResponse, FavouriteResponse } from 'src/auto-generated-api/models';
import { DogService, FavouriteService } from 'src/auto-generated-api/services';
import { EditDogComponent } from './dialogs/edit-dog/edit-dog.component';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  limit: number = 12;
  page: number = 0;
  dogs: DogResponse[] = [];
  favourites: FavouriteResponse[] = [];
  defaultUser = 'demo-9b1Cp'; // mock user for testing the API (sub_id), to set and get favorites for this user 
  imageIncludedInFavourites = false;
  constructor(
    public dogService: DogService,
    public favouriteService: FavouriteService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getDogs();
    this.getFavoruites();
  }

  getDogsRequest() {
    return this.dogService.getDogs$Json({
      Limit: this.limit,
      Page: this.page
    });
  }
  getDogs() {
    this.getDogsRequest().subscribe(response => {
      if (response.results) {
        this.dogs = response.results
      }
    }, (error) => console.error(error));
  }

  getFavoruites() {
    this.favouriteService.getFavourites$Json({
      Limit: 100,
      Page: 0,
      Order: 'Desc',
      SubId: this.defaultUser,
      Size: 'small'
    }).subscribe(response => {
      if (response.results) {
        this.favourites = response.results;
      }
    }, (error) => console.error(error));
  }

  doesItInclude(imageId: string) {
    this.imageIncludedInFavourites = this.favourites.some(f => f.imageId === imageId);
  }

  editDog(dog: DogResponse) {
    const dialogRef = this.dialog.open(EditDogComponent, {
      width: '600px',
      data: dog
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  addToFavourite(imageId: string) {
    if (this.favourites.some(f => f.imageId === imageId)) {
      return;
    }

    this.favouriteService.addFavorite$Json({
      body: {
        imageId: imageId,
        subId: this.defaultUser
      }
    }).subscribe(() => {
      window.location.reload();
    }, (error) => console.error(error));
  }

  loadMoreDogs() {
    this.page++;
    this.getDogsRequest().subscribe(response => {
      if (response.results) {
        this.dogs.push(...response.results);
      }
    }, (error) => console.error(error));
   
  }
}
