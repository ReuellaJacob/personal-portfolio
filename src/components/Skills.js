import React from 'react';
import {Row, Col} from "react-bootstrap";
import '../sass/AboutMe.scss';

const skills = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Object-Oriented Programming',
        'System Testing', 'Kotlin', 'Angular', 'Flutter', 'Dart', 'React'];

function Skills() {
    const listItems = skills.map((skill,index) =>
        <Col key={index}>
            {skill}
        </Col>
    );
    return (
        <Row xs={1} md={3} className="skills-list">
            {listItems}
        </Row>
    );
}
export default Skills;
