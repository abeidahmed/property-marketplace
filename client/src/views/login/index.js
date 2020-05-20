import React from "react";
import Form from "./components/form";
import gql from "graphql-tag";
import Header from "./components/header";
import { useHistory } from "react-router-dom";
import { useMutation, useApolloClient } from "@apollo/react-hooks";

const Login = () => {
  const client = useApolloClient();
  const history = useHistory();
  const [login, { loading }] = useMutation(LOGIN_USER, {
    onCompleted(login) {
      localStorage.setItem("token", login.loginUser.token);
      client.writeData({ data: { isLoggedIn: true } });
      history.push("/");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Header />
        <Form login={login} loading={loading} />
      </div>
    </div>
  );
};

export default Login;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      token
    }
  }
`;
