import { AverageRating } from '../AverageRating';
import { CardProps } from './Card.types';

export function Card({ name, imgUrl, averageRating }: CardProps) {
  return (
    <article className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className="card-average-rating">
        <AverageRating score={averageRating} />
      </div>
      <p>{name}</p>
    </article>
  );
}
