import { useCallback, useEffect, useState } from 'react';

const useLikedVideos = () => {
  const [likedVideos, setLikedVideos] = useState<any[]>(() => {
    const saved = localStorage.getItem('likedVideos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  }, [likedVideos]);

  const addLikedVideo = useCallback((video: any) => {
    setLikedVideos((prev) => [...prev, video]);
  }, []);

  const removeLikedVideo = useCallback((id: string) => {
    setLikedVideos((prev) => prev.filter((video) => video.id !== id));
  }, []);

  const isLiked = useCallback(
    (id: string) => {
      return likedVideos.some((video) => video.id === id);
    },
    [likedVideos]
  );

  return {
    likedVideos,
    addLikedVideo,
    removeLikedVideo,
    isLiked,
  };
};

export default useLikedVideos;
