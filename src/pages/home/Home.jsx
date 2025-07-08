import BannerSlider from "../../Components/BannerSlider";
import Card from "../../Components/Card";

export default function Home({ postList=[] }) {
    return(
      <div className="container-md"> 
          <div className="bannerWrapper homeBannerWrapper">
            <BannerSlider />
          </div>
          <Card postList={postList} />
      </div>
    )
}