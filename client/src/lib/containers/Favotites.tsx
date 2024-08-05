import { MovieContainer, TitlePages } from 'src/lib/components/atoms';
import MovieCard from 'src/lib/components/molecules/MovieCard';
import useLikedVideos from 'src/lib/hooks/useLikedVideo';

const Favorites = () => {
  const { likedVideos } = useLikedVideos();
  return (
    <>
      <TitlePages label="Favorites list" />
      <MovieContainer>
        {likedVideos.map((discover: any, index: any) => (
          <MovieCard
            data={discover}
            id={discover?.id}
            key={index}
            path={discover?.poster_path}
            title={discover?.title}
          />
        ))}
      </MovieContainer>
    </>
  );
};

export default Favorites;
