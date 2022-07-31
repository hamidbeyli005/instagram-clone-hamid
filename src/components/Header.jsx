import {logOut}from "../firabase"
function Header() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={logOut} > Çıkış Yap </button>
    </div>
  );
}

export default Header;
