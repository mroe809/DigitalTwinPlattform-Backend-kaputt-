import '../styles/dashboard_m.css';

function Dashboard_manufacturer (){
    return (

        <div className="container-fluid ">
        <div className="row upper-row justify-content-center">
          <div className="col-md-2">
            <div className="box1">Aufträge</div>
          </div>
          <div className="col-md-2">
            <div className="box1">Nachrichten</div>
          </div>
          <div className="col-md-2">
            <div className="box1">Hersteller</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="box2">Aktuelle Prozesse</div>
          </div>
          <div className="col-md-3">
            <div className="box2">Verfahren</div>
          </div>
        </div>
      </div>
    )
}

export default Dashboard_manufacturer
