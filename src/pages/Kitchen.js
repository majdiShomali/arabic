import React from 'react'
import './kitchen.css'
import { useState ,useEffect } from 'react';
import Pagination from "@mui/material/Pagination";
import AboutUsed from "../pages/aboutPage/AboutUsed"
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { mdiMinus } from '@mdi/js';
import IngredientsCard from '../components/IngredientsCard';
const Kitchen = () => {
let AddPlus = mdiPlus
let removMinus = mdiMinus

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
              clicked:"Click to add",
              icon:AddPlus
              }
              item_obj.name=item_name[i];
              item_obj.img=item_img[i];
              item_obj.type=item_type[i];
        items_obj.push(item_obj);
        }
    
      }




      const newArrayV =[...vegetables_obj]
      const newArrayF =[...fruit_obj]
      let localList =[]
      let localListN =[]
      if(localStorage.MyListN !=[] && localStorage.MyListN !=null && localStorage.MyListN !=undefined ){

         localList=JSON.parse(localStorage.MyList)
         localListN=JSON.parse(localStorage.MyListN)

         newArrayV.map((e)=>{
          if(localListN.includes(e.name) ){
                 e.clicked='Added' 
                 e.icon=removMinus  
          }
         })

         newArrayF.map((e)=>{
          if(localListN.includes(e.name) ){
                 e.clicked='Added' 
                 e.icon=removMinus  
          }
         })
    
      }
      

      const [vegetables, setVegetables] = useState(newArrayV);
      const [fruit, setFruit] = useState(newArrayF);

//--------------------------------

//-----------------------search------------------------//
const [searchTermVegetables, setSearchTermVegetables] = useState('');
const [FilterDataVegetables, setFilterDataVegetables] = useState([...vegetables_obj]);

const [searchTermFruit, setSearchTermFruit] = useState('');
const [FilterDataFruit, setFilterDataFruit] = useState([...fruit_obj]);

const filterDataByNameVegetables = (searchTermVegetables) => {
  
  const filteredDataVegetables = vegetables.filter(item =>

    item.name.toLowerCase().includes(searchTermVegetables.toLowerCase())
  );
  setFilterDataVegetables(filteredDataVegetables);
  setCurrentPageVegetables(1)
}

const filterDataByNameFruit = (searchTermFruit) => {
  
  const filteredDataFruit = fruit.filter(item =>

    item.name.toLowerCase().includes(searchTermFruit.toLowerCase())
  );
  setFilterDataFruit(filteredDataFruit);
  setCurrentPageFruit(1)
}
//----------------------------------------------------//

  const [currentPageVegetables, setCurrentPageVegetables] = useState(1);
  const [currentPageFruit, setCurrentPageFruit] = useState(1);

  let totalItemsVegetables;
  let totalItemsFruit;

  let totalPagesVegetables;
  let totalPagesFruit;

  let slicedArrayVegetables;
  let slicedArrayFruit;

  const itemsPerPage = 8;

  totalItemsVegetables = FilterDataVegetables.length;
  totalItemsFruit = FilterDataFruit.length;

  totalPagesVegetables = Math.ceil(totalItemsVegetables / itemsPerPage);
  totalPagesFruit = Math.ceil(totalItemsFruit / itemsPerPage);

  const startIndexVegetables = (currentPageVegetables - 1) * itemsPerPage;
  const startIndexFruit = (currentPageFruit - 1) * itemsPerPage;

  const endIndexVegetables = startIndexVegetables + itemsPerPage;
  const endIndexFruit = startIndexFruit + itemsPerPage;

  slicedArrayVegetables = FilterDataVegetables.slice(startIndexVegetables, endIndexVegetables);
  slicedArrayFruit = FilterDataFruit.slice(startIndexFruit, endIndexFruit);

  const handlePageChangeVegetables = (event, pageNumber) => {
    setCurrentPageVegetables(pageNumber);
  };
  const handlePageChangeFruit = (event, pageNumber) => {
    setCurrentPageFruit(pageNumber);
  };

