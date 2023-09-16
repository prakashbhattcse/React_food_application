import React from 'react'
import { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { resInfo, loading };
}

export default useRestaurantMenu
