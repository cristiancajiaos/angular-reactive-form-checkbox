import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { House } from '../shared/interfaces/house';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  form: FormGroup;

  houseData: House[] = [
    { id: 0, name: 'Baratheon' },
    { id: 1, name: 'Stark' },
    { id: 2, name: 'Arryn' },
    { id: 3, name: 'Tully' },
    { id: 4, name: 'Greyjoy' },
    { id: 5, name: 'Lannister' },
    { id: 6, name: 'Tyrell'}
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.fb.array([])
    });
  }

  onChange(name: string, isChecked: boolean) {
    const houses = (this.form.controls.name as FormArray);

    if (isChecked) {
      houses.push(new FormControl(name));
    } else {
      const index = houses.controls.findIndex(x => x.value === name);
      houses.removeAt(index);
    }
  }

  submit(): void {
    console.log(this.form.value);
  }

}
