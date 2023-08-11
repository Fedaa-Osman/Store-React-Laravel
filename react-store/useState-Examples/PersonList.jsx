import { useState } from "react";
export default function PersonList() {
  const [people, setPeople] = useState([
    { id: 1, name: "أحمد", age: 30 },
    { id: 2, name: "سارة", age: 25 },
    { id: 3, name: "محمد", age: 35 },
  ]);

  const addPerson = () => {
    const newPerson = { id: people.length + 1, name: "شخص جديد", age: 0 };
    setPeople([...people, newPerson]);
  };

  const updateName = (id, newName) => {
    setPeople(
      people.map((person) =>
        person.id === id ? { ...person, name: newName } : person
      )
    );
  };
  const updateAge = (id, newAge) => {
    setPeople(
      people.map((person) =>
        person.id === id ? { ...person, age: newAge } : person
      )
    );
  };

  return (
    <div>
      <h2>List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <input
              type="text"
              value={person.name}
              onChange={(e) => updateName(person.id, e.target.value)}
            />
            <input
              type="text"
              value={person.age}
              onChange={(e) => updateAge(person.id, e.target.value)}
            />
            <span>Age: {person.age}</span>
          </li>
        ))}
      </ul>
      <button onClick={addPerson}>إضافة شخص جديد</button>
    </div>
  );
}
