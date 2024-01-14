import React, { useState } from "react";
import { useEffect } from "react";
import { getUser } from "./api";

const useUser = () => {

    const [user, setUser] = useState("")

    // call api by using useEffect
    useEffect(() => {
        getUser().then((res) => {
            setUser(res.data)
        })
    }, [])

    return { user }
}

export default useUser;