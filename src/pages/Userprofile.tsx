import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import '../styles/userprofile.css';
import { Link } from 'react-router-dom';
import { getUser } from "../slices/userSlice";


const UserProfile: React.FC = () => {

  const dispatch = useAppDispatch();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);


    return (
      <div className="row">
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                  <span className="font-weight-bold">Max</span>
                  <span className="text-black-50">{userProfileInfo?.email}</span>
                  <div className="row mt-4">
                    <Link to="/changepassword">
                  <span> Passwort ändern </span>
                  </Link>
                  <span> Account löschen</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Nutzerprofil</h4>
                  </div>
                  <div className="row mt-2">
                        <div className="col-md-6">
                        <label className="labels">Name</label>
                            <div className="mt-1">
                            <span>{userProfileInfo?.name}</span>
                            </div>
                        </div>
                    
                    <div className="col-md-6">
                      <label className="labels">Kontoart</label>
                      <div className="mt-2">
                            <span>Kontoart</span>
                            </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    {/* <div className="col-md-12">
                      <label className="labels">Telefon</label>
                      <div className="mt-1 mb-2">
                            <span>015781234567</span>
                            </div>
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Adresse</label>
                      <div className="mt-1">
                            <span>Straße</span>
                            </div>
                    </div>

                    <div className="col-md-12"> */}
                      {/* <label className="labels">Straße</label> */}
                      {/* <div className="mt-0">
                            <span>Rostock</span>
                            </div>
                    </div>
                    <div className="col-md-12"> */}
                      {/* <label className="labels">Ort</label> */}
                      {/* <div className="mt-0 mb-2">
                            <span>18057</span>
                            </div>                
                            </div>
                    <div className="col-md-12">
                      <label className="labels">Land</label>
                      <div className="mt-1 mb-2">
                            <span>Deutschland</span>
                      </div>                
                    </div> */}
                    <div className="col-md-12">
                      <label className="labels">Unternehmen</label>
                      <div className="mt-1">
                            <span>Universität Rostock</span>
                            </div>                </div>
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
                    <Link to="/userprofile-edit">
                    <button className="btn btn-primary profile-button" type="button">Bearbeiten</button>
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
        </div>
      </div>
        
        
    );
}

export default UserProfile;