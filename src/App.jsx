import React, {useState} from 'react';
import Navbar from './Navbar';

import Front from './Front';
import About from './About'
import Footer from './Footer'


function App(){

    const [front, setFront] = useState(true);
    const [about, setAbout] = useState(false);

    function homeFn(){

        setFront(true);
        setAbout(false);
    }

    function aboutFn(){

        setAbout(true);
        setFront(false);
    }

    return <div>

    <Navbar 
        home={homeFn}
        about={aboutFn}
    />

    

    {front ? <Front /> : null}

    {about ? <About /> : null}
    
   
    <Footer 
        inner ={about}
    /> 
    


    </div>
}

export default App;