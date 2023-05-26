import React from 'react'
import './Admin.css'
import { useState ,useEffect } from 'react';
// import AdminForm from '../components/AdminForm';
// import { useContext } from "react";
// import { UserContext } from "../UserContext";
import Pagination from "@mui/material/Pagination";
import AdminRecipeForm from "../components/AdminRecipeForm";
import Swal from 'sweetalert2'
import Icon from "@mdi/react";
import { mdiFridge } from "@mdi/js";
import { mdiHamburgerPlus } from "@mdi/js";
import { mdiStove } from "@mdi/js";
import aboutMeal from "../Images/meals/majdi.jpg";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const Admin = () => {
  const [MyListAdmin, setMyListAdmin] = useState([]);
  const [MyListNAdmin, setMyListNAdmin] = useState([]);



  const  [foodCards, setFoodCards]  = useState([]);
  const  [foodCardsName, setFoodCardsName]  = useState([]);

    let vegetables_name=['potato','onion','garlic','Broccoli','Cabbage','Bean','Arugula','Carrot','Cauliflower','Celery','Cherry Tomato','Common Beans','Cucumbers','Eggplant','Ginger','Lemon','Lettuce','Mulukhiyah','Mushrooms','Okra','Parsley','pea','radish','red pepper','Spinach','sweet pepper','tomato'];
    let vegetables_img=[];
    let vegetables_type=[];

    let fruit_name=['apple','Apricot', "Avocado", "Banana" ,"Blackberries" , "Blueberries" ,"Cherry", "Date Palm" ,"Grape", "Guava" , "Kiwi" ,"Lime", "Mango" ,"Melon" ,"Nectarines", "Olives" ,"Orange"  ,"Pear" , "Pineapple", "Pomegranate", "Pomelo", "Raspberry" ,"Strawberry" ,"watermelon"];
    let fruit_img=[];
    let fruit_type=[];

    arraytoimage('Images/vegetables/',vegetables_name,vegetables_img,vegetables_type,'vegetables');
    arraytoimage('Images/fruits/',fruit_name,fruit_img,fruit_type,'fruit');

    function arraytoimage(fruit_name0,item_name,item_img,item_type,type){

        for(let i=0;i<item_name.length;i++){
          item_img[i]=fruit_name0+item_name[i]+'.png';
           }
        for(let i=0;i<item_name.length;i++){
          item_type[i]=type;
           }
      }

      let vegetables_obj=[];
      arraytoobject(vegetables_name,vegetables_img,vegetables_type,vegetables_obj,'vegetables');
  
      let fruit_obj=[];
      arraytoobject(fruit_name,fruit_img,fruit_type,fruit_obj,'fruit');


      function arraytoobject(item_name,item_img,item_type,items_obj,type){

        for(let i=0;i<item_name.length;i++){
          let item_obj={
              name:'name',
              img:'img',
              type:type ,
              clicked:"Click to add"
              }
              item_obj.name=item_name[i];
              item_obj.img=item_img[i];
              item_obj.type=item_type[i];
        items_obj.push(item_obj);
        }
    
      }

      const newArrayV =[...vegetables_obj]
      const newArrayF =[...fruit_obj]
      const newArrayAll =newArrayV.concat(newArrayF)

      const [items, setItems] = useState(newArrayAll);


//-----------------------search------------------------//
const [searchTerm, setSearchTerm] = useState('');
const [FilterData, setFilterData] = useState([...newArrayAll]);

const filterDataByName = (searchTerm) => {
  const filteredData = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilterData(filteredData);
  setCurrentPage(1)
}



      //----------------------pagination----------------------------//

      const [currentPage, setCurrentPage] = useState(1);

      let totalItems;
      let totalPages;
      let slicedArray;
    
      const itemsPerPage = 8;
    
      totalItems = FilterData.length;
    
      totalPages = Math.ceil(totalItems / itemsPerPage);
    
      const startIndex = (currentPage - 1) * itemsPerPage;
    
      const endIndex = startIndex + itemsPerPage;
    
      slicedArray = FilterData.slice(startIndex, endIndex);
    
      const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
      };


      //--------------------------------------------------//




 
      function changeStatus(name,i){

        const newArrayAll =[...items]
        newArrayAll.map((e)=>{
            if(name==e.name){
                if(e.clicked=='Click to add'){

                  Swal.fire({
                    title: `add ${name} to the recipe?  `,
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    icon: 'warning'
                }
                ).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
          
                        Swal.fire(` ${name} added `, '', 'success');
                        e.clicked='Added'
                        setMyListAdmin(prevArray => [...prevArray, e])
                        setMyListNAdmin(prevArray => [...prevArray, e.name])
                        setFoodCards(prevArray => [...prevArray, e])
                        setFoodCardsName(prevArray => [...prevArray, e.name])
                    } else
                        Swal.fire(' Cancelled', '', 'error')
          
                })


                }else{

                  Swal.fire({
                    title: `remove ${name} from the recipe?  `,
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    icon: 'warning'
                }
                ).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
          
                        Swal.fire(` ${name} removed `, '', 'success');
                        e.clicked='Click to add'
                        removeItem(name)
                    } else
                        Swal.fire(' Cancelled', '', 'error')
          
                })



                }
            }
           })
           setItems(() => { return  newArrayAll});
      }


      function removeItem(name) {
        setMyListAdmin((prevAccounts) => {
          const newItems = prevAccounts.filter(
            (item) => item.name !== name
          );
          return  (newItems)
          
        });
        
        setFoodCards((prevAccounts) => {
          
          const newItems = prevAccounts.filter(
            (item) => item.name !== name
          );
          return  (newItems)
          
        });
        setMyListNAdmin((prevAccounts) => {
          const newItems = prevAccounts.filter(
            (item) => item !== name
          );
          return  (newItems)
          
        });

      }


