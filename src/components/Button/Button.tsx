import React from 'react';
import { ButtonStyled } from './Button.styles';
import Icon from '../../components/Icon/Icon';
import { ButtonProps } from '.';

const Button: React.FC<ButtonProps> = ({
    color,
    disabled = false,
    icon,
    iconLayout = 'leading',
    id = String(Date.now()),
    onClick,
    size = 'regular',
    text = 'click',
    theme,
    type = 'button',
    buttonStyle = {}
}: ButtonProps) => {
    return (
        <ButtonStyled
            color={color}
            data-testid="test-button"
            disabled={disabled}
            iconLayout={iconLayout}
            id={id}
            onClick={onClick}
            size={size}
            theme={theme}
            type={type}
            style={buttonStyle}
        >
            {icon && <Icon svg={icon} fill="inherit" size={20} />}
            <span>{text}</span>
        </ButtonStyled>
    );
};

export default Button;