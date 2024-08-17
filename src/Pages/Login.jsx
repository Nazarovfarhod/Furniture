import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
function Login() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifer"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="bg-primary btn text-white btn-block ">
          Guest User
        </button>
        <p>
            Not a memeber yet ?
          <Link to="/register" className="ml-2 link-hover link-primary capitalize">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
