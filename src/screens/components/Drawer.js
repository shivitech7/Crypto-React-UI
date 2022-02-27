import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Section from '../mainScreens/Section';
import { Route, Routes, Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import HomeIcon from '../images/home.png';
import Section1Icon from '../images/section1.png';
import Section2Icon from '../images/section2.png';
import Section3Icon from '../images/section3.png';
import Section4Icon from '../images/section4.png';
import Section5Icon from '../images/section5.png';
import Section6Icon from '../images/section6.png';
import Section7Icon from '../images/section7.png';
import Section8Icon from '../images/section8.png';
import DocumentIcon from '../images/documentation.png';
import { Typography } from '@mui/material';
import Profile from '../images/profile.png';
import Section1 from '../mainScreens/Section1';
import Section2 from '../mainScreens/Section2';
import Web from '../images/web.png';

const drawerWidth = 250;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 250,
        }),
    }),
);

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));
const DrawerScreen = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState();

    const activeStyle = {
        backgroundColor: '#353945',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 12
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawerList = [{
        listItem: 'Home',
        itemIcon: HomeIcon
    },
    {
        listItem: 'Section1',
        itemIcon: Section1Icon
    },
    {
        listItem: 'Section2',
        itemIcon: Section2Icon
    },
    {
        listItem: 'Section 3',
        itemIcon: Section3Icon
    },
    {
        listItem: 'Section 4',
        itemIcon: Section4Icon
    },
    {
        listItem: 'Section 5',
        itemIcon: Section5Icon
    },
    {
        listItem: 'Section 6',
        itemIcon: Section6Icon
    },
    {
        listItem: 'Section 7',
        itemIcon: Section7Icon
    },
    {
        listItem: 'Section 8',
        itemIcon: Section8Icon
    },
    {
        listItem: 'Documentation',
        itemIcon: DocumentIcon
    }]

    return (
        <div className='container'>
            <Box >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon style={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: 'black',
                            color: '#808191',
                            borderRight: '2px solid #242731',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                            <img height={29} width={29} style={{ marginRight: 10 }} src={Profile} alt='profile' />
                            <Typography variant='h5'>Name</Typography>
                        </div>
                        <IconButton style={{ color: 'white' }} onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100%', paddingBottom:20.66}}>
                        <List>
                            {drawerList.map((text, index) => (

                                <ListItem key={index}>

                                    <Link to={{
                                        pathname: `/${text.listItem}`
                                    }}
                                        style={text.listItem === activeMenu ? activeStyle : { textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}
                                        onClick={() => setActiveMenu(text.listItem)}
                                    >
                                        <img width={20} height={20} style={{ marginRight: 20 }} src={text.itemIcon} alt='list item icon' />
                                        <ListItemText style={{ fontSize: 14, fontWeight: '600', color: '#808191' }} primary={text.listItem} />
                                    </Link>
                                </ListItem>

                            ))}
                        </List>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <div style={{ height: 33.83, marginLeft:10 }} className='chip1'>
                                    <img style={{ marginRight: 6.75 }} width={16} height={16} src={Profile} alt='profile' />
                                    <p style={{ fontSize: 14, fontWeight: '600', color: 'white', }}>$0.90</p>
                                </div>
                                <div style={{ height: 33.83, padding: 10, fontSize: 14, fontWeight: '600', color: '#3772FF' }} className='card2_container'>
                                    <p>Buy $XYZ</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 18.43 }}>
                                <img style={{ marginRight: 12.59 }} width={20.11} height={21.06} src={Web} alt='web' />
                                <FormGroup>
                                    <FormControlLabel
                                        style={{ height: 25.86 }}
                                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                                        label="change theme"
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </Drawer>
                <Main open={open}>
                    {/* <DrawerHeader /> */}

                    {/* <Router> */}
                    <Routes>
                        <Route exact path="/" element={<Section />} />
                        <Route exact path="/Home" element={<Section />} />
                        <Route path="Section1" element={<Section1 />} />
                        <Route path="Section2" element={<Section2 />} />
                    </Routes>
                    {/* </Router> */}
                </Main>
            </Box>
        </div >

    );
}

export default DrawerScreen;