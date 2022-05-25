import { useEffect, useState } from "react";


export const useApp = ()=>{
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      const increment = Number(count + 1);
      setCount(increment);
      localStorage.setItem("count", increment);
    };
    const handleDecrement = () => {
      if (count > 0) {
        const decrement = Number(count - 1);
        setCount(decrement);
        localStorage.setItem("count", decrement);
      }else{
        alert('Sorry Your Counter Already 0')
      }
      
    };
  
    useEffect(() => {
      const countNumber = localStorage.getItem("count");
      setCount(Number(countNumber));
    }, [count]);

    return{
        count,
        handleIncrement,
        handleDecrement
    }
}