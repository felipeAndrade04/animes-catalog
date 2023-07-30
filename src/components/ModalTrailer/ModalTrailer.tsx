import { Modal } from 'antd';
import { ModalTrailerProps } from './ModalTrailer.types';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { useState } from 'react';

export function ModalTrailer({ youtubeVideoId, title, isVisible, handleClose }: ModalTrailerProps) {
  const [player, setPlayer] = useState<YouTubePlayer>();
  const [played, setPlayed] = useState(false);

  function close() {
    if (played) {
      player?.pauseVideo();
      player?.seekTo(0, true);
    }
    setPlayed(false);
    handleClose();
  }

  return (
    <Modal open={isVisible} title={title} width={760} footer={[]} centered onCancel={close}>
      {isVisible && (
        <div className="modal-trailer">
          <YouTube
            videoId={youtubeVideoId}
            onPlay={() => setPlayed(true)}
            onReady={(event) => setPlayer(event.target)}
          />
        </div>
      )}
    </Modal>
  );
}
