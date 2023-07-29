import Icon, { StarOutlined } from '@ant-design/icons';
import { AverageRatingProps } from './AverageRating.types';

export function AverageRating({ score }: AverageRatingProps) {
  return (
    <div className="average-rating">
      <Icon component={StarOutlined} />
      <span>{score}</span>
    </div>
  );
}
