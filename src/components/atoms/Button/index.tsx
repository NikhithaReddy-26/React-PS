import { Button, ButtonProps, SxProps } from "@mui/material";

export interface ButtonComponentProps extends ButtonProps {
  children?: string;
  sx?: SxProps;
  isDisabled?: boolean;
  variant?: "contained" | "outlined";
}
export const ButtonComponent = ({ ...props }: ButtonComponentProps) => {
  return (
    <Button
      children={props.children}
      sx={props.sx}
      disabled={props.isDisabled}
      variant={props.variant}
    />
  );
};
