export default function Item({ payload, handleDelete }) {
    const { id, type, amount, ContractId } = payload;
    const handleEdit = () => { }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
    }

    return (<>
        <div className="flex justify-between">
            <p>{id}</p>
            <p>{type}</p>
            <p>{amount}</p>
            <div className="flex gap-3">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    </>)
}