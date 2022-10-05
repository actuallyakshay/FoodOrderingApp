import React, { useContext } from "react";
import { Box, IconButton, Button, Text, Center } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { auth } from "../firebaseConfig/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthContext/AuthContext";
import { LOADING ,SUCCESS_ACTION ,ERROR_ACTION} from "../AuthContext/action";

function GoogleLogin() {
  const navigate = useNavigate();
    const provider = new GoogleAuthProvider(auth);
    const {authState, authDispatch} = useContext(AuthContext)
 
  function handleSubmit() {
    authDispatch(LOADING);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
         
        console.log("result",result.user.photoURL);
          authDispatch(SUCCESS_ACTION(result));
         
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert("something went wrong");
        authDispatch(ERROR_ACTION);
      });
    }
    console.log("resukltttt",authState?.result)

  return (
    <Box>
      <Button
        onClick={handleSubmit}
        w={{ base: "250px", lg: "400px" }}
        variant={"outline"}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>Continue with Google</Text>
        </Center>
      </Button>
    </Box>
  );
}

export default GoogleLogin;
