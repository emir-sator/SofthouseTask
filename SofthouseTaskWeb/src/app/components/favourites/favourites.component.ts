import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AlertService } from 'src/app/services/alert.service';
import { FavouriteResponse } from 'src/auto-generated-api/models';
import { FavouriteService } from 'src/auto-generated-api/services';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  favourites: FavouriteResponse[] = [];
  defaultUser = 'demo-9b1Cp'; // mock user for testing the API (sub_id), to set and get favorites for this user 
  page = 0;
  limit = 12;
  pageSizeOptions = [12, 60, 120];
  constructor(
    public favouriteService: FavouriteService,
    public alertService: AlertService
  ) { }

  ngOnInit() {
    this.getFavoruites();
  }

  getFavoruites() {
    this.favouriteService.getFavourites$Json({
      Limit: this.limit,
      Page: this.page,
      Order: 'Desc',
      SubId: this.defaultUser,
      Size: 'small'
    }).subscribe(response => {
      if (response.results) {
        this.favourites = response.results;
        this.paginator.length = response.totalResults;
        this.paginator.pageIndex = --response.page;
        this.paginator.pageSize = this.limit;
        this.paginator.pageSizeOptions = this.pageSizeOptions;
      }
    }, (error) => console.error(error));
  }

  removeFromFavourites(id: number) {
    this.favouriteService.removeFromFavorites$Json({id}).subscribe(() => {
      this.alertService.success('Image has been successfully removed from the favourites.');
      window.location.reload();
    }, (error) => console.error(error));
  }

  pageChanged(data) {
    this.page = data.pageIndex;
    this.limit = data.pageSize;
    this.getFavoruites();
  }
}