//--------------------------------------------------------------------------------------//


    const [name,   setName] = useState("");
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

    const [ButtonStatus, setButtonStatus] = useState("create");
    const [ButtonStatusId, setButtonStatusId] = useState();


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
     
if(ButtonStatus=="create"){
  
  
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
  }else{


   let NewTable=[...table]
   NewTable[ButtonStatusId].Name=name
   NewTable[ButtonStatusId].Category=yourSelectedStateValue
   NewTable[ButtonStatusId].Names=[name1,name2,name3]
   NewTable[ButtonStatusId].Links=[link_name001,link_name002,link_name003]
   NewTable[ButtonStatusId].Items=MyListAdmin
   NewTable[ButtonStatusId].ItemsName=MyListNAdmin
   
   setTable(NewTable)
   setButtonStatus("create")

   setName("")
   setName1("")
   setName2("")
   setName3("")
   setLink1("")
   setLink2("")
   setLink3("")
   setMyListAdmin([])
   setMyListNAdmin([])
   let NewItems =[...items]
   NewItems.map((et)=>{
      et.clicked='Click to add'  
    })
    setItems(NewItems)




  }


    }

    function ShowVideos(index){
      table[index].Links.map((e)=>{
        setCurrentLinks(prevArray => [...prevArray, e])
    
      })
      }
    
      function DeleteRecipe(id){
        setTable((prevAccounts) => {
          const newItems = prevAccounts.filter(
            (item) => item.Id !== id
          );
          return  (newItems)
          
        });
      }
    
     function UpdateRecipe(e,id){
      let link_name001 
      let link_name002 
      let link_name003 
      if (e.Links[0] != "") {
        link_name001 = "https://youtu.be/".concat(
          e.Links[0].replace("https://www.youtube.com/embed/", "")
        );
      } else {
        link_name001 = "";
      }
  
      if (e.Links[1] != "") {
        link_name002 = "https://youtu.be/".concat(
          e.Links[1].replace("https://www.youtube.com/embed/", "")
        );
      } else {
        link_name002 = "";
      }
  
      if (e.Links[2] != "") {
        link_name003 = "https://youtu.be/".concat(
          e.Links[2].replace("https://www.youtube.com/embed/", "")
        );
      } else {
        link_name003 = "";
      }



      setName(e.Name)
      setName1(e.Names[0])
      setName2(e.Names[1])
      setName3(e.Names[2])
      setLink1(link_name001)
      setLink2(link_name002)
      setLink3(link_name003)
      setMyListAdmin(e.Items)
      setMyListNAdmin(e.ItemsName)
      let NewItems =[...items]
      NewItems.map((et)=>{
        if(e.ItemsName.includes(et.name) ){
               et.clicked='Added'  
        }
       })
       setItems(NewItems)


       setButtonStatus("update")
       setButtonStatusId(id)
     }


  return (
    <>
<div className="AboutUsed m-5 px-8">
      <div className="containerr">
        <div className="text">
          <h1 className="text-3xl pb-5 ">Add Your recipe</h1>
          <p className="aboutP">
          Now you can add recipes and share it  
          </p>
          <div className="icons">
            <div className="icoon">
              <div>
              <Icon path={mdiFridge} size={2} />
              </div>
              <p>Fridge</p>
            </div>
            <div className="icoon">
              <div>
              <Icon path={mdiHamburgerPlus} size={2} />
              </div>
              <p>Add items</p>
            </div>
            <div className="icoon">
              <div>
              <Icon path={mdiStove} size={2} />
              </div>
              <p>Start cooking</p>
            </div>
          </div>
        </div>
        <div className="imgAbout">
          <img className="img-new" src={aboutMeal} alt="" />
        </div>
      </div>
    </div>


<fieldset>
      <legend >
        All ingredients:
        <input type='text'placeholder='Search' style={{border:"1px solid black",}}
        
        value={searchTerm}
       onChange={(e) =>{
        setSearchTerm(e.target.value);
       filterDataByName(e.target.value);
      }
  }
        
        />
</legend>

        <div class="all_items_container">
{
        slicedArray.map((e,i)=>{
     return(
      <div onClick={()=> changeStatus(e.name,i)} id={e.name} className="ingredient_class vegetables" data-target={e.name}>
       <h4>{e.name}</h4>
       <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p></div>   
       </div>
     )
      })

}
        </div>

        </fieldset>


        <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div> 
    
        <div  class ="my_list_container">
{
MyListAdmin?.map((e,i)=>{

    return(
    <div onClick={()=> changeStatus(e.name,i)}  id={e.name} className="ingredient_class vegetables" data-target={e.name}>
    <h4>{e.name}</h4>
    <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
    <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p></div>   
    </div>
    )


})
}
</div>

<div className="CrudFormContainer mb-4 mt-4">
      <Card color="transparent" shadow={false}>
        <fieldset className='AdminFieldset'>
          <legend>
        <Typography color="gray" className="mt-1 font-normal">
         <span style={{color:"#E8CC95"}}>Enter your recipe details:</span> 
        </Typography>
        </legend>
        <form  className="mt-4 mb-2 ">
      
          <div style={{width:"35rem"}} className="mb-4  ">
            <Input value={name} onChange={(e) => setName(e.target.value)}  size="lg" label="Meal Name" />

          </div>

          <div className="mb-4 flex ">
            <Input  value={name1} onChange={(e) => setName1(e.target.value)} style={{width:"10rem"}}  size="lg" label="Name 1" />
            <Input  value={name2} onChange={(e) => setName2(e.target.value)} style={{width:"10rem"}}  size="lg" label="Name 2" />
            <Input  value={name3} onChange={(e) => setName3(e.target.value)} style={{width:"10rem"}}  size="lg" label="Name 2" />
           </div>
           
          <div className="mb-4 flex ">
            <Input  value={link1} onChange={(e) => setLink1(e.target.value)} style={{width:"10rem"}} size="lg" label="Youtube link 1" />
            <Input  value={link2} onChange={(e) => setLink2(e.target.value)} style={{width:"10rem"}} size="lg" label="Youtube link 2" />
            <Input  value={link3} onChange={(e) => setLink3(e.target.value)} style={{width:"10rem"}} size="lg" label="Youtube link 2" />
           </div>
           <div>

              <select
                value={yourSelectedStateValue} 
                onChange={e => setOption(e.target.value)} 
                                                        >
              <option value="cook_now_container">Meals</option>
              <option value="cook_now_container2">Drinks</option>
              <option value="cook_now_container3">Sweets</option>
            </select>

           </div>

          <Button onClick={()=>CreateNew()} className="mt-6 bg-[#E8CC95]" fullWidth>
          {ButtonStatus}
          </Button>

        </form>
        </fieldset>
      </Card>
      </div>


    {/* //--------------------------------------------------------------------------// */}
    
    <div id="crud">
        {/* <div className="head">
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
 
          <button onClick={()=>CreateNew()} id="createnew_obj">{ButtonStatus}</button>
        </div> */}
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
                <th> <button onClick={()=>UpdateRecipe(e,e.Id)}>update</button> </th>
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

{/* <AdminForm/> */}
     








    
    
    </>

  )
}

export default Admin