import './Uranus.css'
import { useState } from 'react';
import Header from '../../components/Header/Header';
import '..//../components/Header/Header.css';
import jsonData from "..//../Api/data.json";
import { PlanetData } from '../../types';
import Uranus3 from "..//..//assets/Uranus/uranus3.png";
import { Link } from 'react-router-dom';
import '..//Mercury/Mercury.css';
import Uranusitem from './Uranusitem';


const Uranusgeology = () => {
  const [data] = useState<PlanetData[]>(jsonData);
  return (
      <div className='container'>
      <Header />
      <div className='uranus'>
        <div className='card2'>
          {data
            .filter((item: any) => item.name === "URANUS")
            .map((fact) => {
              return (
                <>
                  <div className='desc'>
                  <img className='img' src = { Uranus3 } ></img>
                    <div className='card3'>
                      <div className='order1'>
                 <h1 className='title'>{fact.name}</h1>
                  <p className='overview'>{fact.geology.content}</p>
                  <p className='wikipedia'> source :
                    <a className='wikipedia' target="_blank" href={fact.geology.source}>
                      Wikipedia
                    </a>
                      </p>
                      </div>
                  <div className='pages'>
                     <p className='button1'>01 OVERVIEW <Link to="/Uranus">URANUS</Link></p>
                     <p className='button2'>02 INTERNAT <Link to="/Uranusstructure">STRUCTURE</Link></p>
                     <p className='button3'>03 SURFACE <Link to="/Uranusgeology">GEOLOGY</Link></p>
                    </div>
                  </div>
                  </div>
                   <div className='foot'>
                      <div className='box'>
                         <Uranusitem className="rotation" title="ROTATION TIME" rotation={ fact.rotation }/> 
                      </div>
                      <div className='box'>
                         <Uranusitem title="REVOLUTION TIME" rotation={ fact.revolution }/>
                      </div>
                      <div className='box'>
                         <Uranusitem title="RADZIUS" rotation={ fact.radius }/>
                      </div>
                      <div className='box'>
                         <Uranusitem   title="AVERAGE TEMP" rotation={ fact.temperature }/>
                     </div>
                   </div>
              </>
              )
            })
          }
        </div>
      </div>
          </div>
  )
}

export default Uranusgeology