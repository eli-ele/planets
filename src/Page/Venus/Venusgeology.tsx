import './Venus.css'
import { useState } from 'react';
import Header from '../../components/Header/Header';
import '../Mercury/Mercury.css';
import '..//../components/Header/Header.css';
import jsonData from "..//../Api/data.json";
import { PlanetData } from '../../types';
import Venusitem from "./Venusitem";
import venus3  from "..//..//assets/Venus/venus3.png";
import { Link } from 'react-router-dom';

const venusgeology = () => {
    const [data] = useState<PlanetData[]>(jsonData);

  return (
    <div className='container'>
    <Header />
    <div className='venus'>
      <div className='card2'>
        {data
          .filter((item: any) => item.name === "VENUS")
          .map((fact) => {
            return (
              <>
                <div className='desc'>
                <img className='img' src={venus3}></img>
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
                     <p className='button1'>01 OVERVIEW<Link to="/Venus">VANUS</Link></p>
                     <p className='button2'>02 INTERNAL<Link to="/venusstructure">STRUCTURE</Link></p>
                     <p className='button2'>03 SURFACE<Link to="/venusgeology">GEOLOGY</Link></p>
                  </div>
                </div>
                </div>
                 <div className='foot'>
                    <div className='box'>
                       <Venusitem className="rotation" title="ROTATION TIME" rotation={ fact.rotation }/> 
                    </div>
                    <div className='box'>
                       <Venusitem title="REVOLUTION TIME" rotation={ fact.revolution }/>
                    </div>
                    <div className='box'>
                       <Venusitem title="RADZIUS" rotation={ fact.radius }/>
                    </div>
                    <div className='box'>
                       <Venusitem   title="AVERAGE TEMP" rotation={ fact.temperature }/>
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

export default venusgeology