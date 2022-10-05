import React, { useContext } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import { AuthContext } from "../AuthContext/AuthContext";

const shadow =
  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
const inputShadow =
  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";

function PhoneLogin() {
  const [isValid, setIsValid] = React.useState(false);
  const [mobNum, setMobNum] = React.useState("");
  const [otp, setOtp] = React.useState(0);
  const [takeOtp, setTakeOtp] = React.useState(false);
  let navigate = useNavigate();

  const { authState, authDispatch } = useContext(AuthContext);
  console.log("authsatet", authState);

  function handleInputMobNum(e) {
    setMobNum(e.target.value);
    if (e.target.value.length > 10) {
      setIsValid(true);
    } else if (e.target?.value?.length <= 10) setIsValid(false);
  }

  function genrateRecapta() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
        "expired-callback": () => {
          console.log("solve again");
        },
      },
      auth
    );
  }

  function handleNumSubmit() {
    if (mobNum.length < 10) return;
    genrateRecapta();
    authDispatch({ type: "loading" });
    signInWithPhoneNumber(auth, `+91${mobNum}`, window.recaptchaVerifier)
      .then((res) => {
        window.confirmationResult = res;
        window.id = res.verificationId;
        if (res?.verificationId) setTakeOtp(true);
        authDispatch({ type: "success" });
      })
      .catch((error) => {
        alert("Something went wrong!");
        setTakeOtp(false);
        authDispatch({ type: "error" });
        console.log(error);
      });
  }

  function handleInputOtp(e) {
    if (otp.length === 6) {
      authDispatch({ type: "loading" });
      window.confirmationResult
        .confirm(otp)
        .then((result) => {
          console.log(result);
          const user = result?.user;
          authDispatch({ type: "success", payload: result });
          navigate("/");
        })
        .catch((error) => {
          alert("wrong otp");
          authDispatch({ type: "error" });
          setTakeOtp(false);
          navigate("/login");
        });
    }
  }

  console.log("get the number", authState?.result);

  return (
    <>
      {!takeOtp ? (
        <Box>
          <FormControl mb="1" isInvalid={isValid}>
            <InputGroup shadow={inputShadow}>
              <InputLeftAddon children="+91" color="red" />
              <Input
                type="tel"
                placeholder="phone number"
                value={mobNum}
                onChange={handleInputMobNum}
              />
            </InputGroup>
            <Box
              display="flex"
              justifyContent="center"
              mt="1"
              id="recaptcha-container"
            ></Box>
            <FormErrorMessage>
              Please enter a valid mobile number
            </FormErrorMessage>
          </FormControl>
          <Button
            isLoading={authState?.isLoading}
            onClick={handleNumSubmit}
            mb="3"
            w="full"
            loadingText="Getting Otp"
            rightIcon={<BellIcon />}
            colorScheme="facebook"
          >
            Send OTP
          </Button>
        </Box>
      ) : (
        <Box>
          <FormControl mb="2">
            <Input
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              shadow={inputShadow}
              type="tel"
              placeholder="Enter OTP"
            />
            <FormHelperText>Enter valid 6 digit number</FormHelperText>
          </FormControl>
          <Button
            isLoading={authState?.isLoading}
            onClick={handleInputOtp}
            w="full"
            colorScheme="green"
          >
            Sign In
          </Button>
        </Box>
      )}
    </>
  );
}

export default PhoneLogin;
