import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MaleIcon from '@mui/icons-material/Male';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventIcon from '@mui/icons-material/Event';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CategoryIcon from '@mui/icons-material/Category';
import WcIcon from '@mui/icons-material/Wc';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CachedIcon from '@mui/icons-material/Cached';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SourceIcon from '@mui/icons-material/Source';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AdjustIcon from '@mui/icons-material/Adjust';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const steps = ['Personal Detials', 'Professional Details', 'Address Details'];

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const emails = ['username@gmail.com', 'user02@gmail.com'];


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


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const messageExamples = [
    {
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    }
];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </DialogActions>
        </Dialog>
    );
}

function TabThreeComponent({ tabChange }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [value, setValue] = React.useState(0);
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Grid item xs={10} sx={{ height: '100vh', overflow: 'scroll' }} >
                <Grid container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: 'initial', backgroundColor: 'primary.back', padding: '20px', borderRadius: '10px' }} variant="h5" gutterBottom m={2}>
                                Search Patient
                            </Typography>
                        </Grid>
                        <Grid item xs={2} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Last name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2.4} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Last name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Gender</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<MaleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Last name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Last name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Gender</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<MaleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Last name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={0.3} mt={2}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <SearchIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={0.3} mt={2}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <FingerprintIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={0.3} mt={2}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <CachedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={11} mt={2} ml={5} mb={5}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: 'initial', backgroundColor: 'primary.back', padding: '20px', borderRadius: '10px' }} variant="h5" gutterBottom m={2}>
                                Patient Registration
                            </Typography>
                        </Grid>
                        <Divider />

                        <Grid container>
                            {/* section one */}
                            <Grid item xs={1} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Gender</InputLabel>
                                    {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        startAdornment={<MaleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        startAdornment={<TransgenderIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.4} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">First Name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.4} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Middle name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.4} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Last name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.4} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Mobile</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            {/* section two */}
                            <Grid item xs={2.15} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Birth Date</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<DateRangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={1} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Year(s)</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="date"
                                        startAdornment={<CalendarMonthIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Month(s)</InputLabel>
                                    {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Month"
                                        startAdornment={<EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Date(s)</InputLabel>
                                    {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        startAdornment={<EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.15} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">WhatsApp</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<WhatsAppIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.15} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Skype</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<CloudQueueIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={2.15} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">EmailId</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<MailOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />
                                </FormControl>
                            </Grid>
                            {/* section three */}
                            <Grid item xs={1.93} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Patient Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        startAdornment={<CategoryIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1.93} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">maritial status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        startAdornment={<WcIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1.93} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">identification No</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        startAdornment={<RememberMeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1.93} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Race</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        startAdornment={<AccessibilityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1.93} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Occupation</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        startAdornment={<BusinessCenterIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Ms</MenuItem>
                                        <MenuItem value={30}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1.93} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">File No</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<ContentPasteSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />

                                </FormControl>
                            </Grid>
                            <Grid item xs={2.5} mb={2}>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Blood Group</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<BloodtypeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        label="Amount"
                                    />

                                </FormControl>
                            </Grid>
                            <Grid item xs={1} mt={2}>
                                <FormControl component="fieldset">
                                    <FormControlLabel
                                        value="start"
                                        control={<Switch color="primary" />}
                                        label="VIP"
                                        labelPlacement="start"
                                    />
                                </FormControl>

                            </Grid>

                        </Grid>

                    </Grid>



                    <Divider />
                    <Grid container xs={11.7}>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: 'initial', backgroundColor: 'primary.back', padding: '20px', borderRadius: '10px' }} variant="h5" gutterBottom m={2}>
                                Local Address
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '95%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Country</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<FlagIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">State</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<HomeWorkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">District</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<MaleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">City</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<LocationCityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Area</InputLabel>
                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    startAdornment={<MaleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}>Ms</MenuItem>
                                    <MenuItem value={30}>NA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Zip Code</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} mb={2}>
                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Contact No</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} mt={2}>
                            <Button onClick={handleClickOpen}>
                                Select files
                            </Button>
                            <SimpleDialog
                                selectedValue={selectedValue}
                                open={open}
                                onClose={handleClose}
                            />
                        </Grid>

                    </Grid>
                    <Divider />


                    <Grid container mt={5}>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%', backgroundColor: 'primary.back' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Patient Visit" {...a11yProps(0)} />
                                        <Tab label="Next Of Kin" {...a11yProps(1)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <Typography sx={{ textAlign: 'initial', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} variant="h6" gutterBottom m={2}>
                                        Patient Visit Details
                                    </Typography>
                                    <Grid container mt={2} mb={2}>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Patient Visit Type</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<PeopleOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Speciality</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<StarRateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Docter</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<MedicalServicesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Time Slot</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Clinic</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<MedicalServicesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">System Generated Visit Type</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<AdjustIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Change Visit Type</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<AdjustIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Patient Class</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<PersonAddAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Source</InputLabel>
                                                {/* <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                    label="Amount"
                                /> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    startAdornment={<SourceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Mr</MenuItem>
                                                    <MenuItem value={20}>Ms</MenuItem>
                                                    <MenuItem value={30}>NA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<NoteAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2} mt={2}>
                                            <FormControl component="fieldset">
                                                <FormControlLabel
                                                    value="start"
                                                    control={<Switch color="primary" />}
                                                    label="Is Teleconsultation"
                                                    labelPlacement="start"
                                                />
                                            </FormControl>

                                        </Grid>
                                    </Grid>
                                    <Typography sx={{ textAlign: 'initial', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} variant="h6" gutterBottom m={2}>
                                        Referral Details
                                    </Typography>
                                    <Grid container mt={2} mb={2}>
                                        <Grid item xs={3} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Refferal Type</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={3} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Reffered By</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={3} mb={2}>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1.5} mt={2}>
                                            <Button variant="contained">Add New Refferal</Button>
                                        </Grid>
                                    </Grid>
                                    <Typography sx={{ textAlign: 'initial', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} variant="h6" gutterBottom m={2}>
                                        Payment Entitlement
                                    </Typography>
                                    <Grid container mt={2} mb={2} ml={3}>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="Self" control={<Radio />} label="Self" />
                                                <FormControlLabel value="Insurance" control={<Radio />} label="Insurance" />
                                                <FormControlLabel value="Corporate" control={<Radio />} label="Corporate" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default TabThreeComponent;