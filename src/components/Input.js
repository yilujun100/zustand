import { useRef } from 'react';
import { usePeopleStore } from '../store';

function Input() {
  const inputRef = useRef();
  const { addPerson } = usePeopleStore();

  const add = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default Input;
