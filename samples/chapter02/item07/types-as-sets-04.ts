const ab: AB = Math.random() < 0.5 ? 'A' : 'B'; // 정상, {'A', 'B'}는 {'A', 'B'}의 부분집합.
const ab12: AB12 = ab; // 정상, {'A', 'B'}는 {'A', 'B', 12}의 부분집합.

const Twelve: AB12 = 12;
const back: AB = Twelve; // '12' 형식을 'AB'에 할당할 수 없음
