import { useQuerygetPopular } from '../hooks';
import { MovieContainer, TitlePages } from 'src/lib/components/atoms';
import MovieCard from 'src/lib/components/molecules/MovieCard';
const Popular = () => {
  const { data } = useQuerygetPopular();
  return (
    <>
      <TitlePages label="Popular Movies" />
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

export default Popular;
