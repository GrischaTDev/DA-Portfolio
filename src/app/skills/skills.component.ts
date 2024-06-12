import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  hovered: boolean; 
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {

  skills = [ 
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'Material Design', icon: 'material' },
    { name: 'GIT', icon: 'git' },
    { name: 'Rest-Api', icon: 'api' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'SCRUM', icon: 'scrum' },
    { name: 'WordPress', icon: 'wordpress' }
  ];
}
