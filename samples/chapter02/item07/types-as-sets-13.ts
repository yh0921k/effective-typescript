type T = Exclude<string | Date, string | number>; // 타입은 Date
type NonZeroNums = Exclude<number, 0>; // 타입은 여전히 number
