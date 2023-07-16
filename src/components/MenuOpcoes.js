import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <button className='button_menu'> Home</button>
            </Link>
            <Link to="/films">
                <button className='button_menu'>Filmes</button>
            </Link>
            <Link to="/people">
                <button className='button_menu'>Personagens</button>
            </Link>
            <Link to="/planets">
                <button className='button_menu'>Planetas</button>
            </Link>
            <Link to="/species">
                <button className='button_menu'>Espécies</button>
            </Link>
            <Link to="/starchips">
                <button className='button_menu'>Starships</button>
            </Link>
            <Link to="/sobre">
                <button className='button_menu'>Sobre</button>
            </Link>
            <Link to="/duvidas">
                <button className='button_menu'>Dúvidas</button>
            </Link>
            <button className='button_menu' onClick={logoff}><LogoutIcon /></button>
        </div>


    )
}

