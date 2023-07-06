import React, {useEffect, useState} from "react";


function Header()
{
    const[data, setData] = useState([{}])

    useEffect(()=> {
        fetch("http://localhost:5000/data").then(
            res => res.json()
        ).then(
            result => {
                setData(result)
            }
        )
    }, [])
    
    return (
        <div className="header">
            <h2>{data.value}</h2>
        </div>
    )
}

export default Header;