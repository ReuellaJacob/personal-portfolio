import {Container} from "react-bootstrap";
import '../sass/AboutMe.scss'

function AboutMe() {
    return (
        <div className="about-me">
            <Container>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ol>
                    Things I want in the webpage
                    <li> Progress Scroll Bar:
                        https://css-tricks.com/forums/topic/opera-com-home-page-single-red-line-effect/ </li>
                    <li> Scroll drawing maybe? https://css-tricks.com/scroll-drawing/</li>
                </ol>
            </Container>
        </div>
    );
}

export default AboutMe;
