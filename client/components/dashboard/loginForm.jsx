"use client";

// import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  // const [state, formAction] = useFormState(authenticate, undefined);
  const [state, formAction] = useFormState(undefined);

  return (
    <form action={formAction} className="bg-gray-100 p-12 rounded-lg w-[500px] h-[500px] flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-semibold">Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="w-full p-4 border-2 border-gray-700 rounded-md bg-white text-gray-900"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-full p-4 border-2 border-gray-700 rounded-md bg-white text-gray-900"
      />
      <button className="w-full p-4 bg-teal-500 text-white rounded-md cursor-pointer">Login</button>
      {state && <div className="text-red-500">{state}</div>}
    </form>
  );
};

export default LoginForm;
