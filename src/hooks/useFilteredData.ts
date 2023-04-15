import { useMemo } from 'react';
import { Film } from '../models/Film';

export const useFilteredData = (
  data: Film[] | null,
  selectedGenreId: number,
  filmSearchQuery: string
) =>
  useMemo(() => {
    if (data === null) return null;

    let filteredData = data;
    if (selectedGenreId !== -1) {
      filteredData = data.filter(film => film.genre.includes(selectedGenreId));
    }

    return filteredData.filter(film =>
      film.name.toLowerCase().includes(filmSearchQuery.toLowerCase())
    );
  }, [data, selectedGenreId, filmSearchQuery]);
