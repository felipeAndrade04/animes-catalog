import { AnimeDetails } from '@app/components/AnimeDetails';
import { AnimeDetailsProps } from '@app/components/AnimeDetails/AnimeDetails.types';
import AnimeServices from '@app/services/Anime';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function AnimePage({ selectedAnime }: AnimeDetailsProps) {
  const { isFallback } = useRouter();

  if (isFallback) return 'Loading...';

  return <AnimeDetails selectedAnime={selectedAnime} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const animeId = params.id;

  const response = await AnimeServices.getById(animeId);

  return {
    props: {
      selectedAnime: response,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
