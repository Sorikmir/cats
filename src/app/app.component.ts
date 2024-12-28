import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CatCardComponent } from './cat-card/cat-card.component';
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
  imports: [CatCardComponent, NgForOf ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})


export class AppComponent {
  cats: Cat[] = [
    {
    breed: "Abyssinian",
    name: "Marsik",
    image: {
    src: "images/1st-cat.jpg",
    
    alt: "Photo of an Abyssinian cat"
    },
    content: "The Abyssinian is easy to care for, and a joy to have in your home. They are incredibly loyal, intelligent, and deeply enjoy being part of a family.",
    actions: ["LIKE", "SHARE"]
    },
    {
    breed: "Bengal",
    name: "Marsik",
    image: {
    src: "images/2nd-cat.jpg",
    
    alt: "Photo of a Bengal cat"
    
    },
    content: "The Bengal is a sleek and athletic cat, reminiscent of their wild ancestors. They are playful, energetic, and love to climb.",
    actions: ["LIKE", "SHARE"]
    },
    {
    breed: "Persian",
    name: "Marsik",
    image: {
    src: "images/3d-cat.jpg",
    
    alt: "Photo of a Persian cat"
    },
    content: "Persian cats are known for their long, luxurious coats and their sweet, gentle personalities. They love quiet and serene environments.",
    actions: ["LIKE", "SHARE"]
    },
    {
    breed: "Sphynx",
    name: "Marsik",
    image: {
    src: "images/4th-cat.jpg",
    
    alt: "Photo of a Sphynx cat"
    },
    content: "The Sphynx is a hairless breed of cat known for its extroverted behavior. They are highly social and enjoy being the center of attention.",
    actions: ["LIKE", "SHARE"]
    },
    { 
    breed: "Maine Coon",
    name: "Marsik",
    image: {
    src: "images/5th-cat.jpg",
    alt: "Photo of a Maine Coon cat"
    },
    content: "Maine Coons are large, gentle giants with a friendly and affectionate personality. They are known for their intelli.",
    actions: ["LIKE", "SHARE"]
},
{
breed: "Sphynx",
    name: "Marsik",
    image: {
    src: "images/6 th-cat.jpg",
    
    alt: "Photo of a Sphynx cat"
    },
    content: "The Sphynx is a hairless breed of cat known for its extroverted behavior. They are highly social and enjoy being the center of attention.",
    actions: ["LIKE", "SHARE"]
    },
    {
      breed: "Sphynx",
          name: "Marsik",
          image: {
          src: "images/7th-cat.jpg",
          
          alt: "Photo of a Sphynx cat"
          },
          content: "The Sphynx is a hairless breed of cat known for its extroverted behavior. They are highly social and enjoy being the center of attention",
          actions: ["LIKE", "SHARE"]
          },
          {
            breed: "Sphynx",
                name: "Marsik",
                image: {
                src: "images/8th-cat.jpg",
                
                alt: "Photo of a Sphynx cat"
                },
                content: "The Sphynx is a hairless breed of cat known for its extroverted behavior. They are highly social and enjoy being the center of attention.",
                actions: ["LIKE", "SHARE"]
                }]
}
