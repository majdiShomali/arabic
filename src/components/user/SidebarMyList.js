import React from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { KitContext } from "../../KitchenContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {AllContext} from "../../AllDataContext"


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

import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";

export default function Example({ userIdApp0 }) {
  const { AllDataGet,setAllDataGet} = useContext(AllContext);
  const { UpdateAll,setUpdateAll} = useContext(AllContext);


  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { MyListSideBarCon, updateMyListSideBarCon } = useContext(KitContext);
  const { MyListSideBarConNames, updateMyListSideBarConNames } = useContext(KitContext);
  const { SidebarIngName0, updateSidebarIngName0 } = useContext(KitContext);
  const { EffectStatus, updateEffectStatus } = useContext(KitContext);
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [sideStatus, setSideStatus] = useState(false);

  // const { test, updateTest } = useContext(UserContext);
  const [FilterDataItems, setFilterDataItemss] = useState();

  const [userAllIngredients0, setUserAllIngredients0] = useState();

  useEffect(() => {
    // setFilterDataItemss([...MyListSideBarCon])
    setFilterDataItemss(() => {
      const newItems = MyListSideBarCon?.filter(
        (item) => item.ingredientFlag !== false
      );
      return newItems;
    });
    setSaveOrRecipe(false);
  }, [MyListSideBarCon]);

  const [searchItem, setSearchItem] = useState("");
  const [SaveOrRecipe, setSaveOrRecipe] = useState(true);

  const filterDataByNameItems = (searchTerm) => {
    const filteredDataItems = MyListSideBarCon.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterDataItemss(filteredDataItems);
  };

  const UpdateBeneficiaryId = async (
    cardId,
    ingredientFlag,
    ingredientName
  ) => {
    updateSidebarIngName0(ingredientName);
    updateEffectStatus(ingredientName)
    // updateSidebarIngName0("")
  };

  function setSideStatus00() {
    setSideStatus(true);
  }


  

  const HandleSave = async () => {
    setIsLoading(true); // Set the loading state to true
    setSaveOrRecipe(true); // Set SaveOrRecipe to true to render the "Show" button

    const trueItems = MyListSideBarCon.filter((item) => item.ingredientFlag === true);
    const trueItemsId = trueItems.map((e) => e._id);
    const trueItemsNames = trueItems.map((e) => e.ingredientName);


    try {
      const updatedBeneficiary = {
        MyListId: trueItemsId,
        // MyList: trueItems,
        // MyListn: trueItemsNames,
      };
      await axios.put(`http://localhost:5000/api/userList/${userIdApp0}`, updatedBeneficiary);
  
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setUpdateAll((prevArray) => [...prevArray, {hi:"update"}])
      setIsLoading(false); // Set the loading state to false after the save operation is completed
      setUpdateAll((prevArray) => [...prevArray, {hi:"update"}])

    }
  };



  const HandleShow = async () => {

    navigate(`/Recipes`);
  };

  return (
    <>
      {localStorage.auth != null ? (
        <>
          {sideStatus === false ? (
            <Card className="fixed top-20  right-0 z-50 h-[calc(100vh-4rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-auto">
              <div className="mb-2 flex items-center gap-4 p-4">
                <Button
                  className="mr-5 border mb-10 border-solid border-[#eb2b2b] border-2 text-[#060606] hover:bg-[#e84242] hover:text-[#ffffff]"
                  variant="text"
                  onClick={() => setSideStatus00(true)}
                >
                  x
                </Button>

                <Typography variant="h5" color="blue-gray">
                  Ingredients
                </Typography>
              </div>
              <div className="p-2">
                <Input
                  color
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  label="Search"
                  value={searchItem}
                  onChange={(e) => {
                    filterDataByNameItems(e.target.value);
                    setSearchItem(e.target.value);
                  }}
                />
              </div>

              {isLoading? (

<div role="status">
<svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span class="sr-only">Loading...</span>
</div>

) : (
  <>
  <div className="flex justify-center">

    {!isLoading && SaveOrRecipe ? (
      <Button
        className="w-64 border mb-10 border-solid border-[#b6c02b] border-2 text-[#060606] hover:bg-[#bed634] hover:text-[#ffffff]"
        variant="text"
        onClick={HandleShow}
      >
        Show Recipe
      </Button>
    ) : null}

    {!isLoading && !SaveOrRecipe ? (
      <>
        <Button
          className=" w-64 border mb-10 border-solid border-[#b6c02b] border-2 text-[#060606] hover:bg-[#bed634] hover:text-[#ffffff]"
          variant="text"
          onClick={HandleSave}
        >
          Save
        </Button>
      </>
    ) : null}

</div>
  </>
)}
             
                
             

              <List>
                <hr className="my-2 border-blue-gray-50" />

                {FilterDataItems?.map((e) => {
                  return (
                    <ListItem
                      key={e.ingredientName}
                      onClick={() =>
                        UpdateBeneficiaryId(
                          e._id,
                          e.ingredientFlag,
                          e.ingredientName
                        )
                      }
                    >
                      <ListItemPrefix>
                        <img className="w-10 h-10 rounded-full" src={`http://localhost:5000/${e.img}`} />
                      </ListItemPrefix>
                      {e.ingredientName}
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          ) : (
            <div className="fixed top-20 right-0 z-50">
              <Button
                className="mr-5 border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                variant="text"
                onClick={() => setSideStatus(false)}
              >
                My List
              </Button>
            </div>
          )}
        </>
      ) : null}
    </>
  );
}
