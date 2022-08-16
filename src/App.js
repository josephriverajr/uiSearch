import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectComponent from './components/SelectComponent';
import Card from 'react-bootstrap/Card';

import './App.css';
const App = () => {
  const [country, setCountry] = useState("My Selected Country") // use for initialing / setting country
  const [language, setLanguage] = useState("My Selected Language") // use for initialing / setting language
  return (
    <Container>
      <Row>
        <h2>Display my selected Value</h2>
        <span>Country: {country}</span>
        <br />
        <span>Language: {language}</span>
      </Row>
      <Row>
        <Card body style={{"minHeight":"350px"}}>
          <Row>
            <Col>
              <label>Country</label>
              <SelectComponent
                setCountry={setCountry}
                country={country}
                data="country"
              />
            </Col>
            <Col>
              <label>Language</label>
              <SelectComponent
                setLanguage={setLanguage}
                language={language}
                data="language"
              />
            </Col>
          </Row>
        </Card>
      </Row>
    </Container >
  );
}

export default App;
