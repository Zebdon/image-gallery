import { Component } from '@angular/core';
import { Gallery } from './gallery/gallery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}