import { useEffect } from "react";
import { useState } from "react";

const useElements = () => {
    const [elements, setElements] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/elements')
            .then(res => res.json())
            .then(data => setElements(data));

    },[])

    return {elements,setElements};


}
export default useElements;
