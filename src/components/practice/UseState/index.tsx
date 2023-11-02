import { useEffect, useState } from "react";
import { TypographyComponent } from "../../atoms/Typography";
import { ButtonComponent } from "../../atoms/Button";
import { Button } from "@mui/material";
import { Inputfield } from "../../atoms/InputField";

export const UseStateHook = () => {
  const [name, setName] = useState<string>("Nikhitha");
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    console.log(count + 2);
  }, [count]);
  const handler = (e: any) => {
    setFirstName(e.target.value);
  };
  return (
    <>
      <TypographyComponent>{name}</TypographyComponent>
      <Button
        variant="contained"
        onClick={() => {
          setName("Naiynika");
        }}
      >
        Click Me!
      </Button>
      <TypographyComponent>{count}</TypographyComponent>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </Button>
      <input
        onChange={handler}
        placeholder="enter anything that will be printed down"
      />
      <TypographyComponent>{firstName}</TypographyComponent>
    </>
  );
};
