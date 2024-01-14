import React, { useState } from "react";
import { useEffect } from "react";
import { getUser } from "./api";
import useUser from "./useUser";

const Cart = () => {
    // const [user, setUser] = useState("")

    // // call api by using useEffect
    // useEffect(() => {
    //     getUser().then((res) => {
    //         setUser(res.data)
    //     })
    // }, [])

    const { user } = useUser();

    return (
        <div className="title">Header {' '} <span>{user?.name}</span></div>
    )
}

export default Cart;