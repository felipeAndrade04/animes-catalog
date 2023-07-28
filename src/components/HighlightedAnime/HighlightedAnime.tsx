import { Button } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
import { AverageRating } from '../AverageRating';

export function HighlightedAnime() {
  return (
    <article className="main-anime">
      <img src="https://media.kitsu.io/anime/cover_images/1/large.jpg?1416336000" alt="Capa" />

      <div className="main-anime__infos">
        <h1>Cowboy Bebop</h1>
        <div className="main-anime__infos-badges">
          <span className="main-anime__infos-badges-badge">R</span>
          <span className="main-anime__infos-badges-badge">TV</span>
          <span>Ep 1/26</span>
          <span>25m</span>
          <AverageRating score={8.85} />
        </div>
        <p>In the year 2071, humanity has colonoized several of the planets and moons...</p>

        <Button ghost shape="round" icon={<YoutubeOutlined />} size="middle">
          Assistir Trailer
        </Button>
      </div>
    </article>
  );
}
