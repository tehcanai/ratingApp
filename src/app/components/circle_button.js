import Button from '@mui/material/Button';
import {theme} from '../utils/theme';
import { poppins } from '../utils/fonts';
import clsx from 'clsx';
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
                scale: isClicked ? '0.85' : '0.8'}}
        className={clsx("text-xl w-6 h-14", poppins.className)}
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