import React from "react"
import Toast from 'react-bootstrap/Toast'

export default function Alert(props) {
  const [showA, setShowA] = React.useState(false);

  React.useEffect(() => {
    if(props.show === "half") {
        setShowA(true)
        setTimeout(() => {setShowA(false)}, 3000)
    }
  },[props.show])

  return (
    <div style={{zIndex : 1}}>
        <Toast show={showA}>
            <Toast.Body>More than halfway there !</Toast.Body>
        </Toast>
    </div>
  );
}
