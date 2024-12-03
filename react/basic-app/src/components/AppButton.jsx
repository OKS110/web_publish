import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';
import './button.css';

export default function AppButton(){
    const propsList = [
        {
            "name": "All",
            "type": "button",
        },
        {
            "name": "Front-end",
            "type": "button",
        },
        {
            "name": "Back-end",
            "type": "button",
        },
        {
            "name": "Mobile",
            "type": "button",
        },
        {
            "name": "Submit",
            "type": "submit",
        },
        {
            "name": "Reset",
            "type": "reset",
        },
    ]

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
                <ButtonList list={propsList}></ButtonList>
            </div>
        </div>
        
    );
}