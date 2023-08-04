import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { mdiCheckDecagram } from "@mdi/js";
import Swal from "sweetalert2";
import { mdiHandshakeOutline } from "@mdi/js";
import { DashboardPendingContext } from "../../DashboardPendingContext";
import { AllContext } from "../../AllDataContext";
const AcceptPayment = () => {
  const [persons, setPersons] = useState([]);
  const [searchTermUsers, setSearchTermUsers] = useState("");
  const [FilterDataUsers, setFilterDataUsers] = useState([]);
  const { allPaymentsP, setAllPaymentsP } = useContext(DashboardPendingContext);
  const { AllIngredientsBase, setAllIngredientsUserBase } =
    useContext(AllContext);
  //----------------------------------------

  function getDurationInMilliseconds(duration) {
    const durations = {
      oneMinute: 60 * 1000,
      oneDay: 24 * 60 * 60 * 1000,
      oneWeek: 7 * 24 * 60 * 60 * 1000,
      oneMonth: 30 * 24 * 60 * 60 * 1000,
      oneYear: 30 * 24 * 60 * 60 * 12 * 1000,
      // Add more durations as needed
    };

    return durations[duration] || 0;
  }
  const [expiredIng, setExpiredIng] = useState([]);

  useEffect(() => {
    if (AllIngredientsBase && AllIngredientsBase.length > 0) {
      const expiredIngredients = AllIngredientsBase.filter((ingredient) => {
        const createdAt = new Date(ingredient.updatedAt);
        const duration = ingredient.duration;

        // Filter out if duration is empty string or undefined
        if (duration === "" || typeof duration === "undefined") {
          return false;
        }

        // Convert the duration to milliseconds
        const durationMs = getDurationInMilliseconds(duration);

        // Calculate the expiration date
        const expirationDate = new Date(createdAt.getTime() + durationMs);
        
        // Get the current date and time
        const currentDate = new Date();
        console.log(expirationDate)
        console.log(currentDate)
        // Check if the current date is greater than the expiration date
        return currentDate > expirationDate;
      });

      console.log("Expired Ingredients:", expiredIngredients);
      setExpiredIng(expiredIngredients);
      if (expiredIngredients.length > 0) {
        // handleResetNow(expiredIngredients[0]?._id, expiredIngredients[0]);
      }
    }
  }, [AllIngredientsBase]);

  const handleResetNow = async (CardId, IngredientSelected) => {
    try {
      await axios.put(
        `http://localhost:5000/api/IngredientAdminReset/${CardId}`,
        {
          ingredientName: IngredientSelected.TrueName,
          image: IngredientSelected.TrueImg,
        }
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    setPersons(allPaymentsP);
    setFilterDataUsers(allPaymentsP);
  }, [allPaymentsP]);
  //-----------------------search------------------------//

  const filterDataByNameUsers = (searchTermUsers) => {
    const filteredDataUsers = persons.filter((item) =>
      item.TrueName.toLowerCase().includes(searchTermUsers.toLowerCase())
    );
    setFilterDataUsers(filteredDataUsers);
    console.log(filteredDataUsers);
    setCurrentPageUsers(1);
  };

  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  let totalItemsUsers;

  let totalPagesUsers;

  let slicedArrayUsers;

  const itemsPerPage = 5;

  totalItemsUsers = FilterDataUsers.length;

  totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;

  const endIndexUsers = startIndexUsers + itemsPerPage;

  slicedArrayUsers = FilterDataUsers.slice(startIndexUsers, endIndexUsers);

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };

  const handleDelete = (CardId, IngredientSelected) => {
    Swal.fire({
      title: `Do you want to remove ${IngredientSelected.TrueName}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${IngredientSelected.TrueName} has been removed `, "", "success");
        handleResetNow(CardId, IngredientSelected)
      } else Swal.fire(" Cancelled", "", "error");
    });
  };



  const handleUpdate = (IngredientSelected_id, IngredientSelected) => {
 
  };

  return (
    <>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(50vh)]   ">
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Pending Recipes
          </div>
        </div>

        <form>
          <div className="relative mt-5">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
            />
          </div>
        </form>

        <div className="mt-8 overflow-x-scroll xl:overflow-hidden ">
          <table role="table" className="w-full">
            <thead>
              <tr role="row">
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">NAME</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    location
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">price</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">role</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">Approve</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">DELETE</p>
                </th>
              </tr>
            </thead>

            {expiredIng?.map((e) => {
              return (
                <tbody role="rowgroup">
                  <tr role="row">
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                      role="cell"
                    >
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src={`http://localhost:5000/${e.img}`}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>

                      <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                        {e.ingredientName}
                      </p>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-full text-xl">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.TrueName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {e.updatedAt}
                      </p>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        <div className=" w-10 flex flex-col justify-center items-center">
                          {" "}
                          <Icon path={mdiHandshakeOutline} size={1} />{" "}
                          <span>user</span>{" "}
                        </div>
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button onClick={() => handleUpdate(e._id, e)}>
                        <Icon color="blue" path={mdiCheckDecagram} size={1} />
                      </button>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                        onClick={() => handleDelete(e._id, e)}
                      >
                        <Icon color="red" path={mdiDelete} size={1} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <div className="flex w-full justify-center mt-5">
            {
              <Pagination
                count={totalPagesUsers}
                page={currentPageUsers}
                onChange={handlePageChangeUsers}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptPayment;
