import { Box, colors, styled } from "@mui/material";
import { display } from "@mui/system";

export interface SignInTemplateProps {
  leftbar: React.ReactElement | string;
  rightbar: React.ReactElement | string;
}

const Wrapper = styled(Box)({
  width: "100vw",
  height: "99.9vh",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  boxSizing: "border-box",
  background: "paleblue",
});
const LeftBox = styled(Box)`
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const RightBox = styled(Box)`
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignInTemplate = ({ leftbar, rightbar }: SignInTemplateProps) => {
  return (
    <Wrapper>
      <LeftBox>{leftbar}</LeftBox>
      <RightBox>{rightbar}</RightBox>
    </Wrapper>
  );
};
