import React from 'react';
import './Login.scss';
import gtd_logo from '../../images/gtd_login.svg';
import appstore_logo from '../../images/app-store.svg';
import playstore_logo from '../../images/androidplay.svg'

class Login extends React.Component {
    render() {
        return (
            <div id = "loginbox">
                <div className = "left">
                    <div className = "logo">
                        <img src = {gtd_logo} alt = "GTD Things Done" />
                    </div>

                    <div className = "playstore-link-holder">
                        <a className = "app-store-img-holder apple" >
                            <img 
                                src = {appstore_logo} 
                                alt = "App-store" 
                            />
                        </a>
                        <a className = "app-store-img-holder"
                            href = "https://play.google.com/store/apps/details?id=com.peppersquare.getthingsdone.customer"
                            target = "_blank"
                        >
                            <img 
                                src = {playstore_logo} 
                                alt = "Play Store" 
                            />
                        </a>
                    </div>
                </div>

                <div className = "right">
                    <div className = "signIn-container">
                        <div className = "signIn">
                            <form 
                                className = "login-form" 
                                name = "userForm" 
                                model = "user"
                            >
                                <div className = "login-controls-container cus-reg">
                                    <div className = "login-control-holder">
                                        <input
                                            type = "name"
                                            placeholder = "Name"
                                            name = "name"
                                            required
                                            className = "common-input-ctrl"
                                            model = ".name"
                                        />
                                    </div>
                                    <div className = "login-control-holder">
                                        <input
                                            type = "text"
                                            placeholder = "Email"
                                            name = "email"
                                            required
                                            className = "common-input-ctrl"
                                            model = ".email"
                                        />
                                    </div>
                                    <div className = "login-control-holder">
                                        <input
                                            type = "password"
                                            placeholder = "Password"
                                            name = "password"
                                            required
                                            className = "common-input-ctrl"
                                            model = ".password"
                                        />
                                    </div>
                                    <div className = "login-control-holder">
                                        <input
                                            type = "password"
                                            placeholder = "Confirm Password"
                                            name = "confirmPassword"
                                            required
                                            className = "common-input-ctrl"
                                            model = ".confirmPassword"
                                        />
                                    </div>
                                </div>

                                <div className = "log-log reg-butt">
                                    <button 
                                        className = "signin" 
                                        type = "submit"
                                    >
                                        Register
                                    </button>
                                </div>

                                <div className = "log-service">
                                    <p>By creating an account, you agree to our
                                        <br />
                                        <a
                                            href = "https://getthingsdone.io/terms-of-services"
                                            target = "_blank"
                                        >
                                            <span> Terms of Service </span>
                                        </a> and
                                        <a
                                            href = "https://getthingsdone.io/privacy-policy"
                                            target = "_blank"
                                        >
                                            <span> Privacy Policy</span>
                                        </a>
                                    </p>
                                </div>
                                <div className = "log-reg regis">
                                    <p className = "for-pass">
                                        Already have an account?
                                    </p>
                                    <a
                                        className = "for-register"
                                        href = "/#/login"
                                    >
                                        Login
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;