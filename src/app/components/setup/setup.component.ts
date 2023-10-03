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
          value: [1]
        }),
        fb.group({
          type: ['fire'],
          value: [2]
        }),
        fb.group({
          type: ['grass'],
          value: [3]
        }),
        fb.group({
          type: ['electric'],
          value: [4]
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


