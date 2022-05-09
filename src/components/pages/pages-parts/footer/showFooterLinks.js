import { Link } from "react-router-dom"

const ShowFooterLinks = ({links}) =>{
    return links.map(link => (
        <ul className="footer__ul" key={link.id}>
            <li className="footer__ul__li">
                <Link to={link.route}>{link.name}</Link>
            </li>
        </ul>
    ))
}

export default ShowFooterLinks