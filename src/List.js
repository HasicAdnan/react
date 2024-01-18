import {ListItem} from "./ListItem";
import {useEffect, useState} from "react";

const dummyDaten = [
        {username: "Fatima", content: "Hallihallo"},
        {username: "Rosa", content: "Hola"},
        {username: "Adnan", content: "Bok"},
        ]
const url = "https://example-crud-api.kurzmann.io/posts"
export const  List = (props) => {

    const{title} = props

    const [data, setData] = useState([])



    useEffect(() => {

        const myfetch = async() =>{
        try {
            const response = await fetch(url)
            const arrayObj = await response.json()
            setData(arrayObj)
        } catch (error) {
            console.log("myfetch error")
        }
    }
        myfetch()
    }, []);


    return <div>
       <h2>{title}</h2>
        {data.map(d => <ListItem username={d.username} content={d.content}/>)}
    </div>
}
