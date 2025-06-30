import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { environment } from "@environments/environment";
import { GifItem } from "@/app/gifs/interfaces/shared.interface";
import { GifMapper } from "@app/gifs/mapper/gif.mapper";
import { GiphyResponse } from "@app/gifs/interfaces/giphy.interfaces";

@Injectable({ providedIn: "root" })
export class GifsService {
  private http = inject(HttpClient);

  public getTrendingGifs(): Observable<GifItem[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: 0
      },
    }).pipe(
      map(response => GifMapper.toGifItems(response.data))
    );
  }

  public getSearchGifs(query: string): Observable<GifItem[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      },
    }).pipe(
      map(response => GifMapper.toGifItems(response.data))
    );
  }
}
