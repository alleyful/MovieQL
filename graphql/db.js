export const people = [
  {
    id: '0',
    name: 'alley',
    age: 20,
    gender: "female"
  },
  {
    id: '1',
    name: 'abc',
    age: 18,
    gender: "male"
  },
  {
    id: '2',
    name: 'aaaaaa',
    age: 32,
    gender: "female"
  },
  {
    id: '3',
    name: 'hi',
    age: 23,
    gender: "male"
  },
  {
    id: '4',
    name: 'smail',
    age: 34,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => String(id) === person.id);
  return filteredPeople[0];
}