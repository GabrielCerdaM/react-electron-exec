import { Link, useLoaderData } from "react-router-dom";
import Item from "./Item";
import { useState } from "react";
import { find } from "./utils/find";

export default function List() {
  const { contracts } = useLoaderData();
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border px-6">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
          <div className="flex flex-col justify-between items-center gap-8 mb-4 md:flex-row">
            <div>
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Lista de contratos
              </h5>
              <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Aqui encontraras los ultimos contratos registrados
              </p>
            </div>
            {/* <div className="w-full md:w-auto">
              <form className="flex flex-row" onSubmit={handleSubmit}>
                <input
                  className={`p-3 mx-3 border-gray-500 appearance-none block bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white`}
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Buscador"
                />
                <button
                  type="submit"
                  className="px-5 block text-white bg-blue-700 rounded text-center"
                >Search</button>
              </form>
            </div> */}
            <div className="w-full md:w-auto">
              <Link
                className="block text-white bg-blue-700 rounded p-3 text-center"
                to="/contract"
              >
                Nuevo Contrato
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-6 mt-3">
        {contracts.length > 0 ? (
          contracts.map((contract) => (
            <Item key={contract.dataValues.id} contract={contract} />
          ))
        ) : (
          <>
            <p>No hay registros</p>
          </>
        )}
      </div>
    </>
  );
}
