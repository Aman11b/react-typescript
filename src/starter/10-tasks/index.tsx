import { useEffect, useState } from "react";
import { Task } from "./types";
import Form from "./Form";
import List from "./List";

function loadTask(): Task[] {
  const storedTask = localStorage.getItem("tasks");
  return storedTask ? JSON.parse(storedTask) : [];
}

function updateStorage(task: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(task));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTask());
  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      }),
    );
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);
  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
