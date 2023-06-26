import React from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { KitContext } from "../../KitchenContext";
import { RecipeContext } from "../../RecipeContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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


const SideBarRecipe = () => {
     const { SidebarIng, updateSidebarIng } = useContext(RecipeContext);

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
      setFilterDataItemss([...SidebarIng])
    }, [SidebarIng]);
  
  
  
  
    const [searchItem, setSearchItem] = useState("");
  
    const filterDataByNameItems = (searchTerm) => {
      console.log(searchTerm)
      console.log(SidebarIng)
      const filteredDataItems = SidebarIng.filter((item) =>
        item.ingredientName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterDataItemss(filteredDataItems);
    };
    const { SidebarIngName, updateSidebarIngName}= useContext(RecipeContext);
    const { RecipeStatus, updateRecipeStatus } = useContext(RecipeContext);
    const { SidebarIngId, updateSidebarIngId}= useContext(RecipeContext);

    const UpdateBeneficiaryId = async (cardId, ingredientFlag,ingredientName) => {
      // updateRecipeStatus(true)
      updateSidebarIngName(ingredientName)
      updateSidebarIngId(cardId)

      
    };


    function setSideStatus00() {
      setSideStatus(true);
    }



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
                              
                onClick={() => setSideStatus00(true)}>x</Button>

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
      
              <List>
                <hr className="my-2 border-blue-gray-50" />

                {FilterDataItems?.map((e) => {
                  return (
                    <ListItem
                      key={e.ingredientName}
                      onClick={() =>
                        UpdateBeneficiaryId(e._id, e.ingredientFlag,e.ingredientName)
                      }
                    >
                      <ListItemPrefix>
                        <img className="w-10" src={`http://localhost:5000/${e.img}`} />
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
              onClick={() => setSideStatus(false)}>Ingredients</Button>
            </div>
          )}
        </>
      ) : null}
    </>
  )
}

export default SideBarRecipe