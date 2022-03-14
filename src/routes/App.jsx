import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '@context/AppContext';
import useInitialState from "@hooks/useInitialState";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Udea from "@pages/Udea";
import Tswipe from "@pages/Tswipe";
import TsuiteAbout from "@pages/Tswipe/Components/TsuiteAbout";
import TitleRight  from "@pages/Tswipe/Components/TitleRight"

const App =()=> {
const initialState = useInitialState();

return (

<AppContext.Provider value={initialState} >
<BrowserRouter basename="/TempCv1">
  <Layout>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/udea" element={<Udea />} />
      <Route exact path="/tsuite" element={<Tswipe />} />

<Route exact path="/tsuite/about/analizador" 
  element={<TsuiteAbout title={ <TitleRight sup="about" title="analizador" sub="de reservas"/>} />} 
/>

<Route exact path="/tsuite/about/estudio" 
  element={<TsuiteAbout title={ <TitleRight sup="about" title="estudio" sub="de mercado"/>} />} 
/>

<Route exact path="/tsuite/about/preciosdinamicos" 
  element={<TsuiteAbout title={ <TitleRight sup="about" title="precios" sub="dinamicos"/>} />} 
/>

<Route exact path="/tsuite/about/comparadordecanales" 
  element={<TsuiteAbout title={ <TitleRight sup="about" title="comparador" sub="de canales"/>} />} 
/>

<Route exact path="/tsuite/about/pronosticosypromociones" 
  element={<TsuiteAbout title={ <TitleRight sup="about" title="pronosticos" sub="y promociones"/>} />} 
/>

<Route exact path="/tsuite/about/contacto" 
  element={<TsuiteAbout title={ <TitleRight sup="about" title="informacion" sub="de contacto"/>} />} 
/>

      <Route exact path="*" element={<NotFound/>} />
    </Routes>
  </Layout>
</BrowserRouter>

</AppContext.Provider>
); }; export default App;