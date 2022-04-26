interface Person07 {
  name: string;
}

const body = document.body;
//const el = body as Person07;
const el2 = body as unknown as Person07;
