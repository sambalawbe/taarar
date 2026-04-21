/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import President from './components/President';
import Actions from './components/Actions';
import Activities from './components/Activities';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <President />
        <Stats />
        <Actions />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}

