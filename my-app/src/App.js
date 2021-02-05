import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import img from './profile/thedude.jpg'
import PropTypes from "prop-types"


function App({FullName, Bio, Prefession,children,handleName}) {
  window.onload = (()=> alert(' Salutation Esra '))

  function handleName(name){ alert(name)
   setTimeout(()=> alert("just kidding") ,1000)
  }
  return (
    <>
     <Profile FullName= "Majdi Dabbousi"   Bio = "the best kind of biographical resume is the one that hasn't been written yet " 
     Profession = "professional student" handleName = {handleName}  >
    <img src = {img} style = {{ width :250, borderRadius : 10}}  />
       </Profile >
     
    
     </>
  );
  
}
Profile.defaultProps = {
  FullName : "M & D",
  Bio : "he is a fake and fraud",
  Profession : "necromancer"

}      

Profile.propTypes = {
 FullName : PropTypes.string,
 Bio : PropTypes.string,
 profession : PropTypes.string,
 handleName : PropTypes.func
 };


export default App;
