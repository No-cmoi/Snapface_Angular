import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'Sydney Opera House',
        'Le bâtiment emblématique de la ville de Sydney en Australie',
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg',
        new Date(),
        215
      ),
      new FaceSnap(
        'Three Sisters',
        'Les célèbres rochers des Blue Mountains de l\'état du NSW',
        'https://upload.wikimedia.org/wikipedia/commons/e/e4/Blue_mountains_-_three_sisters.jpg',
        new Date(),
        125
      )
    ];

    this.faceSnaps[1].setLocation('Sydney, Australie')
  }
}
