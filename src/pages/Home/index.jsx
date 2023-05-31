import image from "../../assets/images/duck and bee banner.jpg";
import '../../App.css'
function Home() {
  return (
    <div className="pageBackground">
      <img className="bannerImage" src={image}></img>
    </div>
  );
}

export default Home;
