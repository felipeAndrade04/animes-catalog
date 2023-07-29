import { AxiosInstance } from 'axios';
import { AnimeServicesInterface } from './animeServices.types';
import { AnimeResponseData } from '@app/types/Anime';

export class AnimeServices implements AnimeServicesInterface {
  constructor(readonly http: AxiosInstance) {
    this.http = http;
  }

  async listTrending() {
    try {
      const response = await this.http.get<AnimeResponseData>('/trending/anime', {
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
}
