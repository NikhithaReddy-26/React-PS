import { Box, Button, Stack } from "@mui/material";
import { TypographyComponent } from "../../atoms/Typography";
import { TypoInput } from "../../molecules/TypoInput";
import { Inputfield } from "../../atoms/InputField";
import { useState } from "react";
import { NavButton } from "../../molecules/NavButton";
export const EMAIL_EX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { ArrowBack } from "@mui/icons-material";
import { passwordRegex } from "../../../utils/constants/constants";


export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(EMAIL_EX.test(newEmail));
  };
  const hanldePasswordCHange = (event: any) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
    setIsValidPassword(passwordRegex.test(enteredPassword));
  };
  return (
    <Box padding={"40px"} boxShadow={20} width={"480px"} height={"672px"}>
      <TypographyComponent children="SignUp" variant="body1" />
      <TypographyComponent
        children="Please signup to start exploring the program"
        variant="body1"
      />
      <Stack spacing={2} paddingTop={"50px"}>
        <TypographyComponent children="Email" variant="body1" />
        <Inputfield
          error={!isValidEmail}
          helperText={!isValidEmail ? "Invalid email format" : ""}
          onChange={handleEmailChange}
        />
        <TypographyComponent children="Password" variant="body1" />
        <Inputfield
          error={!isValidPassword}
          helperText={!isValidPassword ? "enter a valid password" : ""}
          onChange={hanldePasswordCHange}
        />
        <TypographyComponent children="Confirm Password" variant="body1" />
        <Inputfield />
      </Stack>
      <Stack paddingTop={"110px"} spacing={2}>
        <Button children="SignIn" variant="contained" />
        <TypographyComponent
          children="Already a member? Sign in"
          variant="body1"
          sx={{ displayItems: "center" }}
        />
        <NavButton
          children={"Im Nav Button"}
          icon={<ArrowBack />}
          selectedButton={false}
          typoProps={{ variant: "body1" }}
        />
      </Stack>
    </Box>
  );
};
