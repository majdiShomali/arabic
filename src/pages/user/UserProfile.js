import EditProfileBeneficiary from "./UserEditProfile";
import { useState, useEffect,useContext } from "react";
// import * as React from "react";
import axios from "axios";

import { UserContext } from "../../UserContext";

const UserProfile = () => {
  const { profileRefresh, updateProfileRefresh } = useContext(UserContext);


  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState({});

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserId(response.data.user.id);
        console.log(response.data.user.id);
        let id = response.data.user.id;

        try {
          const response = await axios.get(
            `http://localhost:5000/api/users/${id}`
          );
          console.log(response.data);

          setUserData(response.data[0]);
        } catch (error) {
          console.error("Error retrieving data:", error);
        }
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, [profileRefresh]);


console.log(userData)




  return (
    <>






   <div className="container mx-auto my-60">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img src={`http://localhost:5000/${userData.img}`} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">{userData.firstName}</h1>
              <p className="text-center text-sm text-gray-400 font-medium">Welcome to arabic recipes</p>
              <p>
                <span>
                </span>
              </p>
              <div className="my-5 px-6">
              <EditProfileBeneficiary  />
                {/* <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">@pantazisoft</span></a> */}
              </div>
              <div className="flex justify-between items-center my-5 px-6">
                <a href className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                <a href className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                <a href className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                <a href className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
              </div>
              <div className="w-full">
                <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                <div className="mt-5 w-full grid grid-cols-2 items-center overflow-hidden text-sm">
                  
                 { userData.MyListId?.map((e)=>{

return(
  <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
  <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
  Updated his status
  <span className="text-gray-500 text-xs">24 min ago</span>
</div>

)

                 })} 
                  
             
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    {/* <div>
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
  <main className="profile-page">
  
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img alt="..." src={`http://localhost:5000/${userData.img}`} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <EditProfileBeneficiary />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {userData.firstName}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                Zarqa, Jordan
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400" />University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a
                    warm, intimate feel with a solid groove structure. An
                    artist of considerable range.
                  </p>
                  <a href="#pablo" className="font-normal text-pink-500">Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
</div> */}
    
    
    </>
  )
}

export default UserProfile