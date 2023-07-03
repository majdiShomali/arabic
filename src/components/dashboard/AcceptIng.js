import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { mdiCheckDecagram } from "@mdi/js";
import Swal from "sweetalert2";
import { mdiSilverware } from "@mdi/js";
import { mdiHandshakeOutline } from "@mdi/js";
import { mdiAccountOutline } from "@mdi/js";
import { DashboardPendingContext } from "../../DashboardPendingContext";
import moment from 'moment';

const AcceptIng = () => {
  const { SponsorAContext, setSponsorAContext } = useContext(
    DashboardPendingContext
  );
  const { SponsorPContext, setSponsorPContext } = useContext(
    DashboardPendingContext
  );
  const { AcceptIngRefresh, setAcceptIngRefresh } = useContext(
    DashboardPendingContext
  );
  const { allPaymentsP, setAllPaymentsP } = useContext(DashboardPendingContext);
  const { allPaymentsA, setAllPaymentsA } = useContext(DashboardPendingContext);

  const [persons, setPersons] = useState([]);
  const [personsA, setPersonsA] = useState([]);
  const [searchTermUsers, setSearchTermUsers] = useState("");
  const [FilterDataUsers, setFilterDataUsers] = useState([]);

  const [searchTermUsersA, setSearchTermUsersA] = useState("");
  const [FilterDataUsersA, setFilterDataUsersA] = useState([]);

  const allAdmins = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/paymentAdminP"
      );
      setPersons(response.data);

      console.log(response.data);
      setFilterDataUsers(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
    try {
      const response = await axios.get(
        "http://localhost:5000/api/paymentAdminA"
      );
      setPersonsA(response.data);

      console.log(response.data);
      setFilterDataUsersA(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  console.log(SponsorAContext);
  useEffect(() => {
    // allAdmins();

    setPersons(allPaymentsP);

    setFilterDataUsers(allPaymentsP);

    setPersonsA(allPaymentsA);

    setFilterDataUsersA(allPaymentsA);
  }, [allPaymentsP, allPaymentsA]);
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

  totalItemsUsers = FilterDataUsers?.length;

  totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;

  const endIndexUsers = startIndexUsers + itemsPerPage;

  slicedArrayUsers = FilterDataUsers?.slice(startIndexUsers, endIndexUsers);

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };
  //-----------------------search------------------------//

  const filterDataByNameUsersA = (searchTermUsersA) => {
    const filteredDataUsersA = personsA.filter((item) =>
      item.TrueName.toLowerCase().includes(searchTermUsersA.toLowerCase())
    );
    setFilterDataUsersA(filteredDataUsersA);
    console.log(filteredDataUsersA);
    setCurrentPageUsersA(1);
  };

  const [currentPageUsersA, setCurrentPageUsersA] = useState(1);
  let totalItemsUsersA;

  let totalPagesUsersA;

  let slicedArrayUsersA;

  const itemsPerPageA = 5;

  totalItemsUsersA = FilterDataUsersA?.length;

  totalPagesUsersA = Math.ceil(totalItemsUsersA / itemsPerPageA);

  const startIndexUsersA = (currentPageUsersA - 1) * itemsPerPageA;

  const endIndexUsersA = startIndexUsersA + itemsPerPageA;

  slicedArrayUsersA = FilterDataUsersA?.slice(startIndexUsersA, endIndexUsersA);

  const handlePageChangeUsersA = (event, pageNumberA) => {
    setCurrentPageUsersA(pageNumberA);
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Do you want to remove ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been removed `, "", "success");

        axios
          .put("http://localhost:5000/recipesA/" + id)
          .then((response) => {
            allAdmins();
          })
          .catch((error) => console.log(error.message));

        // window.location.reload();
      } else Swal.fire(" Cancelled", "", "error");
    });
  };

  const UpdateRole = async (id, ingId, e) => {
    console.log(e);

    // {
    //     "_id": "649940c07739d2e8fdb571e8",
    //     "CompanyName": "majdi222",
    //     "CompanyEmail": "majdishomali444@gmail.com",
    //     "ingredientName": "apple",
    //     "ingredientType": "vegetables",
    //     "img": "public\\images\\image_1687765184148.png",
    //     "userId": "649919dabe58b493e15c9fb5",
    //     "flag": false,
    //     "payment": true,
    //     "IngId": "64991992be58b493e15c9fa6",
    //     "__v": 0
    // }

    try {
      const updatedUser = {
        ingredientName: e.ingredientName,
        img: e.image,
        sold: true,
        duration:e.pricePlan
      };
      const updatedUser2 = {
        flag: true,
      };
      const aIngredient = await axios.put(
        `http://localhost:5000/api/Ingredient/${ingId}`,
        updatedUser
      );
      await axios.put(`http://localhost:5000/api/payment/${id}`, updatedUser2);
      allAdmins();
      setAcceptIngRefresh(aIngredient);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleUpdate = (id, ingId, e) => {

    const  text1 = `Do you want to accept ${e.CompanyName} ingredient `;

  
    Swal.fire({
      title: text1,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        UpdateRole(id, ingId, e);

        Swal.fire("ingredient has been accepted", "", "success");

        // window.location.reload();
      } else Swal.fire(" Cancelled", "", "error");
    });
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
                  <p className="text-xs tracking-wide text-gray-600">
                    Ingredient Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    New Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    Company Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    price Plan
                  </p>
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

            {slicedArrayUsers?.map((e) => {
              return (
                <tbody role="rowgroup">
                  <tr role="row">
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                      role="cell"
                    >
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src={`http://localhost:5000/${e.image}`}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>

                      <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                        {e.TrueName}
                      </p>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-full text-xl">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.ingredientName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {e.CompanyName}
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        <div className=" w-10 flex flex-col justify-center items-center">
                          {" "}
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.pricePlan}
                          </p>
                        </div>
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button onClick={() => handleUpdate(e._id, e.IngId, e)}>
                        <Icon color="blue" path={mdiCheckDecagram} size={1} />
                      </button>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                        onClick={() => handleDelete(e.userid, e.username)}
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

        <form>
          <div className="relative mt-5">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              value={searchTermUsersA}
              onChange={(e) => {
                setSearchTermUsersA(e.target.value);
                filterDataByNameUsersA(e.target.value);
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
                  <p className="text-xs tracking-wide text-gray-600">
                    Ingredient Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    New Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    Company Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    price Plan
                  </p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">Created Date</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">Updated Date</p>
                </th>
              </tr>
            </thead>

            {slicedArrayUsersA?.map((e) => {
              return (
                <tbody role="rowgroup">
                  <tr role="row">
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                      role="cell"
                    >
                      <div className="h-[25px] w-[25px] rounded-full">
                        <img
                          src={`http://localhost:5000/${e.image}`}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>

                      <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                        {e.TrueName}
                      </p>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-full text-xl">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.ingredientName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {e.CompanyName}
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        <div className=" w-10 flex flex-col justify-center items-center">
                          {" "}
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.pricePlan}
                          </p>
                        </div>
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                     
                      { moment(e.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                      
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      
                       
                        { moment(e.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
                      
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <div className="flex w-full justify-center mt-5">
            {
              <Pagination
                count={totalPagesUsersA}
                page={currentPageUsersA}
                onChange={handlePageChangeUsersA}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptIng;
