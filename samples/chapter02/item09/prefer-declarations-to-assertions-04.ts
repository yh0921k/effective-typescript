interface Person09 {
  name: string;
}

//const people = ['alice', 'bob', 'jan'].map((name) => ({ name }));
//const people = ['alice', 'bob', 'jan'].map((name) => ({ name } as Person09));
//const people = ['alice', 'bob', 'jan'].map((name) => ({} as Person09)); // 오류 없음
// const people = ['alice', 'bob', 'jan'].map((name) => {
//   const person09: Person09 = { name };
//   return person09;
// });
// const people = ['alice', 'bob', 'jan'].map((name): Person09 => ({ name }));

const people: Person09[] = ['alice', 'bob', 'jan'].map(
  (name): Person09 => ({ name }),
);
