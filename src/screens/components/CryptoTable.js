import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CryptoTable = () => {

    const data = [
        {
            "img": "https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png",
            "amount": 0.001,
            "asset": "Bitcoin",
            "chain": {
                "img": "https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png",
                "name": "AVAX"
            },
            "referral_earnings": 0.001,
            "state": "expired",
            "type": "Put",
            "user": "0xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D"
        },
        {
            "img": "https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png",
            "amount": 0.001,
            "asset": "Bitcoin",
            "chain": {
                "img": "https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png",
                "name": "AVAX"
            },
            "referral_earnings": 0.001,
            "state": "expired",
            "type": "Put",
            "user": "0xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D"
        }
    ]

    return (
        <Table style={{ marginTop: 23.65, width: '100%' }}>
            <TableHead style={{
                background: '#191B20',
                borderRadius: 10,
                width: '100%',
                marginBottom: 10
            }}>
                <TableRow style={{ borderRadius: 8 }}>
                    {['ASSET', 'AMOUNT', 'USER ACCOUNT', 'REFFERRAL ERANING'].map((head) => (
                        <TableCell
                            style={{
                                color: 'white',
                                fontWeight: '700',
                            }}
                            key={head}
                            align='center'
                        >
                            {head}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, i) => {
                    console.log(row);
                    return (
                        <TableRow
                            key={i}>
                            <TableCell
                                component='th'
                                scope='row'
                                style={{
                                    display: 'flex',
                                    gap: 15
                                }}>
                                <img
                                    alt='bitcoin'
                                    src={row.img}
                                    height='27'
                                    width='27'
                                    style={{ marginBottom: 10 }}
                                />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <span style={{
                                        // textTransform: "uppercase",
                                        fontSize: 14,
                                        fontWeight: '600',
                                        color: 'white'
                                    }}>
                                        {row.asset}
                                    </span>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <span style={{
                                            color: 'darkgrey',
                                            fontSize: 12,
                                            fontWeight: '500'
                                        }}>
                                            {row.type}
                                        </span>
                                        <div className='crypto_chain_chip'>
                                            <img
                                                alt=' bitcoin chain'
                                                src={row.chain.img}
                                                height='9.11' />
                                            <span style={{
                                                color: 'white',
                                                fontSize: 7.81,
                                                fontWeight: '600'
                                            }}>
                                                {row.chain.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{
                                        color: 'white',
                                        fontSize: 14,
                                        fontWeight: '600'
                                    }}>
                                        {row.amount} BNB
                                    </span>
                                    <span style={{
                                        color: 'darkgrey',
                                        fontSize: 12,
                                        fontWeight: '500'
                                    }}>
                                        Expired
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <span style={{ color: 'white', fontSize: 14, fontWeight: '600', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width: 100 }}>
                                        {row.user}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
                                        {row.referral_earnings}
                                    </span>
                                    <span style={{ color: 'darkgray', fontSize: 12, fontWeight: '500' }}>
                                        View on BSC Scan
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default CryptoTable;