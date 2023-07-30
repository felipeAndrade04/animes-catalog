import { Typography } from 'antd';
import Slider from 'react-slick';
import { CarouselProps } from './Carousel.types';
import { Card } from '../Card';
import { formatAverageRatingFromApi } from '@app/utils/averageRating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Title } = Typography;

export function Carousel({ title, animes }: CarouselProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Title level={3} className="carousel-title">
        {title}
      </Title>

      <Slider {...settings} className="z-20 h-96">
        {animes.map((anime) => (
          <Card
            key={anime.id}
            id={anime.id}
            name={anime.attributes?.canonicalTitle}
            imgUrl={anime.attributes?.posterImage?.original}
            averageRating={formatAverageRatingFromApi(anime.attributes?.averageRating)}
          />
        ))}
      </Slider>
    </div>
  );
}
