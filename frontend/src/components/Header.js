import styled from 'styled-components'
import {  useState ,useContext,Fragment} from 'react'
import AppContext from '../context/app-context'
import {Link} from 'react-router-dom'
import SocialsMenu from './SocialsMenu'
import logo from '../img/logo.png' 
import menu from '../img/menu.svg'
import clouseMenu from '../img/close.svg' 
import cartIcone from '../img/shopping-cart.svg' 
import profileIcon from '../img/user-circle-solid.svg'
 export const StyledLink = styled(Link)`
display:flex;
aling-items:center;
text-decoration:none;
color:#171717;
  font-family: "Oswald", sans-serif;
  font-size: 19px;
  margin: 0  10px;
  text-transform: uppercase;
  transition:all 0.5s ease;
   letter-spacing:1px;
  &:hover{
     color:  #fcba1c;
  }
   &.primary{
       background-color:#fcba1c;
       padding: 5px  10px;
       border-radius: 15px;
       color:#fff;
       margin: 5px 15px;
   }
    &.primary:hover{
       background-color:#e83c2e;
       color:#fff;
   }


  @media screen and (max-width:990px){
margin: 15px 0;
font-size: 25px;
    &.primary{

    margin: 20px 0;
       
   }
}

`;
const StyledHeader = styled.header`
position:fixed;
box-sizing:border-box;
width:100vw;
padding: 0 25px;
margin:0;
height:58px;
z-index:999;
background-color:#fff ;
display:flex;
   justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #1111;
`;
const LogoLink = styled(Link)`
text-decorations:none;
cursor:pointer;
justify-self:flex-start;
`;
const LogoImg = styled.img`
width: 80px;
transition:all 0.3s ease;

&:hover{
  transform: scale(1.1);

}
`;
const IconeButton = styled.div`
width: 40px;
heght:40px;
text-decoretion:none;
cursor:pointer;
margin-right:20px;
position:relative;
`
const CartIcone = styled.img`
width: 100%;
heght:100%;
    transform: scale(0.8);
`
const ProfileIcone = styled(CartIcone)`
    width: 135%;
    margin-left: 25%;

`;
const CartNumber = styled.span`
padding: 0 5px;
border-radius: 50%;
background:#e83c2e;
position:absolute;
right:0;
bottom:0;
color:#fff;
font-size:14px;
text-shadow: 1px 1px 0 #000;
transition:all 0.3s ease;
&:hover{
  transform: scale(1.1);

}
`;
const NavWrapper= styled.nav`
width:100%;
height:100%;
display:flex;
padding: 0 20px;
align-items: center;
z-index:999;
@media screen and (max-width:990px){
  flex-flow:column;
  position: fixed;
  top:58px;
right: ${(props) =>(props.navIsOpened === true  ? "0" : "-100vw")};
transition: all 0.5s ease;
width:80vw;
background:#fff;
border-left: 1px solid #1111;


}

`;
const NavLinks = styled.div`
display:flex;
width:100%;
height:100%;
justify-content: center;
align-items: center;
@media screen and (max-width:990px){
  flex-flow:column;
    height:80%;
}
`;
const Menubtn = styled.img`
cursor:pointer;
width: 25px;
cursor:pointer;
margin-right:20px;

display:none;
@media screen and (max-width:990px){
  display:block;

}

`;

export default function Header(){
const { numberOfProductsInCart, isLogin,toggleCart,setIsSingUp,setIsNotSingup,isAdmin,isModerator}  = useContext(AppContext);
const [navIsOpened, setNavIsOpened ]= useState(false)



const handelNavClick = () =>{
setNavIsOpened(!navIsOpened)
}

const closeNav = ( ) =>{
  setNavIsOpened(false)
}


const handleLogin = () =>{
  closeNav();
setIsSingUp() ;
  }

  const handleSingUp= () =>{
  closeNav();
setIsNotSingup() ;
  }



  return(
<StyledHeader>
<LogoLink to="/"><LogoImg src={logo} alt="home"></LogoImg></LogoLink>
<NavWrapper navIsOpened={navIsOpened}>
  <NavLinks>
    <StyledLink to="/"  onClick={closeNav}>Home</StyledLink>
<StyledLink to="/menu" onClick={closeNav}>Menu</StyledLink>
<StyledLink to="/contact" onClick={closeNav}>Contacto</StyledLink>
{(isAdmin === true || isModerator === true ) &&   <StyledLink to="/dashboard/myProducts"  onClick={closeNav}>Dashboard</StyledLink>}


{isLogin ? 
<Link to="/myAccount/myProfile" onClick={closeNav} ><IconeButton><ProfileIcone src ={profileIcon} alt="profile"></ProfileIcone></IconeButton></Link>
:
<Fragment>
 <StyledLink className="primary" to="/authentication"  onClick={handleSingUp}>Sing Up</StyledLink>
 <StyledLink  to="/authentication"  onClick={handleLogin}>Login</StyledLink>
</Fragment>}

 
  </NavLinks>
 
<SocialsMenu primary></SocialsMenu>
</NavWrapper>
<IconeButton>
  <CartIcone  onClick={() =>toggleCart()} src={cartIcone} alt="Cart-button"/>
  <CartNumber>{numberOfProductsInCart}</CartNumber>
  </IconeButton>
<Menubtn src={ (navIsOpened) ? (clouseMenu) : (menu)} alt="menu" onClick={handelNavClick}></Menubtn>
</StyledHeader>
  )
}