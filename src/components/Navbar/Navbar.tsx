import { useState, FC } from 'react';
import { styled } from '@mui/system';
import { Menu, Toolbar, Typography, Box, InputBase, Avatar, MenuItem, IconButton, AppBar } from '@mui/material';

import BugReportIcon from '@mui/icons-material/BugReport';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';

const StyledAppbar = styled(AppBar)({
    background: 'rgba(0, 100, 225, 0.5)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled('div')({
    background: 'rgba(255, 255, 255, 0.6)', // Adjust the opacity to control the glass effect
    padding: '5px 10px',
    display: 'flex',
    borderRadius: '10px',
    width: '40%',
});

const Icons = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '10px',
});

const Navbar: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <StyledAppbar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    BUG TRACKER
                </Typography>
                <BugReportIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search>
                    <InputBase placeholder="Search" sx={{ width: '100%' }} />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Search>
                <Icons>
                    <IconButton
                        aria-label="delete"
                        sx={{ color: 'white' }}
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <LightModeIcon sx={{ color: 'gold' }} /> : <DarkModeIcon />}
                    </IconButton>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        alt="Remy Sharp"
                        src="src\assets\Avatar.png"
                        onClick={() => setOpen(true)}
                    />
                </Icons>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                sx={{ top: '35px' }}
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </StyledAppbar>
    );
};

export default Navbar;
