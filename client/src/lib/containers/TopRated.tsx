import { useQuerygetTopRated } from '../hooks';
import { MovieContainer, TitlePages } from 'src/lib/components/atoms';
import MovieCard from 'src/lib/components/molecules/MovieCard';
const TopRated = () => {
  const { data } = useQuerygetTopRated();
  return (
    <>
      <TitlePages label="Top Rated Movies" />
      <MovieContainer>
        {data?.data?.results?.map((discover: any, index: any) => (
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

export default TopRated;
