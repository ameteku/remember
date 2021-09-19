import "./Navbar.css";

function Navbar(props){
    const username = "gtorpey"
    return (
        <nav class="navbar customNavbar" id="navigationBar">
            <div class="container">
                {username}   
            </div>
        </nav>
    )
}

export default Navbar;