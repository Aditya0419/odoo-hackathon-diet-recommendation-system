import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='dropdown'>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <span className="material-symbols-outlined" style={{ color: "white" }}>
                    menu
                </span>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><a href="#skills" style={{ color: "black", opacity: "1" }}>Skills</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="#projects" style={{ color: "black", opacity: "1" }}>Projects</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="#lastsec" style={{ color: "black", opacity: "1" }}>Contact</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="https://drive.google.com/file/d/15vtLgyox_9Q2u12cy_G1qiInmq2IvHra/view?usp=drive_link" target='_blank' style={{ color: "black", opacity: "1" }}>Resume</a></MenuItem>
            </Menu>
        </div>
    );
}