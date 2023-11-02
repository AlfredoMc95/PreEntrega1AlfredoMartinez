import { useState } from "react";
import LogIn from "../components/logIn/LogIn";
import Reguister from "../components/register/Reguister";

const SignIn = () => {
  const [logInBtn, setLogInBtn] = useState(false);
  const changeSing = () => {
    setLogInBtn(!logInBtn);
  };
  return (
    <>
      {logInBtn ? (
        <LogIn changeSing={changeSing} />
      ) : (
        <Reguister changeSing={changeSing} />
      )}
    </>
  );
};
export default SignIn;
