import { useEffect } from "react";
import { useContent } from "./useContent";

export const useData = () => {
    const state = useContent();

    useEffect(() => {
        let url = `https://d23fc4145835cd1d.mokky.dev/tasks`;

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json()
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()
    }, [state.tasks])
}
