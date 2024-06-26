import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

function Projects() {
  return (
    <>
        <NavBar />
        <div id='projectsSection'>
            <h2>Projects I have Done</h2>
            <div id='projects'>
                <Card style={{ width: '24rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" />
                    <Card.Body>
                        <Card.Title>Local Dish Corner</Card.Title>
                        <Card.Text>
                            Providing a marketing solution to increase visibility for local food vendors to their customers.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" />
                    <Card.Body>
                        <Card.Title>KeepTabs</Card.Title>
                        <Card.Text>
                            An application that helps users track their time efficiently and improve their productivity.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" />
                    <Card.Body>
                        <Card.Title>Gen-Z Dictionary</Card.Title>
                        <Card.Text>
                            An application with the latest slang and words used by the Gen-Z.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Projects;