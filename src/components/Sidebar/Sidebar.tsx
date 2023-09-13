import { FC } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block',
    },
}));

const Sidebar: FC = () => {

    return (
        <Box flex={1} p={2} sx={{height: "100%", borderRight: "2px solid black", display: { xs:"none", sm :"block" } }}>
            <Box position={'fixed'} >
                <List >
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <CustomListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon/>
                            </ListItemIcon>
                            <CustomListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List sx={{width:'100%'}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                            <CustomListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar;