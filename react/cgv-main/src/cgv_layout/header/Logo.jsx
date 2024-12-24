
export default function Logo({href, src, text, target, alt}){
    return(
        <>
        <div className="header-top-logo">
            <a href={href} target={target}>
                <img src={src} alt={alt}/>
            </a>
            <span>{text}</span>
        </div>
        </>
    );
}