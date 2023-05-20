import React from 'react'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
const AdminForm = () => {
  const { foodCards, updateValue } = useContext(UserContext);
  const { foodCardsName, updateValue1 } = useContext(UserContext);

    const [name, setName]   = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [link3, setLink3] = useState("");
    const [currentLinks, setCurrentLinks] = useState([]);
    let localTable =[]

    if(localStorage.table !=[] && localStorage.table !=null && localStorage.table !=undefined ){
      localTable=JSON.parse(localStorage.table)

    }
    const [table, setTable] = useState(localTable);

    const [yourSelectedStateValue, setOption] = useState("cook_now_container");

    function CreateNew(){
      let link_name001;
      let link_name002;
      let link_name003;
      if (link1 != "") {
        link_name001 = "https://www.youtube.com/embed/".concat(
        link1.replace("https://youtu.be/", "")
      );
      }else{
        link_name001=link1
      }

      if (link2 != "") {
        link_name002 = "https://www.youtube.com/embed/".concat(
        link2.replace("https://youtu.be/", "")
      );
      }else{
        link_name002=link2
      }
      if (link3 != "") {
        link_name003 = "https://www.youtube.com/embed/".concat(
        link3.replace("https://youtu.be/", "")
      );
      }else{
        link_name003=link3
      }
     

    let tableObj={
      Id:table.length,
      Name:name,
      Category:yourSelectedStateValue,
      Names:[name1,name2,name3],
      Links:[link_name001,link_name002,link_name003],
      Items:foodCards,
      ItemsName:foodCardsName
    }
    setTable(prevArray => [...prevArray, tableObj])
    }

  function ShowVideos(index){
  table[index].Links.map((e)=>{
    setCurrentLinks(prevArray => [...prevArray, e])

  })
  console.log(currentLinks)
  }

  function DeleteRecipe(id){
    setTable((prevAccounts) => {
      const newItems = prevAccounts.filter(
        (item) => item.Id !== id
      );
      return  (newItems)
      
    });
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
              table.map((e,i)=>{
              return(
                <tr>
                <th>{e.Id}</th>
                <th>{e.Name}</th>
                <th>{e.Category}</th>
                <th> <button onClick={()=>ShowVideos(i)}>view</button> </th>
                <th> <button>update</button> </th>
                <th> <button onClick={()=>DeleteRecipe(e.Id)}>delete</button> </th>
              </tr>  
                )
              })

              }
                
                </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="cook_now_videos">
        <div class="video-list">

        {
        currentLinks.map((e)=>{
          return(
        <iframe src={e} style={{height:"315px" ,width:"560px"}} title="YouTube video player" allowfullscreen ></iframe>
        )
           })
           }
        </div>
      </div>
      {localStorage.setItem('table',JSON.stringify(table))}

    </>

  )
}

export default AdminForm