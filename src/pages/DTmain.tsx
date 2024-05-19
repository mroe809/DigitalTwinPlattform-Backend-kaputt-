import '../styles/dtmain.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
   

const DTmain: React.FC = () => {


    return(
        <div className="container-dt">
            <div className="box box-half">
            <h2>Box 1</h2>
            </div>
            <div className="box box-half">
            <h2>Box 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="box box-full">
            <h2>Box 3</h2>
                <div className="sub-boxes">
                <div className="sub-box">Vorbereitung</div>
                <div className="sub-box">Durchführung</div>
                <div className="sub-box">Nachbearbeitung</div>
                <div className="sub-box">Versand</div>
                </div>
                <div className="button-container">
                <Link to = "/Download">
                <button className="small-button">Dokumente</button>
                </Link>
                <button className="small-button">Status zurücksetzen</button>
                <button className="small-button">Status aktualisieren</button>
                </div>
                </div>
            </div>
    )
}

export default DTmain