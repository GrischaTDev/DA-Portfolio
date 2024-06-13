import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio = [ 
    { name: 'Join', 
      skills: 'Javascript | HTML | CSS', 
      description: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.', 
      image: 'join'
    },
    { name: 'Pokedex', 
      skills: 'Javascript | HTML | CSS | Rest-API', 
      description: 'Basierend auf der PokéAPI, eine einfache Bibliothek, die Details zu Pokémon-Arten, deren Entwicklungen, Fähigkeiten, Typen und Spielstatistiken enthält.', 
      image: 'pokedex'
    },
    { name: 'El Pollo Loco', 
      skills: 'Javascript | HTML | CSS', 
      description: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Giftflaschen zu finden, um gegen das Killerhuhn zu kämpfen.', 
      image: 'pollo-loco'
    },
  ];

}
