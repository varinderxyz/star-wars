import { gql } from '@apollo/client';

export const GET_FILMS = gql`
  query Query {
    allFilms {
        films {
        id
        title
        director
        releaseDate
        episodeID
        speciesConnection {
            species {
            name
            classification
            homeworld {
                name
            }
            }
        }
        }
    }
  }
`;

export const GET_FILM_BY_ID = gql`
  query GetFilmById($id: ID!) {
    film(id: $id) {
      id
      title
      releaseDate
      episodeID
      openingCrawl
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;

