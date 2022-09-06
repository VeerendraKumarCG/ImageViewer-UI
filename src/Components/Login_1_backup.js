import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Css/login.scss';
import { Link, Navigate} from 'react-router-dom';
// function RedirectToImages(){
//   let navigate = useNavigate();
//   navigate("/images");
// }
import HttpEndPointServices from './HttpEndPointServices';

class Login_1_backup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        //   isLogginActive: true
        signup:false,
        signin:true,
        signInValid:"false"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      validationSchema = ()=> {
        return Yup.object().shape({
          fullname: Yup.string().required('Fullname is required'),
          username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
          email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
      }

      handleSubmit=(data)=> {
        data.preventDefault();
        console.log(" Submitting form" + data.target.email);

        // this.props.navigate('/images');
        // let navigate = useNavigate()
        //   navigate("/images")

        // const history = useHistory();
        // history.push('/images');
        
        var data = {
          // title: tutorial.title,
          // description: tutorial.description
        };
        HttpEndPointServices.getAll()
          .then(response => {
            // setTutorial({
            //   id: response.data.id,
            //   title: response.data.title,
            //   description: response.data.description,
            //   published: response.data.published
            // });
            // setSubmitted(true);
            console.log(response.data);
            // this.setState({signInValid:"true"})
          })
          .catch(e => {
            console.log(e);
          });
          // this.setState({signInValid:"true"})
      }

      handleOnsignUpclick=(event)=>{
        
        setTimeout(() => {
          this.setState({ signup: true },console.log("calling...",this.state.signup))
          console.log("calling...",this.state.signup); // <-- Now my value is back to it's initial
      }, 1500);
        console.log(this.state.signup)
      }

      render() {
        
        const initialValues = {
          fullname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
        };
        const {signup}=this.state;
        return (
            <div>
              {this.state.signInValid==="true" &&(
              <Navigate to="/images" replace={true}/>
              )
            }

             {/* REACT-HOOK-IMAGE-VIEWER */}
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form >
                        <h1>Sign in</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span> */}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {/* <a href="#">Forgot your password?</a> */}
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
    export default Login_1_backup;