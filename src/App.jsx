import Card from './Components/Card'
import Footer from './Components/Footer'
import Header from './Components/Header'
import User from './Components/User'


export default function App() {

  return (
    <>
      <div className='main'>
      <Header />
      <div className="center">
        <div className="container-md"> 
          <div className="bannerWrapper bg-gray-800">
            Banner Alanı
          </div>
          <Card />
          <User />
        </div>
      </div>
      <Footer />
      </div>
    </>
  )
}