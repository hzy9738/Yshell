import {useState} from "react";

const CommonButton = () => {
    const [num, setNum] = useState(0)
    return (
        <>
            <div>{num}</div>
            <button onClick={ ()=> { setNum( num + 1) }} type='button'>点击</button>
        </>
    )
}

export default CommonButton