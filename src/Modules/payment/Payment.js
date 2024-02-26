import { Link, useParams } from "react-router-dom";
import usePayment from "../../Components/hooks/usePayment";
import { useEffect } from "react";
import Item from "./Item";
import useElectronDialog from "../../Components/hooks/useElectronDialog";

export default function Payment() {
    const { contractId } = useParams();
    const { confirmed, showDialog } = useElectronDialog()
    // const contractId = 1;
    const { payments, getPaymentsByContractId, removeById } = usePayment();
    // let payments = [];

    const handleDelete = async (id) => {
        const response = await showDialog({
            dialogType: 'showMessageBoxSync', dialogConfig: {
                message: "Estas seguro que deseas eliminar este pago?",
                type: 'question',
                tile: 'Eliminando pago',
                buttons:["Cancelar","Eliminar"],
                defaultId: 0,

            }
        });
        console.log({ response });
        if (response) {
            console.log('handleDelete', id);
            removeById(id)
        }
    }

    useEffect(() => {
        getPaymentsByContractId(contractId)
    }, [contractId])
    return (
        <>
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border px-6">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                    <div className="flex flex-col justify-between items-center gap-8 mb-4 md:flex-row">
                        <div className="w-full">
                            <Link
                                className="block text-white bg-blue-700 rounded p-3 text-center"
                                to="/payment"
                            >
                                Nuevo Pago
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-6 mt-3">
                {payments && payments.length > 0 ? (
                    payments.map((payment) => (
                        <Item key={payment.id} payload={payment} handleDelete={() => handleDelete(payment.id)} />
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
