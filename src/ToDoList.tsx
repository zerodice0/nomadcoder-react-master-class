import { FieldError, FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

interface FormInterface {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

const ErrorMessage = styled.span`
  color: red;
`;

export const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, //destructuring assignment for formState.errors
    setError,
  } = useForm<FormInterface>({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  const onValid = (data: FieldValues) => {
    console.log(data);
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "Password not the same" }, //set error message
        { shouldFocus: true } //focus on the field if error is occured
      );
    }
    setError("extraError", { message: "Extra error" });
  };

  const restrictNameList = ["nico", "nick"];
  console.log(errors);

  const printFieldError = (fieldError: FieldError | undefined) => {
    return fieldError?.type === "minLength"
      ? "Too short!"
      : fieldError?.message;
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: "Only gmail.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noRestrictName: value => {
                const restrictKeyword: string | undefined =
                  restrictNameList.filter(name => value.includes(name))[0];
                return restrictKeyword && `${restrictKeyword} is not allowed.`;
              },
            },
          })}
          placeholder="First Name"
        />
        <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
        <input
          {...register("userName", { required: "write here", minLength: 5 })}
          placeholder="Username"
        />
        <ErrorMessage>{printFieldError(errors.userName)}</ErrorMessage>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <ErrorMessage>{printFieldError(errors?.password)}</ErrorMessage>
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
        <ErrorMessage>{errors?.passwordConfirm?.message}</ErrorMessage>
        <button>Add</button>
        <ErrorMessage>{errors?.extraError?.message}</ErrorMessage>
      </form>
    </div>
  );
};
