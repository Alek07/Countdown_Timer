import React from 'react'
import './display_style.css'

export default  function Display(props){
    const [style, setStyle] = React.useState("")

    React.useEffect(() => {
        if(props.remaining === "twenty") {
            setStyle("twenty_seg_display")
        } else if (props.remaining === "ten") {
            setStyle("ten_seg_display")
        } else {
            setStyle("")
        }
      },[props.remaining])

    return(
        <h1 className={style}>
            {props.count === 0? "Time's Up!" : props.isStarted? props.format() : "00:00"}
        </h1>
    )
}