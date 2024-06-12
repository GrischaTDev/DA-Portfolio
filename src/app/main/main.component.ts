import { Component } from '@angular/core';
import { HeroComponent } from "./../hero/hero.component";
import { AboutMeComponent } from "./../about-me/about-me.component";
import { SkillsComponent } from "./../skills/skills.component";
import { ContactComponent } from "./../contact/contact.component";
import { PortfolioComponent } from "./../portfolio/portfolio.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    PortfolioComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
