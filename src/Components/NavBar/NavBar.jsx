import './navbar.css'
export default function NavBar() {
    
    return (
        <div className="navbar">
            <ul className="midItems">
                <li className="listItem">
                    {/* <Link to="/" className="link-light">
                        Home
                    </Link> */}
                    <h1>Home</h1>
                </li>
                <li className="listItem">
                    {/* <Link to="/about" className="link-light">
                        About
                    </Link> */}
                    <h1>About</h1>
                </li>
            </ul>
        </div>
    )
}