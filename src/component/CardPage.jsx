import React from 'react'
import { useParams } from 'react-router-dom'

const CardPage = () => {
    const { id } = useParams()
    return (
        <div>CardPage {id}</div>
    )
}

export default CardPage