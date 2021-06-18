import Header from '@/components/Header.js'
import Data from '@/components/Data'
// import Collection from '@/components/Collection'
export default function Home() {

  return (
    <div>
      <Header title={'Mini Unsplash'} />
      <center>
        <h1 style={{ marginBottom: '0px' }}>Unsplash </h1>
        <p style={{ marginTop: '0px' }}>a simple photo gallery</p>
      </center>
      <Data />
      {/* <Collection /> */}
    </div>
  )
}
