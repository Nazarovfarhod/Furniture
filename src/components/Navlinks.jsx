const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "about", text: "About" },
  { id: 3, url: "products", text: "Products" },
  { id: 4, url: "cart", text: "Cart" },
];
import { NavLink } from "react-router-dom";

function Navlinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
}

export default Navlinks;
