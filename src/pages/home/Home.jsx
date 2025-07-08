import BannerSlider from "../../Components/BannerSlider";
import Card from "../../Components/Card";
import Login from "../auth/Login";
import Register from "../auth/Register";

export default function Home() {
    return(
      <div className="container-md"> 
          <div className="bannerWrapper homeBannerWrapper">
            <BannerSlider />
          </div>
          <Card />
          <Login />
          <Register />
      </div>
    )
}