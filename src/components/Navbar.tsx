import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { carts } from "../constants";
import Takvim from "./Takvim";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";

const Navbar: React.FC = () => {
  // Arama terimi state'i ve takvimde eklenip eklenmediğine dair state
  const [searchTerm, setSearchTerm] = useState("");
  const [addedToCalendar, setAddedToCalendar] = useState<{
    [key: number]: boolean;
  }>({});

  // Location hook'u kullanarak hangi sayfada olduğumuzu kontrol etme
  const location = useLocation();

  // Arama terimi değiştiğinde çalışacak fonksiyon
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Takvime ekle butonuna tıklandığında çalışacak fonksiyon
  const handleAddToCalendar = (idx: number) => {
    setAddedToCalendar((prev) => ({ ...prev, [idx]: true }));
  };

  // Filtrelenmiş etkinlikleri alarak kartları render etme
  const filteredCarts = carts
    .filter((cart) =>
      cart.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (cart) =>
        location.pathname === "/" || cart.tur === location.pathname.substr(1)
    );

  return (
    // Navbar bileşeni
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
          {/* Arama barı */}
          <div className="search-bar">
            <SearchIcon />
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Arayın..."
            />
          </div>
        </li>
      </ul>

      {/* Takvim bileşeni ve filtrelenmiş etkinliklerin kartlarının render edilmesi */}
      <div className="container">
        <Takvim />
        {filteredCarts.map((cart, idx) => (
          <div className="cart" key={idx}>
            <div className="siyah-sol">
              <p>{cart.tarih}</p>
            </div>
            <img src={cart.img} alt="" />
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
              {addedToCalendar[idx] ? (
                <>
                  <CheckIcon />
                  <span>Takvimde Eklendi</span>
                </>
              ) : (
                <>
                  <ControlPointIcon />
                  <span>TakvimeEkle</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
