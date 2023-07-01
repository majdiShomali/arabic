import classnames from "classnames";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { DashboardPendingContext } from "../../DashboardPendingContext";
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
const ShowRecipeGa = ({ Recipe, RecipeIngs }) => {
  // console.log(Recipe?.links[0])
  // console.log(RecipeIngs[0].ingredientName)
  const { PendingMLength, setPendingMLength } = useContext(
    DashboardPendingContext
  );
  const [reporters, setReporters] = useState([]);
  const [ChatRefresh, setChatRefresh] = useState();

  const [message, setMessage] = useState("");

  const [usersMessages, setuUsersMessages] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/usersMessages"
      );
      setuUsersMessages(response.data);
      console.log(response.data);

      setPendingMLength(() => {
        const newItems = response.data.filter(
          (item) => item.messageRead !== true
        );
        return newItems;
      });

      // updatePendingMLength(response.data)
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [ChatRefresh]);

  console.log(usersMessages);

  return (
    <>
      {/* component */}
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row  h-full w-full overflow-x-hidden">

            
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 display:none">
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {reporters.length}
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-auto overflow-y-auto">
                {
                  // console.log(RecipeIngs[0].ingredientName)

                  RecipeIngs?.map((e) => {
                    return (
                      <>
                        <ListItem key={e?.ingredientName}>
                          <ListItemPrefix>
                            <img
                              className="w-10"
                            //   src={`http://localhost:5000/${e?.img}`}
                            />
                          </ListItemPrefix>
                          {e?.ingredientName}
                        </ListItem>
                      </>
                    );
                  })
                }
              </div>
            </div>
          </div>



          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="">
                    <div className="">
                      <iframe
                        // src={Recipe?.links[0]}
                        className="w-96 h-60"
                        title="YouTube video player"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowRecipeGa;
