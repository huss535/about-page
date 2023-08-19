import NavBar from "../components/NavBar";
import kenobi from "../assets/images/kenobi.gif"

const Home = ()=>{


return(
<>


    <h1>
         Welcome to my own personal website. You can navigate the top menu to know more about me.
    </h1>
    <img src={kenobi} style={{borderTopRightRadius:50, borderBottomLeftRadius:50, border:'solid', width:600}} alt="WelcomeGif"/>

    
</>
);
}

export default Home;