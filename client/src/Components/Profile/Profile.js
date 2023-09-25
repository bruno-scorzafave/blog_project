import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Profile.scss';


function Profile() {
    return (
        <div className="Profile">
            <div className="Profile-text d-flex flex-column h-100 justify-content-center text-center">
                <img className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src={process.env.PUBLIC_URL +"/img/profile.jpeg"} alt="" />
                <h1 className="font-weight-bold">Bruno Scorzafave</h1>
                <p className="mb-4">
                Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo
                </p>
                <div className="d-flex justify-content-center mb-5">
                    <a className="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={brands('linkedin')} /></a>
                    <a className="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={brands('twitter')} /></a>
                    <a className="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={brands('facebook')} /></a>
                    <a className="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={brands('instagram')} /></a>
                </div>
                <a href="https://www.linkedin.com/in/bruno-scorzafave/" target="_blank" rel="noreferrer" className="btn btn-lg btn-block btn-primary mt-auto">Hire Me</a>
            </div>
            <div className="Profile-icon d-flex flex-column h-100 justify-content-center text-right">
                <FontAwesomeIcon icon={solid("angles-right")} />
            </div>
        </div>
    )
}

export default Profile;
