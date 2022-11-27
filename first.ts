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

function add2(x: number, y: number): number;
function add2(x, y) {
    return x + y;
}

// 객체
const obje: {lat: number, lon: number} = {lat: 37.5, lon: 127.5};

const obj = {lat: 37.5, lon: 127.5} as const;
type Key = keyof typeof obj;
type Value = typeof obj[keyof typeof obj];

// 배열
const arr: string[] = ['123', '456'];
const arr2: Array<number> = [123, 456];

// 튜플 (길이가 고정된 배열)
const arr3: [number, number, string] = [123, 456, 'hello'];

// type Greeting = "hello world"
type World = "world";
const aa: World = 'world';

const bb = `hello ${aa}`;
type Greeting = `hello ${World}`;

// rest parameter
function rest(a, ...args: string[]) {
    console.log(a, args);   // 1, [2,3]
}
rest('1','2','3');

// enum
const enum EDirection {
    Up = 3,
    Down = 5,
    Left = 4,
    Right = 6,
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

const aaa = EDirection.Up;   // 3
const ccc = EDirection.Left;  // 4

function walk(dir: EDirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);