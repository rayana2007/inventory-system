import { useState } from "react";
import supabase from "../../supabase";


const AddItem = ({ closeModal }) => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const create_Item = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("item")
            .insert([{ 'item_name': itemName, 'quantity': quantity }])
            .select();
        if (!error) {
            window.location.reload();
        }               
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add Item</h2>
                <form onSubmit={create_Item}>
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    
                    <button type="Submit"> Submit </button>
                    <button onClick={closeModal}>Cancel</button>
                    
                </form>
            </div>
        </div>
    );
};

export default AddItem;