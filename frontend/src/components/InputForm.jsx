import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Results from "./Results"
import { ParamsContext } from "./Params";

import './sass/InputForm.scss'

export const ResultsContext = React.createContext({ results: []})

const InputForm = () => {
    const [input, getResults] = React.useState("")
    const [results, setResults] = React.useState([])
    const [alertVariant, setAlertVariant] = React.useState("secondary");
    const [alertText, setAlertText] = React.useState("Status");
    const { lang, mode } = React.useContext(ParamsContext)

    const handleInput = event  => {
        event.preventDefault();
        getResults(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputDict = {
          "word": input
        }
        
        setAlertVariant("primary")
        setAlertText("Loading...")
        fetch("https://vortan-api.herokuapp.com/suggest?lang=" + lang + "&mode=" + mode, {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(inputDict)
        }).then(response => {
            response.json().then((x) => {
                setResults(x.tokens)
            });
            setAlertVariant("success")
            setAlertText("Success")
        }).catch((error) => {
            console.error('Error:', error);
            setAlertVariant("danger")
            setAlertText("Error")
        });
    }

    const {Control, Group, Label} = Form;

    return (
        <div>
            <div className="input-form">
            <Form onSubmit={handleSubmit}>
                <Container>
                <Row>
                    <Label> <b> Input Term </b>  </Label>
                </Row>
                <Row>
                    <Group>
                        <InputGroup>
                        <Control type="text" placeholder="??????????" as="textarea" 
                            onChange={handleInput.bind(this)} />
                            <Button type="submit" variant="primary">Submit</Button>
                        </InputGroup>
                    </Group>
                </Row> 
                <Row>
                    <Alert variant={alertVariant}>
                        {alertText}
                    </Alert>
                </Row> 
                </Container>
            </Form>
            </div>
            <ResultsContext.Provider value={{results}}>
                <Results />
            </ ResultsContext.Provider>
        </div>
    );
};

export default InputForm;
