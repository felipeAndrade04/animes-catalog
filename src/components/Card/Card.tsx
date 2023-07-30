import Image from 'next/image';
import { AverageRating } from '../AverageRating';
import { CardProps } from './Card.types';
import { Typography } from 'antd';
import Link from 'next/link';

const { Paragraph } = Typography;

export function Card({ id, name, imgUrl, averageRating }: CardProps) {
  return (
    <Link className="card-link" href={`anime/${id}`}>
      <article className="card">
        <Image
          src={imgUrl}
          alt={`${name} - cover`}
          width={200}
          height={284}
          className="card-image"
        />
        <div className="card-average-rating">
          <AverageRating score={averageRating} />
        </div>
        <Paragraph className="card-title" ellipsis={{ rows: 1, tooltip: name }}>
          {name}
        </Paragraph>
      </article>
    </Link>
  );
}
