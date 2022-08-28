import React from "react"

const Button = ({title,onClick, loading}) => {
    if (loading) {
        return (
            <button className='btn btn-primary disabled'>Loading...</button>
        )
    }
    return (
        <button onClick={onClick} className='btn btn-primary'>{title}</button>
    )
}

export default Button