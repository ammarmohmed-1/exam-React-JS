import React from "react";


function Menu(Data){
    return(
        <div>
            <div className="Menu">
                <img className="img_menu" src={Data.img} />
                <h5 className="tittle_1">{Data.tittle_1}</h5>
                <h6 className="tittle_2">{Data.tittle_2}</h6>
                <h2 className="price"> {Data.new_price}<span>{Data.old_price}</span></h2>
                <button className="btn btn-outline-primary">Order Now</button>
            </div>
        </div>
    )
}
export default Menu;