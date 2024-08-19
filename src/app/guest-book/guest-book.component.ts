import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './guest-book.component.html',
  styleUrl: './guest-book.component.css',
})
export class GuestBookComponent {
  applyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  data: any[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get('https://praysi-invitation-backend-pxp4.vercel.app/guest-books')
      .subscribe((response: any) => {
        console.log('ini respon ui: ', response);
        this.data = response;
      });
  }

  submitGuestBook() {
    this.isLoading = true;
    console.log(
      `title: ${this.applyForm.value.title}\ndescription: ${this.applyForm.value.description}`
    );
    console.log('ini adalah object: ', this.applyForm.value);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Header lain jika diperlukan
    });
    this.http
      .post(
        'https://praysi-invitation-backend-pxp4.vercel.app/guest-books',
        {
          title: this.applyForm.value.title,
          description: this.applyForm.value.description,
        },
        { headers }
      )
      .subscribe({
        next: (response: any) => {
          this.applyForm.reset();
          this.isLoading = false;
          console.log('ini response: ', response);
          this.fetchData();
        },
        error: (err) => {
          this.isLoading = false;
          console.log('ini error post: ', err);
        },
      });
  }

  formatDate(dateString: string) {
    const date = new Date(dateString);

    // Opsi untuk memformat bulan sebagai nama penuh
    const options: object = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    // Memformat tanggal sesuai dengan opsi
    return date.toLocaleDateString('en-US', options).replace(',', ' -');
  }
}
