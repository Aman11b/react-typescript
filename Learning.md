# TypeScript

## 1. Basic

- string
- number
- boolean
- null
- undefined

```ts
let name: string = "Aman";
let age: Number = 23;
```

## 2. Union Type

```ts
let value:string ||number;
value="hello";
value=34;
```

in react

```ts
const [id, setId] = useState<string | null>(null);
```

## 3. Objects

```ts
type user = {
  id: number;
  name: string;
}={
    name:"Aman",
    age=23
};
```

### optional

```ts
{
    price?:number
}
```

### readonly

```ts
{
    readonly id:number
}
```

## 4. function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### optional parameter

```ts
function greet(name?: string) {}
```

### default parameter

```ts
function greet(name = "guest") {}
```

### rest parameter

```ts
fucntion sunm(...numbers:number[]){}
```

### void

```ts
function log(): void {
  console.log("hellow");
}
```

## 5. type aliass

```ts
type user = {
  id: number;
  name: string;
};
const user: user = {
  id: 1,
  name: "Aman",
};
```

- can create union

```ts
type status = "loading" | "success" | "error";
```

- can combine type

```ts
type user = {
  name: string;
};
type Admin=user &&{
    permission:string[]
}
```

### Best for:Unions, Tuples, Utility types, Complex type compositions

## 6. interface

> Another way to define object shapes.

```ts
interface user {
  id: number;
  name: string;
}
const user: user = {
  id: 1,
  name: "Aman",
};
```

- inference with same name automatically merge type alias cant do this
- interface can be merged
- classes can implement interfacs

```ts
interface User {
  id: number;
  name: string;
}
class Person implements User {
  id: number;
  name: sting;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

> The class must contain all properties defined in the interface.

### Best for:Object shapes, React props, Class contracts, Library APIs

## 7. Arrya

```ts
let score: number[] = [1, 2, 2];
```

```ts
let value:(string||number)[]=[1,2"e"]
```

## type narrowing

```ts
function process(value: string | number) {
  if (typeof value === "string") {
    console.log("bla");
  }
  if (typeof value === "number") {
    cosole.log("bla");
  }
}
```

### typepof guard

> Used for primitive types.

```ts
typeof value===="string"
typeof value===="number"
typeof value===="boolean"
typeof value===="undefined"
```

### in gurad

> Used when checking whether an object contains a property.

```ts
type Employee = {
  employees: number;
};
type Manager = {
  department: number;
};
function print(staff: Employee | Manager) {
  if ("employee" in staff) {
    console.log("blas");
  }
}
```

### truly/falsy

> JavaScript values can be truthy or falsy.

- falsey value

```js
false;
0;
("");
null;
undefined;
NaN;
```

```ts
function print(name: string | null) {
  if (name) {
    console.log(name);
  }
}
```

### instanceOf guard

```ts
function hadle(error: unknown) {
  if (error instanceof Error) {
    clg;
  }
}
```

## special type

### any

> turns typescript off, avoid it

```ts
let value: any;
```

### unknown

> safer any

```ts
let x: unknown;
```

### never

> represent impossible state,You cannot assign anything to it:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

```ts
function getThemeColor(theme: Theme) {
  switch (theme) {
    case "light":
      return "white";

    case "dark":
      return "black";

    default:
      const impossible: never = theme;
      return impossible;
  }
}
```

## advance types

### tuples

> fixed length array,order matter ,each positio has specific type

```ts
let person:[string,number]={
    "Aman",23
}
```

### enums

> group of related constants, TypeScript assigns values automatically
> ,You can also assign strings:

```ts
enum Status {
  success,
  error,
}
let status: Statsus = Status.success;
```

## generics

> what type comes in what goes out

```ts
function identity<T>(value: T): T {
  return value;
}
```

### generic type

```ts
type Box<T> = {
  value: T;
};
type StringBox = Box<string>;
```

### props

```ts
import { type PropsWithChildren } from "react";

// type ComponentProp = { name: string; id: number; children?: React.ReactNode };

type ComponentProp = PropsWithChildren<{ name: string; id: number }>;

function Component({ name, id, children }: ComponentProp) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Id: {id}</h2>
      {children}
    </div>
  );
}
export default Component;

```

### state

> ts automatically idetifies its type

```ts
import { useState } from "react";

function Component() {
  const [text, setText] = useState("shake");
  const [number, setNumber] = useState(35);
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <h2 className="mb-1 ">React & Typescript</h2>
      <button className="btn btn-center" onClick={() => setText("hi")}>
        {text}
      </button>
      <button className="btn btn-center" onClick={() => setNumber(1)}>
        {number}
      </button>
      <button className="btn btn-center" onClick={() => setList(["hello"])}>
        {list}
      </button>
    </div>
  );
}
export default Component;

```

### custom list

```ts
import { useState } from "react";

type Link = {
  id: number;
  url: string;
  test: string;
};

const navLinks = [
  {
    id: 1,
    url: "some",
    test: "som omes",
  },
  {
    id: 2,
    url: "some",
    test: "som omes",
  },
  {
    id: 3,
    url: "some",
    test: "som omes",
  },
];

function Component() {

  const [links, setLinks] = useState<Link[]>(navLinks);
  //its is incoring based on what i am passing in useState or use a Link type whihc make this strict
  return (
    <div className="flex gap-2">
      <h2 className="mb-1 ">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setLinks([...links, { id: 4, url: "hellow", test: "hi" }]);
        }}
      >
        Click me
        {navLinks.map((nav) => (
          <p>{nav.id}</p>
        ))}
      </button>
    </div>
  );
}
export default Component;

```

> typescript interfer thr arrys as never[] and adding element to it cause an error if empty array is passed in useState
