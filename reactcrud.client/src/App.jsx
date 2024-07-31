import { Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaContacto from "./componentes/TablaContacto";
import { useEffect, useState } from "react";
import ModalContacto from "./componentes/ModalContacto";
const App = () => {

    const [contactos, setContactos] = useState([]);

    const getContactos = async () => {
        const response = await fetch('api/Contacto/Lista');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setContactos(data);
        } else {
            console.log("Error al recibir contactos");
        }
    }

    useEffect(
        () => {
            getContactos();
        }, []
    )
    return (
        <Container>
            <Row className="mt-5">

                <Card>
                    <CardHeader>
                        <h5>Lista de contactos</h5>

                    </CardHeader>
                    <CardBody>
                        <Button size="sm" color="success">Nuevo Contacto
                        </Button>
                        <hr />
                        <TablaContacto data={contactos} />
                    </CardBody>
                </Card>
            </Row>
            <ModalContacto/>
        </Container>
    )
}
export default App;