import React from 'react';

const Images = (props: any) => {
  return (
    <img
      {...props}
      alt="..."
      src={`https://image.tmdb.org/t/p/original/${props.src}`}
    />
  );
};

export default Images;
