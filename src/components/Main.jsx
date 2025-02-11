import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  return (
    <div className="main">
        <div className="item-list">
            <div className="item-list__header">
                <h2>Artistas populares</h2>
                <a className="item-list__link" href="">Mostrar tudo</a>
            </div> 

            <div className="single-item">
                <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Henrique & Juliano" />

                <FontAwesomeIcon icon={faCirclePlay} />

                <p className="single-item">Henrique & Juliano</p>

                <p className="single-item">Artista</p>
            </div>
        </div>
    </div>
  )
}

export default Main
