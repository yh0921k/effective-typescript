type T3 = typeof p; // 타입은 Person
type T4 = typeof email; // 타입은 (p: Person, subject: string, body: string) => Response

const v3 = typeof p;
const v4 = typeof email;
