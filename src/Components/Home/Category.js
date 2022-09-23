import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spin } from 'antd';

function Category(props) {
    const [store, setstore] = useState([]);
    const [categorieswithoutDups, setCategorieswithoutDups] = useState([]);


    useEffect(() => {
        let getCatagoryData = async () => {
            let data = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
            setstore(await data.data);
            let colWithoutDup = [];
            let categoriesWithoutDuplicates = await data.data.map(e => {

                if (!colWithoutDup.includes(e.mainCategory)) {
                    if (e.mainCategory != undefined) {
                        colWithoutDup.push(e.mainCategory);
                    }
                }
            });
            setCategorieswithoutDups(colWithoutDup)
        };
        getCatagoryData();
    }, [])
    console.log(setstore)

    const img = {
        "Saloon for women": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
        "Hair Service For Women": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png",
        "Women's Therapies": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
        "Salon for Men": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
        "Men's Therapies": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
        "Home Painting": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
        "Cleaning & pest Control": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
        "Electrician": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
        "Plumbers & Carpenters": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
        "AC/Appliance Repair": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    }
    return (
        <div>
            <Row style={{
                display: "flex",
                justifyContent: "center", width: "100%"
            }}>
                <Col lg={6}>
                    <Row style={{
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "4px",
                        boxShadow: "rgb(0 0 0 / 8%) -1px 20px 20px 17px",
                        backgroundColor: "#fff",
                        marginTop: "-4rem",
                        padding: "3%",
                        textAlign: "center",
                    }}>
                        {categorieswithoutDups.length ? (categorieswithoutDups.map((e) => (

                            <Col style={{ height: "fit-content" }} lg={2}>
                                <Link to={`/alldetailpage/${e}`}>
                                    <Avatar size={50} src={img[e]} />
                                    <p>{e}</p>
                                </Link>
                            </Col>

                        ))): <Spin/>}


                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Category;