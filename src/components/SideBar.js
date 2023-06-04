import * as React from 'react';

import {
    Box,
    Card,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import InsertPageBreakOutlinedIcon from '@mui/icons-material/InsertPageBreakOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function SideBar({tabChange}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Card className='card-height' sx={{ backgroundColor: 'secondary.main'}} elevation={0}>
            <Box
                role="presentation"
            >
                <List
                    sx={{ width: '100%', maxWidth: 360, backgroundColor: 'rgb(235 248 247 / 0%)' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <NoteAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Appointment" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '35px' }}>
                                    <BookOnlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Book An Appointment" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '35px' }}>
                                    <ListAltOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Appointment List" />
                            </ListItemButton>
                        </List>
                        
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '35px' }}>
                                    <DriveFolderUploadOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Upload Patient Doc" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '35px' }}>
                                    <DvrOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Token Display Screen" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '35px' }}>
                                    <InsertPageBreakOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Transcribed Document" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <AccountBoxOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patient" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <LocalHospitalOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Doctor" />
                    </ListItemButton>
                    <ListItemButton onClick={() => tabChange('one')}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <DashboardCustomizeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cross referral" />
                    </ListItemButton>
                    <ListItemButton onClick={() => tabChange('two')}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <ReceiptLongOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Billing" />
                    </ListItemButton>
                    <ListItemButton onClick={() => tabChange('three')}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <AssessmentOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                    </ListItemButton>
                </List>
            </Box>
        </Card>
    )
}

export default SideBar;