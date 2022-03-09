import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '@context/AppContext';
import useInitialState from "@hooks/useInitialState";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Udea from "@pages/Udea";
import Tswipe from "@pages/Tswipe";

const App = () => {
const initialState = useInitialState();

return (

  <AppContext.Provider value={initialState} >
  <BrowserRouter basename="/TempCv1">
  {/* <BrowserRouter > */}
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/udea" element={<Udea />} />
        <Route exact path="/tsuite" element={<Tswipe />} />

        {/* //todo ¡¡ InsertRoutes here !! */}

        <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </Layout>
  </BrowserRouter>

</AppContext.Provider>
); }; export default App;