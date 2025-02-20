import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

export default function Header({count}) {
return (
    <div className="header-outer">
        <div className="header">
            <Link to='/' className="header-left"><FiShoppingBag /> <span>Shoppy2</span></Link>
            <nav className="header-right">
                <Link to='/all'>Products</Link>
                <Link to='/cart'>MyCart<span>{count}</span></Link>
                <Link to='/login'>
                    <button type="button">Login</button>
                </Link>
                <Link to='/signup'>
                    <button type="button">Signup</button>
                </Link>
            </nav>
        </div>
    </div>
    );
};