export const people = [
  {
    id: 0,
    name: '민국',
    age: 24,
    gender: 'male',
  },
  {
    id: 1,
    name: '은규',
    age: 25,
    gender: 'male',
  },
  {
    id: 2,
    name: '건호',
    age: 24,
    gender: 'male',
  },
  {
    id: 3,
    name: '다빈',
    age: 24,
    gender: 'male',
  },
  {
    id: 4,
    name: '형원',
    age: 24,
    gender: 'male',
  },
  {
    id: 5,
    name: '소영',
    age: 25,
    gender: 'female',
  },
  {
    id: 6,
    name: '성경',
    age: 100,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filterUser = people.filter((person) => person.id === id);
  return filterUser[0];
};
