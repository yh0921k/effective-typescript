const v5 = typeof Cylinder; // 값이 'function'
type T5 = typeof Cylinder; // 타입이 typeof Cylinder

declare let fn: T5;
const c5 = new fn(); // 타입이 Cylinder

type C5 = InstanceType<typeof Cylinder>; // 타입이 Cylinder
