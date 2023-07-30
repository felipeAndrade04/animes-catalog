import { Anime } from '@app/types/Anime';

export interface AnimeServicesInterface {
  listTrending: () => Promise<Anime[]>;
  getById: (id: string) => Promise<Anime>;
}
