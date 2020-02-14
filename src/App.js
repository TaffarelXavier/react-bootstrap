import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarraNavegacao from './componentes/AppBar';
import AlertDismissible from './componentes/AlertDismissible';
import RenderData from './componentes/RenderData/';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        function buscarDados() {
            fetch('https://api.negaodocinda.com.br/users')
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    setUsers(result);
                });
        }
        buscarDados();
    }, []);

    return (
        <Container>
            <BarraNavegacao />
            <Row style={{ marginTop: 70 }}>
                <Col xs={12} md={12} lg={12} sm={12}>
                    <AlertDismissible />
                </Col>
            </Row>
            <Row>
                <Col>
                <RenderData data={users} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
