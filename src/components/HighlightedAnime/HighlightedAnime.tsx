import { Button, Typography } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
import { AverageRating } from '../AverageRating';

const { Paragraph, Title } = Typography;

export function HighlightedAnime() {
  return (
    <article className="main-anime">
      <img src="https://media.kitsu.io/anime/cover_images/9/large.jpg" alt="Capa" />

      <div className="main-anime__infos">
        <Title className="main-anime__infos-title">Cowboy Bebop</Title>
        <div className="main-anime__infos-badges">
          <span className="main-anime__infos-badges-badge">R</span>
          <span className="main-anime__infos-badges-badge">TV</span>
          <span>Ep 1/26</span>
          <span>25m</span>
          <AverageRating score={8.85} />
        </div>

        <Paragraph className="main-anime__infos-paragraph" ellipsis={{ rows: 2 }}>
          In the year 2071, humanity has colonoized several of the planets and moons In the year
          2071, humanity has colonoized several of the planets and moons In the year 2071, humanity
          has colonoized several of the planets and moons In the year 2071, humanity has colonoized
          several of the planets and moonsolonoized several of the planets and moons In the year
          2071, humanity has colonoized several of the planets and moons In the year 2071, humanity
          has colonoized several of the planets and moo
        </Paragraph>

        <Button ghost shape="round" icon={<YoutubeOutlined />} size="middle">
          Assistir Trailer
        </Button>
      </div>
    </article>
  );
}
