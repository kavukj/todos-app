import React, { createContext, useState } from 'react';

interface UserI{
    name: any,
    email: any
}
export type userContent =  {
    currentUser: UserI,
    setUserVal: (value: UserI) => void
}
export const userContext = createContext<userContent | null>(null);

export const UserContextProvider = (props: { children : any | null | undefined }) => {

    const [currentUser, setUser] = useState({ name: '',email:'' });

    const setUserVal = (value:UserI) => {
        setUser(value)
    }
    return (
        <userContext.Provider value={{ currentUser, setUserVal }}>
            {props.children}
        </userContext.Provider>
    )
}
