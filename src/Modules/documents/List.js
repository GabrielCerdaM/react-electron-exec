export function List({ docs, handleDelete }) {
  return (
    <section className="bg-gray-300 border border-sky-500 p-3">
      <table className="w-full mx-auto">
        <thead>
          <tr>
            <th className=" text-start">Nombre </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {docs &&
            [...docs].map((doc, index) => {
              return (
                <tr className="border" key={doc.name + "_" + index}>
                  <td className="pl-3">{doc.name}</td>
                  <td className="text-end pr-5">
                    <button onClick={() => handleDelete(index)} type="submit">
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}
