import {ListItem} from "./ListItem";

const dummyDaten = [
        {username: "Fatima", content: "Hallihallo"},
        {username: "Rosa", content: "Hola"},
        {username: "Adnan", content: "Bok"},
        ]

export const  List = (props) => {
    const{title} = props;
    return <div>
       <h2>{title}</h2>
        {dummyDaten.map(d => <ListItem username={d.username} content={d.content}/>)}
    </div>
}
