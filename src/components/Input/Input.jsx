import React from "react";
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

export default function Input(props) {
  return (
    <InputGroup size="sm" className="mb-3 justify-content-center">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">Minutes</InputGroup.Text>
        <FormControl
          onChange={props.onchange}
          value={props.value}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup.Prepend>
    </InputGroup>
  );
}
