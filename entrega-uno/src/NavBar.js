import ProfileCard from "./ProfileCards";


function NavBar (){

 return (
    <div>
<nav class="navbar" role="navigation" aria-label="main navigation"/>
  <div class="navbar-brand">
    <a class="navbar-item" href="">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" >
                <section class="hero is-danger">
                    <div class="hero-body">
                      <p class="title">
                       <h1>Portales de Streaming</h1> 
                      </p>
                    </div>
                  </section>
               
              </a>
              <section class="hero is-danger">
                <div class="hero-body">
                  <p class="title">
                    <a class="navbar-item">
                        ¿Que ofrecemos?
                      </a>
                  </p>
                </div>
              </section>

       </div>
       </div>
       </div>
    
 )
}

export default NavBar;