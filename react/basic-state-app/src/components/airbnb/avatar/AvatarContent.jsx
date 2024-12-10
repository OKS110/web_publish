export default function AvatarContent({newText, img, name}){
    
    return(
        <>
                    {newText && <div className="new">New</div>}
                    <div className="image">
                        <img src={img} alt="img" />
                    </div>

                    <span className="name">{name}</span>
        </>
    );
}