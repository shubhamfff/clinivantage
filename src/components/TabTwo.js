import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheifComplaintsComponent from './Horizontal'
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UndoIcon from '@mui/icons-material/Undo';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}


const messageExamples = [
    {
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    }
];

function TabTwoComponent({ tabChange }) {

    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const [toggleTab, setToggleTab] = React.useState(true)

    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    const [openSpeedDail, setOpenSpeedDail] = React.useState(false);
    const handleOpen = () => setOpenSpeedDail(true);
    const handleClose = () => setOpenSpeedDail(false);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const actions = [
        { icon: <UndoIcon />, name: 'Casesheet' },
        { icon: <MonitorHeartIcon />, name: 'Vitals' },
        { icon: <ForwardToInboxIcon />, name: 'Letter' },
        { icon: <ContentPasteSearchIcon />, name: 'document' },
        { icon: <PsychologyAltIcon />, name: 'CliniIntel' },
        { icon: <VideoCallIcon />, name: 'Videocall' },
    ];


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };


    const showContent = () => {
        setToggleTab(!toggleTab)
    }

    const customList = (items) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );

    return (
        <>
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Backdrop open={openSpeedDail} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: 'absolute', bottom: 80, left: 20 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={openSpeedDail}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <Grid item xs={10} >
                <Grid container>
                    <Grid sx={{ border: '1px solid #ddd', mt: 2, mb: 4, borderRadius: 2 }} item xs={12} elevation={2}>
                        <Box ref={ref}>
                            <CssBaseline />
                            <List sx={{ backgroundColor: 'primary.back' }}>
                                {toggleTab ? <Grid container spacing={2} columns={12}>
                                    <Grid item xs={7}>

                                        <Box sx={{ height: 100, mt: 1, mb: 1 }}>
                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                <Grid item xs={1.5}>
                                                    <Avatar sx={{ bgcolor: deepOrange[100], width: 60, height: 60, m: 1, ml: 2, mt: 2 }}>N</Avatar>
                                                </Grid>
                                                <Grid item xs={2.5}>
                                                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                                                        <Typography variant="subtitle2">
                                                            Alexander Johnson
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            Consult (In Person)
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            Age - 48Y 1M 20D
                                                        </Typography>
                                                    </Box>
                                                </Grid><Grid item xs={4}>
                                                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                                                        <Typography variant="caption">
                                                            UHID - PC-4-8-09
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            Address - 303 Shilpa Apartment
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            Outstanding amt - 0.00 GBP
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box sx={{ textAlign: 'left', mt: 2.5 }}>
                                                        <Typography variant="caption" display="block">
                                                            Contact No: +91 98754 65324
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            Appointment time:  09:00 - 10:00
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={5} justifyContent="flex-end">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                '& > :not(style)': {
                                                    m: 1,
                                                    width: '100%',
                                                    // height: 100,
                                                    mt: 1
                                                },
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                divider={<Divider orientation="vertical" flexItem />}
                                                spacing={2}
                                            >
                                                <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                    <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                        Temp
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        36'C
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        June 7, 2005
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        8:45 AM
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                    <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                        BP
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        119/79
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        June 7, 2005
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        8:45 AM
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                    <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                        Pulse
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        119
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        June 7, 2005
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        8:45 AM
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                    <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                        SpO2
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        99%
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        June 7, 2005
                                                    </Typography>
                                                    <Typography variant="caption" display="block">
                                                        8:45 AM
                                                    </Typography>
                                                </Box>
                                            </Stack>



                                        </Box>
                                    </Grid>
                                </Grid> :

                                    <Grid container>
                                        <Grid item xs={4} justifyContent="flex-end">
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    '& > :not(style)': {
                                                        m: 1,
                                                        width: '100%',
                                                        // height: 100,
                                                        mt: 1
                                                    },
                                                }}
                                            >
                                                <Stack
                                                    direction="row"
                                                    divider={<Divider orientation="vertical" flexItem />}
                                                    spacing={2}
                                                >
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'secondary.main' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            Temp
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            36'C
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'secondary.main' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            BP
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            119/79
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'secondary.main' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            Pulse
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            119
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'secondary.main' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            SpO2
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            99%
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                </Stack>



                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} justifyContent="flex-end">
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    '& > :not(style)': {
                                                        m: 1,
                                                        width: '100%',
                                                        // height: 100,
                                                        mt: 1
                                                    },
                                                }}
                                            >
                                                <Stack
                                                    direction="row"
                                                    divider={<Divider orientation="vertical" flexItem />}
                                                    spacing={2}
                                                >
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'success.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            Temp
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            36'C
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'success.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            BP
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            119/79
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'success.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            Pulse
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            119
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'success.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            SpO2
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            99%
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                </Stack>



                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} justifyContent="flex-end">
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    '& > :not(style)': {
                                                        m: 1,
                                                        width: '100%',
                                                        // height: 100,
                                                        mt: 1
                                                    },
                                                }}
                                            >
                                                <Stack
                                                    direction="row"
                                                    divider={<Divider orientation="vertical" flexItem />}
                                                    spacing={2}
                                                >
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            Temp
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            36'C
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            BP
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            119/79
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            Pulse
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            119
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ width: 90, height: 90, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.card' }}>
                                                        <Typography variant="button" display="block" sx={{ height: '17px' }}>
                                                            SpO2
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            99%
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            June 7, 2005
                                                        </Typography>
                                                        <Typography variant="caption" display="block">
                                                            8:45 AM
                                                        </Typography>
                                                    </Box>
                                                </Stack>



                                            </Box>
                                        </Grid>
                                    </Grid>

                                }

                            </List>
                            <Paper sx={{ border: '1px solid #ddd', borderLeft: 0, borderRight: 0, height: '40px' }} elevation={0}>
                                <BottomNavigation
                                    showLabels
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    sx={{ height: '40px', borderBottom: '1px solid #ddd' }}
                                >
                                    <BottomNavigationAction sx={{ height: '40px' }} label="Patient Information" onClick={() => showContent()} />
                                    <BottomNavigationAction sx={{ height: '40px' }} label="Patient Latest Record" onClick={() => showContent()} />
                                </BottomNavigation>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            {/* <Grid ontainer sx={{ textAlign: 'right' }}>
                                <Grid item alignItems="flex-end">
                                    <Button color="success" variant="text" onClick={handleClickOpen}>Expand view</Button>
                                </Grid>
                            </Grid> */}
                            <Grid container sx={{ textAlign: 'left', p: 5, width: '100%', border: '1px solid #ddd', height: '70vh', borderRadius: 1, backgroundColor: 'primary.back' }}>
                                <Dialog
                                    fullScreen
                                    open={open}
                                    onClose={handleModalClose}
                                    TransitionComponent={Transition}
                                >
                                    <AppBar sx={{ position: 'relative' }}>
                                        <Toolbar>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                onClick={handleModalClose}
                                                aria-label="close"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                                Sound
                                            </Typography>
                                            <Button autoFocus color="inherit" onClick={handleModalClose}>
                                                save
                                            </Button>
                                        </Toolbar>
                                    </AppBar>
                                    <List>
                                        <ListItem button>
                                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            <ListItemText
                                                primary="Default notification ringtone"
                                                secondary="Tethys"
                                            />
                                        </ListItem>
                                    </List>
                                </Dialog>
                                <Grid item>
                                    <Typography variant="h5" gutterBottom >Medical History</Typography>
                                    <Typography variant="body1" sx={{ mb: 5 }}>
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                        quasi quidem quibusdam.
                                    </Typography>
                                    <Typography variant="h5"  gutterBottom>Drug History</Typography>
                                    <Typography variant="body1">
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                        quasi quidem quibusdam.
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 5 }}>
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                        quasi quidem quibusdam.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <CheifComplaintsComponent sx={{ width: "100%" }} />
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default TabTwoComponent;