import AirbnbComponent from "./AirbnbComponent";


export default function AppAirbnb(){

    const list = [
        {
            "img" : "https://a0.muscache.com/im/pictures/miso/Hosting-1206692947983125979/original/d9af2fc6-c3ed-423b-9eb1-a3b5b38100d1.jpeg?im_w=720&im_format=avif",
             "d1" :"한국 가평군" ,
             "d2" :"강변 전망" ,
             "d3" : "12월 5일 ~ 10일" ,
             "d4" :"123456"
        },
        {
            "img" : "https://a0.muscache.com/im/pictures/33357308-3507-49e5-aaaf-0b5b9fe234fc.jpg?im_w=720&im_format=avif",
             "d1" :"한국 남양주시" ,
             "d2" :"산 및 정원 전망" ,
             "d3" : "12월 5일 ~ 10일" ,
             "d4" :"123456"
        },
        {
            "img" : "https://a0.muscache.com/im/pictures/hosting/Hosting-1165659085489107368/original/709043dd-af21-4059-b3c5-795a184debaf.jpeg?im_w=720&im_format=avif",
             "d1" :"한국 가평군" ,
             "d2" :"강변 전망" ,
             "d3" : "12월 5일 ~ 10일" ,
             "d4" :"123456"
        },
        {
            "img" : "https://a0.muscache.com/im/pictures/7259d88a-ac45-4b83-940a-c85fe40d373d.jpg?im_w=720&im_format=avif",
             "d1" :"한국 중구" ,
             "d2" :"해변 및 산 전망" ,
             "d3" : "12월 5일 ~ 10일" ,
             "d4" :"123456"
        },
    ];
    return(
     
        <>
           <ul>
            {list.map((item, index) =>  
                <li key={index}>
                    <AirbnbComponent img= {item.img} d1={item.d1} d2={item.d2} d3={item.d3} d4={item.d4}/>        
                </li>)}
               
           </ul>
        </>
    );
}