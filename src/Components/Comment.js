import React from "react";

const Comment = ({data}) =>{

    const {name , text  } = data
    return(
        <>
            <div className="flex shadow-lg bg-gray-200 rounded-lg my-2 ml-4">
              <img 
               className="h-8 rounded-lg "
               alt="user-icon" 
               src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
               />

               <div>
                <p className="text-xs ml-3 font-semibold">{name}</p>
                <p  className="text-xs ml-3">{text}</p>
               </div>
            </div>  
        </>
    )
}
export default Comment;