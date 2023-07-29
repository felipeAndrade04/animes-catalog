import { AxiosInstance } from 'axios';
import { AnimeServicesInterface } from './animeServices.types';
import { Anime, AnimesResponseData, AnimeResponseData } from '@app/types/Anime';

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
}
