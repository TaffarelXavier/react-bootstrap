import React, {  useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>
                    <h1>Cadastros realizados</h1>
                </Alert.Heading>
                <p>
                    Abaixo, todos os cadastros realizados por meio do site https://negaodocinda.com.br
                </p>
                <hr />
                {/* <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me ya'll!
                    </Button>
                </div> */}
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

export default AlertDismissible;