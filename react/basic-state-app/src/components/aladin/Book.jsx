export default function Book({img, title}) {
return (
    <div style={{textAlign:'center'}}>
        <img src={img} alt="" style={{width:150}}/>
        <div>{title}</div>
    </div>
    );
};