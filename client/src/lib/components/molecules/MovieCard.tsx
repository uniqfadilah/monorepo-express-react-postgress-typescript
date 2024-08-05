import { Images } from 'src/lib/components/atoms';
import { useMovieContainer } from '../atoms/MovieContainer';
import { AiFillLike } from 'react-icons/ai';
const MovieCard = ({ path, title, id, data }: any) => {
  const { setSelectedMovie, addLikedVideo, isLiked, removeLikedVideo } =
    useMovieContainer();
  const liked = isLiked(id);

  return (
    <>
      <button
        onClick={() => setSelectedMovie(data)}
        className="bg-gray-100 rounded h-[350px] rounded-b-lg relative"
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            if (liked) {
              removeLikedVideo(id);
            } else {
              addLikedVideo(data);
            }
          }}
          className={`absolute right-2 top-2 bg-white/50 rounded-full p-2 hover:text-red-500 ${
            liked ? 'text-red-600' : 'text-stone-900'
          }`}
        >
          <AiFillLike />
        </span>
        <Images className="flex-1 object-cover h-[310px] w-full" src={path} />
        <p className="p-2 font-semibold truncate text-left">{title}</p>
      </button>
    </>
  );
};

export default MovieCard;
