import React from "react";
import Layout from "./Layout";

function SignUp() {
  return (
    <Layout title="SignUp">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />
    </Layout>
  );
}
export default SignUp;
