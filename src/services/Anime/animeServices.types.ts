import { Anime } from '@app/types/Anime';
import { Category } from '@app/types/CategoryAnime';

export interface AnimeServicesInterface {
  listTrending: () => Promise<Anime[]>;
  getById: (id: string) => Promise<Anime>;
  listAnimeCategories: () => Promise<Category[]>;
  listAnimesByCategories: (categoryId: string) => Promise<Anime[]>;
}
