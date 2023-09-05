import React, { useContext } from "react";
import TaskList from "../TaskList/TaskList";
import styles from "./Home.module.scss";
import { TaskContext } from "../context";
interface Props {}

const Home: React.FC<Props> = ({}) => {
    const { activeCounter } = useContext(TaskContext);
    return (
        <>
            <div className={styles.header}>
                <p>Today</p>
                <div className={styles.header__nav}>
                    <img
                        className={styles.header__nav__img}
                        src="/add.svg"
                        alt="addTask"
                        height={20}
                    />
                    <span className={styles.header__nav__onActive}>
                        {activeCounter}
                    </span>
                </div>
            </div>
            <TaskList></TaskList>
        </>
    );
};

export default Home;
