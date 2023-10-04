import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {  // Use private access modifier for fb
    this.form = fb.group({
      player: fb.array([]),
      decks: fb.array([
        fb.group({
          type: ['water'],
          value: [1],
          img: ['../../../assets/images/types/water.png']
        }),
        fb.group({
          type: ['fire'],
          value: [2],
          img: ['../../../assets/images/types/fire.png']
        }),
        fb.group({
          type: ['grass'],
          value: [3],
          img: ['../../../assets/images/types/grass.png']
        }),
        fb.group({
          type: ['electric'],
          value: [4],
          img: ['../../../assets/images/types/electric.png']
        }),
        fb.group({
          type: ['dark'],
          value: [5],
          img: ['../../../assets/images/types/dark.png']
        }),
        fb.group({
          type: ['fairy'],
          value: [6],
          img: ['../../../assets/images/types/fairy.png']
        }),
        fb.group({
          type: ['dragon'],
          value: [7],
          img: ['../../../assets/images/types/dragon.png']
        }),
        fb.group({
          type: ['bug'],
          value: [8],
          img: ['../../../assets/images/types/bug.png']
        }),
        fb.group({
          type: ['ice'],
          value: [9],
          img: ['../../../assets/images/types/ice.png']
        }),
        fb.group({
          type: ['ground'],
          value: [10],
          img: ['../../../assets/images/types/ground.png']
        }),
        fb.group({
          type: ['poison'],
          value: [11],
          img: ['../../../assets/images/types/poison.png']
        }),
        fb.group({
          type: ['normal'],
          value: [12],
          img: ['../../../assets/images/types/normal.png']
        }),
      ]),
      selectedDeck: ['']  // Add a form control for the selected deck
    });
  }

  ngOnInit(): void {
    console.log('Angular sucks ass.')
  }

  get deckControls(): AbstractControl[] {
    return (this.form.get('decks') as FormArray).controls;
  }

}


