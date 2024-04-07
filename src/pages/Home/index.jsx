import Image from "../../assets/images/duck and bee banner.jpg";
import AandE from "../../assets/images/IMG_3845.jpeg"
import '../../App.css'
function Home() {
  return (
    <div className="pageBackground">
       <h1 style={{fontSize: "5em"}}>Welcome to The Duck and Bee</h1>
       
     
      <img src={AandE} className="AandE"></img>
      <p>We are Eleanor and Alana</p>

      <p>Together we have chased our dream of moving to Cornwall and buying the most amazing little farmhouse in the middle of nowhere but central to everywhere... in Cornwall that is 😊</p>
      <p>We love trips to the beach and making improvements to our miniature smallholding</p>
      <p>We love entertaining and sharing with our friends and loved ones</p>
      <p>Join us as we share our journey, everything from growing our own, to boating, to career changes, to wellness and beyond</p>
      <img className="bannerImage" src={Image}></img>
      </div>
  );
}

export default Home;