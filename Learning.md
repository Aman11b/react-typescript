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

## Events

### chnage events

```ts
import React, { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  // here need to defien
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };


  return (
    <section>
      <h2>event form</h2>
      <form  className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        // here its is automativ
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handlechange}
          email="email"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;

```

### form event

```ts
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // const fomrData=new FormData(e.target as HTMLFormElement)
  const data = Object.fromEntries(formData);
  console.log(data);
  // const text = formData.get("text") as string;
  // const person: Person = { name: data.text as string };
};
```

## Context API

### basic example

```ts
import React, { createContext, useContext } from "react";

const ThemeProvideContext = createContext<string | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvideContext.Provider value="hello">
      {children}
    </ThemeProvideContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProvideContext);
  if (context === undefined)
    throw new Error("useTheme must be used within the ThemeProvider");
  return context;
};

```

## useReducer

```ts
/* eslint-disable @typescript-eslint/no-unused-vars */
type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "Pending",
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

type setStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};
type CounterAction = UpdateCountAction | setStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "setStatus":
      return { ...state, status: action.payload };
    default: {
      const _unhandeledActionType: never = action;
      throw new Error(`Unhandled action: ${JSON.stringify(action)}`);
    }
  }
};
```

### types and schema

```ts
import { z } from "zod";

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;
```

```ts
import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";
import { tourSchema, type Tour } from "./types";
function Component() {
  // tours

  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {

        const rawDate: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawDate);

        if (!result.success) {
          console.log(result.error.message);
          throw new Error("failed to parse tours");
        }
        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "there was an error";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDate();
  }, []);
  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return <p key={tour.id}>{tour.name}</p>;
      })}
    </div>
  );
}
export default Component;

```

### react query and axios

```ts
import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./types";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;
  return (
    <div>
      <h2
        className="
    mb-1"
      >
        {tours.map((tour) => {
          return <p key={tour.id}>{tour.name}</p>;
        })}
      </h2>
    </div>
  );
}
export default Component;

```

## RKT

### slice

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterStatus = "active" | "inactive" | "pending";

type CounterState = {
  count: number;
  status: CounterStatus;
};

const initialState: CounterState = {
  count: 0,
  status: "pending",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;
export default counterSlice.reducer;
```

## Rkt setup

> counterSlice.js

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterStatus = "active" | "inactive" | "pending";

type CounterState = {
  count: number;
  status: CounterStatus;
};

const initialState: CounterState = {
  count: 0,
  status: "pending",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
```

> store.ts

```ts
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./starter/09-rtk/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

> hook.ts

```ts
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

> main.ts

```ts
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);


```

## complete

> index.tsx

```ts
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment, reset, setStatus } from "./counterSlice";

function Component() {
  const { count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className="btn-container">
        <button onClick={() => dispatch(increment())} className="btn">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="btn">
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn">
          Reset
        </button>
      </div>
      <div className="btn-container">
        <button onClick={() => dispatch(setStatus("active"))} className="btn">
          Set Status to Active
        </button>
        <button className="btn" onClick={() => setStatus("inactive")}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;

``
```
