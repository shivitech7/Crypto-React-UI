import React, { useState } from 'react';
import '../styles/Section.css';
import Wallet from '../images/Wallet.png';
import CryptoDatabase from '../images/11.png';
import CustomLinkIcon from '../images/CustomLinkIcon.png';
import MoneyBag from '../images/MoneyBag.png';
import CopyIcon from '../images/ungroup.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dropdown1Icon from '../images/dropdown1Icon.png';
import Path from '../images/Path.png';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CryptoTable from '../components/CryptoTable';

const Section = () => {

    const [dropdown1, setDropdown1] = React.useState('');
    const [dropdown2, setDropdown2] = React.useState('');
    const [tabValue, setTabValue] = React.useState('1');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const handleChange = (event) => {
        setDropdown1(event.target.value);
    };

    const handleChange2 = (event) => {
        setDropdown2(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div className='section_container'>
                <div className='header'>
                    <div className='page_title'>
                        <h3>Section</h3>
                    </div>
                    <div style={{width: 196.69}} className='card1_container'>
                        <img src={Wallet} alt='Wallet icon' />
                        <p style={{ fontSize: 16, fontWeight: '500' }}>0.2 $XYZ</p>
                        <div className='card2_container'>
                            <h3 style={{ fontSize: '12px', fontWeight: '600' }}>Tier 1</h3>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        borderRadius: 10,
                        display: 'flex',
                        flexWrap:'wrap',
                        flexDirection: 'row',
                        marginTop: 23.53,
                        width: 687,
                        padding: 20,
                        position: 'relative'
                    }}
                    className='card2_container'>
                    <div className='content_container'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div style={{ marginTop: 5 }} >
                            <button className='tutorial_button'><p style={{ fontSize: 12, fontWeight: '600', color: '#2B2557' }}>Tutorial</p></button>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', right: 15.6, top: 5.33, maxWidth: 114.29, height: 90.23 }}>
                        <img src={CryptoDatabase} alt='crypto database' />
                    </div>
                </div>
                <div style={{ width: '700.76px', marginTop: 19.66, padding: 25.25 }} className='card1_container'>
                    <div className='content_container'>
                        <p>Your rewards</p>
                        <h3 style={{ marginTop: 7 }}>$ 0.26231428</h3>
                        <div style={{ flexDirection: 'row', display: 'flex', marginTop: 7 }}>
                            <div className='chip1'>
                                <p style={{ textAlign: 'center', fontSize: 12, fontWeight: '600', color: 'white' }}>$ 40 AVAX</p>
                            </div>
                            <div className='chip1'>
                                <p style={{ textAlign: 'center', fontSize: 12, fontWeight: '600', color: 'white' }}>$ 10 BNB</p>
                            </div>
                            <div className='chip1'>
                                <p style={{ textAlign: 'center', fontSize: 12, fontWeight: '600', color: 'white' }}>$ 210 BTC</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginRight: 26.57 }}>
                        <button className='custom_link_button'>
                            <img style={{ marginRight: 10 }} src={CustomLinkIcon} alt='custom icon' />
                            <p style={{ fontSize: 14, fontWeight: '700' }}> custom link </p>
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: 19.8, justifyContent: 'space-around', width: '100%', flexWrap:'wrap' }}>
                    <div
                        style={{
                            flexDirection: 'column',
                            borderRadius: 16,
                            width: 340,
                            alignItems: 'flex-start',
                            height: 177.95,
                            justifyContent: 'space-around',
                            padding: 22.18
                        }}
                        className='card1_container'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ marginRight: 9.36 }} src={MoneyBag} alt='money bag' />
                            <h4 >12.5% of fee</h4>
                        </div>
                        <p>Your Referral Link for xyz</p>
                        <div className='referral_link_container'>
                            <p>https://unityexchange.design </p>
                            <img src={CopyIcon} alt='copy icon' />
                        </div>
                    </div>

                    <div
                        style={{
                            flexDirection: 'column',
                            borderRadius: 16,
                            width: 340,
                            alignItems: 'flex-start',
                            height: 177.95,
                            justifyContent: 'space-around',
                            padding: 22.18
                        }}
                        className='card1_container'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ marginRight: 9.36 }} src={MoneyBag} alt='money bag' />
                            <h4 >12.5% of fee</h4>
                        </div>
                        <p>Your Referral Link for xyz</p>
                        <div className='referral_link_container'>
                            <p>https://unityexchange.design </p>
                            <img src={CopyIcon} alt='copy icon' />
                        </div>
                    </div>
                </div>

                {/* ----------Tab layout for crypto table--------- */}
                <Box sx={{ width: '100%', typography: 'body1', marginTop: 3 }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab style={{ color: 'white' }} label="First tab" value="1" />
                                <Tab style={{ color: 'white' }} label="Second Tab" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><CryptoTable /></TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </Box>
            </div>

            {/* ----------------custom link container------------------ */}
            <div className='custom_link_container'>
                <div className='header'>
                    <FormControl style={{ width: 146.67, position: 'relative', marginRight: 10 }}>
                        <img style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }} height={20} width={20} src={Dropdown1Icon} />
                        <InputLabel style={{ color: 'white', marginLeft: 20, top: -8 }} id="demo-simple-select-label">Avalanche</InputLabel>
                        <Select
                            placeholder='Avalanche'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dropdown1}
                            label="Avalanche"
                            style={{ color: 'white', backgroundColor: '#353945', borderRadius: 10, textAlign: 'right', height: 39.22, }}
                            onChange={handleChange}
                        >
                            <MenuItem value='Avalanche'>Avalanche</MenuItem>
                            <MenuItem value='Avalanche'>Avalanche</MenuItem>
                            <MenuItem value='Avalanche'>Avalanche</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: 200, position: 'relative' }}>
                        <img style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }} height={20} width={25} src={Wallet} />
                        <InputLabel style={{ color: 'white', marginLeft: 40, top: -8, textOverflow: 'ellipsis', width: 70 }} id="demo-simple-select-label">0xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dropdown2}
                            style={{ color: 'white', backgroundColor: '#353945', borderRadius: 10, textAlign: 'right', height: 39.22, textOverflow: 'ellipsis', border: '2px solid blue' }}
                            onChange={handleChange2}
                        >
                            <MenuItem value='0xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D'>0xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D</MenuItem>
                            <MenuItem value='4xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D'>4xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D</MenuItem>
                            <MenuItem value='1xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D'>1xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ display: 'flex', marginTop: 28.14, alignItems: 'center', width: '100%' }}>
                    <img style={{ marginRight: 13.97 }} height={12} width={12} src={Path} alt='path' />
                    <h3 style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Custom link</h3>
                </div>
                <div style={{ marginTop: 20.37, height: 48, display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ fontSize: 16, fontWeight: '400' }}>https://testnet.xyz.xyz/trade?ref=</h3>
                </div>
                <div style={{ width: 333.94, height: 50.63, marginTop: 7.37, backgroundColor: '#242731', borderRadius: 12, display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginLeft: 16.14, fontSize: 12, fontWeight: '600', color: '#808191' }}>ENTER</p>
                </div>
                <div style={{ display: 'flex', marginTop: 30.6 }}>
                    <div style={{ marginRight: 26.57 }}>
                        <button className='custom_link_button'>
                            <img style={{ marginRight: 10 }} src={CustomLinkIcon} alt='custom icon' />
                            <p style={{ fontSize: 14, fontWeight: '700' }}> custom link </p>
                        </button>
                    </div>
                    <div style={{ marginRight: 26.57 }}>
                        <button className='cancle_button'>
                            <img style={{ marginRight: 10 }} src={CustomLinkIcon} alt='cancle icon' />
                            <p style={{ fontSize: 14, fontWeight: '700' }}>cancle</p></button>
                    </div>
                </div>
            </div>
            {/* --------------End custom link container--------------- */}

        </div >
    )
}

export default Section