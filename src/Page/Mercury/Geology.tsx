import { useState } from 'react';
import Header from '../../components/Header/Header';
import './Mercury.css';
import '..//../components/Header/Header.css';
import jsonData from "..//../Api/data.json";
import { PlanetData } from '../../types';
import Mercureitem from './Mercure-item/Mercureitem';
import Mercury3 from "..//../assets/Mercuryimg/mercury3.png";
import { Link } from 'react-router-dom';


const Geology = () => {
  const [data] = useState<PlanetData[]>(jsonData);
  return (
      <div className='container'>
      <Header />
      <div className='mercury'>
        <div className='card2'>
          {data
            .filter((item: any) => item.name === "MERCURY")
            .map((fact) => {
              return (
                <>
                  <div className='desc'>
                  <img className='img' src={Mercury3}></img>
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
                     <p className='button1'>01 OVERVIEW <Link to="/mercury">MERCURY</Link></p>
                     <p className='button2'>02 INTERNAT <Link to="/structure">STRUCTURE</Link></p>
                     <p className='button3'>03 SURFACE <Link to="/geology">GEOLOGY</Link></p>
                    </div>
                  </div>
                  </div>
                   <div className='foot'>
                      <div className='box'>
                         <Mercureitem className="rotation" title="ROTATION TIME" rotation={ fact.rotation }/> 
                      </div>
                      <div className='box'>
                         <Mercureitem title="REVOLUTION TIME" rotation={ fact.revolution }/>
                      </div>
                      <div className='box'>
                         <Mercureitem title="RADZIUS" rotation={ fact.radius }/>
                      </div>
                      <div className='box'>
                         <Mercureitem   title="AVERAGE TEMP" rotation={ fact.temperature }/>
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

export default Geology