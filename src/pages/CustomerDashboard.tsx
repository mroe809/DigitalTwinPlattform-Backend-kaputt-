import { Link } from 'react-router-dom';

function Dashboard_customer (){
    return (
        <div>
            <div className='center-container'>
                <Link to = "/ContactForm">
                <button>
                    Prozessanfragen
                </button>
                </Link>
             </div>
        </div>

    )
}
export default Dashboard_customer

