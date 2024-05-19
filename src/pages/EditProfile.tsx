import React from 'react';
import '../styles/userprofile-edit.css';
import { Link } from 'react-router-dom';

const EditProfile: React.FC = () => {
    return (
      <form>

        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Nutzerprofil bearbeiten</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Vorname</label>
                  <input type="text" className="form-control" placeholder="Vorname" value="" />
                </div>
                <div className="col-md-6">
                  <label className="labels">Nachname</label>
                  <input type="text" className="form-control" value="" placeholder="Nachname" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Telefon</label>
                  <input type="text" className="form-control" placeholder="Telefonnummer" value="" />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="labels">Adresse</label>
                  <input type="text" className="form-control" placeholder="Straße" value="" />
                </div>

                <div className="col-md-12 mb-3">
                  {/* <label className="labels">Straße</label> */}
                  <input type="text" className="form-control" placeholder="Ort" value="" />
                </div>
                <div className="col-md-12">
                  {/* <label className="labels">Ort</label> */}
                  <input type="text" className="form-control" placeholder="Postleitzahl" value="" />
                </div>
                <div className="col-md-12">
                  <label className="labels">Land</label>
                  <input type="text" className="form-control" placeholder="Land" value="" />
                </div>
                <div className="col-md-12">
                  <label className="labels">Unternehmen</label>
                  <input type="text" className="form-control" placeholder="Unternehmen" value="" />
                </div>
                {/* <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input type="text" className="form-control" placeholder="education" value="" />
                </div> */}
              </div>
              <div className="row mt-3">
                {/* <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input type="text" className="form-control" placeholder="country" value="" />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input type="text" className="form-control" value="" placeholder="state" />
                </div> */}
              </div>
              <div className="mt-5 text-center">
                <Link to="/userprofile">
                <button className="btn btn-primary profile-button" type="button">Änderungen speichern</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Profilbeschreibung bearbeiten</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus"></i>
                  &nbsp;Experience
                </span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Profilbeschreibung</label>
                <input type="text" className="form-control" placeholder="Hier Beschreibung eingeben" value="" />
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Zusätzliche Inhalte</label>
                <input type="text" className="form-control" placeholder="Zusätzliche Inhalte" value="" />
              </div>
              
            </div>
            
          </div> */}
          
        </div>
        
      </form>

    );
}

export default EditProfile;