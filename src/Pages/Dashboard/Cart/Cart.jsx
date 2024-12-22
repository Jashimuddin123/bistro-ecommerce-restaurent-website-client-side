import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const Cart = () => {
    const [cart, refetch] = UseCart()
    const totalPrice = cart.reduce((total, item)=> total + item.price, 0)
    const asiosSecure = UseAxiosSecure()


     const handleDelete= id =>{
       console.log('data', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
                asiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount>0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: res.data.message || "Item could not be deleted.",
                            icon: "error"
                        });
                    }
                })
                .catch(err => {
                    console.error('Delete Error:', err);
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong.",
                        icon: "error"
                    });
                });
            
                
            
            }
          });
          

     }
    return (
        <div>
            <div className="flex justify-evenly">
                <p>Total Order{cart.length}</p>
                <p>Total Price:{totalPrice}</p>
                <button className=" btn btn-sm btn-primary">Pay</button>
            </div>
            {/* cart item table here */}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-orange-400 text-white ">
        <th>
         #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map((item, index)=> <tr key={item._id}>
              <th>
                {index +1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                
                </div>
              </td>
              <td>
               {item.name}
              </td>
              <td>${item.price}</td>
              <th>
                <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-xs">
                    <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>)
    }
     
    </tbody>
   
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;