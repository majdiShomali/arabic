import React from 'react'
import { useState ,useEffect } from 'react';
import Select from 'react-select'
import { useContext } from "react";
import { UserContext } from "../UserContext";

const AdminForm = () => {
  const { foodCards, updateValue } = useContext(UserContext);

    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [link3, setLink3] = useState("");

    const [table, setTable] = useState([]);
    const [yourSelectedStateValue, setOption] = useState("Meals");

  



    function CreateNew(){
    let tableObj={
      Id:table.length,
      Name:name,
      Category:yourSelectedStateValue,
      Names:[name1,name2,name3],
      Links:[link1,link2,link3],
      Items:foodCards

    }
    setTable(prevArray => [...prevArray, tableObj])
console.log(table)
    }
  return (
    <>
     <div id="crud">
        <div className="head">
          <h2>meal name</h2>
          <input value={name} onChange={(e) => setName(e.target.value)}  className="links_input001" placeholder="MEAL name" type="text" id="meal_name_in" />
        </div>
        <div className="inputs">

          <div className="link_div_submit">
            <input value={name1} onChange={(e) => setName1(e.target.value)} className="links_input001" placeholder="name 1" type="text" id="name_link0" />
            <input value={name2} onChange={(e) => setName2(e.target.value)} className="links_input001" placeholder="name 2" type="text" id="name_link1" />
            <input value={name3} onChange={(e) => setName3(e.target.value)} className="links_input001" placeholder="name 3" type="text" id="name_link2" />
          </div>

          <div className="link_div_submit">
            <input value={link1} onChange={(e) => setLink1(e.target.value)} className="links_input00" placeholder="link 1" type="text" id="link_add_0" />
            <input value={link2} onChange={(e) => setLink2(e.target.value)} className="links_input00" placeholder="link 2" type="text" id="link_add_1" />
            <input value={link3} onChange={(e) => setLink3(e.target.value)} className="links_input00" placeholder="link 3" type="text" id="link_add_2" />
          </div>

          <select
         value={yourSelectedStateValue} 
         onChange={e => setOption(e.target.value)} 
           >
              <option value="cook_now_container">Meals</option>
              <option value="cook_now_container2">Drinks</option>
              <option value="cook_now_container3">Sweets</option>
         </select>
 
          <button onClick={()=>CreateNew()} id="createnew_obj">create</button>
        </div>
        <div className="outputs">
          <div className="searchblock">
            <input onkeyup="searchData(this.value)" type="text" id="searchby" placeholder="search" />
            <div className="btnsearch">
              <button onclick="get_search_mood(this.id)" id="searchbytitle">
                search by title
              </button>
              <button onclick="get_search_mood(this.id)" id="searchbycategory">
                search by category
              </button>
            </div>
          </div>
          <div id="table_div">
            <table id="table_body">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>category</th>
                  <th>view</th>
                  <th>update</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody id="tbody" >
              {
              table.map((e)=>{
              return(
                <tr>
                <th>{e.Id}</th>
                <th>{e.Name}</th>
                <th>{e.Category}</th>
                <th> <button>view</button> </th>
                <th> <button>update</button> </th>
                <th> <button>delete</button> </th>
              </tr>  
                )
              })

              }
                
                </tbody>
            </table>
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default AdminForm