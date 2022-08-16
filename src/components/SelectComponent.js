import React, { useState, useEffect, useRef } from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useRoveFocus from "./usedFocus";
import countryList from "../data/country.json";
import languageList from "../data/language.json";

//data json to map
import _ from "lodash";
import Item from "./Items";
const style = {
  pointer: {
    "cursor": "pointer"
  }
}
const SelectComponent = ({ data, country, setCountry, language, setLanguage }) => {
  const ref = useRef();
  const [selected, setSelected] = useState({ "code": " ", "name": "-select-" })// use for initialing / setting language
  const [terms, setTerms] = useState("")// use for initialing / setting language
  const [show, setShow] = useState(false)// use 
  const [focus, setFocus] = useRoveFocus(data === "language" ? languageList.length : countryList.length);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

  });
  const handleClickOutside = e => {
    if (!ref.current.contains(e.target)) {
      setShow(false)
    }
  };
  const toggleDrop = () => {
    setShow(!show);
    setTerms("");
  }
  const searchValue = (e) => {
    setTerms(e.target.value);
  }

  return (
    <Row>
      <Col>
        <div >
          <a className="btn btn-light w-50 buttonBorder text-left" onClick={toggleDrop} >
            {selected.name} <span className='float-end'>&#x25bc;</span>
          </a>
          <ul className={`w-50 ulStyle ${show ? 'd-block' : 'd-none'}`} style={style.ulStyle} ref={ref} >
            <input type="text" className="form form-control mb-2" placeholder='Type / Search Here..' onChange={searchValue} value={terms} />
            {data === "language" ?
              languageList.map((languageList, index) => (
                <Item
                  id={index}
                  key={index}
                  setFocus={setFocus}
                  index={index}
                  focus={focus === index}
                  mapped={languageList.name}
                  selected={selected}
                  setSelected={setSelected}
                  setShow={setShow}
                  terms={terms}
                  setTerms={setTerms}
                  country={country}
                  setCountry={setCountry}
                  language={language}
                  setLanguage={setLanguage}
                  data={data}
                />
              ))
              :

              countryList.map((countryList, index) => (
                <Item
                  id={index}
                  key={index}
                  setFocus={setFocus}
                  index={index}
                  focus={focus === index}
                  mapped={countryList.name}
                  selected={selected}
                  setSelected={setSelected}
                  terms={terms}
                  setShow={setShow}
                  setTerms={setTerms}
                  country={country}
                  setCountry={setCountry}
                  language={language}
                  setLanguage={setLanguage}
                  data={data}
                />
              ))
            }
          </ul>
        </div>
      </Col>
    </Row >
  );
}

export default SelectComponent;
