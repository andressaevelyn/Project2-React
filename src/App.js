import bee from './assets/bee.png';
import './App.css';
import Header from './Components/Header/Header';
import Line from './Components/Line/Line';
import {AiOutlineComment, AiOutlineHeart, AiOutlineStar, AiOutlineGift, AiFillStar} from "react-icons/ai";
import Menu from './Components/Menu/Menu';
import Beemovie from './assets/beemovie.jpeg';
import Shrek from './assets/shrekmovie.jpeg';
import EraGelo from './assets/eraGelo.jpeg';
import ToyStory  from './assets/ToyStorie.jpeg';
import IrmaoUrso  from './assets/irmaoUrsoMovie.jpeg';
import AguaAbaixo  from './assets/aguaAbaixo.jpeg';
import CasaMonstro  from './assets/casaMonstro.jpeg';
import Secret  from './assets/Secret.jpeg';
import Family  from './assets/family.jpeg';
import Lion  from './assets/Lion.jpeg';

import Livro from './Components/Livro/Livro';



import CardAvalicao from './Components/CardAvaliacao/CardAvaliacao';

function App() {
  return (
    <div className="App">
      <div className="AppInterno">
        <Header imagem={bee} titulo="Andressa Evelyn" lidos="130" vouLer="60"/>

        <Line />

        <h2 id="firstSection">Minha Estante</h2>
        
        <div className="Section">
          <div id="columnMenu">
          <Menu icon={<AiOutlineHeart />} categoria="Favoritos"/>
          <Menu icon={<AiOutlineGift />} categoria="Desejados"/>
          <Menu icon={<AiOutlineStar />} categoria="Favoritos"/>
          <Menu icon={<AiOutlineComment />} categoria="Resenhas"/>
          </div>

          <div id="catalogo">

            <div className='row'>
              <Livro imgFilme={Beemovie} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
              <Livro imgFilme={Shrek} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
              <Livro imgFilme={EraGelo} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
              <Livro imgFilme={ToyStory} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
              <Livro imgFilme={IrmaoUrso} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
            </div>

            <div className='row'>
            <Livro imgFilme={AguaAbaixo} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
            <Livro imgFilme={CasaMonstro} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
            <Livro imgFilme={Family} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
            <Livro imgFilme={Lion} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
            <Livro imgFilme={Secret} altFilme="Imagem do filme Bee Movie" icon={<AiFillStar/>}/>
            </div>
          </div>
        </div>

        <h2 id="firstSection">Últimas Avaliações</h2>

        <div id="cards">
        <CardAvalicao imgFilme={Beemovie} altFilme="Imagem do filme Bee Movie" 
        icon={<AiFillStar/>} titulo="Bee Movie"
         paragrafo="Bee Movie é uma animação divertida que conta a história de uma abelha chamada Barry Benson. Em sua jornada, ele descobre que os humanos estão roubando o mel das abelhas. Decide lutar contra essa injustiça e processar a humanidade."/>
    
        <CardAvalicao imgFilme={Family} altFilme="Imagem do filme A Familia do futuro" 
        icon={<AiFillStar/>} titulo="A Familia do Futuro"
         paragrafo="Animação que conta a história de Lewis, um jovem inventor órfão que viaja no tempo para conhecer a excêntrica e tecnologicamente avançada família de Wilbur. Juntos, eles lutam para impedir um vilão do futuro de mudar o destino da família de Lewis. O filme aborda temas como família, perseverança e inovação."/>
         </div>
    </div>
    </div>
  );
}

export default App;
