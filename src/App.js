import React from 'react';
import './App.css';
import Display from './components/DisplayTime/DisplayTime'
import Button from './components/Buttons/Button'
import Speed from './components/Buttons/Speed'
import Input from './components/Input/Input'
import Alert from './components/Alert/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function App() {
  const [isStarted, setStart] = React.useState(false)
  const [timeLeft, setRemaining] = React.useState()
  const [timer, setTimer] = React.useState()
  const [speed, setSpeed] = React.useState(1000)
  const [value, setValue] = React.useState()
  const [running, setRun] = React.useState()
  const [show, setShow] = React.useState()
  
  
  const halfTime = React.useRef()

  React.useEffect(() => {
    setRun(setTimeout(() => {
      if(timer > 0)
        setTimer(timer - 1)
    }, speed))

    return clearTimeout(running)
    // eslint-disable-next-line
  },[timer, speed, isStarted])

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const formatTime = () => {
    var minutes = Math.floor(timer / 60)
    var seconds = timer % 60

    if (seconds < 10)
      seconds = `0${seconds}`

    if (minutes < 10)
      minutes = `0${minutes}`

    if (minutes < 1 && seconds < 21) {
      setRemaining("twenty")
    }
      
    if (minutes < 1 && seconds < 11) {
      setRemaining("ten")
    }
    
    if(halfTime.current === timer)
      setShow("half")
    
    return `${minutes}:${seconds}`
  }

  const startTimer = (() => {
      if(value > 0) {
        var seconds = value * 60
        halfTime.current = seconds / 2
        setTimer(seconds)
        setStart(true)
        setSpeed(1000)
        setValue("")
        setShow("")
      }
  })

  const stopTimer = () => {
    clearTimeout(running)
  }

  const resumeTimer = () => {
    setRun(setTimeout(() => {
      if(timer > 0)
        setTimer(timer - 1)
    }, speed))
  }

  const resetTimer = () => {
    clearTimeout(running)
    setTimer("")
    setRemaining("")
    setStart(false)
  }

  function changeSpeed(speed) {
    setSpeed(speed)
  }

  return (
      <Container fluid className="App">
        <Row className="mb-3 justify-content-center">
          <Alert show={show} />
        </Row>
        <Row>
          <Col>
              <Display remaining={timeLeft} count={timer} isStarted={isStarted} format={formatTime} />
            <Row>
              <Col>
                <Input onchange={onChange} value={value} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button start={startTimer} stop={stopTimer} resume={resumeTimer} reset={resetTimer}  started={isStarted} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Speed speed={changeSpeed}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
}
