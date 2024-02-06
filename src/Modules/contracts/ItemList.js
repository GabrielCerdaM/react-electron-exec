import { Link } from "react-router-dom";

export default function ItemList({ contract }) {
  const { dataValues } = contract;

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
          <button>Eliminar</button>
        </div>
        {/* <p>{JSON.stringify(contract)}</p> */}
      </div>
    </>
  );
}
