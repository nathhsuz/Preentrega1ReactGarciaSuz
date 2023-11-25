import NavBar from "./NavBar";

function ProfileCard(props){

const { titulo , arroba, img } = props;

return (
  <div>

  
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={img}  alt="logo"/>
    </figure>
  </div>
</div>


  <div class="card-content">
    <div class="content"> 
  <h3>Titulo: {titulo}</h3>
  <p>{arroba}</p>
    </div>
  </div>

  </div>


)
}






export default ProfileCard;