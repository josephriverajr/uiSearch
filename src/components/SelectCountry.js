import React, { useState } from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
//data json to map
import countryList from "../data/country.json";
import _ from "lodash";

const SelectCountry = (props) => {
  const [selected, setSelected] = useState({ "code": " ", "name": "-select-" })// use for initialing / setting language
  


  const onClickEntryType = (e) => {
    let value = {
      "name": e.target.innerText,
      "code": e.target.id
    }
    props.func(value); // push data back to parent component
    setSelected(value)

  }
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{ "textAlign": "left", "border": "1px solid #ddd" }}    
      href=""
      ref={ref}
      className="btn btn light w-50"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span style={{ "float": "right" }}>
        &#x25bc;</span>
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            style={{"width": "96%"}}
            className="mx-1 my-2"
            placeholder="Type search here"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );


  const renderValues = countryList.map((data, index) => {
    return (
      <Dropdown.Item onClick={onClickEntryType} eventKey={index} id={data.code} active={_.isEqual(data.name, selected.name) ? true : false}>{data.name}</Dropdown.Item>
    )
  })
  return (
    <Row>
      <Col>
        {/* <span onClick={onClickEntryType} >Country</span> */}
        <Dropdown >
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {selected.name}
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu} className='w-50'>

            {renderValues}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row >
  );
}

export default SelectCountry;
