import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        function buscarDados() {
            fetch('http://api.negaodocinda.com.br/users')
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
            <Row>
                <Col>
                    <h1>Cadastros realizados</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <table border="" className="table" style={{ width: '100%', borderWidth: 1, borderColor: '#fff' }}>
                        <thead>
                            {user.length > 0 ? (
                                <tr>
                                    <th>NOME</th>
                                    <th>EMAIL</th>
                                    <th>WHATSAPP</th>
                                </tr>
                            ) : (
                                <tr>
                                    <th>NOME</th>
                                    <th>EMAIL</th>
                                    <th>WHATSAPP</th>
                                </tr>
                            )}
                        </thead>

                        <tbody>
                            {user.length > 0 ? (
                                <>
                                    {user.map(({ id, username, email, whatsapp }, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{username}</td>
                                                <td>{email}</td>
                                                <td>{whatsapp}</td>
                                            </tr>
                                        );
                                    })}
                                </>
                            ) : (
                                <tr>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
