import React from "react"; 
import "./Header.scss";
import punk from "@logos/punk.png";
import searchIcon from "@icons/searchIcon2.svg";
import switchlogo from "@icons/switch.svg";

const haha =()=> alert("hell yeah proximamente....!");
const handleRef =param=> window.scrollTo(0, param);

const Header =({
  comprarNft, searchValue, 
  setSearchValue 
 })=> {

  const onSearchValueChange =(e)=> setSearchValue(e.target.value);

return ( <>
<header className="header">
  <div className="logoContainer">
    <img src={punk} className="punklogo" onClick={()=> window.location.reload()} alt="PunkLogo"/>
  </div>

  <div className="searchBar">
    <div className="searchIconContainer">
      <img src={searchIcon} className="searchIcon" alt="searchIcon"/>
    </div>

    <input autoFocus
      className="searchInput" 
      placeholder="Search..."
      onChange={onSearchValueChange}
      value={searchValue}
    />
  </div>

  <div className="headerItems">
    <p onClick={()=> handleRef(1000)}>Drops</p>
    <p onClick={()=> { comprarNft(); handleRef(1000); alert("if you Allow Cors, can check API works")} }>MarketPlace</p>
    <p onClick={()=> { haha(); handleRef(1000)} }>Create</p>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={switchlogo} alt="switchLogo" onClick={haha}/>
        </div>
      </div>
  </div>
  <div className="loginButton" onClick={haha}>JOIN IN</div>
</header>
</> ) }; export default Header;