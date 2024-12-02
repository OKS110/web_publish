import './App2.css';
import Avatar from './components/Avatar.jsx';
import AvatarList from './components/AvatarList.jsx';
export default function App2(){
    const list = [
        { 
            "img": "/images/people1.webp",
            "name": "Smith",
            "age": '20'
        },
        { 
            "img": "/images/people2.webp",
            "name": "Albert",
            "age": '30'
        },
        { 
            "img": "/images/people3.webp",
            "name": "Lorens",
            "age": '19'
        },
    ];

    return (
        <>
        <div className='wrap'>
            <Avatar img="/images/people1.webp" name="Smith" age='20'></Avatar>
            <Avatar img="/images/people2.webp" name="Albert" age='30'></Avatar>
            <Avatar img="/images/people3.webp" name="Lorens" age='19'></Avatar>
        </div>
        <AvatarList avatar_list = {list}></AvatarList>
        
        </>
        
    );
}