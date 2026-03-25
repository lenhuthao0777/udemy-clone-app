import React, { useState } from "react";
import authApi from "services/AuthApi";
import SignUp from "../component/SignUp";

function SignUpContainer() {
  const [success, setSuccess] = useState(null);
  const handleSignUp = async (value) => {
    await authApi
      .signUp(value)
      .then(() => setSuccess(true))
      .catch(() => setSuccess(false))
      .finally(() => setSuccess(null));
  };

  return <SignUp success={success} handleSignUp={handleSignUp} />;
}

export default SignUpContainer;
