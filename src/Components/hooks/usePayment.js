// import { findByContractId } from "../../Modules/documents/utils/findByContractId";
const { useState } = require("react");
// const useElectronDialog = require("./useElectronDialog");

const usePayment = () => {
    const [payments, setPayments] = useState(null);
    // const { confirm, showDialog } = useElectronDialog();

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
