import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";
import useElectronDialog from "../../Components/hooks/useElectronDialog";
import { findById } from "./../contracts/utils/findById";
import { getPaymentByContractId } from "./utils/getPaymentByContractId";
import { create } from "./utils/create";
export default function Payment() {

  const { contractId } = useParams();
  const { showDialog } = useElectronDialog();

  const [inputs, setInputs] = useState(null);

  const [contract, setContract] = useState(null);
  const [payments, setPayments] = useState(null);
  const [pending, setPending] = useState(0);

  const getContracts = async (contractId) => {
    return await findById(contractId);
    // console.log({ resp });
    // if (resp) {
    //   const { dataValues } = resp;
    //   setContract(dataValues);
    // }
  };

  const getPayment = async (contractId) => {
    return await getPaymentByContractId(contractId);
    // setPayments(getPayments);
    // return;
  };

  useEffect(() => {
    const getData = async () => {
      const getContract = await getContracts(contractId);
      const getPayments = await getPayment(contractId);
      console.log({ getContract, getPayments });
      if (getContract) {
        const { dataValues } = getContract;
        setContract(dataValues)
      }
      if (getPayments) {
        setPayments(getPayments)
      }
    }
    getData();
  }, [contractId]);

  useEffect(() => {
    const calculatePendingPrice = () => {
      let price;
      if (contract) {
        price = contract.price;
        if (contract.benefitRequest) {
          price = price - contract.amountBenefit;
        }
        if (payments && payments.length > 0) {
          payments.map((p) => {
            price = price - p.amount;
          });
        }
      }

      setPending(price)
    };
    calculatePendingPrice();
  }, [contract, payments])

  // useEffect(() => {
  //   calculatePendingPrice();
  // }, [payments])

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    // handleSubmit(event);
  };

  const handleDelete = async (id) => {

    const confirmed = await showDialog({
      dialogType: "showMessageBoxSync",
      dialogConfig: {
        message: "Estas seguro que deseas eliminar este pago?",
        type: "question",
        tile: "Eliminando pago",
        buttons: ["Cancelar", "Eliminar"],
        defaultId: 0,
      },
    });

    if (confirmed) {
      const response = await window.api.paymentOperation({
        action: "delete",
        payload: null,
        id,
      });
      console.log({ response });
      if (response) {
        setPayments((data) => {
          return data.filter((p) => p.id !== response);
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(`price: ${contract.price} pending: ${pending} ${contract.price - inputs.amount}`);

      if (!inputs || !inputs.type || !inputs.amount) {
        let config = {
          dialogType: "showMessageBoxSync",
          dialogConfig: {
            message: "Es necesario ingresar tipo de pago y/o monto",
            type: "warning",
            tile: "Agregar pago",
            buttons: ["Aceptar"],
          },
        };
        if (contract.price < pending) {
          config = {
            dialogType: "showMessageBoxSync",
            dialogConfig: {
              message: "El monto ingresado supera el total permitido",
              type: "warning",
              tile: "El monto ingresado supera el total permitido, el monto sera reemplazado por el maximo permitido",
              buttons: ["Aceptar"],
            },
          };
        }
        showDialog(config);
        return;
      }

      console.log({ inputs, contractId })

      const resp = create(inputs, contractId);
      console.log({ resp });
      if (resp) {
        setPayments(p => console.log(p))
        console.log({ payments });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border px-6">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
          <div className="flex flex-col justify-between items-center gap-8 mb-4 md:flex-row">
            <div className="w-full">
              <form onSubmit={handleSubmit}>
                <select
                  name="type"
                  onChange={handleChange}
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                >
                  <option
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    value={null}
                  >
                    Tipo de pago
                  </option>
                  <option
                    value={`Efectivo`}
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  >
                    Efectivo
                  </option>
                  <option
                    value={`Debito / Credito`}
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  >
                    Debito/Credito
                  </option>
                  <option
                    value={`Transferencia`}
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  >
                    Transferencia
                  </option>
                </select>
                <input
                  name="amount"
                  onChange={handleChange}
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  type="number"
                  placeholder="Monto"
                />
                <button
                  type="submit"
                  className="block text-white bg-blue-700 rounded p-3 text-center"
                >
                  Nuevo Pago
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-3 w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-6 mt-3">
        {payments && payments.length > 0 ? (
          <>
            {payments.map((payment) => (
              <Item
                key={payment.id}
                payload={payment}
                handleDelete={() => handleDelete(payment.id)}
              />
            ))}
          </>
        ) : (
          <>
            <p>Aun no se registran pagos</p>
          </>
        )}
        {contract ? <>
          <div className="flex flex-col text-center gap-5 p-6 my-5 shadow-xl border-black border-solid border rounded-xl">
            <div>
              <p>Cuota mortuoria: {contract.typeBenefit}</p>
              <p>
                {new Intl.NumberFormat("es-cl").format(
                  contract.amountBenefit
                )}
              </p>
              {contract.benefitRequest ? (
                <p className="text-green-500">Cobrada</p>
              ) : (
                <p className="text-red-500">Pendinte cobro</p>
              )}
            </div>
            <div>
              <p>
                Pendiente de pago:{" "}
                {pending ? new Intl.NumberFormat("es-cl").format(pending) : new Intl.NumberFormat("es-cl").format(contract.price)}{" "}
              </p>
            </div>
          </div>
        </> : <></>}
      </div>
    </>
  );
}
