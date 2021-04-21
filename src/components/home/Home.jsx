import { useSelector } from 'react-redux'
import Bio from '../bio/Bio'
import Gallery from '../gallery/Gallery'

const Home = () => {
  const { bio } = useSelector(state => state.bio)
  document.title = bio?.name ? `${bio?.name} • Instagram` : 'Instagram'

  return (
    <>
      <Bio/>
      <Gallery />
    </>
  )
}

export default Home
