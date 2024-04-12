import NavBar from '../componets/NavBar'
import './Home.css'
import dieta from './dieta.png'
import medita from './medita.png'
import exercicio from './exercicio.png'
export default function Home(){
    return(
        <>
            <div className='container'>

                <div className='nav'>
                    <NavBar/>
                </div>

                <div className='container-card'>

                    <div className='card'>
                         <img src={dieta} className="image-car" alt="dieta" />
                    </div>
                    <div className='card'>
                        <img src={exercicio} className="image-car" alt="exercicio" />
                    </div>
                    <div className='card'>
                        <img src={medita} className="image-car" alt="medita" />
                    </div>
                </div>

            </div>
          </>
    )
}