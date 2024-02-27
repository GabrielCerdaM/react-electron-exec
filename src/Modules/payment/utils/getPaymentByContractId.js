export async function getPaymentByContractId(contractId) {
    const getPayments = await window.api.paymentOperation({
        action: "findByContractId",
        payload: null,
        id: contractId,
    });
    return getPayments;
}