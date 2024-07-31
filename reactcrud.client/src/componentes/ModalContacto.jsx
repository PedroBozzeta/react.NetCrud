
import { useEffect } from "react";
import { useState } from "react";
import { ModalHeader, Form, FormGroup, ModalBody, ModalFooter, Label, Input, Button, Modal } from "reactstrap";


function ModalContacto({ isModalOpen, setMostrarModal, guardarContacto, contacto, setContacto }) {
    
    const defaultContacto = {
        Nombre: '',
        Correo: '',
        Telefono: ''
    }
    const [data, setData] = useState(defaultContacto);
    const actualizarCampo = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        setContacto(
            { ...data, [e.target.name.toLowerCase()]: e.target.value });
            console.log(data)
    }
    const guardarCambios = () => {
        guardarContacto(contacto);
        cerrar();
    }
    const cerrar = () => {
        setMostrarModal(false);
        setData(defaultContacto)
    }
    useEffect(() => {
        console.log("useEffect")
        if (contacto ) {
            setData(contacto)
            console.log(contacto)
        } else {
            setData(defaultContacto)
        }
    }, [contacto])

   
    return (
        <Modal isOpen={isModalOpen}>
            <ModalHeader>{contacto===null?"Nuevo contacto":"Editar Contacto"}</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text" name="Nombre" onChange={actualizarCampo} value={data.nombre}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input type="text" name="Correo" onChange={actualizarCampo} value={data.correo}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input type="text" name="Telefono" onChange={actualizarCampo} value={data.telefono}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={()=>guardarCambios() }>Guardar</Button>
                <Button color="danger" size="sm" onClick={()=>cerrar() }>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalContacto;