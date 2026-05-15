import { Component, input, output } from '@angular/core';
import { Image } from '../interfaces/image-interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
})
export class ImageItem {

  image = input.required<Image>();
  isFeatured = input(false);
  isSelected = input(false);

  deleteImage = output<string>();
  selectImage = output<string>();

  onDeleteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.deleteImage.emit(this.image().id);
  }

  onImageClick(): void {
    this.selectImage.emit(this.image().id);
  }

}
