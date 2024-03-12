import { useEffect, useState } from "react";

const useFormatDate = () => {

    const [date, setDate] = useState(null)

    const formatDate = (timestamp) => {
        try {
            const date = new Date(timestamp);

            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');

            const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}`;

            setDate(formattedDate)
        } catch (error) {
            console.log('error', { error });
            setDate(null)
        }
    };

    useEffect(() => {
        console.log('Component Mounted');
        return () => {
            console.log('Component Desmounted');
        }
    }, [])

    return [date, formatDate];
};

export default useFormatDate;