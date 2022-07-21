import React, {useState, useEffect} from 'react'
import getUserApi from '../api/userApi'

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState()
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider >
}

export  {UserProvider, UserContext}