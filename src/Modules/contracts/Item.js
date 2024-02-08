import { Link } from "react-router-dom";
import { deleteById } from "./utils/deleteById";

export default function Item({ contract }) {
  const { dataValues } = contract;

<<<<<<< Updated upstream
  const deleteItem = async (id) => {
    const resp = await deleteById(id);
=======
  const id = parseInt(contractId);

  const getContract = async (id) => {
    return await findById(id);
  };

  const [inputs, setInputs] = useState({
    rut: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    kindship: "",
    rutDeceased: "",
    nameDeceased: "",
    dateDeceased: "",
    typeBenefit: "",
    amountBenefit: "",
    wakeAddress: "",
    cementery: "",
  });

  useEffect(() => {
    const fetchContract = async () => {
      const contract = await getContract(id);
      const { dataValues } = contract;
      setInputs((values) => ({ ...values, ...dataValues }));
    };
    fetchContract();
    return () => {};
  }, [id]);

  const validationRules = {
    rut: {
      required: true,
      regex: /^[0-9]{7,8}-[0-9Kk]$/, // Example regex for a Chilean RUT
    },
    name: {
      required: true,
      minLength: 2,
    },
    phone: {
      required: true,
      regex: /^[0-9]{9}$/, // Example regex for a 9-digit phone number
    },
    address: {
      required: true,
    },
    email: {
      required: false,
      email: true, // You can use a more complex email validation regex here
      // regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    kindship: {
      required: true,
      minLength: 2,
    },
    rutDeceased: {
      required: true,
      regex: /^[0-9]{7,8}-[0-9Kk]$/, // Example regex for a Chilean RUT
    },
    nameDeceased: {
      required: true,
    },
    dateDeceased: {
      required: true,
      regex: /^\d{4}-\d{2}-\d{2}$/,
      date: true, // You can implement date validation logic here
    },
    typeBenefit: {
      required: true,
    },
    amountBenefit: {
      required: false,
      numeric: true, // You can implement numeric validation logic here
    },
    wakeAddress: {
      required: false,
    },
    cementery: {
      required: false,
    },
  };

  const mock = {
    rut: "19.412.216-0",
    name: "Nombre de prueba",
    phone: "999999999",
    address: "direccion falsa",
    email: "correo@email.cl",
    kindship: "parentezco",
    rutDeceased: "1111111-1",
    nameDeceased: "nombre",
    dateDeceased: "1990-12-12",
    typeBenefit: "AFP",
    amountBenefit: "999999",
    wakeAddress: "Direccion falsa",
    cementery: "Direccion falsa",
  };

  const [errors, setErrors] = useState({
    rut: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    kindship: "",
    rutDeceased: "",
    nameDeceased: "",
    dateDeceased: "",
    typeBenefit: "",
    amountBenefit: "",
    wakeAddress: "",
    cementery: "",
  });

  const formatRut = (rut) => {
    // Remove any existing dots and hyphen
    const cleanRut = rut.replace(/[\.-]/g, "");

    // Split into number and check digit
    const numberPart = cleanRut.slice(0, -1);
    const checkDigit = cleanRut.slice(-1);

    // Add dots to the number part
    const formattedNumberPart = numberPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

    // Combine the formatted number part and check digit
    const formattedRut = `${formattedNumberPart}-${checkDigit}`;

    return formattedRut;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "rut" || name === "rutDeceased") {
      value = formatRut(event.target.value);
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const errors = validateForm(inputs);
    // if (errors) {
    //   setErrors(errors);
    //   console.log({ errors });
    //   return;
    // }
    const resp = await window.api.contractOperation({
      action: "update",
      payload: inputs,
      id: inputs.id,
    });
>>>>>>> Stashed changes
    console.log({ resp });
    return resp
  }

  const handleSubmit = (id) => {
    deleteItem(id)
  }
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
          <form onSubmit={() => handleSubmit(dataValues.id)}>
            <button type="submit">Eliminar</button>
          </form>
        </div>
        {/* <p>{JSON.stringify(contract)}</p> */}
      </div>
    </>
  );
}
