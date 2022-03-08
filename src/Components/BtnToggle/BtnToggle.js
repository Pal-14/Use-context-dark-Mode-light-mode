import './BtnToggle.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';


export default function BtnToggle() {

  const {toggleTheme, theme} = useContext(ThemeContext)
  // const {toggleBtn} = useContext(ThemeContext)

  return (
    <button 
    onClick={toggleTheme}
    className={theme ? 'btn-toggle' : 'btn-toggle dark-btn'}
    
    >  {theme ? 'LIGHT' : 'DARK'}</button>
  )
}
