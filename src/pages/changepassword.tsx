import '../styles/changepassword.css'

function ChangePassword () {
   return( 
<div className="col-md-6 offset-md-3">
            <div className="card card-outline-secondary">
                <div className="card-header">
                    <h3 className="mb-0">Passwort ändern</h3>
                </div>
                <div className="card-body">
                    <form className="form" role="form" autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="inputPasswordOld">Aktuelles Passwort</label>
                            <input type="password" className="form-control" id="inputPasswordOld" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPasswordNew">Neues Passwort</label>
                            <input type="password" className="form-control" id="inputPasswordNew" required />
                            <span className="form-text small text-muted">
                                Das Passwort muss zwischen 8 und 20 Zeichen lang sein.
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPasswordNewVerify">Passwort wiederholen</label>
                            <input type="password" className="form-control" id="inputPasswordNewVerify" required />
                            <span className="form-text small text-muted">
                                Zum Bestätigen bitte das Passwort wiederholen.
                            </span>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-custom btn-lg float-right mt-3">Speichern</button>
                        </div>
                    </form>
                </div>
            </div>
            <span className="anchor" id="formResetPassword"></span>
            <hr className="mb-5" />
        </div>

   )
}

export default ChangePassword