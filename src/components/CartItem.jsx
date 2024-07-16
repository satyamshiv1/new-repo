import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import { toast } from "react-hot-toast";

const CartItem = ({post,postIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed");
    }   

  return (
    <div>
        <div>
            <div>
                <img src={post.image}/>
            </div>
            <div>
                <h1>{post.title}</h1>
                <h1>{post.description}</h1>
                <div>
                    <p>{post.price}</p>
                    <div
                    onClick={removeFromCart}
                    >
                        <AiFillDelete/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CartItem