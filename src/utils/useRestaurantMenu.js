import { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
 
        const data = await fetch(`${MENU_API}${resId}.json`);
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }

        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { resInfo, loading };
}

export default useRestaurantMenu


