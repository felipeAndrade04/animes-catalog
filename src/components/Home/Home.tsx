import { Card } from '../Card';
import { HighlightedAnime } from '../HighlightedAnime';
import { HomeProps } from './Home.types';

export function Home({ trendingAnimes }: HomeProps) {
  return (
    <main className="home-container">
      <div className="home-content">
        <HighlightedAnime />

        <div className="home-cards-list">
          {trendingAnimes?.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              name={anime.attributes.canonicalTitle}
              imgUrl={anime.attributes.posterImage.original}
              averageRating={Number((Number(anime.attributes?.averageRating) / 10).toFixed(2))}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
