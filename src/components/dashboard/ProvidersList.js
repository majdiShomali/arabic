import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js';
import { mdiCheckCircle } from '@mdi/js';
import { mdiDelete } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

 import Pagination from "@mui/material/Pagination";

const ProvidersList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [FilterDataRestaurants, setFilterDataRestaurants] = useState([]);
  const [email, setEmail] = useState("");


  const allProviders = async () => {
    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.get("http://localhost:5000/api/Providers");
      console.log(response.data);
      setRestaurants(response.data);
      setFilterDataRestaurants(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  useEffect(() => {
    allProviders();
  }, []);


       //-----------------------search------------------------//
       const [searchTermRestaurants, setSearchTermRestaurants] = useState('');
       
       
       const filterDataByNameRestaurants = (searchTermRestaurants) => {
         console.log(searchTermRestaurants)
         
         const filteredDataRestaurants = restaurants.filter(item =>
       
           item.firstName.toLowerCase().includes(searchTermRestaurants.toLowerCase())
         );
         setFilterDataRestaurants(filteredDataRestaurants);
          setCurrentPageRestaurants(1)
       }
       
       const [currentPageRestaurants, setCurrentPageRestaurants] = useState(1);

       let totalItemsRestaurants;
       
       let totalPagesRestaurants;
       
       let slicedArrayRestaurants;
       
       const itemsPerPage = 3;
       
       totalItemsRestaurants = FilterDataRestaurants.length;
       
       totalPagesRestaurants = Math.ceil(totalItemsRestaurants / itemsPerPage);
       
       const startIndexRestaurants = (currentPageRestaurants - 1) * itemsPerPage;
       
       const endIndexRestaurants = startIndexRestaurants + itemsPerPage;
       
       slicedArrayRestaurants = FilterDataRestaurants.slice(startIndexRestaurants, endIndexRestaurants);
       
       const handlePageChangeRestaurants = (event, pageNumber) => {
         setCurrentPageRestaurants(pageNumber);
       };

       

       const handleDelete = (id,name) => {



        Swal.fire({
          title: ` Do you want to remove ${name}?  `,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          icon: 'warning'
      }
      ).then( async(result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
    
              Swal.fire(` ${name} has been removed `, '', 'success');
              try {
             const response = await axios.delete(`http://localhost:5000/api/provider/${id}`);
               console.log(response.data)
                allProviders();
              } catch (error) {
                console.error("Error deleting user:", error);
              }
          } else
              Swal.fire(' Cancelled', '', 'error')
    
      })
    
    
    }


    const UpdateRole = async (userId, roleN) => {
      try {
        const updatedUser = {
          // Update the properties of the user as needed
          role: roleN,
        };
  
        await axios.put(`http://localhost:5000/api/userList/${userId}`, updatedUser);
        allProviders();
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };

    const handleUpdate = (userid, typeid, name) => {
      let role = typeid == 0 ? "user" : "privider";
      let role2 = typeid == 2 ? "user" : "privider";
      let text1 = "";
      let text2 = "";
      if (role == "user") {
        text1 = `Do you want to switch ${name} to admin `;
        text2 = ` ${name} is now an admin `;
      } else {
        text1 = `Do you want to switch ${name} to user `;
        text2 = ` ${name} is now a user `;
      }
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
          let roleN;
          if (typeid == 0) {
            roleN = 2;
          } else {
            roleN = 0;
          }
  
          UpdateRole(userid, roleN);
  
          Swal.fire(text2, "", "success");
  
          // window.location.reload();
        } else Swal.fire(" Cancelled", "", "error");
      });
    };





  return (
    
<>





<div className='bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)] '>


<form>
 
  {/* <div className="relative">
 
    <input
      type="email"
      id="search"
      name='email'
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Email"
      required=""
      value={email}
      onChange={(e) => {setEmail(e.target.value);}}
    />
    <button
       onClick={()=>addrestaurants()}
      type="submit"
      className="text-white bg-amber-700 absolute right-2.5 bottom-2.5 amber-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      add Email
    </button>
  </div> */}
</form>
  <div className="relative flex items-center justify-between pt-4">
    <div className="text-xl font-bold text-navy-700 dark:text-white">
    Providers Table
    </div>
 
  </div>

  <form>
 
 <div className="relative">

   <input
     type="text"
     id="search"
     className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="Search"
     required=""
     value={searchTermRestaurants}
     onChange={(e) =>{
      setSearchTermRestaurants(e.target.value);
     filterDataByNameRestaurants(e.target.value);
    }}
   />

 </div>
</form>

  <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
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
            <p className="text-xs tracking-wide text-gray-600">EMAIL</p>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">PHONE</p>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">Edit</p>
          </th>

          {/* <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">EDIT</p>
          </th> */}

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
      

{
// [
//   {
//       "restaurant_id ": 1,
//       "user_id": 33,
//       "restaurant_name": "aaa",
//       "address": "aaaaa",
//       "contact_number": "aaaaa",
//       "type_food": "aaaa",
//       "des": "aaaaaaaaa",
//       "img": "aaaaaaaaa",
//       "food_image": "aaaaaaaaaa"
//   }
// ]
slicedArrayRestaurants.map((e)=>{

return(

<tbody role="rowgroup">
<tr role="row">
          <td className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center" role="cell">
          <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src={`http://localhost:5000/${e.img}`}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
            <p className="text-sm font-bold text-navy-700 ml-3 dark:text-white">
              {e.firstName} 
            </p>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
            <div className="flex items-center gap-2">
              <div className="rounded-full text-xl">
                {/* <Icon color= {e.STATUSt=="APPROVED" ? 'green' : 'blue'} path={e.STATUS} size={1} /> */}
                {e.email}
              
              </div>
              {/* <p className="text-sm font-bold text-navy-700  dark:text-white">
                {e.STATUSt}
              </p> */}
            </div>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {e.phone}
            </p>
          </td>
  

          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
                     <button
                      onClick={() => handleUpdate(e._id, e.role, e.firstName)}
                     
                     >
                     <Icon color="blue" path={mdiFileEdit} size={1} />
                    </button>
          </td>


          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
                     <button onClick={() => handleDelete(e._id,e.firstName)}>
                      <Icon color="red" path={mdiDelete} size={1} />
                    </button>
          </td>


        </tr>
       
      </tbody>




)



})

}


        
    </table>

    <div className='flex w-full justify-center mt-5'>   
    {(
        <Pagination
          count={totalPagesRestaurants}
          page={currentPageRestaurants}
          onChange={handlePageChangeRestaurants}
        />
      )}
    </div> 
  </div>


</div>




  </>
  )
}

export default ProvidersList