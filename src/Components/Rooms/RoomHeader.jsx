import { DateRange, DateRangePicker } from "react-date-range";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./RoomHeader.css";
import { BiSolidHotel } from "react-icons/bi";
import { MdDateRange, MdMan } from "react-icons/md";

const RoomHeader = ({ handleClick }) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  // const [openOptions, setOpenOptions] = useState(false);

  function handleSearch() {
    handleClick(destination);
  }

  return (
    <div>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <BiSolidHotel />
          <input
            type="text"
            placeholder="Where are you going?"
            className="headerSearchInput"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          />
        </div>
        <div className="headerSearchItem">
          <MdDateRange />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
            dates[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="headerSearchItem">
          <MdMan />
          <span
            //   onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >
            1 adult · 2 children · 3 room
          </span>
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;
