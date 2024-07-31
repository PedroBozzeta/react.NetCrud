
import { Table } from "reactstrap"
function TablaContacto({ data }) {
    /*const editarContacto = async () => {
        const response
    }*/

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length < 1 ? (
                        <tr>
                            <td>Sin registros</td>
                        </tr>
                    ) :
                        (data.map(x => (
                            <tr key={x.id} className="align-items-center">
                                <td>{x.nombre}</td>
                                <td>{x.correo}</td>
                                <td>{x.telefono}</td>
                                <td>
                                    <button type="button" className="btn btn-primary mx-1">Editar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        )))
                }
            </tbody>
        </Table>
    );
}

export default TablaContacto;