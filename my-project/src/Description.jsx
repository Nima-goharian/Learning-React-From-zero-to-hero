export default function Description(props){
    return <input onChange={(event)=>props.handleDescriptionChange(event.target.value)}
    type="text"
    placeholder="Enter note title..."
    style={{ fontSize: "50px", padding: "5px", width: "100%" }}
/>
}