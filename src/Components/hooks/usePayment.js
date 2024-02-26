// import { findByContractId } from "../../Modules/documents/utils/findByContractId";
const { useState } = require("react");

const usePayment = () => {
    const [payments, setPayments] = useState(null);

    const removeById = async (paymentId) => {
        try {
            const response = await window.api.paymentOperation(
                {
                    action: 'delete',
                    payload: null,
                    id: paymentId
                }
            );
            setPayments((data) => {
                return data.filter(p => p.id !== response)
            })
            // if(response == 0){
            //     throw new Error('Error al eliminar')
            // }
            // console.log({ response });
            // let newArray = [...payments];
            // newArray.filter(p =>
            //     p.id !== response
            // )
            // console.log({ newArray });
            // setPayments(newArray)
        } catch (error) {
            console.log({ error });
        }
    }

    const getPaymentsByContractId = async (contractId) => {
        if (contractId) {
            const getPayments = await window.api.paymentOperation({
                action: "findByContractId",
                payload: null,
                id: contractId,
            });
            if (getPayments && getPayments.length > 0) {
                setPayments(getPayments);
            }
        }
    };

    return { payments, removeById, getPaymentsByContractId };
};

export default usePayment;
