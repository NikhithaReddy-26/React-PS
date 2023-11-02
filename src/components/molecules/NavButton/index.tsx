import { IconButton, Stack, styled } from '@mui/material';

import { TypographyComponent, TypographyProps } from '../../atoms/Typography';

interface IconTypoProps {
    children: string | number;
    icon: React.ReactNode;
    typoProps?: TypographyProps;
    selectedButton: boolean;
    onClick?: () => void;
}

const StyledBox = styled(Stack)({
    width: '97%',
    height: '44px',
    borderRadius: '8px',
    cursor: 'pointer'
});

export const NavButton = ({
    icon,
    children,
    typoProps,
    onClick,
    selectedButton
}: IconTypoProps) => {
    return (
        <StyledBox
            direction={'row'}
            spacing={0}
            alignItems={'center'}
            onClick={onClick}
            sx={{ backgroundColor: selectedButton ? '#EFF2FF' : '' }}
        >
            <IconButton>{icon}</IconButton>
            <TypographyComponent {...typoProps}>{children}</TypographyComponent>
        </StyledBox>
    );
};