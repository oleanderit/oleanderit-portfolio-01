import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomePage.css";

const Homepage = () => {
    return (
        <div style={{ margin: '20px' }}>
            <Row style={{ border: "1px solid red" }}>
                <Col sm={12} md={5} style={{ border: "1px solid green", }}><div>This is Stiky</div></Col>
                <Col sm={12} md={7} style={{ border: "1px solid blue" }} >
                    <Swiper
                        effect={"cards"}
                        loop={true}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>



                </Col>
            </Row>
        </div>
    );
};

export default Homepage;