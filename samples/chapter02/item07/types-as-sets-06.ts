// interface PersonName {
//   name: string;
// }
//
// interface Lifespan {
//   birth: Date;
//   death?: Date;
// }
//
// type PersonSpan = PersonName & Lifespan;
//
// const ps1: PersonSpan = {
//   name: 'Alan Turing',
//   birth: new Date('1912/06/23'),
//   death: new Date('1954/06/07'),
// };
//
// type K = keyof (PersonName & Lifespan);
// type T = PersonName | Lifespan;
//
// const ps2: K = 'birth';
// const ps3: T = {
//   name: 'Alan Turing',
//   birth: new Date('1912/06/23'),
//   death: new Date('1954/06/07'),
// };
