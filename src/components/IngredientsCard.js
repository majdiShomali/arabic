import React from 'react'
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { mdiMinus } from '@mdi/js';
import { useState ,useEffect } from 'react';








const IngredientsCard = ({name0,index,img,icon,clicked}) => {


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
    <div onClick={()=> changeStatus(name0,index)}  id={name0} className="ingredient_class vegetables" data-target={name0}>
    <h4>{name0}</h4>
    <Icon className='iconAddOrRemove' path={icon} size={1} />
    <img className="vegetablesimg"  src={require(`../${img}`)}/>      
    <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{clicked}</p></div>   
    </div>
  )
}

export default IngredientsCard