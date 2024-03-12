import { useEffect } from "react";
import useFormatDate from "../../Components/hooks/useFormatDate";

export default function Item({ payload, handleDelete }) {
    const { id, type, amount,createdAt, ContractId } = payload;
    const [date,formatDate]=useFormatDate();
    const handleEdit = () => { }
    useEffect(() => {
        formatDate(createdAt)
    },[])
    return (<>
        <div className="flex justify-evenly">
            <p>{date}</p>
            <p>{type}</p>
            <p>{new Intl.NumberFormat('es-cl').format(amount)}</p>
            <div className="flex gap-3">
                {/* <button onClick={handleEdit}>Edit</button> */}
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    </>)
}