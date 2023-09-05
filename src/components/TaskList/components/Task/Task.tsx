import React from "react";
import styles from "./Task.module.scss";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";
interface Props {
    title: string;
    completed: boolean;
}

const Task: React.FC<Props> = ({ title, completed }) => {
    const fakeDescription = faker.lorem.sentence();
    const tags = [faker.lorem.word(), faker.lorem.word()];
    const startDate = faker.date.past();
    const endDate = faker.date.future();

    const formattedStartDate = format(startDate, "MMM d, h:mm a");
    const formattedEndDate = format(endDate, "MMM d, h:mm a");
    return (
        <div className={styles.task}>
            <div className={styles.task__header}>
                <span className={styles.task__header__completed}>
                    {completed ? "✓" : ""}
                </span>
                <p className={styles.task__header__title}>{title}</p>
            </div>
            {fakeDescription && tags ? (
                <div className={styles.task__info}>
                    <div className={styles.task__info__date}>
                        <span>{formattedStartDate}</span>
                        <span> {formattedEndDate}</span>
                    </div>
                    <div className={styles.task__info__description}>
                        <p className={styles.task__info__description__text}>
                            {fakeDescription}
                        </p>
                    </div>
                    <div className={styles.task__info__footer}>
                        <p className={styles.task__info__footer__tags}>
                            {tags[0]}
                        </p>
                        <p className={styles.task__info__footer__tags}>
                            {tags[1]}
                        </p>
                        <img
                            className={styles.task__info__footer__img}
                            src="../../../../public/img.png"
                            alt=""
                            height={24}
                            width={24}
                        />
                    </div>
                </div>
            ) : (
                <p>Loading description...</p>
            )}
        </div>
    );
};

export default Task;
