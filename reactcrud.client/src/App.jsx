import { Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaContacto from "./componentes/TablaContacto";
import { useEffect, useState } from "react";
import ModalContacto from "./componentes/ModalContacto";
const App = () => {
    const [contactos, setContactos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [contacto, setContacto] = useState(null);

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

    const guardarContacto = async (contacto) => {
        console.log(contacto)
        if (contacto.Id === 0) {
            const response = await fetch('api/Contacto/Crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(contacto)
            });
            if (response.ok) {
                setMostrarModal(false);
                getContactos();
            } else {
                console.log("Error al guardar contactos");
            }
        } else {
            const response = await fetch('api/Contacto/Editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(contacto)
            });
            if (response.ok) {
                setMostrarModal(false);
                getContactos();
            } else {
                console.log("Error al edotar contacto");
            }
        }
    }
    const eliminarContacto =async (id) => {
        if (id !== 0) {
            const response = await fetch('api/Contacto/Eliminar/'+id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            if (response.ok) {
                getContactos();
            } else {
                console.log("Error al eliminar contactos");
            }
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
                        <Button size="sm" color="success" onClick={() => {
                            setContacto(null);
                            setMostrarModal(true);
                        }}>Nuevo Contacto
                        </Button>
                        <hr />
                        <TablaContacto data={contactos} setMostrarModal={setMostrarModal} setContacto={setContacto} eliminarContacto={eliminarContacto} />
                    </CardBody>
                </Card>
            </Row>
            <ModalContacto isModalOpen={mostrarModal} setMostrarModal={setMostrarModal} guardarContacto={guardarContacto} contacto={contacto} setContacto={setContacto} />
        </Container>
    )
}
export default App;