import React, { Fragment } from 'react';

import './sass/main.scss';
import Header from './components/Header';
import Shortener from './components/Shortener';
import Features from './components/Features';
import BoostSection from './components/BoostSection';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

const App = () => <Fragment>
    <Header />
    <Shortener />
    <Features />
    <BoostSection />
    <Footer />
    <Analytics />
</Fragment>

export default App;
