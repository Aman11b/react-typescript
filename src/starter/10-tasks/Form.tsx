import React, { useState } from "react";
import { Task } from "./types";
type FromProps = {
  addTask: (task: Task) => void;
};

export default function Form({ addTask }: FromProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("please enter a task");
      return;
    }
    console.log(text);
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
  };
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
}
