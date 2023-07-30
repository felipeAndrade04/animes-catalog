import { Anime } from '@app/types/Anime';
import { Category } from '@app/types/CategoryAnime';

export interface HomeProps {
  trendingAnimes?: Anime[];
  categories: Category[];
  animesByCategory: Anime[][];
}
