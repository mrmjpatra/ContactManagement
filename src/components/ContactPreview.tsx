import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../state/hooks'
import { deleteContact } from '../state/contact-slice'

type ContactPreviewProps = {
    id: string,
    firstName: string,
    lastName: string,
    status: string
}

const ContactPreview = ({ firstName, lastName, status, id }: ContactPreviewProps) => {
    const navigate=useNavigate();
    const dispatch=useAppDispatch();

    const handleDelete=()=>{
        console.log(id)
        dispatch(deleteContact(id))
        alert("Deleted");
    }
    return (
            <div className="space-y-4 w-2/5">
                <div className='bg-blue-600 px-6 flex justify-around items-center'>
                    <span className="bg-blue-600 text-white w-60 h-32 items-center flex justify-center">
                        <BsPersonCircle size={'2rem'} />
                    </span>
                    <div className='text-white space-y-4'>
                        <div>
                            FirstName:{firstName}
                        </div>
                        <div>
                            LastName:{lastName}
                        </div>
                        <div>
                            Status: {status}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <button className="bg-green-900 text-white px-4 py-2 rounded shadow-md shadow-green-500/50" onClick={()=>navigate(`edit/${id}`)} >Edit</button>
                    <button className="text-white py-2 px-4 rounded bg-red-600 shadow-md shadow-red-500/50" 
                    onClick={handleDelete} >Delete</button>
                </div>
            </div>
    )
}

export default ContactPreview