import React, { useState } from "react";
import authApi from "services/AuthApi";
import SignUp from "../component/SignUp";

function SignUpContainer() {
  const [success, setSuccess] = useState();
  const handleSignUp = async (value) => {
    setSuccess(null);
    try {
      await authApi.signUp(value);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    }
  };

  return <SignUp success={success} handleSignUp={handleSignUp} />;
}

export default SignUpContainer;
