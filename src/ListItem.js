export const ListItem = (props) => {
    const {username, content} = props

    return <div style = {{
        textAlign: "left",
        padding: 8,
        margin: 8,
        backgroundColor: "#5555550F",
        borderRadius: 12
    }}>
        <p style={{fontSize: 10}}>{username}</p>
        <p>{content}</p>
      </div>
}