import { GiphyItem } from '@app/gifs/interfaces/giphy.interfaces';
import { GifItem } from '@app/gifs/interfaces/shared.interface';

export class GifMapper {
  public static toGifItem(gif: GiphyItem): GifItem {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
    };
  }

  public static toGifItems(gifs: GiphyItem[]): GifItem[] {
    return gifs.map(gif => this.toGifItem(gif));
  }
}