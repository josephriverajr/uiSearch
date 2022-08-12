import React, { useState } from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import languageList from "../data/language.json";
import _ from "lodash";

const SelectCountry = (props) => {
    const [selected, setSelected] = useState("-select-")// use for initialing / setting language

    const changeLanguage = (e) => {
        let value = e.target.innerText;
        props.func(value); // push data back to parent component
        setSelected(value)
    }
    const LanguageToggle = React.forwardRef(({ children, onClick }, ref) => (
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
    const renderValues = languageList.map((data, index) => {
        return (
            <Dropdown.Item onClick={changeLanguage} eventKey={index} id={data} active={_.isEqual(data, selected) ? true : false}>{data}</Dropdown.Item>
        )
    })
    const LanguageMenu = React.forwardRef(
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
                        style={{ "width": "96%" }}
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
    return (
        <Row>
            <Col>
                <Dropdown >
                    <Dropdown.Toggle as={LanguageToggle} id="dropdown-custom-components">
                        {selected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={LanguageMenu} className='w-50'>
                        {renderValues}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row >
    );
}

export default SelectCountry;
