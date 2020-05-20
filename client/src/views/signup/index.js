import React from "react";
import Form from "./components/form";
import gql from "graphql-tag";
import Header from "./components/header";
import Image from "./components/building.jpg";
import { useHistory } from "react-router-dom";
import { useMutation, useApolloClient } from "@apollo/react-hooks";

const Signup = () => {
  const client = useApolloClient();
  const history = useHistory();
  const [signup, { loading }] = useMutation(REGISTER_USER, {
    onCompleted(signup) {
      localStorage.setItem("token", signup.createUser.token);
      client.writeData({ data: { isLoggedIn: true } });
      history.push("/");
    }
  });

  return (
    <main className="min-h-screen lg:flex">
      <div className="py-10 px-4 min-h-screen flex items-center justify-center lg:w-5/12">
        <div className="lg:ml-auto lg:max-w-md lg:pr-16">
          <Header />
          <Form signup={signup} loading={loading} />
        </div>
      </div>
      <div className="hidden lg:block lg:w-7/12">
        <img src={Image} className="h-full w-full bg-center bg-no-repeat" alt="" />
      </div>
    </main>
  );
};

export default Signup;

const REGISTER_USER = gql`
  mutation signup($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(
      input: { email: $email, firstName: $firstName, lastName: $lastName, password: $password }
    ) {
      token
    }
  }
`;
