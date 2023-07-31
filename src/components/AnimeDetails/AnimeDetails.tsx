import Image from 'next/image';
import { AnimeDetailsProps } from './AnimeDetails.types';
import { Button, Typography } from 'antd';
import { AverageRating } from '../AverageRating';
import { formatAverageRatingFromApi } from '@app/utils/averageRating';
import { formatDateFromApi } from '@app/utils/date';
import { YoutubeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { ModalTrailer } from '../ModalTrailer';

const { Paragraph, Title } = Typography;

export function AnimeDetails({ selectedAnime }: AnimeDetailsProps) {
  const [showModalTrailer, setShowModalTrailer] = useState(false);

  const {
    coverImage,
    canonicalTitle: title,
    posterImage,
    synopsis,
    averageRating,
    episodeCount,
    episodeLength,
    ageRatingGuide,
    startDate,
    youtubeVideoId,
  } = selectedAnime.attributes;

  return (
    <main className="anime-details-container">
      <div className="anime-details-content">
        {coverImage?.tiny && (
          <header className="anime-details-cover">
            <img src={coverImage?.tiny} alt={`${title} - cover`} />
            <div className="anime-details-cover__effect" />
          </header>
        )}

        <section className="anime-details-infos">
          <div className="anime-details-infos__title">
            <Title ellipsis={{ rows: 1 }}>{title}</Title>
          </div>

          <div className="anime-details-infos__description">
            <figure className="anime-details-infos__description-poster">
              <Image src={posterImage?.medium} alt={`${title} - cover`} width={260} height={370} />
            </figure>
            <article className="anime-details-infos__description-info">
              <div className="anime-details-infos__description-cell">
                <Paragraph className="anime-details-infos__description-label">Sinopse</Paragraph>
                <Paragraph
                  className="anime-details-infos__description-paragraph"
                  ellipsis={{ rows: 4, expandable: true, symbol: 'mais' }}
                >
                  {synopsis}
                </Paragraph>
              </div>

              {averageRating && <AverageRating score={formatAverageRatingFromApi(averageRating)} />}

              {startDate && (
                <div className="anime-details-infos__description-cell">
                  <Paragraph className="anime-details-infos__description-label">
                    Data de Lançamento
                  </Paragraph>
                  <Paragraph
                    className="anime-details-infos__description-paragraph"
                    ellipsis={{ rows: 4, expandable: true, symbol: 'mais' }}
                  >
                    {formatDateFromApi(startDate)}
                  </Paragraph>
                </div>
              )}

              {ageRatingGuide && (
                <div className="anime-details-infos__description-cell">
                  <Paragraph className="anime-details-infos__description-label">
                    Classificação
                  </Paragraph>
                  <Paragraph
                    className="anime-details-infos__description-paragraph"
                    ellipsis={{ rows: 4, expandable: true, symbol: 'mais' }}
                  >
                    {ageRatingGuide}
                  </Paragraph>
                </div>
              )}

              {episodeCount && (
                <div className="anime-details-infos__description-cell">
                  <Paragraph className="anime-details-infos__description-label">
                    Número de Episódios
                  </Paragraph>
                  <Paragraph
                    className="anime-details-infos__description-paragraph"
                    ellipsis={{ rows: 4, expandable: true, symbol: 'mais' }}
                  >
                    {episodeCount}
                  </Paragraph>
                </div>
              )}

              {episodeLength && (
                <div className="anime-details-infos__description-cell">
                  <Paragraph className="anime-details-infos__description-label">
                    Duração por Episódio
                  </Paragraph>
                  <Paragraph
                    className="anime-details-infos__description-paragraph"
                    ellipsis={{ rows: 4, expandable: true, symbol: 'mais' }}
                  >
                    {episodeLength} m
                  </Paragraph>
                </div>
              )}

              {youtubeVideoId && (
                <Button
                  onClick={() => setShowModalTrailer(true)}
                  ghost
                  shape="round"
                  icon={<YoutubeOutlined />}
                  size="large"
                  className="anime-details-infos__description-button"
                >
                  Assistir Trailer
                </Button>
              )}
            </article>
          </div>
        </section>
      </div>

      <ModalTrailer
        isVisible={showModalTrailer}
        title={title}
        youtubeVideoId={youtubeVideoId}
        handleClose={() => setShowModalTrailer(false)}
      />
    </main>
  );
}
