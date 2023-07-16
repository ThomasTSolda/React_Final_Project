import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Grid, } from '@mui/material'

export default function Species() {

    const [Species, setSpecies] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/species/")
            .then((retorno) => setSpecies(retorno.data.results))
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
    <h1 className='title'>ESPÉCIES</h1>
    <table className="api">  
    {
        Species.map((item, key) =>
        <tr>
                                    <td style={{widht: "33%"}}><b>Nome da Espécie:</b> {item.name}</td>
                                    <td style={{widht: "33%"}}><b>Língua:</b> {item.language}</td>


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
