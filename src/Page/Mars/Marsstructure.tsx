import '..//Mercury/Mercury.css';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import '..//../components/Header/Header.css';
import jsonData from "..//../Api/data.json";
import { PlanetData } from '../../types';
import Mars2 from "..//../assets/Mars/mars2.png";
import { Link } from 'react-router-dom';
import Marsitem from './Marsitem';


const Mars = () => {
  const [data] = useState<PlanetData[]>(jsonData);
  return (
      <div className='container'>
      <Header />
      <div className='mars'>
        <div className='card2'>
          {data
            .filter((item: any) => item.name === "Mars")
            .map((fact) => {
              return (
                <>
                  <div className='desc'>
                  <img className='img' src = { Mars2 } ></img>
                    <div className='card3'>
                      <div className='order1'>
                 <h1 className='title'>{fact.name}</h1>
                  <p className='overview'>{fact.structure.content}</p>
                  <p className='wikipedia'> source :
                    <a className='wikipedia' target="_blank" href={fact.structure.source}>
                      Wikipedia
                    </a>
                      </p>
                      </div>
                  <div className='pages'>
                     <p className='button1'>01 OVERVIEW <Link to="/mars">MARS</Link>MARS</p>
                     <p className='button2'>02 INTERNAT <Link to="/marsstructure">STRUCTURE</Link></p>
                     <p className='button3'>03 SURFACE <Link to="/marsgeology">GEOLOGY</Link></p>
                    </div>
                  </div>
                  </div>
                   <div className='foot'>
                      <div className='box'>
                         <Marsitem className="rotation" title="ROTATION TIME" rotation={ fact.rotation }/> 
                      </div>
                      <div className='box'>
                         <Marsitem title="REVOLUTION TIME" rotation={ fact.revolution }/>
                      </div>
                      <div className='box'>
                         <Marsitem title="RADZIUS" rotation={ fact.radius }/>
                      </div>
                      <div className='box'>
                         <Marsitem   title="AVERAGE TEMP" rotation={ fact.temperature }/>
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

export default Mars