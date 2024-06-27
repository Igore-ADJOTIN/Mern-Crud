import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link to={destination} className='w-fit bg-sky-800 text-white rounded-lg py-1 px-4'>
                <BsArrowLeft className='text-2xl'/>
            </Link>
        </div>
    )
}

export default BackButton