
A simple application built using React and GraphQL that allows users to browse and sort through a list of films. This app demonstrates the integration of Apollo Client with React to fetch and display data from a GraphQL API.

Clone the repository:
### `git clone https://github.com/your-username/star-wars.git`
### `cd star-wars`

Install dependencies: Using npm:
### `npm install`

Start the development server:
### `npm start`

Project Structure

```
/src
  ├── /apollo            # Apollo Client configuration
  │   └── queries/       # GraphQL queries and mutations
  ├── /components        # Reusable React components (e.g., FilmTable, LoadingSkeleton)
  ├── /pages             # Page-level components (e.g., Film, Films)
  ├── /hooks             # Custom React hooks (e.g., useFilms)
  ├── /styles            # Global and component-specific styles (CSS)
  ├── App.js             # Main React component
  └── index.js           # React DOM rendering and Apollo Client setup
```