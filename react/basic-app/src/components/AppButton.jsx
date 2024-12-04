import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';
import './button.css';
import { useState, useEffect } from 'react';

export default function AppButton(){

    const [btnList, setBtnList] = useState([]);

    useEffect(() => {
        fetch('data/buttons.json')
        .then((result) => result.json())
        .then((jsonData) => setBtnList(jsonData))
        .catch(error => console.log(error))
    }, []);
    console.log(btnList);
    
    return (
        <div>
            <div style={{display: 'flex'}}>
                <Button name="All" type="button"></Button>
                <Button name="Front-end" type="button"></Button>
                <Button name="Back-end" type="button"></Button>
                <Button name="Mobile" type="button"></Button>
                <Button name="Submit" type="submit"></Button>
                <Button name="Reset" type="reset"></Button>
            </div>
            <div>
                <ButtonList list={btnList}></ButtonList>
            </div>
        </div>
        
    );
}