import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import AddItem from "./Modal/itemadd";
import Navbar from "../components/Navbar";
import supabase from "../supabase";
import EditItem from "./Modal/edititem";

const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [EditModalOpen, setEditModalOpen] = useState(false);
    const [EditModalClose, setEditModalClose] = useState(false);
    const [EditID, seteditID] = useState(null);

    useEffect(() => {
        fetchaData();
    }, []);

    const Edititem = (editData) => {
        seteditID(editData);
        setEditModalOpen(true);
    }
    
    const setDataEditModalClose = () => {
        setEditModalOpen(false);
    }

    const fetchaData = async () => {
        let { data: item, error } = await supabase.from('item').select('*');
        setData(item);
    };

    const deleteData = async (itemID) => {
        const { error } = await supabase.from("item").delete().eq("id", itemID);
        if (!error) {
            window.location.reload();
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
        console.log(isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="search">
                <input type="text"></input>
                <button onClick={openModal}>Add Item</button>
            </div>
            {isModalOpen && <AddItem closeModal={closeModal} />}
            {EditModalOpen && <EditItem EditModalClose={setDataEditModalClose} ItemData={EditID}/>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                           <tr> 
                                <td>{item.id}</td>
                                <td>{item.item_name}</td>
                                <td>{item.quantity}</td>
                                <td>
                                <button className="edit" onClick={() => Edititem(item.id)}>
                                <MdEdit color="white" />
                            </button>
                            <button className="delete" onClick={() => deleteData(item.id)}>
                             <MdDelete />
                           </button>
                          
                        </td>
                     </tr>
                   ))
                ) : (
                    <tr>
                        <td colSpan="4">No items found</td>
                    </tr>
                )}
                </tbody>
           </table>
        </div>
    );
};

export default Inventory;