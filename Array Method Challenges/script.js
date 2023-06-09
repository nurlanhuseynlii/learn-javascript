const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  const youngPeople = people.filter((person)=> person.age < 25).map((person) =>({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
    phone: person.phone
  }))


  console.log(youngPeople);


  const numbers = [1,2,-5,4,-10 , 8, -7];

  const positiveSum = numbers.filter((number) => number > 0).reduce((arr, cur) =>{
    return arr + cur
  })

  console.log(positiveSum);



  const words = ['nurlan', 'kamran' , 'eli'];

  const change = words.map((word) =>{
    return word[0].toUpperCase() + ' ' + word.slice(1, word.length)
  })

  console.log(change);