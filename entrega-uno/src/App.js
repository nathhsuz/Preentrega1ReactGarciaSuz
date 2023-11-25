import ProfileCard from "./ProfileCards";
import NetflImg from "./img/Netflix.jpg";
import AmP from "./img/AmazonPrime.png";
import Hbo from "./img/hbo.webp";
import "bulma/css/bulma.css";

function App(){

  return(  
  <div><section className="hero is-success">
  <div className="hero-body">
    <h1 className="title">
      Canales de Streaming
    </h1>
  </div>
</section>

  <div className="columns">
    <div className="column is-4">
<ProfileCard titulo="Netflix" arroba="@Netflix1" img={NetflImg}/>
    </div>
     <div className="column is-4">
      <ProfileCard titulo="AmazonPrime" arroba="@AmazonPrime2" img={AmP}/>
    </div>
     <div className="column is-4">
      <ProfileCard titulo="HBO" arroba="@HBO3" img={Hbo}/>
    </div>
  </div>
  </div>
)
}

export default App;