import React, { useState } from "react";

// type Person = {
//   name: string;
// };

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const fomrData=new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData);
    console.log(data);
    // const text = formData.get("text") as string;
    // const person: Person = { name: data.text as string };
  };
  return (
    <section>
      <h2>event form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label id="text">Name</label>
        <input
          id="text"
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <label id="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handlechange}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
