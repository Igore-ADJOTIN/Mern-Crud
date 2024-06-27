import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from '../components/spinner'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'

const ShowBooks = () => {

    const [book, setBook] = useState({})
    const [loaading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://127.0.0.1:5555/books/${id}`)

            .then((res) => {
                setBook(res.data)
                setLoading(false)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'>Books List</h1>

        {
            loaading ? (
                <Spinner />

            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>

                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book._id}</span>
                    </div>

                    
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{book.title}</span>
                    </div>

                    
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>
                    </div>

                    
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Year</span>
                        <span>{book.publishYear}</span>
                    </div>


                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Created at</span>
                        <span>{new Date(book.createdAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                    
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Updated at</span>
                        <span>{new Date(book.updatedAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                    
                </div>
            )
        }

    </div>
  )
}

export default ShowBooks