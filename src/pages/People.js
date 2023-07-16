import React, { useState, useLayoutEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Grid, } from '@mui/material'
import axios from 'axios'

export default function People() {
  const [People, setPeople] = useState([])


  useLayoutEffect(() => {
      axios.get("https://swapi.dev/api/people/")
          .then((retorno) => setPeople(retorno.data.results))
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
    <h1 className='title'>PERSONAGENS</h1>
    <table className="api"> 
    {
        People.map((item, key) =>
        <tr>
            <td style={{widht: "33%"}}><b>Nome:</b> {item.name}</td>
            <td style={{widht: "33%"}}><b>Altura:</b> {item.height}</td>
           

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
