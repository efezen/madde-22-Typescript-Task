import { carts } from "../constants";

const Cart = () => {
  return (
    <div>
      {carts.map((cart, idx) => (
        <div className="cart" key={idx}>
          <div className="siyah-sol">
            <p>{cart.tarih}</p>
          </div>
          {<img src={cart.img} />}
          <div className="etiket">{cart.tur}</div>
          <div className="metinler">
            <p className="bkm">{cart.title}</p>
            <p className="konum">Maximum UNIQ Hall</p>
            <p>{cart.aciklama}</p>
          </div>

          <button className="biletal">Bilet Al</button>
          <button className="takvimekle">Takvime Ekle</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
