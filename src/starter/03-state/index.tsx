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
