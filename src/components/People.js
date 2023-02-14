import { usePeopleStore } from '../store';

function People() {
  const { people } = usePeopleStore();

  return (
    <ul>
      {people.map(p => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

export default People;
