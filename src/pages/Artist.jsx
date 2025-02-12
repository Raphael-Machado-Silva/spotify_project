import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

const Artist = () => {
  return (
    <div className="artist">
      <div className="artist__header" style={{backgroundImage: 
        "linear-gradient(to bottom, var(--_shade), var(--_shade)), url(https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9)", }}>

      </div>
      
      <div className="artist__body">

      </div>

      <Link to='/song/1'>
        <FontAwesomeIcon className='single-item__icon  single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist

