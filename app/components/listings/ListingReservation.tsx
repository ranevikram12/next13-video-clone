'use client';

import { Range } from "react-date-range";
import {useState, useEffect} from 'react';


import Button from "../Button";
import Calendar from "../inputs/Calendar";

interface ListingReservationProps {
  price: number;
  dateRange: Range,
  setReservationTime: (value: string) => void,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  price,
  dateRange,
  setReservationTime,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {


  const [hours, setHours] = useState("1");
  const [mintues, setMin] = useState("00");
  const [amPm, setAmPm] = useState("AM");

  const [time, setTime] = useState("");

  

  

  const _handleChangeHours = (event: any) => {
  

    setHours(event.target.value);

    setTime(event.target.value+":"+mintues+" "+ amPm);

  
  }



  const _handleChangeMin = (event: any) => {
   
 
     setMin(event.target.value);
 
     setTime(hours+":"+event.target.value+" "+ amPm);
 
    
   }


   const _handleChangeAmPm = (event: any) => {
  
 
     setAmPm(event.target.value);
 
     setTime(hours+":"+mintues+" "+ event.target.value);
 
   
   }


  useEffect(() => {
    console.log(time);
    setReservationTime(time);
  }, [time, hours, amPm, mintues]);


  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div className="
      flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {price}
        </div>
        <div className="font-light text-neutral-600">
          night
        </div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}
      />
      <hr />


      <div className="mt-2 ml-3 p-5 w-40 bg-white rounded-lg shadow-xl">
  <div className="flex">
    <select name="hours" className="bg-transparent text-xl appearance-none outline-none" onChange={(option) => _handleChangeHours(option)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
    <span className="text-xl mr-3 ">:</span>
    <select name="minutes" className="bg-transparent text-xl appearance-none outline-none mr-4" onChange={(option) => _handleChangeMin(option)}>
      <option value="0">00</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>

     
    </select>
    <select name="ampm" className="bg-transparent text-xl appearance-none outline-none" onChange={(option) => _handleChangeAmPm(option)}>
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
  </div>
</div>


      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Reserve" 
           onClick={onSubmit}
        //  onClick={HandelChange}
        />
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>
          Total
        </div>
        <div>
          $ {totalPrice}
        </div>
      </div>
    </div>
   );
}
 
export default ListingReservation;