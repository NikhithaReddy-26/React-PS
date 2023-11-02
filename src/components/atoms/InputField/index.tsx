import { SxProps, TextField } from "@mui/material";
import { ChangeEvent } from "react";

export interface InputfieldProps {
  width?: string;
  error?: boolean;
  helperText?: string;
  sx?: SxProps;
  placeholder?: string;
  value?: string;
  // handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Inputfield = ({
  width,
  sx,
  helperText,
  error,
  placeholder,
  value,
  onChange
  // handleChange,
}: InputfieldProps) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      helperText={helperText}
      onChange={onChange}
      error={error}
    />
  );
};
