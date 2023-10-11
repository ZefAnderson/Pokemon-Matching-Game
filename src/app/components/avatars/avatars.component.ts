import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {

  form: FormGroup;

  avatars = [
    {
      value: [1],
      img: ['../../../assets/images/avatars/default.png']
    },
    {
      value: [2],
      img: ['../../../assets/images/avatars/dad.png']
    },
    {
      value: [3],
      img: ['../../../assets/images/avatars/n.png']
    },
    {
      value: [4],
      img: ['../../../assets/images/avatars/trainer.png']
    },
    {
      value: [5],
      img: ['../../../assets/images/avatars/blanche.png']
    },
    {
      value: [6],
      img: ['../../../assets/images/avatars/spark.png']
    },
    {
      value: [7],
      img: ['../../../assets/images/avatars/candela.png']
    },
    {
      value: [8],
      img: ['../../../assets/images/avatars/mystic.png']
    },
    {
      value: [9],
      img: ['../../../assets/images/avatars/instinct.png']
    },
    {
      value: [10],
      img: ['../../../assets/images/avatars/valor.png']
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = fb.group({
      selectedAvatar: [0]
    })
  }
  
  ngOnInit(): void {}
  
  get selectedAvatarControl() {
    return this.form.get('selectedAvatar');
  }
  
  confirmChange() {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const user = JSON.parse(userJson);
      if (user) {
        const selectedIndex = this.selectedAvatarControl?.value;
        const selectedAvatar = this.avatars[selectedIndex];
        const selectedAvatarImg = selectedAvatar.img[0];
        this.authService.UpdateAvatar(user.uid, selectedAvatarImg).subscribe(() => {
          this.router.navigate([`profile/${user.uid}`])
        })
      }
    }
  }
}
