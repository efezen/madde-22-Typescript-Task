import React from "react";
import { CartType, carts } from "../constants";

// CartType isimli tip tanımı ve carts isimli sabit alınır
const Cart: React.FC = () => {
  // Her bir cart için bir div oluşturulur
  return (
    <div>
      {carts.map((cart: CartType, idx: number) => (
        <div className="cart" key={idx}>
          {/* Soldaki siyah arka plan */}
          <div className="siyah-sol">
            <p>{cart.tarih}</p> {/* Tarih yazdırılır */}
          </div>
          {<img src={cart.img} alt="" />} {/* Resim eklenir */}
          <div className="etiket">{cart.tur}</div>{" "}
          {/* Etkinlik türü yazdırılır */}
          {/* Etkinlik başlığı, konumu ve açıklaması yazdırılır */}
          <div className="metinler">
            <p className="bkm">{cart.title}</p>
            <p className="konum">Maximum UNIQ Hall</p>
            <p>{cart.aciklama}</p>
          </div>
          {/* Bilet al ve takvime ekle butonları eklenir */}
          <button className="biletal">Bilet Al</button>
          <button className="takvimekle">Takvime Ekle</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
