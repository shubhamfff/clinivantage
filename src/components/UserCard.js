import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 500,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData(99 , 159, 6.0, 24, 4.0, 4.0),
    createData(98, 237, 9.0, 37, 4.3, 4.0),
    createData(99, 262, 16.0, 24, 6.0, 4.0),
    createData(97, 305, 3.7, 67, 4.3, 4.0),
    createData(95, 356, 16.0, 49, 3.9, 4.0),
];

export default function UserCardComponent() {
    const theme = useTheme();

    return (
        <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Patient Last records</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>BP </TableCell>
                                                    <TableCell align="right">Temp</TableCell>
                                                    <TableCell align="right">Pulse</TableCell>
                                                    <TableCell align="right">SpO2</TableCell>
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

                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            </Accordion>
                        </React.Fragment>
                    }
                >
                    <Box sx={{ height: 100, mt: 5, border: '1px solid #ddd', borderRadius: 2, width: '95%', mb: 4 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={2}>
                                <Avatar sx={{ bgcolor: deepOrange[100], width: 60, height: 60, m: 1, ml: 2 , mt:2 }}>N</Avatar>
                            </Grid>
                            <Grid item xs={3}>
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
                                <Box sx={{ textAlign: 'left', mt: 2}}>
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
                            <Grid item xs={3}>
                                <Box sx={{ textAlign: 'right', mt: 2.5, mr: 1.2 }}>
                                    <Typography variant="caption" display="block">
                                        +91 98754 65324
                                    </Typography>
                                    <Typography variant="caption" display="block">
                                        09:00 - 10:00
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </HtmlTooltip>

            </Grid>
            <Grid item xs={8} justifyContent="flex-end">
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1,
                            width: '100%',
                            // height: 100,
                            mt: 5
                        },
                    }}
                >
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <Box sx={{ width: 100, height: 100, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.back' }}>
                            <Typography variant="button" display="block">
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
                        <Box sx={{ width: 100, height: 100, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.back' }}>
                            <Typography variant="button" display="block">
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
                        <Box sx={{ width: 100, height: 100, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.back' }}>
                            <Typography variant="button" display="block">
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
                        <Box sx={{ width: 100, height: 100, border: '1px solid #ddd', borderRadius: 2, backgroundColor: 'primary.back' }}>
                            <Typography variant="button" display="block">
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


    );
}