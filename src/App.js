import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Grid,
  TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ButtonGroup from '@mui/material/ButtonGroup';
import UndoIcon from '@mui/icons-material/Undo';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Popover from '@mui/material/Popover';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';


import CurrentCaseSheet from '../src/components/CurrentCaseSheet'
import CheifComplaintsComponent from '../src/components/ChiefComplaints'
import SideBar from '../src/components/SideBar'
import UserCardComponent from '../src/components/UserCard';
import TabTwoComponent from '../src/components/TabTwo'
import TabThreeComponent from '../src/components/TabThree'
import { DebounceInput } from 'react-debounce-input';


import { ThemeProvider, createTheme } from '@mui/material/styles';


import './App.css';


const pages = ['Letter', 'Billing', 'Order Set'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const buttons = [
  <Tooltip title="Previous Casesheet" placement="right">
    <span>
      <Button key="two" color="success" sx={{ mb: 2 }}><UndoIcon /></Button>
    </span>
  </Tooltip>,
  <Tooltip title="Vitals" placement="right">
    <span>
      <Button key="three" color="success" sx={{ mb: 2 }}><MonitorHeartIcon /></Button>
    </span>
  </Tooltip>,
  <Tooltip title="Letter to refferrer" placement="right">
    <span>
      <Button key="one" color="success" sx={{ mb: 2 }}><ForwardToInboxIcon /></Button>
    </span>
  </Tooltip>,
  <Tooltip title="Petient document" placement="right">
    <span>
      <Button key="two" color="success" sx={{ mb: 2 }}><ContentPasteSearchIcon /></Button>
    </span>
  </Tooltip>,
  <Tooltip title="Clini intel" placement="right">
    <span>
      <Button key="three" color="success" sx={{ mb: 2 }}><PsychologyAltIcon /></Button>
    </span>
  </Tooltip>,
  <Tooltip title="Video call" placement="right">
    <span>
      <Button color="success" key="three"><VideoCallIcon /></Button>
    </span>
  </Tooltip>
];


function App() {

  const defaultPrimaryColor = "#329d9c";
  const defaultSecondaryColor = "#eeeeee";
  const defaultButtonColor = "#b05454";
  const defaultFontSize = 14;
  const [count, setCount] = React.useState(12);
  const [fontSizes, setFontSizes] = React.useState(defaultFontSize);
  const [primaryColor, setPrimaryColor] = React.useState(defaultPrimaryColor);
  const [secondaryColor, setSecondaryColor] = React.useState(defaultSecondaryColor);
  const [buttonThemeColor, setButtonThemeColor] = React.useState(defaultButtonColor);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState()

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: primaryColor, card: primaryColor + '33', back: primaryColor + '09' },
          secondary: { main: secondaryColor },
          success: { main: buttonThemeColor, card: buttonThemeColor + '44' },
        },
        typography: {
          fontSize: count,
        },
      }),
    [primaryColor, secondaryColor, buttonThemeColor, count]
  );


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tabChange = (test) => {
    console.log(test)
    setActiveTab(test)
  }

  const handleFonSizeClick = (op) => {
    if (op == '+') {
      setFontSizes(fontSizes + 2);
    } else {
      setFontSizes(fontSizes - 2);
    }
  }

  const increment = () => {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar position="static" elevation={0}>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    color="success"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1
                  }}
                >
                  <span>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                      Change Theme
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <Typography variant="subtitle1" sx={{ marginBottom: 0, marginTop: 1 }}>Primary color</Typography>
                        <DebounceInput
                          type="color"
                          debounceTimeout={500}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          // placeholder="Name"
                          value={primaryColor}
                          className="color-input" />
                        <Divider />
                        <Typography variant="subtitle1" sx={{ marginBottom: 0, marginTop: 1 }}>Side panel color</Typography>
                        <DebounceInput
                          type="color"
                          debounceTimeout={500}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          // placeholder="Name"
                          value={secondaryColor}
                          className="color-input" />
                        <Divider />
                        <Typography variant="subtitle1" sx={{ marginBottom: 0, marginTop: 1 }}>Button color</Typography>
                        <DebounceInput
                          type="color"
                          debounceTimeout={500}
                          onChange={(e) => setButtonThemeColor(e.target.value)}
                          // placeholder="Name"
                          value={buttonThemeColor}
                          className="color-input" />
                        <Divider />
                        <Typography variant="subtitle1" sx={{ marginBottom: 0, marginTop: 1 }}>Font size</Typography>
                        <ButtonGroup
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"
                        >
                          <Button onClick={() => increment()}>+</Button>
                          <Button onClick={() => decrement()}>-</Button>
                        </ButtonGroup>
                      </Box>
                    </Popover>
                  </span>
                  <span><Button key="three" sx={{ color: 'white' }}>Patient List</Button></span>
                  <span><Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip></span>
                </Box>

                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBar tabChange={tabChange} />
          </Grid>
          {activeTab == 'one' ? <>
            <Grid item xs={1} >
              <Box
                sx={{
                  display: 'flex',
                  '& > *': {
                    m: 1,
                    ml: 4,
                    mt: 22,
                    p: 2
                  },
                }}
              >

                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="contained"
                >
                  {buttons}
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <UserCardComponent />

              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={5}>
                  <CurrentCaseSheet />
                </Grid>
                <Grid item xs={5}>
                  <CheifComplaintsComponent tabDesign="horizontal" />
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', top: 75, right: 16 }}
                icon={<ManageAccountsOutlinedIcon />}
                direction="left"
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                  />
                ))}
              </SpeedDial>
            </Box></> : ''}
          {activeTab == 'two' ? <TabTwoComponent /> : ''}
          {activeTab == 'three' ? <TabThreeComponent /> : ''}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
