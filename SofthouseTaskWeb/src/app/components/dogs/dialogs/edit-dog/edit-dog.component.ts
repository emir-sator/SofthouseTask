import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { DogResponse } from 'src/auto-generated-api/models';
import { JsonFileService } from 'src/auto-generated-api/services';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {
  formGroup = this.fb.group({
    name: [''],
    bredFor: [''],
    height: [''],
    lifeSpan: [''],
    origin: [''],
    temperament: [''],
    weight: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<EditDogComponent>,
    private fb: FormBuilder,
    public jsonFileService: JsonFileService,
    public alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: DogResponse
  ) { }

  ngOnInit() {
    this.initializeEditForm();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  initializeEditForm() {
    this.formGroup.controls.name.patchValue(this.data.name ? this.data.name : '');
    this.formGroup.controls.bredFor.patchValue(this.data.bredFor ? this.data.bredFor : '');
    this.formGroup.controls.height.patchValue(this.data.height?.metric ? this.data.height.metric : '');
    this.formGroup.controls.lifeSpan.patchValue(this.data.lifeSpan ? this.data.lifeSpan : '');
    this.formGroup.controls.origin.patchValue(this.data.origin ? this.data.origin : '');
    this.formGroup.controls.temperament.patchValue(this.data.temperament ? this.data.temperament : '');
    this.formGroup.controls.weight.patchValue(this.data.weight?.metric ? this.data.weight.metric : '');
  }

  createJsonTextFile(){
    const data = this.formGroup.value;

    this.jsonFileService.createJsonTextFile({body: data}).subscribe(() => {
      this.alertService.success('Data has been successfully saved to a txt file!', 5000);
      this.dialogRef.close();
    },(error) => console.error(error));
  }
}
