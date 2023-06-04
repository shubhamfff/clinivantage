import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Grid, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dialog from '@mui/material/Dialog';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function createData(complaint, remark, template, action) {
    return { complaint, remark, template, action };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, <DeleteOutlineIcon sx={{ cursor: 'pointer' }} />),
    createData('Ice cream sandwich', 237, 9.0, <DeleteOutlineIcon sx={{ cursor: 'pointer' }} />),
    createData('Eclair', 262, 16.0, <DeleteOutlineIcon sx={{ cursor: 'pointer' }} />),
];

function CheifComplaintsComponent() {
    const [value, setValue] = React.useState(0);
    const [personName, setPersonName] = React.useState([]);

    const [openDailog, setOpenDailog] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    const handleDailogClickOpen = () => {
        setOpenDailog(true);
    };

    const handleDailogClose = () => {
        setOpenDailog(false);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCheckChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Grid item sx={{ marginLeft: '84%' }}>
                    <Button color="success" variant="text" onClick={handleDailogClickOpen}>Expand view</Button>
                </Grid>
            </Grid>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Dialog
                    fullScreen
                    open={openDailog}
                    onClose={handleDailogClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleDailogClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleDailogClose}>
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
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', width: '150px' }}
                    >
                        <Tab sx={{ fontSize: '12px'}} label="Chief Complaints" {...a11yProps(0)} />
                        <Tab sx={{ fontSize: '12px'}} label="Medical History" {...a11yProps(1)} />
                        <Tab sx={{ fontSize: '12px'}} label="Drug History" {...a11yProps(2)} />
                        <Tab sx={{ fontSize: '12px'}} label="Allergies" {...a11yProps(3)} />
                        <Tab sx={{ fontSize: '12px'}} label="Vitals" {...a11yProps(4)} />
                        <Tab sx={{ fontSize: '12px'}} label="Examination" {...a11yProps(5)} />
                        <Tab sx={{ fontSize: '12px'}} label="Daignosis" {...a11yProps(6)} />
                        <Tab sx={{ fontSize: '12px'}} label="Orders" {...a11yProps(7)} />
                        <Tab sx={{ fontSize: '12px'}} label="Notes" {...a11yProps(8)} />
                        <Tab sx={{ fontSize: '12px'}} label="Advice" {...a11yProps(9)} />
                        <Tab sx={{ fontSize: '12px'}} label="Follow up" {...a11yProps(10)} />
                        <Tab sx={{ fontSize: '12px'}} label="Attach to Caseshhet" {...a11yProps(11)} />
                        <Tab sx={{ fontSize: '12px'}} label="Letters" {...a11yProps(12)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <TextField sx={{ width: '100%' }} id="filled-basic" label="Add Notes" variant="filled" />

                        <TableContainer component={Paper} elevation={0}>
                            <Table sx={{ width: 400, mt: 5 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Complaints</TableCell>
                                        <TableCell align="right">Remark</TableCell>
                                        <TableCell align="right">Template&nbsp;(g)</TableCell>
                                        <TableCell align="right">Action&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.complaint}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.complaint}
                                            </TableCell>
                                            <TableCell align="right">{row.remark}</TableCell>
                                            <TableCell align="right">{row.template}</TableCell>
                                            <TableCell align="right" onClick={() => handleClickOpen()}>{row.action}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div>
                            <FormControl sx={{ m: 1, width: '100%', mt: 5 }}>
                                <InputLabel id="demo-multiple-checkbox-label">Search Complaints</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleSelectChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Grid
                                container
                                direction="row"
                                alignItems="left"
                            >
                                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={gilad} onChange={handleCheckChange} name="gilad" />
                                            }
                                            label="Burning pain in ball of your foot"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={jason} onChange={handleCheckChange} name="jason" />
                                            }
                                            label="Tingling or numbbess in your toes"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={antoine} onChange={handleCheckChange} name="antoine" />
                                            }
                                            label="Foot deformity"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Box>
            </Grid>
        </div>

    )
}

export default CheifComplaintsComponent;