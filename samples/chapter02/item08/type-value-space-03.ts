interface Person {
  first: string;
  last: string;
}

const p: Person = { first: 'Jane', last: 'Jacobs' };

function email(p: Person, subject: string, body: string): Response {
  // ...
}
