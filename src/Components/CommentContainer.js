import React from "react";
import CommentList from "./CommentList";


const CommentContainer = () => { 
   
    const CommentData= [
        {
            name:"Palak Patel",
            text : "loram psum",
            replies : [
                {
                    name:"Palak Patel",
                    text : "loram psum replie",
                    replies:[]
                },
              
            ]
        },
        {
            name:"Palak Patel",
            text : "loram psum",
            replies : [
                {
                    name:"Palak Patel",
                    text : "loram psum replie",
                    replies:[
                        {
                            name:"palak patel",
                            text:"nested replie",
                            replies:[
                                {      
                                    name:"palak patel",
                                    text:"nested replie",
                                    replies:[
                                        {      
                                            name:"palak patel",
                                            text:"nested replie",
                                            replies:[
                                                {      
                                                    name:"palak patel",
                                                    text:"nested replie",
                                                    replies:[]      
                                                }
                                            ]      
                                        }
                                    ]      
                                }
                            ]
                        }
                    ]
                },
               
            ]
        },
        {
            name:"Palak Patel",
            text : "loram psum",
            replies : [   ]
        },
        {
            name:"Palak Patel",
            text : "loram psum",
            replies : [   ]
        },
        {
            name:"Palak Patel",
            text : "loram psum",
            replies : [   ]
        }
    ]

  return(
       <div className="w-[900px]">
            <h1 className="m-1 ml-4 font-bold">Comments :</h1>
              <CommentList comments={CommentData}/>
       </div>   
  )
}

export default CommentContainer;