import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Unauthorized() {
    const navigate= useNavigate();
    const goBack=() => navigate(-1)
    return (
        <>
            <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                <Card style={{ backgroundColor: 'skyblue' }} className="text-center">
                    <Card.Body>
                    <Card.Title>Unauthorized</Card.Title>
                    <Card.Text>You do not have access to the requested page.</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <div className='flexGrow'>
                <button onClick={goBack}>Go back</button>
            </div>
            </Container>
        </>
    );
}

export default Unauthorized;