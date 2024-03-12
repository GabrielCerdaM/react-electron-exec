import { Link, useNavigate } from "react-router-dom";
import { deleteById } from "./utils/deleteById";
import useFormatDate from "../../Components/hooks/useFormatDate";
import { useEffect } from "react";

export default function Item({ contract }) {
  const navigate = useNavigate();
  const [date, formatDate] = useFormatDate();

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
      navigate("/contract");
    }
  };
  useEffect(() => {
  formatDate(contract.createdAt)
    console.log('Mounted');
    return () => {
      console.log('desmounted');
    }
  }, [])
  return (
    <>
      <div className="bg-emerald-200 rounded p-5 m-5">
        <div className="flex justify-between text-center">
          <p>
            N Factura:
            <strong> {contract.bill}</strong>
          </p>
          <p>
            Fecha:
            <strong> {date}</strong>
          </p>
        </div>
        <div className="flex pt-5 justify-around gap-5">
          <div className="">
            <p>
              Nombre cliente:
              <strong> {contract.name}</strong>
            </p>
            <p>
              Telefono:
              <strong> {contract.phone}</strong>
            </p>
            <p>
              Direccion:
              <strong> {contract.address}</strong>
            </p>
            <p>
              parentezco:
              <strong> {contract.kindship}</strong>
            </p>
          </div>
          <div>
            <p>
              Nombre fallecido: <strong>{contract.nameDeceased}</strong>
            </p>
            <p>
              Rut fallecido: <strong>{contract.rutDeceased}</strong>
            </p>
          </div>
        </div>
        <div className="text-center pt-5">
          <div>
            <p>
              Velatorio:
              <strong> {contract.wakeAddress}</strong>
            </p>
            <p>
              Cementerio:
              <strong> {contract.cementery}</strong>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 pt-5">
          <Link to={`/contract/${contract.id}`}>Ver Detalle</Link>
          <Link to={`/document/${contract.id}`}>Ver Documentos</Link>
          <Link to={`/payment/${contract.id}`}>Ver Pagos</Link>
          <form onSubmit={(event) => handleSubmit(event, contract.id)}>
            <button type="submit">Eliminar</button>
          </form>
        </div>
        {/* <p>{JSON.stringify(contract)}</p> */}
      </div>
    </>
  );
}
