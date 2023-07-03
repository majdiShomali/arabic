import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Logo1 from "../Images/vegetables/Lemon.png";
import axios from 'axios';
import imageSign from "../Images/Signin0.png"
import { UserContext } from '../UserContext';

import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';


export default function LogIn() {
    const [email, setemail] = useState("");
    const [emailp, setemailp] = useState("");
    const [password, setpassword] = useState("");
    const [passwordp, setpasswordp] = useState("");

    const [user0, setUser0] = useState([]);
    const [errorG, setErrorG] = useState("");
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser0(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
      });

const loginG = async (email00,img)=>{
console.log(email,password)
    try {

        const userData = {
            email: email00,
            password:"123456",
            img:img
          };
            // Send the data to the server using an HTTP POST request
            const response = await axios.post(
              "http://localhost:5000/api/usersLogin",
              userData
            );
            console.log("Data inserted:", response.data);
            if(response.data.error != 'incorrect password'){
             console.log("success")
             console.log(response.data.token);
               localStorage.setItem("auth",(response.data.token))
               window.location.href = 'http://localhost:3000/';
            }else{
              console.log("failed")
            }
            
          } catch (error) {



}

}

    useEffect( () => {
        if (user0.length !== 0) {
            console.log(user0)
            let token =user0.access_token
        //     localStorage.setItem("auth",token)
        //   window.location.href = 'http://localhost:3000/';

          axios
            .get(
              `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user0.access_token}`
              ,
              {
                headers: {
                    Authorization: `Bearer ${user0.access_token}`,
                  Accept: "application/json",
                },
              }
            )
            .then((res) => {
              setProfile(res.data);0
              setErrorG("");
              setemail(res.data.email)
              setpassword("123456")
              console.log(res.data)
              let eeee=res.data.email
              loginG(eeee,res.data.picture)
              const user0Data = {
                firstName:res.data.name,
                email: res.data.email,
                password:"123456",
                role: 0 ,
              }
              axios
          .post("http://localhost:5000/api/users",user0Data)
          .then((response) => {
            console.log(response);


          


  








          })
          .catch((err) => console.log(err.message));
          console.log(err);
                  //   localStorage.setItem("auth",token)
        //   window.location.href = 'http://localhost:3000/';

      })
            .catch((err) => console.log(err.message));
        }
      }, [user0]);


  
 
    /* google login  -start */
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    
    const { routs,updateRouts } = useContext(UserContext)
    const { SignStatus,updateSignStatus } = useContext(UserContext)
    const { curruntUser,updateSetCurruntUser } = useContext(UserContext)

  

   
    const handleSubmit = async (event) => {
       

 




       event.preventDefault();



       const userData = {
        email: email,
        password:password
      };

      try {
        // Send the data to the server using an HTTP POST request
        const response = await axios.post(
          "http://localhost:5000/api/usersLogin",
          userData
        );
        console.log("Data inserted:", response.data);
        setpasswordp("incorrect password")

        if(response.data.error != 'incorrect password'){
        //   setStatus("success");
         console.log("success")
         console.log(response.data.token);

        // let x =[]
        //      if (response.data.user0.role==0){
        //      x= [false ,true,true ]
        //    }else if(response.data.user0.role==1){
        //       x= [true ,false,true ]
        //    }else if(response.data.user0.role==2){
        //       x= [true ,true,false]
        //    }

        //    updateRouts(x)
        //    updateSetCurruntUser(response.data.user0)


        //    localStorage.setItem("curruntUser",JSON.stringify(response.data.user0))

        //    localStorage.setItem("userid",JSON.stringify(response.data.user0._id))
           localStorage.setItem("auth",(response.data.token))

        //    updateSignStatus("SignOut")
        //    localStorage.setItem("SignStatus","SignOut")
        //    localStorage.setItem("roles",JSON.stringify(x))
           window.location.href = 'http://localhost:3000/';
        }else{
        //   setStatus("failed");
          console.log("failed")
        }
        
      } catch (error) {
        console.error("Error inserting data:", error);
        // setStatus("error");
        console.log("error")
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
                            className="w-full bg-[#219D80] max-w-xs font-bold hover:bg-[#219D80] hover:text-white  shadow-sm rounded-lg py-3 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                            onClick={() => login()} 
                            >

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
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}  />
                            <p className="text-red-500">{emailp}</p>
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password" 
                            value={password}
                            required
                            onChange={(e) => setpassword(e.target.value)}/>
                            <p className="text-red-500">{passwordp}</p>
                        <button type='submit'
                            className="mt-5 bg-[#F7E1AE] tracking-wide font-semibold text-gray-800 w-full py-4 rounded-lg hover:bg-[#A4D0A4] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                            <Link to="/Signup/user" className="border-b border-gray-500 border-dotted">
                                Create one
                            </Link>
                           
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex imageSign bg-cover bg-center bg-no-repeat ">
        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chef-cooking.jpg?quality=82&strip=1"/>
        </div>
    </div>
</div>
  
  )
}