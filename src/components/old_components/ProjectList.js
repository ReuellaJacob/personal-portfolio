import Project from "./Project";
import {Row, Col, Container} from "react-bootstrap";

function ProjectList() {
    // todo: Change row to flex
    return (
        <Container className="project-grid">
            <Row xs={1} md={4}>
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                        <Project/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProjectList
