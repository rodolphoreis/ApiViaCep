import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'

function App() {
  
      const [logradouro, setlogradouro] = useState()
      const [complemento, setComplemento] = useState()
      const [localidade, setLocalidade] = useState()
      const [uf, setUf] = useState()
      const [ddd, setDdd] = useState()
      const [bairro, setbairro] = useState()
      const [input, setInput] = useState()


      async function fetchData(){
        const {data} = await api.get(`/${input}/json/`)
        setlogradouro(data.logradouro)
        setComplemento(data.complemento)
        setLocalidade(data.localidade)
        setUf(data.uf)
        setbairro(data.bairro)
        setDdd(data.ddd)

      }
    


      return (
              <>
                  <div className='Image'>
                  <img src="/correios.jpeg" alt="Logo" className='Img'/>
                  </div>
                  
                  <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        fetchData()
                      }}>

                      <input
                              type="text" placeholder='Digite seu CEP' className='InputCep'
                              onChange={(event) => {
                                setInput(event.target.value)
                              }}
                      />
                      
                      <button className='Btn' type='submit'>
                      Pesquisar
                      </button>
                
                </form>


                <div className='Text'>
                  <h5>
                    RUA: {logradouro}
                    <br />
                    BAIRRO: {bairro}
                    <br />
                    LOCALIDADE: {localidade}
                    <br />
                    UF: {uf}
                    <br />
                    DDD:{ddd}
                  </h5>
                </div>

              </>
      )
}
export default App