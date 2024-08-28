// import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { MainCorpo } from './styled'


function App() {

  // const paragr2 = {
  //   color: 'orange',
  //   fontSize: '1.3em'
  // }

  return (
    <>
      <Cabecalho/>
      <MainCorpo/>
      <Rodape/>
    </>



    // <div className='div1'>
    //   <Cabecalho/>
    //   <p style={{color: 'red', backgroundColor: '#fbb'}}>Primeiro Parágrafo.</p>
    //   <p style={paragr2}>Segundo Parágrafo.</p>
    // </div>
  )
}

export default App
