import {Carousel} from "react-bootstrap";
import '../sass/AboutMe.scss'
import React, {Component} from "react";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me font-link">
                    <Carousel>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={require("../data/background1.png")}
                                alt="Third slide"
                            />
                            <Carousel.Caption style={{"top":"50%", "padding":"0", "margin":"0", "color":"white", "fontWeight":"bold", "transform":"translate(0,-50%)"}}>
                                <div style={{ "display":"flex", "justify-content":"center", "align-items":"center", "flex-direction":"column"}}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                < /div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={require("../data/background2.png")}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={require("../data/background3.png")}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}

export default () => (<div><AboutMe /></div>)
