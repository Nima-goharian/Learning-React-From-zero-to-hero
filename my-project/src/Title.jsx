export default function Title(props){
    return <input
            type="text" onChange={(event)=>props.handleTitleChange(event.target.value)}
            placeholder="Enter note title..."
            style={{ fontSize: "18px", padding: "5px", width: "100%" }}
        />
}