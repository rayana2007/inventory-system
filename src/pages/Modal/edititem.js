import { useState } from "react";
import supabase from "../../supabase";

const EditItem = ({EditModalClose, ItemData}) => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const edit_item = async (e) => {
        e.preventDefault();
        console.log(ItemData);

        const { data, error } = await supabase
        .from("item")
        .update({ 'item_name': itemName, 'quantity': quantity })
        .eq("id", ItemData)
        .select();
        if(!error){
            window.location.reload();
        }else{
            console.log(error);
        }
};

return (
    <div className="modal-overlay">
        <div className="modal">
            <h2>Edit Item</h2>
            <form onSubmit={edit_item}>
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
                <button onClick={EditModalClose}>Cancel</button>
            </form>
        </div>
    </div>
);
};

export default EditItem;

