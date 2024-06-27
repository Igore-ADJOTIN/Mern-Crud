import React, {useState } from 'react'
import axios from "axios"
import Spinner from '../components/spinner'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from "notistack"


const CreateBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setpublishYear] = useState('')
    const [loaading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const handleSaveBook = ()=>{

        const data={
            title,
            author,
            publishYear,
        }
        setLoading(true)
        axios
            .post('http://127.0.0.1:5555/books/',data)
            .then(()=>{
                setLoading(false)
                enqueueSnackbar('Book Created successfully', { variant: 'success' });
                navigate('/')

            })
            .catch((error) => {
                setLoading(false)
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error)
            })
    }

  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'>Add a Book</h1>
        {loaading? <Spinner /> : ''}

        <div className='flex flex-col border-2 w-[600px] p-4 mx-auto border-sky-400 rounded-xl'>
            <div className='my-4'>
                <label className="text-xl mr-4 text-gray-500">Title</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                
                />
            </div>

            <div className='my-4'>
                <label className="text-xl mr-4 text-gray-500">Author</label>
                <input 
                    type="text" 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                
                />
            </div>

            <div className='my-4'>
                <label className="text-xl mr-4 text-gray-500">Publish year</label>
                <input 
                    type="number" 
                    value={publishYear}
                    onChange={(e)=>setpublishYear(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                
                />
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                Save
            </button>
        </div>
    </div>
  )
}

export default CreateBooks