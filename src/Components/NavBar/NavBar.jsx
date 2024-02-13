import './navbar.css'
export default function NavBar() {
    console.log("NavBar");
    return (
        <div className="navbar">
            <ul className="middle-items">
                <li className="list-item">
                    {/* <Link to="/" className="link-light">
                        Home
                    </Link> */}
                    <h1>Home</h1>
                </li>
                <li className="list-item">
                    {/* <Link to="/about" className="link-light">
                        About
                    </Link> */}
                    <h1>About</h1>
                </li>
            </ul>
        </div>
    )
}