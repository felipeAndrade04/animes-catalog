import { AxiosInstance } from 'axios';
import { AnimeServicesInterface } from './animeServices.types';
import { Anime, AnimesResponseData, AnimeResponseData } from '@app/types/Anime';
import { CategoriesResponseData } from '@app/types/CategoryAnime';

export class AnimeServices implements AnimeServicesInterface {
  constructor(readonly http: AxiosInstance) {
    this.http = http;
  }

  async listTrending() {
    try {
      const response = await this.http.get<AnimesResponseData>('/trending/anime', {
        params: {
          sort: 'ratingRank',
        },
      });

      if (response.status === 200) {
        return response.data.data;
      }

      return [];
    } catch {
      return [];
    }
  }

  async getById(id: string) {
    try {
      const response = await this.http.get<AnimeResponseData>(`/anime/${id}`);

      if (response.status === 200) {
        return response.data.data;
      }

      return {} as Anime;
    } catch {
      return {} as Anime;
    }
  }

  async listAnimeCategories() {
    try {
      const response = await this.http.get<CategoriesResponseData>('/categories?page[limit]=5');

      if (response.status === 200) {
        return response.data.data;
      }

      return [];
    } catch {
      return [];
    }
  }

  async listAnimesByCategories(categoryId: string) {
    try {
      const response = await this.http.get<AnimesResponseData>(`/categories/${categoryId}/anime`);

      if (response.status === 200) {
        return response.data.data;
      }

      return [];
    } catch {
      return [];
    }
  }
}
