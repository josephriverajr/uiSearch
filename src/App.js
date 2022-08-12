import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectCountry from '././components/SelectCountry';
import SelectLanguage from '././components/SelectLanguage';
import Card from 'react-bootstrap/Card';
import './App.css';
const App = () => {

  const pull_city = (data) => {
    // setLanguage(data)
    setCountry(data)
  }

  const pull_language = (data) => {
    // setLanguage(data)
    setLanguage(data)
  }
  const [country, setCountry] = useState({ "code": " ", "name": "My Selected Country" }) // use for initialing / setting country
  const [language, setLanguage] = useState("My Selected Language") // use for initialing / setting language
  return (
    <Container>
      <Row>
        <h2>Display my selected Value</h2>
        <span>Country: {country.name}</span>
        <br />
        <span>Language: {language}</span>
      </Row>
      <Row>
        <Card body style={{"minHeight":"350px"}}>
          <Row>
            <Col>
              <label>Country</label>
              <SelectCountry
                func={pull_city}
              />
            </Col>
            <Col>
              <label>Language</label>
              <SelectLanguage
                func={pull_language}
              />
            </Col>
          </Row>
        </Card>
      </Row>
    </Container >
  );
}

export default App;
