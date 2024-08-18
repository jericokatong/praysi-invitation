import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lightbox-dialog',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './lightbox-dialog.component.html',
  styleUrl: './lightbox-dialog.component.css',
  animations: [
    trigger('zoomInOut', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }), // Mulai dari ukuran kecil dan transparan
        animate('500ms ease-out', style({ transform: 'scale(1)', opacity: 1 })), // Zoom in ke ukuran penuh dan tampil penuh
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ transform: 'scale(0.5)', opacity: 0 })
        ), // Zoom out dan fade out
      ]),
    ]),
  ],
})
export class LightboxDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LightboxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
