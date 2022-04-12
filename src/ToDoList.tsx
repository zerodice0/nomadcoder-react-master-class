import { FormEvent, useState } from "react";

export const ToDoList = () => {
  const [toDo, setToDo] = useState("");

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setToDo(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} placeholder="Write a to do" onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
};
