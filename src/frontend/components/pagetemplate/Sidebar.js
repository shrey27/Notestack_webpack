import { Fragment } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { navlinks } from '../../utility/constants';

const backgroundStyle = ({ isActive }) => {
  return isActive ? `sidebar__options selected` : `sidebar__options`;
};

export function Sidebar() {
  return (
    <Fragment>
      <div className='sidebar sidefixed'>
        {navlinks.map((elem) => {
          return (
            <NavLink to={elem?.path} key={elem.id} className={backgroundStyle}>
              <i className={elem.class}></i>
              <span className='sidebar__options__span'>{elem.name}</span>
            </NavLink>
          );
        })}
      </div>
    </Fragment>
  );
}
