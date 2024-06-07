
import { useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRating() {
    const [rating ,setRating] = useState(0);
    const [hover , setHover] = useState(0);
    const array = [1,2,3,4,5,6,7];
    const HandleOnclick=(currId)=>{
        console.log(currId)
        setRating(currId);
    }

    const HandleOnMouseover = (currId) => {
        console.log(currId)
        setHover(currId)
    }

    const HandleOnMouseout = (currId) =>{
        console.log(currId)
        setHover(rating);
    } 
  return (
    <div className="container">
        <h2>Star Rating concept</h2>
        <div>{
            array.map((_,index)=>{
                index += 1;
                return <FaStar
                    className={index <= (rating || hover) ? 'active' : 'inactive'}
                    size={40}
                    key={index}
                    onClick={() => HandleOnclick(index)}
                    onMouseMove={()=>HandleOnMouseover(index)}
                    onMouseLeave={ ()=>HandleOnMouseout(index)}
                 />
                 
            })
            
            } 
        </div>
    </div>
  )
}

export default StarRating;
