import Bio from '../bio/Bio'
import Gallery from '../gallery/Gallery'

const Home = ({ bio }) => {
  return (
    <>
      <Bio
        bio={bio}
      />
      <Gallery />
    </>
  )
}

export default Home
