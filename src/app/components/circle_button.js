import Button from '@mui/material/Button';
import {theme} from '../style/theme';
import { poppins } from '../style/fonts';
import { useState } from 'react';

export default function CircleButton(props) {
    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const handleClick = () => {
        setIsClicked(true);
    };
    const handleUnclick = () => {
        setIsClicked(false);
    };

    return (
        <Button
        style={{backgroundColor: (props.selected ? theme.normal_grey : (isHover ? theme.orange : theme.dark_grey)), 
                color: theme.light_grey, 
                borderRadius: '50%', 
                scale: isClicked ? '0.85' : '0.8',
                fontFamily: poppins.style.fontFamily,
                width: '24px',
                height: '56px',
                fontSize: '20px',
            }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handleClick}
        onPointerUp={handleUnclick}
        onClick={props.onClick}
        disableRipple='true'
        >{props.value}
    </Button>
    );
}