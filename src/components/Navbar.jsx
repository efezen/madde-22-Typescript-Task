import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { carts } from "../constants";
import Takvim from "./Takvim";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [addedToCalendar, setAddedToCalendar] = useState({});
  const location = useLocation();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCalendar = (idx) => {
    setAddedToCalendar((prev) => ({ ...prev, [idx]: true }));
  };

  const filteredCarts = carts
    .filter((cart) =>
      cart.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (cart) =>
        location.pathname === "/" || cart.tur === location.pathname.substr(1)
    );

  return (
    <nav>
      <h1>Etkinlikler</h1>
      <ul>
        <li>
          <Link to={"/"}>Tüm Etkinlikler</Link>
        </li>
        <li>
          <Link to={"/tiyatro"}>Tiyatro</Link>
        </li>
        <li>
          <Link to={"/konser"}>Konser</Link>
        </li>
        <li>
          <Link to={"/standup"}>Stand Up</Link>
        </li>
        <li>
          <Link to={"/sinema"}>Sinema</Link>
        </li>
        <li>
          <Link to={"/cocuk"}>Çocuk</Link>
        </li>
        <li>
          <input type="search" onChange={handleSearch} placeholder="Arayın..."/>
        </li>
      </ul>
      <div className="container">
        <Takvim/>
        {filteredCarts.map((cart, idx) => (
          <div className="cart" key={idx}>
            <div className="siyah-sol">
              <p>{cart.tarih}</p>
            </div>
            <img src={cart.img} alt=""/>
            <div className="etiket">{cart.tur}</div>
            <div className="metinler">
              <p className="bkm">{cart.title}</p>
              <p className="konum">Maximum UNIQ Hall</p>
              <p>{cart.aciklama}</p>
            </div>
            <button className="biletal">Bilet Al</button>
            <button
              className="takvimekle"
              disabled={addedToCalendar[idx]}
              onClick={() => handleAddToCalendar(idx)}
            >
              {addedToCalendar[idx] ? "Takvimde Eklendi" : "Takvime Ekle"}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
