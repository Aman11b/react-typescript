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
