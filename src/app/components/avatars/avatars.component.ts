import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      avatars: fb.array([
        fb.group({
          value: [1],
          img: ['../../../assets/images/avatars/ash.png']
        }),
        fb.group({
          value: [2],
          img: ['../../../assets/images/avatars/misty.png']
        }),
        fb.group({
          value: [3],
          img: ['../../../assets/images/avatars/jessie.png']
        }),
        fb.group({
          value: [4],
          img: ['../../../assets/images/avatars/brock.png']
        }),
        fb.group({
          value: [5],
          img: ['../../../assets/images/avatars/mom.png']
        }),
        fb.group({
          value: [6],
          img: ['../../../assets/images/avatars/oak.png']
        }),
        fb.group({
          value: [7],
          img: ['../../../assets/images/avatars/james.png']
        }),
        fb.group({
          value: [8],
          img: ['../../../assets/images/avatars/cynthia.png']
        }),
        fb.group({
          value: [9],
          img: ['../../../assets/images/avatars/giovanni.png']
        }),
        fb.group({
          value: [10],
          img: ['../../../assets/images/avatars/elm.png']
        }),

      ])
    })
  }

  ngOnInit(): void {
    
  }

  get avatarControls(): AbstractControl[] {
    return (this.form.get('avatars') as FormArray).controls
  }

}
