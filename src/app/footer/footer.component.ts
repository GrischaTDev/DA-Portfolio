import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private readonly viewportScroller: ViewportScroller) {}

  backToStart() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
