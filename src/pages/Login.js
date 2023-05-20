import React from 'react'
import { Link } from "react-router-dom";
import Logo1 from "../Images/Arugula.png";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState ,useEffect} from 'react';


export default function LogIn() {



    function check_login(email,password) {
        if(localStorage.userinfo !== null && localStorage.userinfo !== undefined){
            let userinfo = [];
            let arrEmail = [];
            
            userinfo=JSON.parse(localStorage.userinfo);
            arrEmail=localStorage.arrEmail;
            
            if(arrEmail.includes(email)){
                for(let i=0;i<userinfo.length;i++){
                    if(userinfo[i].userEmail == email && userinfo[i].userPassword == password){
                    return true;
                    }                    
                }
   
            }
    }
    return false;  
}
    function get_info(email) {
        if(localStorage.userinfo !== null && localStorage.userinfo !== undefined){
            let userinfo = [];
            let arrEmail = [];
            
            userinfo=JSON.parse(localStorage.userinfo);
            arrEmail=localStorage.arrEmail;
            
            if(arrEmail.includes(email)){
                for(let i=0;i<userinfo.length;i++){
                    if(userinfo[i].userEmail == email){
                    return userinfo[i];
                    }                    
                }
   
            }
    }
    return [];  
}
    const [email, setemail] = useState("");
    const [emailp, setemailp] = useState("");
    const [password, setpassword] = useState("");
    const [passwordp, setpasswordp] = useState("");
    let userdata=[];
    let useremail=[];
    /* google login  -start */
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                     
                        let arrEmail = [];
                        if(localStorage.arrEmail !== null  && localStorage.arrEmail !== undefined){
                        arrEmail = localStorage.getItem('arrEmail');
                        }
                        if(arrEmail.includes(res.data.email)){
                            let userdata = get_info(res.data.email);


                            alert(userdata.userEmail);
                            alert("welcome");
                            window.location.replace("Landing")

                        }else{
                            alert('the email '+res.data.email +' not registered before.');
                        }
                    
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    /* google login  -end */
  

   
    // console.log(userdata)

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if(check_login(email,password) == true) {
           let userdata = get_info(email);
           localStorage.setItem("userinfoLog",JSON.stringify(userdata))

           alert(userdata.userEmail);
        alert("welcome");
        localStorage.setItem("userState",JSON.stringify("LogOut"))
        window.location.replace("Landing")
        }else{
        alert("Error in username or password.");
        }

    }
  return (

   <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <div>
                <img src={Logo1}
                    className="w-32 mx-auto" />
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Sign-In
                </h1>
                <div className="w-full flex-1 mt-8">
                    <div className="flex flex-col items-center ">
                        <button id="google-sign-in" 
                            className="w-full bg-[#F3CBCc] max-w-xs font-bold  shadow-sm rounded-lg py-3 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                            onClick={() => login()} >

                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                           
                  
                                Sign-In with Google
                            </span>
                        </button>

                        
                    </div>

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or sign-In with e-mail
                        </div>
                    </div>
                      <form onSubmit={handleSubmit}>
                    <div className="mx-auto max-w-xs">
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}  />
                            <p className="text-red-500">{emailp}</p>
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password" 
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}/>
                            <p className="text-red-500">{passwordp}</p>
                        <button type='submit'
                            className="mt-5 bg-[#BC6247] tracking-wide font-semibold text-gray-100 w-full py-4 rounded-lg hover:bg-[#E0665B] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                                Sign-In
                            </span>
                        </button>
                        <p className="mt-6 text-xs text-gray-600 text-center">
                            No Account?
                            <Link to="/Signup" className="border-b border-gray-500 border-dotted">
                                Create one
                            </Link>
                           
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex login_img bg-cover bg-center bg-no-repeat ">
        
        </div>
    </div>
</div>
  
  )
}