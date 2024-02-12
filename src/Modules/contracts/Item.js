import { Link, useNavigate } from "react-router-dom";
import { deleteById } from "./utils/deleteById";
export default function Item({ contract }) {
  const navigate = useNavigate();

  const { dataValues } = contract;

  const deleteItem = async (id) => {
    const resp = await deleteById(id);
    console.log({ resp });
    if (resp === 1) {
    }
    return resp;
  };

  const handleSubmit = async (event, id) => {
    const dialogConfig = {
      message:
        "Desea eliminar este registro y su informacion (abonos - documentos relacionados)?",
      type: "warning",
      buttons: ["Cancelar", "Eliminar"],
      defaultId: 0,
      title: "Eliminar contrato",
      detail: "Si eliminas este registro perderas la informacion del mismo",
      cancelId: 0,
    };
    const confirmed = await window.api.dialog(
      "showMessageBoxSync",
      dialogConfig
    );
    console.log({ confirmed });
    if (confirmed === 1) {
      await deleteItem(id);
      navigate('/')
    }
  };
  return (
    <>
      <div className="bg-emerald-200 rounded p-5 m-5">
        <div className="text-center">
          <p>
            N Factura:
            <strong> {dataValues.bill}</strong>
          </p>
        </div>
        <div className="flex pt-5 justify-around gap-5">
          <div className="">
            <p>
              Nombre cliente:
              <strong> {dataValues.name}</strong>
            </p>
            <p>
              Telefono:
              <strong> {dataValues.phone}</strong>
            </p>
            <p>
              Direccion:
              <strong> {dataValues.address}</strong>
            </p>
            <p>
              parentezco:
              <strong> {dataValues.kindship}</strong>
            </p>
          </div>
          <div>
            <p>
              Nombre fallecido: <strong>{dataValues.nameDeceased}</strong>
            </p>
            <p>
              Rut fallecido: <strong>{dataValues.rutDeceased}</strong>
            </p>
          </div>
        </div>
        <div className="text-center pt-5">
          <div>
            <p>
              Velatorio:
              <strong> {dataValues.wakeAddress}</strong>
            </p>
            <p>
              Cementerio:
              <strong> {dataValues.cementery}</strong>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 pt-5">
          <Link to={`/contract/${dataValues.id}`}>Ver</Link>
          <form onSubmit={(event) => handleSubmit(event, dataValues.id)}>
            <button type="submit">Eliminar</button>
          </form>
        </div>
        {/* <p>{JSON.stringify(contract)}</p> */}
      </div>
    </>
  );
}
