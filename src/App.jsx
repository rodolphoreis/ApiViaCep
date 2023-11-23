import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'
import axios from 'axios'
import { FaMapMarkedAlt } from "react-icons/fa";

function App() {
  
      const [logradouro, setlogradouro] = useState()
      const [complemento, setComplemento] = useState()
      const [localidade, setLocalidade] = useState()
      const [uf, setUf] = useState()
      const [ddd, setDdd] = useState()
      const [bairro, setbairro] = useState()
      const [input, setInput] = useState()


      
      async function fetchData(){
        if(!input){
          alert("Digite o CEP")
          return
        }
        try{
          const {data} = await axios.get(`https://viacep.com.br/ws/${input}/json/`)
          setlogradouro(data.logradouro)
          setComplemento(data.complemento)
          setLocalidade(data.localidade)
          setUf(data.uf)
          setbairro(data.bairro)
          setDdd(data.ddd)
        }catch(e){
          alert("ERRO: " + e)
        }
      }
    const Input = (props) => {
      return(
        
                <form
                onSubmit={props.enviar}>

                <input
                        type="number" placeholder= "Digite seu CEP" className='InputCep'
                        onChange={props.onSubmit}
                />
                

                <button className='Btn' type='submit'>
                Pesquisar
                </button>
  
  </form>
                      
            )
    }


      return (
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>

                  <div className='Image'>
                  <img src="/correios.jpeg" alt="Logo" className='Img'/>
                  </div>
                  
                
                      <Input  onChange={(e) => {setInput(e.target.value)}} enviar={(event) => {
                        event.preventDefault()
                        fetchData()
                      }
                    }/>
              


                <div className='Text'>
                  {input}
                  { logradouro ?  (
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
                ):(<FaMapMarkedAlt style={{width: "100px", height: "90px"}}/>) }
                </div>

              </div>
      )
}
export default App