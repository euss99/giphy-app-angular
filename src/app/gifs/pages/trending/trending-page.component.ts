import { Component, signal } from '@angular/core';

import { GifList } from '@app/gifs/components/gif-list/gif-list.component';
import { Gif } from '@app/gifs/interfaces';

const gifs: Gif[] = [
    {
      id: '1',
      title: 'Gif 1',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    },
    {
      id: '2',
      title: 'Gif 2',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      id: '3',
      title: 'Gif 3',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      id: '4',
      title: 'Gif 4',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      id: '5',
      title: 'Gif 5',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
      id: '6',
      title: 'Gif 6',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    },
    {
      id: '7',
      title: 'Gif 7',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    },
    {
      id: '8',
      title: 'Gif 8',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    },
    {
      id: '9',
      title: 'Gif 9',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    },
    {
      id: '10',
      title: 'Gif 10',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    },
    {
      id: '11',
      title: 'Gif 11',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    },
    {
      id: '12',
      title: 'Gif 12',
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    },
  ];

@Component({
  selector: 'trending-page',
  imports: [GifList],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPage {
  public gifs = signal<Gif[]>(gifs);
}
