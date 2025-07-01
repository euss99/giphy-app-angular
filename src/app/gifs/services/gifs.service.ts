import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal, effect } from "@angular/core";

import { Observable, map, tap } from "rxjs";

import { environment } from "@environments/environment";
import { GifItem } from "@/app/gifs/interfaces/shared.interface";
import { GifMapper } from "@app/gifs/mapper/gif.mapper";
import { GiphyResponse } from "@app/gifs/interfaces/giphy.interfaces";

const MAX_HISTORY_LENGTH = 10;
const SEARCH_HISTORY_KEY = "searchHistory";

type SearchHistory = Record<string, GifItem[]>;

const getSearchHistory = (): SearchHistory => {
  const searchHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
  return searchHistory ? JSON.parse(searchHistory) : {};
};

const setSearchHistory = (searchHistory: SearchHistory) => {
  if (Object.keys(searchHistory).length > MAX_HISTORY_LENGTH) {
    const keys = Object.keys(searchHistory);
    const oldestKey = keys[0];
    delete searchHistory[oldestKey];
  }

  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
};

@Injectable({ providedIn: "root" })
export class GifsService {
  private http = inject(HttpClient);

  public searchHistory = signal<SearchHistory>(getSearchHistory());
  public searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  private searchHistoryEffect = effect(() => setSearchHistory(this.searchHistory()), {
    allowSignalWrites: true,
  });

  public getTrendingGifs(): Observable<GifItem[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: 0,
        },
      })
      .pipe(map(({ data }) => GifMapper.toGifItems(data)));
  }

  public getSearchGifs(query: string): Observable<GifItem[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => GifMapper.toGifItems(data)),
        tap(gifs => {
          this.searchHistory.update(history => ({
            ...history,
            [query]: gifs,
          }));
        })
      );
  }

  public getHistoryGifs(query: string): GifItem[] {
    return this.searchHistory()[query] || [];
  }
}
