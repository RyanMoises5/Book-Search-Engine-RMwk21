import { gql } from '@apollo/client';

// Incomplete - Needs to be implemented in SavedBooks.jsx
export const QUERY_ME = gql`
  query me ($userId: ID!) {
    user(id: $userId) {
      _id
      username
      email
    }
  }
`;

// route to get logged in user's info (needs the token)
// export const getMe = (token) => {
//   return fetch('/api/users/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };
