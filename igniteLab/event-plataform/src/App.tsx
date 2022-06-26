import { gql, useQuery } from '@apollo/client';

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

interface ILesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY);

  // Render
  return (
    <ul>
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
