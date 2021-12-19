import {Card} from "react-bootstrap";
import '../sass/AboutMe.scss'

function Project() {
    return (
        <div className="project">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Project Name</Card.Title>
                    <Card.Text>
                        Project Description
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;
