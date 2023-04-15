export const genreStrings = [
  'драма',
  'биография',
  'история',
  'фэнтези',
  'приключения',
  'боевик',
  'мультфильм',
  'комедия',
  'триллер',
  'детектив',
  'фантастика',
];

export const capitalize = (string: string) =>
  string[0].toUpperCase() + string.slice(1);

export const convertGenreList = (genreIdList: number[]) =>
  genreIdList.map(genreId => genreStrings[genreId - 1]).join(', ');
