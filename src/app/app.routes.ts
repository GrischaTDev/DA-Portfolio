import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'impressum', component: ImpressumComponent }
];
