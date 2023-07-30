import { Button, Typography } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
import { AverageRating } from '../AverageRating';
import { HighlightedAnimeProps } from './HighlightedAnime.types';
import { ModalTrailer } from '../ModalTrailer';
import { useState } from 'react';

const { Paragraph, Title } = Typography;

export function HighlightedAnime({
  description,
  title,
  averageRating,
  badge1,
  badge2,
  episodeCount,
  episodeLength,
  youtubeVideoId,
  coverUrl,
}: HighlightedAnimeProps) {
  const [showModalTrailer, setShowModalTrailer] = useState(false);

  return (
    <>
      <article className="main-anime">
        <img src={coverUrl} alt={`${title} - cover`} className="main-anime__cover" />

        <div className="main-anime__infos">
          <Title className="main-anime__infos-title">{title}</Title>
          <div className="main-anime__infos-badges">
            {badge1 && <span className="main-anime__infos-badges-badge">{badge1}</span>}
            {badge2 && <span className="main-anime__infos-badges-badge">{badge2}</span>}
            {episodeCount && <span>Ep 1/{episodeCount}</span>}
            {episodeLength && <span>{episodeLength}m</span>}
            {averageRating && <AverageRating score={averageRating} />}
          </div>

          <Paragraph className="main-anime__infos-paragraph" ellipsis={{ rows: 2 }}>
            {description}
          </Paragraph>

          {youtubeVideoId && (
            <Button
              onClick={() => setShowModalTrailer(true)}
              ghost
              shape="round"
              icon={<YoutubeOutlined />}
              size="middle"
            >
              Assistir Trailer
            </Button>
          )}
        </div>
      </article>

      <ModalTrailer
        isVisible={showModalTrailer}
        title={title}
        youtubeVideoId={youtubeVideoId}
        handleClose={() => setShowModalTrailer(false)}
      />
    </>
  );
}
