
export default function PackageContentItem({src, alt, text, price}){

    return(
        <>
            <img src={src} alt={alt}></img>

            <div>
                <p>{text}</p>
                <p>{price}</p>
            </div>
        </>
            

    );
}