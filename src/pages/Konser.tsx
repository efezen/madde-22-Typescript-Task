import React from "react";
const Konser = () => {
  return (
    <div className="container">
      <div className="cart">
        <div className="siyah-sol">
          <p>7 Eylül Salı 21:15</p>
        </div>
        <img src="4.png" />
        <div className="etiket">KONSER</div>
        <div className="metinler">
          <p className="bkm">BKM Yaz Etkinlikleri Zengin Mutfağı</p>
          <p className="konum">Maximum UNIQ Hall</p>
          <p>
            1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
            Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde
            ve genç bir.... Detaylı Bilgi
          </p>
        </div>

        <button className="biletal">Bilet Al</button>
        <button className="takvimekle">Takvime Ekle</button>
      </div>
    </div>
  );
};

export default Konser;
