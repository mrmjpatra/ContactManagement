import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../state/hooks";
import { ImCross } from 'react-icons/im'
import ContactPreview from "../../components/ContactPreview";
const Contact = () => {
    const contacts = useAppSelector(state => state.contactReducer.contactList);
    const navigate = useNavigate();

    return (
        <div className="w-11/12 mx-auto py-8 flex justify-center flex-col space-y-8">
            <div className="flex justify-center">
                <button className="text-white bg-blue-600 rounded-md shadow-md px-5 py-2"
                    onClick={() => navigate('create')}
                >Create Contact</button>
            </div>
            <div className="">
                {
                    contacts.length === 0 ?
                        <div className="flex items-center gap-5 justify-evenly border p-3 border-black w-1/2 mx-auto">
                            <span className="bg-black text-white rounded-full flex p-4">
                                <ImCross size={"1.5rem"} />
                            </span>
                            <h2 className="w-1/2 font-bold">No Contact Found Please add contact from Create Contact Button</h2>
                        </div> :
                        <div className="flex flex-wrap gap-3 w-full justify-center">
                            {
                                contacts.map(c => <ContactPreview key={c.id} {...c} />)
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Contact