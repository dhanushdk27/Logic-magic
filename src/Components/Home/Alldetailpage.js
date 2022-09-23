import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardFile from './CardFile';
import axios from 'axios';
import { Spin } from 'antd';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
function Alldetailpage(props) {
    const [value, setValue] = React.useState(0);
    const [categoriesTotaldata, setcategoriesTotaldata] = useState([]);
    const [removeDups, setremoveDups] = useState([]);
    const [contentData, setcontentData] = useState([]);



    useEffect(() => {
        let getData = async () => {
            let dataGot = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
            let toRemoveDups = await dataGot.data.reduce((storageArray, e, index) => {
                if (!storageArray.includes(e.mainCategory)) {
                    storageArray.push(e.mainCategory)
                }
                return storageArray
            }, [])
            let tofilter = decodeURI(window.location.href.split("/")[window.location.href.split("/").length - 1])
            console.log(tofilter)

            setremoveDups(toRemoveDups.filter(e => {
                return e == tofilter;
            }));
            let contentFilter = await dataGot.data.filter(e => {
                return e.mainCategory == tofilter
            })
            
            setcontentData(contentFilter)
            setcategoriesTotaldata(await dataGot.data)
            console.log(categoriesTotaldata)

        }
        getData();

    }, [])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
        >

            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {removeDups.length ? removeDups.map((e, index) => (

                    <Tab label={e} {...a11yProps(index)} />
                )) : (<div></div>)}

            </Tabs>

            <TabPanel value={value} index={0}>
                
            {contentData.length ? (contentData.map(e => (

                <CardFile jobFromData={e.job} priceFromeData={e.price} ratingFromData={e.rating} detailsFromData={e.description} />
            ))):   <Spin size="large" /> }
            </TabPanel>

        </Box>
    );
}

export default Alldetailpage;