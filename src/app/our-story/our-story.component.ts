import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LightboxDialogComponent } from '../lightbox-dialog/lightbox-dialog.component';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.css',
})
export class OurStoryComponent {
  constructor(public dialog: MatDialog) {}

  openLightBox(imageUrl: string): void {
    this.dialog.open(LightboxDialogComponent, {
      data: { imageUrl: imageUrl },
      panelClass: 'full-screen-dialog',
    });
  }
}
