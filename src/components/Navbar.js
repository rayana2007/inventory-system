import Logo from "../images/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
          <a><img src={Logo} width={30}/></a>
            <a href="/inventory">Inventory</a>
                <a href="/logs"> Logs </a>
            </nav>
        </div>
    );
}

export default Navbar;
