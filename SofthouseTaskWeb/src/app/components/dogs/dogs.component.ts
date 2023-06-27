import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Dog } from 'src/auto-generated-api/models';
import { DogService } from 'src/auto-generated-api/services';
import { EditDogComponent } from './dialogs/edit-dog/edit-dog.component';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  limit: number = 12;
  page: number = 0;
  dogs: any;
  constructor(
    public dogService: DogService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dogService.getDogs$Json({
      Limit: this.limit,
      Page: this.page
    }).subscribe(response => {
      this.dogs = response.results
    console.log("dogs", this.dogs);
    },(error) => console.error(error));

  }

  editDog(dog: Dog) {
    const dialogRef = this.dialog.open(EditDogComponent, {
      width: '600px',
      data: dog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
