import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../../state/hooks';
import { saveContact } from '../../../state/contact-slice';

const CreateContact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('Inactive');
    const dispatch=useAppDispatch();
    const handleCreate=(e:FormEvent)=>{
        e.preventDefault();
        if (firstName.trim()==='' || lastName.trim()==='') {
            alert("Enter the name");
            return;
        }
        const payload={
            firstName,
            lastName,
            status
        }
        dispatch(saveContact(payload))
        alert("Saved")
    }


    return (
        <div className='w-4/5 mx-auto my-5 '>
            <h2 className='text-center font-bold text-2xl text-blue-600'>Create Contact Screen</h2>
            <form onSubmit={handleCreate}>
                <div className='border border-black py-3 px-5 space-y-4 w-1/2 mx-auto my-4'>
                    <div className='flex gap-2 items-center'>
                        <label htmlFor="firstName" className='font-medium text-xl'>First Name</label>
                        <input type="text" name="firstName" id="firstName" className='border border-blue-600 rounded px-4 py-2 font-medium' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="firstName" className='font-medium text-xl'>Last Name</label>
                        <input type="text" name="firstName" id="firstName" className='border border-blue-600 rounded px-4 py-2 font-medium' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </div>
                    <div className='flex items-center gap-5'>
                        <h2 className='font-medium text-xl'>Status</h2>
                        <div className='space-y-3'>
                            <div>
                                <input
                                    type="radio"
                                    name="status"
                                    id='active'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.checked ? 'Active' : 'InActive')}
                                    className='mr-2'
                                />
                                <label htmlFor="active" >Active</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="status"
                                    id='inActive'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.checked ? 'InActive' : 'Active')}
                                    className='mr-2'
                                />
                                <label htmlFor="inActive">Inactive</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pb-5'>
                    <button type="submit" className='bg-blue-600 text-white font-bold rounded-md shadow-md shadow-blue-600/50 px-3 py-2'>Save Contact</button>
                </div>
            </form>
        </div>
    )
}

export default CreateContact