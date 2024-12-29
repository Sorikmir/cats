import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CatCardComponent } from './cat-card/cat-card.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
export interface Cat {
  name: string,
  breed: string,
  image: {
    src: string,
    alt: string
  },
  content: string,
  actions: string[]

}

@Component ({
  selector: 'app-root',
  imports: [ MatButtonModule, RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})


export class AppComponent {
  
}
