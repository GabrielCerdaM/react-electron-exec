import { Link } from "react-router-dom";
import { deleteById } from "./utils/deleteById";
export default function Item({ contract }) {
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
      deleteItem(id);
    }
  };
  return (
    <>
      <div className="bg-emerald-200 rounded p-5 m-5">
        <div className="">
          <div className="">
            <h1>
              {dataValues.id} Nombre cliente:{" "}
              <strong> {dataValues.name}</strong>
            </h1>
          </div>
        </div>
        {/* <hr></hr> */}
        {/* <p>_________________________________</p> */}
        <div>
          <div>
            <h1>
              Nombre fallecido: <strong>{dataValues.nameDeceased}</strong>
            </h1>
            <p>
              Rut fallecido: <strong>{dataValues.rutDeceased}</strong>
            </p>
          </div>
          <div>
            <h1>
              Velatorio:
              <strong> {dataValues.wakeAddress}</strong>
            </h1>
            <p>
              Cementerio:
              <strong> {dataValues.cementery}</strong>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 pt-3">
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
