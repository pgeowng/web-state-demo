import React from 'react'
import {ButtonReset} from '../UI'
import {I18N} from

const Category = () => {}

const Entry = ({ id, icon, iconAlt }) => {
  const i18n = useContext(I18N);

  return <li className="menu__entry">
    {icon && <img src={icon} alt={iconAlt}/>}
    <ButtonReset className="menu__button">{}</ButtonReset>
  </li>
}

const struct = <></>

export const Menu = ({ struct }) => {}
