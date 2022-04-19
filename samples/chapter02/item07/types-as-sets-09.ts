function getKey<K extends string>(val: any, key: K) {
  return;
}

getKey({}, 'x'); // 정상, 'x'는 string을 상속
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // 정상, 'a' | 'b' 는 string을 상속
getKey({}, document.title); // 정상, string은 string을 상속
getKey({}, 12); // 'number' 형식의 인수를 'string' 형식의 매개변수에 할당할 수 없음
