import { ConfigProvider, Skeleton, theme } from 'antd';

export function AnimeDetailsLoading() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="anime-details-loading-container">
        <Skeleton.Image active className="anime-details-loading-cover" />

        <div className="anime-details-loading-content">
          <Skeleton.Input active size={'large'} />

          <div className="anime-details-loading-infos">
            <Skeleton.Image active className="anime-details-loading-infos__poster" />

            <div className="anime-details-loading-infos__text">
              <Skeleton active />
              <Skeleton active />
              <Skeleton.Button active size={'large'} />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
