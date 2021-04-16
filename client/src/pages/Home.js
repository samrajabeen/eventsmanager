import React,{useState} from "react";
import Card from "../components/card";
 

function Home() {
    const [count, setCount] = useState(0)

     // handleIncrement increments this.state.count by 1
    const handleIncrement = () => {
    // We always use the setState method to update a component's state
       setCount( count + 1 );
    };
    return (
        <>
     
        <Card count = {count} handleIncrement = {handleIncrement} />
        </>
    )
}

export default Home