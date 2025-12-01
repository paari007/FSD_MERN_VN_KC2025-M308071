import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="border h-15">
        <Link to={"/"}>  <button className="border ms-2">Home</button></Link>
        <Link to={"/about"}><button className="border ms-2">About</button></Link>
        <Link to={"/contact"}><button className="border ms-2">Contact</button></Link>
    </div>
  )
}

export default Header
