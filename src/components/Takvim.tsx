import React, { useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// Takvim adında bir bileşen tanımlıyoruz.
const Takvim = () => {
  // useState kullanarak, bileşenin tarih ve takvim görünümünün durumunu yönetiyoruz.
  const [date, setDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  // Tarih değiştiğinde çağrılacak olan işlevi tanımlıyoruz.
  const handleDateChange = (
    value: Value,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Değer, bir tarihse, tarih durumunu güncelliyoruz.
    if (value instanceof Date) {
      setDate(value);
    }
  };

  // Takvim görünümünü açıp kapamak için bir işlev tanımlıyoruz.
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Bileşenin JSX kodunu oluşturuyoruz.
  return (
    <div>
      <CalendarMonthIcon />
      <button onClick={toggleCalendar}>Takvimde Gör</button>
      {/* Takvim görünümü, showCalendar durumuna bağlı olarak, sadece showCalendar true olduğunda görüntülenir. */}
      {showCalendar && <Calendar onChange={handleDateChange} value={date} />}
    </div>
  );
};

// Bileşeni diğer bileşenlerde kullanabilmek için dışa aktarıyoruz.
export default Takvim;
