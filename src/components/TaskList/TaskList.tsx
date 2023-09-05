import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Task from "./components/Task/Task";
import styles from "./TaskList.module.scss";
import { TaskContext } from "../context";
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const { setActiveCounter } = useContext(TaskContext);
    const [dataTask, setDataTask] = useState<Todo[] | null>(null);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get<Todo[]>(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                if (response.data) {
                    setDataTask(response.data);
                    const completedTasks = response.data.filter(
                        (task) => task.completed
                    );
                    console.log(completedTasks.length);

                    setActiveCounter(completedTasks.length);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchApi();
    }, []);

    return (
        <div className={styles.taskList}>
            {dataTask ? (
                <ul className={styles.taskList__container}>
                    {dataTask.map((task) => (
                        <li className={styles.taskList__item} key={task.id}>
                            <Task
                                title={task.title}
                                completed={task.completed}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TaskList;
