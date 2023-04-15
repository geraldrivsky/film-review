import { FC } from 'react';

interface FilmImageProps {
  filmId: number;
}

const FilmImage: FC<FilmImageProps> = ({ filmId }) => (
  <img
    style={{ borderRadius: 5, marginBottom: 10 }}
    src={`/images/${filmId}.jpeg`}
    alt='Film poster'
    loading='lazy'
    width={150}
    height={225}
  />
);

export default FilmImage;
