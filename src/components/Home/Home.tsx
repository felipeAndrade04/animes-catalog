import { formatAverageRatingFromApi } from '@app/utils/averageRating';
import { Card } from '../Card';
import { HighlightedAnime } from '../HighlightedAnime';
import { HomeProps } from './Home.types';
import { Carousel } from 'antd';
import { Carousel as CarouselAnime } from '../Carousel';

export function Home({ trendingAnimes, animesByCategory, categories }: HomeProps) {
  return (
    <main className="home-container">
      <div className="home-content">
        <Carousel autoplay>
          {trendingAnimes?.map((anime) => (
            <HighlightedAnime
              key={anime.id}
              id={anime.id}
              coverUrl={anime?.attributes?.coverImage?.large}
              title={anime?.attributes?.canonicalTitle}
              description={anime?.attributes?.synopsis}
              averageRating={formatAverageRatingFromApi(anime?.attributes?.averageRating)}
              badge1={anime?.attributes?.ageRating}
              badge2={anime?.attributes?.showType}
              episodeCount={anime?.attributes?.episodeCount}
              episodeLength={anime?.attributes?.episodeLength}
              youtubeVideoId={anime?.attributes?.youtubeVideoId}
            />
          ))}
        </Carousel>

        <div className="home-cards-list">
          {animesByCategory?.map((animes, index) => (
            <CarouselAnime
              key={categories[index].id}
              animes={animes}
              title={categories[index].attributes.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
