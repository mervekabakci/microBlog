import BannerSlider from "../../Components/BannerSlider";
import BlogDetails from "../../Components/BlogDetails";
import Card from "../../Components/Card";
export default function Home() {
    return(
      <div className="container-md"> 
          {/* <BlogDetails /> */}
          <div className="bannerWrapper homeBannerWrapper">
            <BannerSlider />
          </div>
          <Card />
      </div>
    )
}