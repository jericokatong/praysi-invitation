import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './guest-book.component.html',
  styleUrl: './guest-book.component.css',
})
export class GuestBookComponent {
  applyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  submitGuestBook() {
    console.log(
      `title: ${this.applyForm.value.title}\ndescription: ${this.applyForm.value.description}`
    );
  }
}
