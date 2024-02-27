import { useParams } from "react-router-dom";
import usePayment from "../../Components/hooks/usePayment";
import useContract from "../../Components/hooks/useContract";
import { useEffect, useState } from "react";
import Item from "./Item";
import useElectronDialog from "../../Components/hooks/useElectronDialog";

export default function Payment() {
    const { contractId } = useParams();
    const { showDialog } = useElectronDialog()
    const { payments, create, getPaymentsByContractId, removeById } = usePayment();
    const { contracts, getContractById } = useContract()

    const [inputs, setInputs] = useState(null)

    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleDelete = async (id) => {
        const response = await showDialog({
            dialogType: 'showMessageBoxSync', dialogConfig: {
                message: "Estas seguro que deseas eliminar este pago?",
                type: 'question',
                tile: 'Eliminando pago',
                buttons: ["Cancelar", "Eliminar"],
                defaultId: 0,

            }
        });
        console.log({ response });
        if (response) {
            console.log('handleDelete', id);
            removeById(id)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        create(inputs, contractId);
    }

    useEffect(() => {
        getPaymentsByContractId(contractId)
        getContractById(contractId);
    }, [contractId])
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
                                    >Tipo de pago</option>
                                    <option
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    >Efectivo</option>
                                    <option
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    >Debito/Credito</option>
                                    <option
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    >Transferencia</option>
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
                            <Item key={payment.id} payload={payment} handleDelete={() => handleDelete(payment.id)} />
                        ))}
                        <div className="flex m-auto gap-12 p-6 my-5 shadow-xl border-black border-solid border rounded-xl">
                            <p>Cuota mortuoria: {contracts.typeBenefit}</p>
                            <p>{new Intl.NumberFormat('es-es').format(contracts.amountBenefit)}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <p>No hay registros</p>
                    </>
                )}
            </div>
        </>
    );
}
