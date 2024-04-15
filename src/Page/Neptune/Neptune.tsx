import { useState } from 'react';
import Header from '../../components/Header/Header';
import '..//../components/Header/Header.css';
import jsonData from "..//../Api/data.json";
import { PlanetData } from '../../types';
import Neptunee from "..//../assets/Neptune/Neptunee.png";
import { Link } from 'react-router-dom';
import Neptuneitem from './Neptuneitem';
import './Neptune.css';
import '..//Mercury/Mercury.css';

const Neptune = () => {
  const [data] = useState<PlanetData[]>(jsonData);
  return (
      <div className='container'>
      <Header />
      <div className='neptune'>
        <div className='card2'>
          {data
            .filter((item: any) => item.name === "NEPTUNE")
            .map((fact,index) => {
              return (
                <>
                  <div className='desc' key={index}>
                  <img className='img' src = { Neptunee } ></img>
                    <div className='card3'>
                      <div className='order1'>
                 <h1 className='title'>{fact.name}</h1>
                  <p className='overview'>{fact.overview.content}</p>
                  <p className='wikipedia'> source :
                    <a className='wikipedia' target="_blank" href={fact.overview.source}>
                      Wikipedia
                    </a>
                      </p>
                      </div>
                  <div className='pages'>
                     <p className='button1'>01 OVERVIEW <Link to="/Neptune">NEPTUNE</Link></p>
                     <p className='button2'>02 INTERNAT <Link to="/NeptuneStructure">STRUCTURE</Link></p>
                     <p className='button3'>03 SURFACE <Link to="/Neptunegeology">GEOLOGY</Link></p>
                    </div>
                  </div>
                  </div>
                   <div className='foot'>
                      <div className='box'>
                         <Neptuneitem className="rotation" title="ROTATION TIME" rotation={ fact.rotation }/> 
                      </div>
                      <div className='box'>
                         <Neptuneitem title="REVOLUTION TIME" rotation={ fact.revolution }/>
                      </div>
                      <div className='box'>
                         <Neptuneitem title="RADZIUS" rotation={ fact.radius }/>
                      </div>
                      <div className='box'>
                         <Neptuneitem   title="AVERAGE TEMP" rotation={ fact.temperature }/>
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

export default Neptune