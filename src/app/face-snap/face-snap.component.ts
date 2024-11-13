import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {

    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
 }

 onSnap() {
  if (this.userHasSnapped) {
    this.unSnap()
  } else {
    this.snap();
  }
 }
 unSnap() {
  this.faceSnap.removeSnap();
  this.snapButtonText= 'Oh Snap !';
  this.userHasSnapped = false;
 }

snap() {
  this.faceSnap.addSnap();
    this.snapButtonText = 'Oops unSnap!';
    this.userHasSnapped = true;
}

}
