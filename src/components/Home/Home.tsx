import { formatAverageRatingFromApi } from '@app/utils/averageRating';
import { Card } from '../Card';
import { HighlightedAnime } from '../HighlightedAnime';
import { HomeProps } from './Home.types';

export function Home({ trendingAnimes, highlightedAnine }: HomeProps) {
  return (
    <main className="home-container">
      <div className="home-content">
        <HighlightedAnime
          coverUrl={highlightedAnine.attributes.coverImage.large}
          title={highlightedAnine.attributes.canonicalTitle}
          description={highlightedAnine.attributes.synopsis}
          averageRating={formatAverageRatingFromApi(highlightedAnine.attributes.averageRating)}
          badge1={highlightedAnine.attributes.ageRating}
          badge2={highlightedAnine.attributes.showType}
          episodeCount={highlightedAnine.attributes.episodeCount}
          episodeLength={highlightedAnine.attributes.episodeLength}
          youtubeVideoId={highlightedAnine.attributes.youtubeVideoId}
        />

        <div className="home-cards-list">
          {trendingAnimes?.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              name={anime.attributes.canonicalTitle}
              imgUrl={anime.attributes.posterImage.original}
              averageRating={formatAverageRatingFromApi(anime.attributes?.averageRating)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
