import { useEffect, useState } from "react";

const useFormatDate = (timestamp) => {

    const [date, setDate] = useState(null)

    useEffect(() => {
        const formatDate = async () => {
            try {
                const dateObj = new Date(timestamp);
                const formattedDate = dateObj.toISOString().slice(0, 10);
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