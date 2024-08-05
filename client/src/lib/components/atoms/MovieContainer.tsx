import { createContext, useContext, useState } from 'react';
import ModalDetailMovie from 'src/lib/components/molecules/ModalDetailMovie';
import useLikedVideos from 'src/lib/hooks/useLikedVideo';
const movieContainerContext = createContext<any>(undefined);
export const useMovieContainer = () => {
  const context = useContext(movieContainerContext);
  if (!context) {
    throw new Error(
      'useMovieContainer must be used within a movieContainerContext'
    );
  }
  return context;
};
const MovieContainer = ({ children }: any) => {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const { addLikedVideo, isLiked, removeLikedVideo } = useLikedVideos();
  return (
    <movieContainerContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie: (e: string) => setSelectedMovie(e),
        addLikedVideo: (data: any) => addLikedVideo(data),
        isLiked: (id: any) => isLiked(id),
        removeLikedVideo: (id: any) => removeLikedVideo(id),
      }}
    >
      <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-cols-1 gap-4 text-black mt-12">
          {children}
        </div>
        <ModalDetailMovie />
      </>
    </movieContainerContext.Provider>
  );
};

export default MovieContainer;
