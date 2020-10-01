import React, { useReducer } from 'react';

interface Person {
  name: string;
  alive: boolean;
}

const peoples: Person[] = [
  { name: 'Filippo', alive: true },
  { name: 'Paolo', alive: true },
  { name: 'Giovanni', alive: true },
  { name: 'Luca', alive: true }
];

const peoplesReducer = (peoples: Person[], action: { type: 'die' | 'revive'; payload: any }) => {
  switch (action.type) {
    case 'die':
      return peoples.map((person: Person) => {
        if (person.name === action.payload) {
          person.alive = false;
        }
        return person;
      });
    case 'revive':
      return peoples.map((person: Person) => {
        if (person.name === action.payload) {
          person.alive = true;
        }
        return person;
      });
    default:
      return peoples;
  }
};

export default function PeopleComponent() {
  const [state, dispatch] = useReducer(peoplesReducer, peoples);
  const boxStyle = { backgroundColor: 'lightgray', border: '1px solid orange', color: 'navy', padding: '5px', margin: '5px' };

  const toggleLife = (person: Person) => {
    dispatch({ type: person.alive ? 'die' : 'revive', payload: person.name });
  };

  return (
    <div>
      {state.map((person: Person, idx: number) => {
        return (
          <div key={idx} style={boxStyle}>
            <div>{person.name}</div>
            <div>{person.alive ? 'VIVO!' : "SIGH :'("}</div>
            <button onClick={() => toggleLife(person)}>Cambia!</button>
          </div>
        );
      })}
    </div>
  );
}
