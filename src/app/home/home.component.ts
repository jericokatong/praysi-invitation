import { Component } from '@angular/core';
import { CountDownDateComponent } from '../count-down-date/count-down-date.component';
import { LocationEventComponent } from '../location-event/location-event.component';
import { OurStoryComponent } from '../our-story/our-story.component';
import { GuestBookComponent } from '../guest-book/guest-book.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CountDownDateComponent,
    LocationEventComponent,
    OurStoryComponent,
    GuestBookComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
