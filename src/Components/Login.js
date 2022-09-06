import React from 'react';
import * as Yup from 'yup';
import '../Css/login.scss';
import { Link, Navigate} from 'react-router-dom';
import HttpEndPointServices from './HttpEndPointServices';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        signin:true,
        signInValid:"false",
        Email:"",
        password:""
        };
       
      }

      handleChange=(event)=>{
        console.log(event.target +"  if id os --->",event.target.id)
        const text=event.target.id
        const value=event.target.value
        this.setState({[text]: value});
      }

      handleSubmit=(data)=> {
        data.preventDefault();
        var data = {
          email: this.state.Email,
          password: this.state.password
        };
        HttpEndPointServices.getAll(data)
          .then(response => {
            // setTutorial({
            //   id: response.data.id,
            //   title: response.data.title,
            //   description: response.data.description,
            //   published: response.data.published
            // });
            // setSubmitted(true);
            console.log(response.data);
            if(response.data==="authentication Successful"){
            this.setState({signInValid:"true"})
            }
            else{
              this.setState({signInValid:"Authentication Unsuccessful"})
            }
          })
          .catch(e => {
            console.log(e);
            this.setState({signInValid:"Error With backend connection"})
          });
          // this.setState({signInValid:"true"})
      }

     
      render() {
       
        return (
            <div>
              {this.state.signInValid==="true" &&(
              <Navigate to="/images" replace={true}/>
              )
            }

             {/* REACT-HOOK-IMAGE-VIEWER */}
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form >
                        <h1>Sign in</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span> */}
                        <input type="email" placeholder="Email" id="Email" defaultValue={this.state.Email} onChange={this.handleChange} />
                        <input type="password" placeholder="Password" id="password" defaultValue={this.state.password} onChange={this.handleChange} />
                        {this.state.signInValid==="Authentication Unsuccessful" && 
                        <a className='invalidauth'>wrong email or password</a> }
                        {this.state.signInValid==="Error With backend connection" && 
                        <a className='invalidauth'>Error With backend connection</a> }
                        <button onClick={this.handleSubmit}>Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>                       
                            <p>Get ready to go down the memory lane that you enjoyed with your friends.</p>
                            {/* <button id="signUp" onClick={this.handleOnsignUpclick}  className="container.right-panel-active" >Sign Up</button> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
      }
    }
    export default Login;