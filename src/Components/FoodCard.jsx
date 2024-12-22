// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
// import axios from "axios";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import UseCart from "../Hooks/UseCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item
    // const {user}= useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    const  {user} = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
  const [, refetch]= UseCart()

    const handleShopingCart=()=>{
 ;
   if(user && user.email){
    // to do cart items to the database
    const  cartItem = {
      menuId : _id,
      email: user.email,
      name, price, image
    }
    axiosSecure.post('/carts',cartItem)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} aded to your cart`,
          showConfirmButton: false,
          timer: 1500
        });
        // refeceh the card data
        refetch()
      }
   
    })
    

   }
   else{
    Swal.fire({
      title: "You are not login",
      text: "please login to at to the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,login"
    }).then((result) => {
      if (result.isConfirmed) {
      navigate("/login", {state : {from : location}})
      }
    });
   }
   
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end mx-auto">
          <button onClick={handleShopingCart} className="btn bg-gray-300 py-2 rounded-xl px-6 text-yellow-700 btn-outline my-4 border-0 border-b-4 border-yellow-700 ">
            Add To Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;