//--------------------------------



        const [MyList, setMyList] = useState(localList);
        const [MyListN, setMyListN] = useState(localListN);
       
 


      function changeStatusV(name,i){
        const newArray =[...vegetables]
        newArray.map((e)=>{

         if(name==e.name ){
             if(e.clicked=='Click to add'){
                e.clicked='Added'
                e.icon=removMinus
                setMyList(prevArray => [...prevArray, e])
                setMyListN(prevArray => [...prevArray, e.name])
             }else{
                e.clicked='Click to add'
                e.icon=AddPlus
                removeItem(name)
             }
         }
        })
        setVegetables(() => { return  newArray});

      }


      function changeStatusF(name,i){
        const newArray =[...fruit]
        newArray.map((e)=>{

         if(name==e.name){
             if(e.clicked=='Click to add'){
                e.clicked='Added'
                e.icon=removMinus
                setMyList(prevArray => [...prevArray, e])
                setMyListN(prevArray => [...prevArray, e.name])

             }else{
                e.clicked='Click to add'
                e.icon=AddPlus
                removeItem(name)
             }
         }
        })
        setFruit(() => { return  newArray});
      }


      function changeStatus(name,i){

        const newArrayV =[...vegetables_name]
        const newArrayF =[...fruit_name]
       

        if(newArrayF.includes(name)){
            changeStatusF(name,i)
        }else if(newArrayV.includes(name)){
            changeStatusV(name,i)
        }
      }

      function removeItem(name) {
        setMyList((prevAccounts) => {
          const newItems = prevAccounts.filter(
            (item) => item.name !== name
          );
          return  (newItems)
          
        });

        setMyListN((prevAccounts) => {
          const newItems = prevAccounts.filter(
            (item) => item !== name
          );
          return  (newItems)
          
        });

      }

 

  
      return (
        <>

          <AboutUsed/>



          <fieldset className='AdminFieldset'>
      <legend >
        Vegetables:
        <input type='text'placeholder='Search' style={{border:"1px solid black",}}
        
        value={searchTermVegetables}
       onChange={(e) =>{
        setSearchTermVegetables(e.target.value);
       filterDataByNameVegetables(e.target.value);
      }
  }
        
        />
        </legend>
    <div  class ="vegetables_container">
    
        {

      slicedArrayVegetables.map((e,i)=>{
     return(
      <div onClick={()=> changeStatusV(e.name,i)} id={e.name} className="ingredient_class vegetables" data-target={e.name}>
       <h4>{e.name}</h4>
       <Icon className='iconAddOrRemove' path={e.icon} size={1} />
       <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p>  </div>   
       </div>

      
     )
      })

      }

    </div> 


    </fieldset>

    <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPagesVegetables}
          page={currentPageVegetables}
          onChange={handlePageChangeVegetables}
        />
      )}
    </div> 



    <fieldset className='AdminFieldset'>
      <legend >
      Fruits:
        <input type='text'placeholder='Search' style={{border:"1px solid black",}}
        
        value={searchTermFruit}
       onChange={(e) =>{
        setSearchTermFruit(e.target.value);
       filterDataByNameFruit(e.target.value);
      }
  }
        
        />
        </legend>

    <div  class ="fruit_container">
{
    slicedArrayFruit.map((e,i)=>{
     return(
      <div onClick={()=> changeStatusF(e.name,i)} id={e.name} className="ingredient_class fruit" data-target={e.name}>
       <h4>{e.name}</h4>
       <Icon className='iconAddOrRemove' path={e.icon} size={1} />
       <img className="fruitimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard fruitpd" ><p className="fruitp">{e.clicked}</p></div>   
       </div>
     )
      })
}
        
    </div>
    </fieldset>


    <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPagesFruit}
          page={currentPageFruit}
          onChange={handlePageChangeFruit}
        />
      )}
    </div> 


    <fieldset className='AdminFieldset'>
      <legend >
        MyList:
        </legend>
<div  className ="my_list_container00">
{
MyList?.map((e,i)=>{

    return(
    <div onClick={()=> changeStatus(e.name,i)}  id={e.name} className="ingredient_class vegetables" data-target={e.name}>
    <h4>{e.name}</h4>
    <Icon className='iconAddOrRemove' path={e.icon} size={1} />
    <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
    <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p></div>   
    </div>
    )


})
}
</div>

</fieldset>

{localStorage.setItem("MyList", JSON.stringify(MyList))}
{localStorage.setItem("MyListN", JSON.stringify(MyListN))}

</>
  )
}

export default Kitchen