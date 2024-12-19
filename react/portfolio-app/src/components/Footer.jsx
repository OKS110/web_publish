import FooterIconList from "./FooterIconList";

export default function Footer() {
    const footerMsg = {
        "msg" : "Let's talk, It's me Maaaaaaaaaario!!!!",
        "email": "oks321098@gmail.com",
        "rights": "Dream Software Engineer Judy - All right reserved"
    };


return (


    <footer id="contact" className="section">

        <h2 className="title">{footerMsg.msg}</h2>
        <p className="description">{footerMsg.email}</p>

        <FooterIconList></FooterIconList>

        <p>{footerMsg.rights}</p>
    </footer>
    );
};