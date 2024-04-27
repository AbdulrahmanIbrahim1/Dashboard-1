import React from 'react'
import './SideBar.css'
import { useContext } from 'react'
import { DisplaySide, Dark } from '../.././App'
import { Link } from 'react-router-dom';


export default function SideBar() {
  const { display, setTrue } = useContext(DisplaySide);
  const { dark } = useContext(Dark)
  return (
    <>
      <div className={` sideBar  ${display ? 'sideBar-0' : 'sideBar'}  ${dark ? "bg-dark text-white-50" : " "}`}>
        <div className='g-0'>
          <i className={`fa-solid fa-angle-left ${display ? "" : "d-none"}`} onClick={() => { setTrue(false) }}></i>
          <div className="img-prof-0" >
            <img className='img-fluid' src="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" alt="img" />
            <div className={display ? "" : "d-none"}>
              <p className={dark ? "text-light " : ""}>Naruto </p>
              <p className='text-info'>Hocaky</p>
            </div>
          </div>
        </div>

        <div className='g-1'>
          <div className='icon0'>
            <Link to={'/'} className={`text-decoration-none icon ${dark?  " text-white-50" : "text-black"}`} >
              <i className="fa-solid fa-house"></i>
              <p className={display ? "" : "d-none"}>Dashboard</p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'team'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>
            <i className="fa-solid fa-user-group"></i>
            <p className={display ? "" : "d-none"}>manage team</p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'contacts'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>
            <i className="fa-solid fa-users-line"></i>
            <p className={display ? "" : "d-none"}>contacts information</p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'balances'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>
            <i className="fa-solid fa-sheet-plastic"></i>
            <p className={display ? "" : "d-none"}>invoices balances</p>
            </Link>
          </div>

        </div>
        <div className='g-2' >
          <div className='icon0'>
            <Link to={'profile'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>
            <i className="fa-regular fa-user"></i>
            <p className={display ? "" : "d-none"}>profile form </p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'calender'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>

            <i className="fa-regular fa-calendar"></i>
            <p className={display ? "" : "d-none"}>calender </p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'faq'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>

            <i className="fa-regular fa-circle-question"></i>
            <p className={display ? "" : "d-none"}>faq page</p>
            </Link>
          </div>
        </div>
        <div className='g-3'>
          <div className='icon0'>
            <Link to={'bar'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>
            <i className="fa-solid fa-chart-simple"></i>
            <p className={display ? "" : "d-none"}>bar chart</p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'pie'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>

            <i className="fa-solid fa-chart-pie"></i>
            <p className={display ? "" : "d-none"}>pie chart</p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'line'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>

            <i className="fa-solid fa-chart-line"></i>
            <p className={display ? "" : "d-none"}>line chart</p>
            </Link>
          </div>
          <div className='icon0'>
            <Link to={'geography'} className={`text-decoration-none icon ${dark ? " text-white-50" : "text-black"}`}>

            <i className="fa-regular fa-map"></i>
            <p className={display ? "" : "d-none"}>geography chart</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
