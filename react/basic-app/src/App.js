import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App() {
  const imgList = [
    {
      "img": "/images/people1.webp",
    },
    {
      "img": "/images/people2.webp",
    },
    {
      "img": "/images/people3.webp",
    },
  ]

  const avatarList = [
    {
      "img": "/images/people1.webp",
      "name": "Smith",
    },
    {
      "img": "/images/people2.webp",
      "name": "Albert",

    },
    {
      "img": "/images/people3.webp",
      "name": "Lorens",

    },
  ]

  return (
    <div className="App">
      <div className='App-container'>
      <Avatar  img="/images/people1.webp" name="Smith"></Avatar>
      <Avatar  img="/images/people2.webp" name="Albert"></Avatar>
      <Avatar  img="/images/people3.webp" name="Lorens"></Avatar>
      </div>
      <div className='App-container'>
        <AvatarImage img="/images/people1.webp"></AvatarImage>
        <AvatarImage img="/images/people2.webp"></AvatarImage>
        <AvatarImage img="/images/people3.webp"></AvatarImage>
      </div>
      <div className='App-container'>
        <AvatarImageList list = {imgList}></AvatarImageList>
      </div>
      <div className='App-container'>
        <AvatarList list = {avatarList}></AvatarList>
      </div>
    </div>
  );
}

