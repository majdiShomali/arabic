import React from 'react'
import './Admin.css'
import { useState ,useEffect } from 'react';
import AdminForm from '../components/AdminForm';
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Admin = () => {
  const { foodCards, updateValue } = useContext(UserContext);
  const { foodCardsName, updateValue1 } = useContext(UserContext);

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

      const [MyListAdmin, setMyListAdmin] = useState([]);
      const [MyListNAdmin, setMyListNAdmin] = useState([]);

      function changeStatus(name,i){
        const newArrayAll =[...items]
        newArrayAll.map((e)=>{
            if(name==e.name){
                if(e.clicked=='Click to add'){
                   e.clicked='Added'
                   setMyListAdmin(prevArray => [...prevArray, e])
                   setMyListNAdmin(prevArray => [...prevArray, e.name])
                   updateValue(prevArray => [...prevArray, e])
                   updateValue1(prevArray => [...prevArray, e.name])
   
                }else{
                   e.clicked='Click to add'
                   removeItem(name)
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
        
        updateValue((prevAccounts) => {
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









  return (
    <>

        <div class="all_items_container">
{
        items.map((e,i)=>{
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
    
    
    


<AdminForm/>
     








    
    
    </>

  )
}

export default Admin