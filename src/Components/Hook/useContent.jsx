import { useEffect, useState } from "react";

export const useContent = () => {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    });

    useEffect(() => {
        let url = `https://d23fc4145835cd1d.mokky.dev/tasks`;

        const loadData = async () => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tasks)
            })
            const data = await res.json()
            console.log(data)
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));

        // loadData()
    }, [tasks])

    return { text, setText, tasks, setTasks }
}

