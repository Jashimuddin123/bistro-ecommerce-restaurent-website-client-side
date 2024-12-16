import { useEffect, useState } from "react";

const UseMenu = () => {
    const [menu, setMenu] = useState([]);
   const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch("http://localhost:5000/menu") // Ensure this path points to the correct file or API
        .then((res) => res.json())
        .then(data=> {
            setMenu(data)
            setLoading(false)
        })
      
    
    }, []);
    return [menu, loading]
};

export default UseMenu;