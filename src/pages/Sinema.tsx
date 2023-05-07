import React from "react";
const Sinema = () => {
  return (
    <div>
      <div className="container">
        <div className="cart">
          <div className="siyah-sol">
            <p>8 Eylül Çarşamba 21:15</p>
          </div>
          <img src="2.png" />
          <div className="etiket">SİNEMA</div>
          <div className="metinler">
            <p className="bkm">Yasemin Sakallıoğlu</p>
            <p className="konum">Maximum UNIQ Hall</p>
            <p>
              1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
              Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı
              rolde ve genç bir.... Detaylı Bilgi
            </p>
          </div>

          <button className="biletal">Bilet Al</button>
          <button className="takvimekle">Takvime Ekle</button>
        </div>
      </div>
      <div className="container">
        <div className="cart">
          <div className="siyah-sol">
            <p>8 Eylül Çarşamba 21:15</p>
          </div>
          <img src="3.png" />
          <div className="etiket">SİNEMA</div>
          <div className="metinler">
            <p className="bkm">Sinema Keyfi Rifkins Festival</p>
            <p className="konum">Maximum UNIQ Hall</p>
            <p>
              1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
              Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı
              rolde ve genç bir.... Detaylı Bilgi
            </p>
          </div>

          <button className="biletal">Bilet Al</button>
          <button className="takvimekle">Takvime Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Sinema;
