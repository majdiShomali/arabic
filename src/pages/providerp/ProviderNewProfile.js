
import EditProviderProfile from "./EditProviderProfile";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import DyRecipeCardMeal from "../../components/user/DyRecipeCardMeal";

//---------------------redux-----------------//
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../actions/GetRecipes';
import { fetchFavRecipes } from '../../actions/GetFavRecipes';
import { fetchUserNew } from '../../actions/UserActions';
import {AllContext} from "../../AllDataContext"


const ProviderNewProfile = () => {
    const { loading, data, error } = useSelector((state) => state.fetchRecipes);
    const { loading: favLoading, data: favData, error: favError } = useSelector((state) => state.fetchFavRecipes);
    const { loading: userLoadingNew, data: userDataNew, error: userErrorNew } = useSelector((state) => state.userNew);
    
    const {TableContext,setTableContext} =useContext(AllContext)
   
    // useEffect(()=>{
    // setTable(TableContext)
    // },[TableContext])
    
    const [cards, setCards] = useState([]);
    const [userData, setUserData] = useState({});
    const [userFavData, setUserFavData] = useState([]);
    
    const dispatch = useDispatch();
    const [userId, setUserId] = useState();
    
    
      useEffect(() => {
        if(localStorage.auth != null){ 
          const token = localStorage.getItem("auth");
          dispatch(fetchUserNew(token));
      }
      }, []);
    
      useEffect(() => {
        setUserId(userDataNew[0]?._id)
        dispatch(fetchFavRecipes(userDataNew[0]?._id));
        setUserData(userDataNew[0])
      }, [userDataNew]);
    
    
    useEffect(() => {
    setUserFavData(favData);
    }, [dispatch,favData,userDataNew]);
    
    // -----------------------------------//

  return (
    <>
    <div className="h-full bg-gray-200 p-8">
  <div className="bg-white rounded-lg shadow-xl pb-8">
    <div className="w-full h-[250px]">
      <img
        src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
        className="w-full h-full rounded-tl-lg rounded-tr-lg"
      />
    </div>
    <div className="flex flex-col items-center -mt-20">
     
     {userLoadingNew === true ?

<div class="flex items-center justify-center w-40 h-40 bg-gray-300 rounded-full dark:bg-gray-700">
<svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
</svg>
</div>
:
<img
src={`http://localhost:5000/${userData?.img}`}
className="w-40 h-40 border-4 border-white rounded-full"
/>

     }
     
     
     



      <div className="flex items-center space-x-2 mt-2">
        <p className="text-2xl">{userData?.firstName}</p>
        <span className="bg-blue-500 rounded-full p-1" title="Verified">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-100 h-2.5 w-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </div>
      <p className="text-gray-700">Welcome to arabic recipes</p>
      <p className="text-sm text-gray-500">{ userData?.role===0 ? "User" :"Provider"  }</p>
    </div>
    <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
      <div className="flex items-center space-x-4 mt-2">
  
      <EditProviderProfile  />
      </div>
    </div>
  </div>
  <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
    <div className="w-full flex flex-col 2xl:w-1/3">
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
        <ul className="mt-2 text-gray-700">
          <li className="flex border-y py-2">
            <span className="font-bold w-24">Full name:</span>
            <span className="text-gray-700">{userData?.firstName}</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Birthday:</span>
            <span className="text-gray-700">24 Jul, 1991</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Joined:</span>
            <span className="text-gray-700">{userData?.createdAt}</span>
          </li>
          {/* <li className="flex border-b py-2">
            <span className="font-bold w-24">Mobile:</span>
            <span className="text-gray-700">(123) 123-1234</span>
          </li> */}
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Email:</span>
            <span className="text-gray-700">{userData?.email}</span>
          </li>
          {/* <li className="flex border-b py-2">
            <span className="font-bold w-24">Location:</span>
            <span className="text-gray-700">New York, US</span>
          </li> */}
          {/* <li className="flex border-b py-2">
            <span className="font-bold w-24">Languages:</span>
            <span className="text-gray-700">English, Spanish</span>
          </li> */}
          {/* <li className="flex items-center border-b py-2 space-x-2">
            <span className="font-bold w-24">Elsewhere:</span>
            <a href="#" title="Facebook">
              <svg
                className="w-5 h-5"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 506.86 506.86"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: ".cls-1{fill:#1877f2;}.cls-2{fill:#fff;}"
                    }}
                  />
                </defs>
                <path
                  className="cls-1"
                  d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                />
                <path
                  className="cls-2"
                  d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                />
              </svg>
            </a>
            <a href="#" title="Twitter">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                  fill="#1da1f2"
                />
              </svg>
            </a>
            <a href="#" title="LinkedIn">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                  fill="#0077b5"
                />
              </svg>
            </a>
            <a href="#" title="Github">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={0}
                height={0}
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg>
            </a>
          </li> */}
        </ul>
      </div>

  
    </div>
    <div className="flex flex-col w-full 2xl:w-2/3">
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <h4 className="text-xl text-gray-900 font-bold">About</h4>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla
          ad incidunt laboriosam, laudantium est unde natus cum numquam, neque
          facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at
          maxime, iste id dicta autem odio laudantium eligendi commodi
          distinctio!
        </p>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
        <h4 className="text-xl text-gray-900 font-bold">Fav Recipes</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
      
            {TableContext?.map((e, i) => {
              return (
                <>
                  <DyRecipeCardMeal
                    key={e._id}
                    Name={e.recipeName}
                    card={e}
                    index={i}
                    SAMeals={favData}
                    cardId={e._id}
                    img={e.img}
                    rate={e.rate}
                    rating={e.rating}
                    Recipe={e}
                  />
                </>
              );
            })}
         
        
        </div>
        <div className="mt-4">
          <canvas
            id="verticalBarChart"
            style={{
              display: "block",
              boxSizing: "border-box",
              height: 414,
              width: 828
            }}
            width={1656}
            height={828}
          />
        </div>
      </div>
    </div>
  </div>



</div>

    
    </>
  );
};

export default ProviderNewProfile;
