import Button from '@mui/material/Button';
import {theme} from '../utils/theme';
import { poppins } from '../utils/fonts';
import { useState } from 'react';

export default function SubmitButton(props) {
    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    
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
        style={{backgroundColor: isHover ? theme.light_grey : theme.orange, 
                color: isHover ? theme.orange : theme.light_grey, 
                borderRadius: '9999px', 
                fontFamily: poppins.style.fontFamily,
                width: '100%',
                scale: isClicked ? '1.02' : '1',
                }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handleClick}
        onPointerUp={handleUnclick}
        onClick={props.onClick}
        disableRipple='true'
        >SUBMIT
        </Button>
    );
}