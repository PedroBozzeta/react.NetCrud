
import { ModalHeader, Form, FormGroup, ModalBody, ModalFooter, Label, Input, Button, Modal } from "reactstrap";

function ModalContacto({ isModalOpen, setMostrarModal, guardarContacto }) {
    return (
        <Modal isOpen={true}>
            <ModalHeader>Nuevo contacto</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    <Input type="submit"></Input>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm">Guardar</Button>
                <Button color="danger" size="sm">Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalContacto;