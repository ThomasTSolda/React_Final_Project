import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Grid, } from '@mui/material'

export default function Starships() {

    const [Starships, setStarships] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/starships/")
            .then((retorno) => setStarships(retorno.data.results))
            .catch((e) => alert(e))

    }, [])

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>

                    <MenuOpcoes />

                </Grid>

                <div>
                    <h1 className='title'>NAVES ESPACIAIS</h1>
                    <table className="api"> 
                    {
                        Starships.map((item, key) =>
                                <tr>
                                    <td style={{widht: "33%"}}><b>Nome:</b> {item.name}</td>
                                    <td style={{widht: "33%"}}><b>Modelo:</b> {item.model}</td>
                                    <td style={{widht: "33%"}}><b>Fábrica:</b> {item.manufacturer}</td>

                                </tr>
                        )
                    }
                    </table>
                </div>

                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>

        </>
    )
}
