import { useSelector } from 'react-redux'
import Bio from '../bio/Bio'
import Gallery from '../gallery/Gallery'
import loader from '../../common/loader.svg'

const Home = () => {
  const galleryState = useSelector(state => state.gallery)

  return (
    <>
      {galleryState.fetchStatus === 'success' &&
        <>
          <Bio/>
          <Gallery />
        </>
      }
      {galleryState.fetchStatus === 'loading' &&
        <div className="loader">
          <img src={loader}  alt="loader"/>
        </div>
      }
    </>
  )
}

export default Home
