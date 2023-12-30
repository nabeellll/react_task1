import React from "react";
import Header from "./header";
import Contant from "./Contant";
import Images from "./Images";
import Footer from "./Footer";
function App(props) {
  return (
<>
<Header/>
<div style={{display:"flex",gap:'5rem',justifyContent:'center'}}>
<Contant title={'Item1'}/>
<Contant title={'Items2'}/>
<Contant title={'Items3'}/>
<Contant title={'items4'}/>
<Contant title={'items5'}/>
</div>
<Images/>
<Footer/>
</>
  );
}

export default App;
