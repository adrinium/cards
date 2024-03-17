import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { Card } from './models/card';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent, NgFor]
})
export class AppComponent {
  title = 'cards';

  cards: Card[] = [
    new Card("Neat tree","#nature","Saw this awsome tree during my hike today.","assets/images/tree.jpeg"),
    new Card("Snowy mountain","#hikingperson","Beautiful view of some mountains I saw during my hike.","assets/images/mountain.jpeg"),
    new Card("Mountain biking","#hiking666","Action shot of me riding my bike.","assets/images/biking.jpeg")
  ];
}
