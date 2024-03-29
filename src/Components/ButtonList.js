import React from "react";
import Button from "./Button";


const ButtonList = () => {
   
    const list = ["All","Gaming" ,"Songs","Live","Soccer","Cricket","Cooking","Dancing","Football","Coding"]
    return (
        <div className="flex">
            {
                list.map( (listItem , index) => (
                    <Button list={listItem} key={index}/>
                ))
            }
           
        </div>
    )
}

export default ButtonList;