import { Images, Modal } from 'src/lib/components/atoms';
import { useMovieContainer } from '../atoms/MovieContainer';
import { useQueryGetMovieDetail } from 'src/lib/hooks';
import { ImCancelCircle } from 'react-icons/im';
const ModalDetailMovie = () => {
  const { setSelectedMovie, selectedMovie } = useMovieContainer();
  const { data } = useQueryGetMovieDetail(selectedMovie?.id);

  return (
    <Modal isOpen={!!selectedMovie?.id} onClose={() => setSelectedMovie(null)}>
      <div className="bg-stone-900 text-white rounded-lg container mx-auto w-full w-full p-4">
        <div className="flex justify-between items-center  mb-4">
          <h1 className="text-2xl">{selectedMovie?.original_title}</h1>
          <button onClick={() => setSelectedMovie(null)}>
            <ImCancelCircle />
          </button>
        </div>

        <Images src={selectedMovie?.backdrop_path} />
        <p className="mt-4">{data?.data?.tagline}</p>
        <div className="flex mt-4 gap-4 flex-col sm:flex-row">
          <p className="text-xs text-justify w-full">
            {selectedMovie?.overview}
          </p>
          <div className="w-full text-xs">
            <h1 className="font-bold">
              Genre :{' '}
              <span className="font-normal">
                {data?.data?.genres?.map((x: any) => x?.name).join(', ')}
              </span>
            </h1>
            <h1 className="font-bold">
              Release date :{' '}
              <span className="font-normal">{selectedMovie?.release_date}</span>
            </h1>
            <h1 className="font-bold">
              Popularity :{' '}
              <span className="font-normal">{data?.data?.popularity}</span>
            </h1>
            <h1 className="font-bold">
              Production By :{' '}
              <span className="font-normal">
                {data?.data?.production_companies
                  ?.map((x: any) => x?.name)
                  .join(', ')}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetailMovie;
