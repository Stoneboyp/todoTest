import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
type TaskContextType = {
    activeCounter: number;
    setActiveCounter: Dispatch<SetStateAction<number>>;
};
export const TaskContext = createContext<TaskContextType>({
    activeCounter: 0,
    setActiveCounter: () => {},
});
type TaskContextProviderProps = {
    children: ReactNode;
};
export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [activeCounter, setActiveCounter] = useState(0);
    return (
        <TaskContext.Provider value={{ activeCounter, setActiveCounter }}>
            {children}
        </TaskContext.Provider>
    );
};
