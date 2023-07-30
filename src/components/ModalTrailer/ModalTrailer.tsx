import { Modal } from 'antd';
import { ModalTrailerProps } from './ModalTrailer.types';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { useState } from 'react';

export function ModalTrailer({ youtubeVideoId, title, isVisible, handleClose }: ModalTrailerProps) {
  const [player, setPlayer] = useState<YouTubePlayer>();

  function close() {
    player?.pauseVideo();
    player?.seekTo(0, true);
    handleClose();
  }

  return (
    <Modal open={isVisible} title={title} width={700} footer={[]} centered onCancel={close}>
      {isVisible && (
        <div className="modal-trailer">
          <YouTube videoId={youtubeVideoId} onReady={(event) => setPlayer(event.target)} />
        </div>
      )}
    </Modal>
  );
}
