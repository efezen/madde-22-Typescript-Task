import { useState } from 'react';
import Calendar from 'react-calendar';

const Takvim = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      <button onClick={toggleCalendar}>Takvimde Gör</button>
      {showCalendar && (
        <Calendar onChange={handleDateChange} value={date} />
      )}
    </div>
  );
}

export default Takvim;
