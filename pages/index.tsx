import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import { useState } from "react";
import ReservationForm from "@/Components/ReservationForm";
import CalendarView from "@/Components/CalendarView";
import {ReservationData} from "@/Components/ReservationForm"




export default function Home() {

  const [reservations, setReservations] = useState<ReservationData[]>([]);

  const handleReserve = (reservationData: ReservationData) => {
    setReservations([...reservations, reservationData]);
  };

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* Hero Section  */}
        <Hero />
      </div>
    </div>
  )
}