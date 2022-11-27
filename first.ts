// 변수
const a: number = 5;
const b: string = 'hi';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 'kkkk'; // 모든게 다됨. 의미가 없음. 자바스크립트임.
const g: true = true;
const h: 5 = 5;

// 함수
function add(x: number, y: number): number {return x + y};

const arrowAdd: (x: number, y: number) => number = (x, y) => x + y;

type ArrowFunc = (x: number, y: number) => number;
const arrowFunc: ArrowFunc = (x, y) => x + y;

interface MakeFunc {
    (x: number, y: number): number;
}
const makeFunc: MakeFunc = (x, y) => x + y;

// 객체
const obj: {lat: number, lon: number} = {lat: 37.5, lon: 127.5};

// 배열
const arr: string[] = ['123', '456'];
const arr2: Array<number> = [123, 456];

// 튜플 (길이가 고정된 배열)
const arr3: [number, number, string] = [123, 456, 'hello'];