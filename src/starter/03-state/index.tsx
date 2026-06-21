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
  const [text, setText] = useState("shake");
  const [number, setNumber] = useState(35);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  //its is incoring based on what i am passing in useState or use a Link type whihc make this strict
  return (
    <div className="flex gap-2">
      <h2 className="mb-1 ">React & Typescript</h2>
      <button className="btn btn-center" onClick={() => setText("hi")}>
        {text}
      </button>
      <button className="btn btn-center" onClick={() => setNumber(1)}>
        {number}
      </button>
      <button
        className="btn btn-center m-3"
        onClick={() => {
          setList(["hello"]);
        }}
      >
        show list
        {list}
      </button>
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
