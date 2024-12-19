import { useEffect, useState } from 'react';
import './avatar.css';
import AvatarContent from './AvatarContent.jsx';

export default function Avatar(){
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/data/avatar.json')
        .then(data => data.json())
        .then(jsonData => setList(jsonData.person))
        .catch(error => console.log(error))
    }, []);
    
    return (
        <div className="wrap">
            <ul>
                {list ? (list.map((item, index) => 
                    <li className='avater-list' key={index}>
                        <AvatarContent img={item.img} newText={item.newText} name={item.name}></AvatarContent>
                    </li>)
                ) : null}

            </ul>
        </div>
    );
}