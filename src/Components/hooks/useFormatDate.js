import { useEffect, useState } from "react";

const useFormatDate = (timestamp) => {

    const [date, setDate] = useState(null)

    useEffect(() => {
        const formatDate = async () => {
            try {
                console.log({ timestamp });
                const date = new Date(timestamp);
                // console.log({dateObj});
                // const formattedDate = dateObj.toISOString().slice(0, 16).toLowerCase().replace('t', " ");

                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');

                const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

                setDate(formattedDate)
            } catch (error) {
                return date
            }
        };


        formatDate(date)
    }, [timestamp])

    return date;
};

export default useFormatDate;