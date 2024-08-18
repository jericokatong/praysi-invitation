import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-down-date',
  standalone: true,
  imports: [],
  templateUrl: './count-down-date.component.html',
  styleUrl: './count-down-date.component.css',
})
export class CountDownDateComponent {
  countDownDate = new Date('august 17, 2024 00:00:00').getTime();
  @Input() cobaInput: number = 0;
  demo: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {
    console.log('ini coba input: ', this.cobaInput);
  }

  ngOnInit() {
    console.log('ini coba input: ', this.cobaInput);
  }

  x = setInterval(() => {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.demo =
      this.days +
      'd ' +
      this.hours +
      'h ' +
      this.minutes +
      'm ' +
      this.seconds +
      's ';

    if (distance < 0) {
      clearInterval(this.x);
      this.demo = '0d ' + '0h ' + '0m ' + '0s ';
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  });
}
