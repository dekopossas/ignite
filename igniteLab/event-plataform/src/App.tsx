import { gql } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo';

// Querys
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

function App() {
  // Effects
  useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  // Render
  return <h1 className="text-5xl font-bold">Hello World</h1>;
}

export default App;
