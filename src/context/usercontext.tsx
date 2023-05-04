import React, { createContext, useState } from 'react';

interface UserI{
    name: string,
    email: string
}
export type userContent =  {
    user: UserI,
    setUserVal: (value: UserI) => void
}
export const userContext = createContext<userContent | null>(null);

export const UserContextProvider = (props: { children : any | null | undefined }) => {

    const [user, setUser] = useState({ name: 'Kavya',email:'jankavya@gmail.com' });

    const setUserVal = (value:UserI) => {
        setUser(value)
    }
    return (
        <userContext.Provider value={{ user, setUserVal }}>
            {props.children}
        </userContext.Provider>
    )
}
