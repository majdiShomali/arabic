import React from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useState ,useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { mdiMinus } from '@mdi/js';

export default function Example(props) {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  let AddPlus = mdiPlus
  let removMinus = mdiMinus
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [sideStatus ,setSideStatus] = useState(false)


  let newArrayV =[]
  let newArrayF =[]
  let localList =[]

  let localListN =[]
  let vegetables_obj =[]
  let fruit_obj =[]

  // const [localList,setLocalList] =useState([])
  const [MyList, setMyList] = useState([]);
  const [MyListN, setMyListN] = useState([]);
  const [vegetables, setVegetables] = useState([...vegetables_obj]);
  const [fruit, setFruit] = useState([...fruit_obj]);
  const [useId, setUserId] = useState();
  const { test, updateTest} = useContext(UserContext);
  const [FilterDataItems, setFilterDataItemss] = useState([]);

 
  const handleShowUser = async () => {
    
    let userId= JSON.parse(localStorage.userid)
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
      console.log(response.data[0]); 
      setMyList(response.data[0].MyList)
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
    
  };

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
      
        
        setUserId(response.data.user.id)
  
console.log(response.data.user.id)
let userId0 = response.data.user.id
       
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${userId0}`);
          console.log(response.data[0]); 
          setMyList(response.data[0].MyList)
          setFilterDataItemss(response.data[0].MyList)
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

    
  },[])

  useEffect(() => {
    fetchProtectedData()

    // handleShowUser();

  //   let userid= JSON.parse(localStorage.userid)
 
    
  //   axios.get(`http://localhost:4000/reporters/${userid}`)
  //   .then((response) => {
      
    
  //    let dataUser= response.data[0].userlist
  //   //  setLocalList(dataUser)
  //    let dataUserN= response.data[0].userlistn
  //    const parsedData = dataUser.map(jsonString => JSON.parse(jsonString));
  //    console.log(dataUserN[0])

  //    vegetables_obj=JSON.parse(localStorage.vegetables_obj)
  //    fruit_obj=JSON.parse(localStorage.fruit_obj)

  //   const newArrayV =[...vegetables_obj]
  //   const newArrayF =[...fruit_obj]
    
    
  //             localList=parsedData
  //             localListN=dataUserN
  //             setMyList(parsedData)
  //             setMyListN(dataUserN)
  //           newArrayV.map((e)=>{
  //             if(localListN.includes(e.name) ){
  //                    e.clicked='Added' 
  //                    e.icon=removMinus  
  //                    console.log(e.name)
  //             }
  //            })
    
  //            setVegetables(newArrayV)
    
  //            newArrayF.map((e)=>{
  //             if(localListN.includes(e.name) ){
  //                    e.clicked='Added' 
  //                    e.icon=removMinus  
  //             }
  //            })
    
  //            setFruit(newArrayF)
    
  //   console.log(localListN)
    
    
    
  //   })
  //   .catch((error) => console.log(error.message))
    














  //   // if(localStorage.MyListN !=[] && localStorage.MyListN !=null && localStorage.MyListN !=undefined ){

  //   //     // setLocalList(JSON.parse(localStorage.MyList))
  //   //     // vegetables_obj=JSON.parse(localStorage.vegetables_obj)
  //   //     // fruit_obj=JSON.parse(localStorage.fruit_obj)
   
   
  //   //     // let newArrayV =vegetables_obj
  //   //     // let newArrayF =fruit_obj
   
  //   //     newArrayV.map((e)=>{
  //   //      if(localListN.includes(e.name) ){
  //   //             e.clicked='Added' 
  //   //             e.icon=removMinus  
  //   //      }
  //   //     })
   
  //   //     newArrayF.map((e)=>{
  //   //      if(localListN.includes(e.name) ){
  //   //             e.clicked='Added' 
  //   //             e.icon=removMinus  
  //   //      }
  //   //     })
   
  //   //  }




  },[props.MyListnnn])


 
  // const { MyList5, updateMyList5} = useContext(UserContext);
  // const { MyListN5, updateMyListN5} = useContext(UserContext);

function setSideStatus00(){

  setSideStatus(true)
//  let userid= JSON.parse(localStorage.userid)

//   // updateTest([...MyList])
//    axios.put(`http://localhost:4000/contactus00/${userid}`, {
//      userlist: MyList,
//      userlistn: MyListN,
     
//    })
//      .then(function (response) {
//        console.log(response.data);
//        // window.location.reload(false);
 
//      })
//      .catch(function (error) {
//        console.log(error);
//      });

}
const [ searchItem,setSearchItem]=useState("")


const filterDataByNameItems = (searchTerm) => {
  console.log("aaaaaaaaaaaaaaa")
  const filteredDataItems = MyList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilterDataItemss(filteredDataItems);

};

  return (
    <>
     { (JSON.parse(localStorage.roles)[0]==false) ? 
     <>
     {sideStatus === false  ? (
        <Card className="fixed top-20  right-0 z-50 h-[calc(100vh-4rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-auto">
          <div className="mb-2 flex items-center gap-4 p-4">
            <Button onClick={() => setSideStatus00(true)}>x</Button>

            <Typography variant="h5" color="blue-gray">
              My List
            </Typography>
          </div>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
              value={searchItem}
              onChange={(e)=>{
                filterDataByNameItems(e.target.value)
                setSearchItem(e.target.value)
              
              }}
            />
          </div>

          <List>
            <hr className="my-2 border-blue-gray-50" />

            {FilterDataItems.map((e) => {
              return (
                <ListItem key={e.name}>
                  <ListItemPrefix>
                  <img className="w-10"  src={require(`../${e.img}`)}/> 
                  </ListItemPrefix>
                  {e.name}
                </ListItem>
              );
            })}
          </List>
        </Card>
      ) : (
        <div className="fixed top-20 right-0 z-50">
          <Button onClick={() => setSideStatus(false)}>My List</Button>
        </div>
      )} 
</> :null}
    </>
  );
}