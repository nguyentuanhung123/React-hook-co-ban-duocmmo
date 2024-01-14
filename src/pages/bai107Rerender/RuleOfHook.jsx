import React, { useEffect, useState } from "react";

const RuleOfHook = () => {

    const [name, setName] = useState("Mary");

    console.log("render");
    // Sẽ chạy lần đầu ngay khi màn hình được render
    // sẽ chạy lần 2 nếu bấm nút change Name lần 1
    // sẽ chạy lần 3 nếu bấm nút change Name lần 2 do không biết ta đang set state hay re-render

    useEffect(() => {
        console.log("re-render");
        // sẽ chỉ chạy 2 lần do ta chỉ đổi name đúng 1 lần khi click mà không đổi giá trị cũ
    })

    return (
        <>
            <div className="title">RuleOfHook</div>
            <p>{name}</p>
            <button onClick={() => setName("Alex")}>Change Name</button>
        </>
    )
}

export default RuleOfHook;