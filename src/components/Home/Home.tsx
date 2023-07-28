import { Card } from '../Card';
import { HighlightedAnime } from '../HighlightedAnime';

export function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <HighlightedAnime />

        <div className="home-cards-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((id) => (
            <Card
              key={id}
              id={id.toString()}
              name="Cowboy Bebop"
              imgUrl="https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256"
              averageRating={8.85}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
