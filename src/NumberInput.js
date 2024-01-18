import {useState} from "react";

export const NumberInput = (props) => {

    const [zahl, setZahl] = useState(20)
     
    return (

        <div style = {{
            backgroundColor: "lightblue",
            border: "3px solid yellow"
                    }}>
            <input type = {"number"} value={zahl} onChange={
                (event) => {
                    console.log("Something is happening", event.target.value)
                    setZahl(event.target.value)
                }
            }/>
            <p>Hier soll die Nummer stehen: {zahl}</p>
            <p>Das 3-fache der Zahl ist: {zahl * 3}</p>ss
        </div>
    )
}