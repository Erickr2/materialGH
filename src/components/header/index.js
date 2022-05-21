
import React, { useContext } from 'react';
import  Homero  from '../../imgs/Homero.jpg';
import { Link } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovied";

export const Header = () => {

  const value = useContext(Datacontext);
  const [menu, setMenu] = value.menu;
  const [Cart] = value.Cart;

  const isA = () =>{
    setMenu(!menu);
  }



  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <img src={Homero} alt='logo' width="100" height="100"></img>
        </div>
      </Link>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/products'>productos</Link>
        </li>
      </ul>
      <div className='cart' onClick={isA}>
      <box-icon name='cart'></box-icon>
      <span className='totalItem'>{Cart.length}</span>
      </div>

    </header>
  )
}
