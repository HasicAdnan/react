export const  List = (props) => {
    const{title, subtitle, children} = props;
    return <div>
        <h2>{
            title
        }</h2>
        <p>
            {
               subtitle
            }
        </p>
        {children}
    </div>
}
