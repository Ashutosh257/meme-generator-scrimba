import React, {useState} from "react"

const Drag = (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)

    const handleMouseDown = (event) => {
        setDragging(true)
        const offsetX = event.clientX - position.x
        const offsetY = event.clientY - position.y
        document.addEventListener("dragstart", handleMouseMove)
        document.addEventListener("dragend", handleMouseUp)

        function handleMouseMove(event) {
            setPosition({
                x: event.clientX - offsetX,
                y: event.clientY - offsetY,
            })
        }

        function handleMouseUp() {
            setDragging(false)
            document.removeEventListener("dragstart", handleMouseMove)
            document.removeEventListener("dragend", handleMouseUp)
        }
    }

    return (
        <div
            className="meme--text top"
            // style={{ color: props.topTextColor }}
            style={{
                // position: 'absolute',
                left: position.x,
                top: position.y,
                border: '1px solid black',
                padding: '10px',
                backgroundColor: dragging ? 'lightblue' : 'white',
                cursor: 'grab',
              }}
            id="topTextAfter"
            onMouseDown={handleMouseDown}
            draggable="true"
        >
            {props.text}
        </div>
    )
}

export default Drag
