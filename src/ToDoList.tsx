import { FieldValues, useForm } from "react-hook-form";

export const ToDoList = () => {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: FieldValues) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("First Name", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("Last Name", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("Username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("passwordConfirm", {
            required: "Password is required!",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters long",
            },
          })}
          placeholder="Password Confirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
};
