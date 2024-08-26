import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const phone = "+1 234567890";
    const name = "Jitendriya Meher";

    return (
        <Context.Provider
        value={
            {
                phone,
                name
            }
        }
        >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;