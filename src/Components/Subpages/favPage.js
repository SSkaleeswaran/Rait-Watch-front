import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../../redux/fav";

export default function FavPage(){
   const favItems= useSelector((state)=> state.fav.items)
   const dispatch= useDispatch()

   function handleRemove(id){
    dispatch(removeFromFav(id))
   }
    return (
     <div className="container ms-5 mt-3 col-lg-3 col-md-4">
          <h2 className=" mb-1 fw-bold">Wishlist</h2>
          <hr />
          <div className="row">
    
    
            {favItems.length === 0 ? (
              <h4 className=" mb-5 fw-bold">Your Wishlist is empty</h4>
            ) : (
              favItems.map((item, index) => (
                <div key={index} className="d-flex align-items-center mb-3 border p-3 position-relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "120px", height: "auto" }}
                  />
    
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                    onClick={() =>  handleRemove(item.id)}
                  >
                    X
                  </button>
                  <div className="col col-lg-8 ms p-4">
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                 
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      );
    
}