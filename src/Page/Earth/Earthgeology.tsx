import { useState } from 'react';
import Header from '../../components/Header/Header';
import '../Mercury/Mercury.css';
import '..//../components/Header/Header.css';
import jsonData from "../../Api/data.json";
import { PlanetData } from '../../types';
import Earthitem from './Earthitem';
import Earth3  from "..//..//assets/Earth/earth3.png";
import { Link } from 'react-router-dom';

const Earthgeology = () => {
    const [data] = useState<PlanetData[]>(jsonData);

  return (
    <div className='container'>
    <Header />
    <div className='Earth'>
      <div className='card2'>
        {data
          .filter((item: any) => item.name === "Earth")
          .map((fact) => {
            return (
              <>
                <div className='desc'>
                <img className='img' src={Earth3}></img>
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
                     <p className='button1'>01 OVERVIEW <Link to="/mercury">EARTH</Link></p>
                     <p className='button2'>02 Internal <Link to="/earthstructure">STRUCTURE</Link></p>
                     <p className='button2'>03 SURFACE <Link to="/earthgeology">GEOLOGY</Link></p>
                  </div>
                </div>
                </div>
                 <div className='foot'>
                    <div className='box'>
                       <Earthitem className="rotation" title="ROTATION TIME" rotation={ fact.rotation }/> 
                    </div>
                    <div className='box'>
                       <Earthitem title="REVOLUTION TIME" rotation={ fact.revolution }/>
                    </div>
                    <div className='box'>
                       <Earthitem title="RADZIUS" rotation={ fact.radius }/>
                    </div>
                    <div className='box'>
                       <Earthitem   title="AVERAGE TEMP" rotation={ fact.temperature }/>
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

export default Earthgeology