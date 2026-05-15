import { Component, signal } from '@angular/core';
import { Image } from '../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  images = signal<Image[]>([
    { id: '1', src: 'https://picsum.photos/id/237/300/300', alt: 'Perro' },
    { id: '2', src: 'https://picsum.photos/id/238/300/300', alt: 'Montaña' },
    { id: '3', src: 'https://picsum.photos/id/239/300/300', alt: 'Bosque' },
  ]);

  featuredImageId = signal<string>(this.images()[0]?.id || '');

  removeImage(id: string): void {
    const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta imagen?');
    if (confirmed) {
      this.images.update(current => current.filter(img => img.id !== id));
      if (this.featuredImageId() === id) {
        this.featuredImageId.set(this.images()[0]?.id || '');
      }
    }
  }

}
