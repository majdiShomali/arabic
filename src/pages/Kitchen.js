import React from 'react'
import './kitchen.css'
import { useState ,useEffect } from 'react';
const Kitchen = () => {

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
      let localList =[]
      let localListN =[]
      if(localStorage.MyListN !=[] && localStorage.MyListN !=null && localStorage.MyListN !=undefined ){

         localList=JSON.parse(localStorage.MyList)
         localListN=JSON.parse(localStorage.MyListN)

         newArrayV.map((e)=>{
          if(localListN.includes(e.name) ){
                 e.clicked='Added'   
          }
         })

         newArrayF.map((e)=>{
          if(localListN.includes(e.name) ){
                 e.clicked='Added'   
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
                setMyList(prevArray => [...prevArray, e])
                setMyListN(prevArray => [...prevArray, e.name])
             }else{
                e.clicked='Click to add'
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
                setMyList(prevArray => [...prevArray, e])
                setMyListN(prevArray => [...prevArray, e.name])

             }else{
                e.clicked='Click to add'
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
    <div  class ="vegetables_container">
        {

    vegetables.map((e,i)=>{
     return(
      <div onClick={()=> changeStatusV(e.name,i)} id={e.name} className="ingredient_class vegetables" data-target={e.name}>
       <h4>{e.name}</h4>
       <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p></div>   
       </div>
     )
      })

      }

    </div> 


    <div  class ="fruit_container">
{
    fruit.map((e,i)=>{
     return(
      <div onClick={()=> changeStatusF(e.name,i)} id={e.name} className="ingredient_class fruit" data-target={e.name}>
       <h4>{e.name}</h4>
       <img className="fruitimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard fruitpd" ><p className="fruitp">{e.clicked}</p></div>   
       </div>
     )
      })
}
        
    </div>


<div  class ="my_list_container">
{
MyList?.map((e,i)=>{

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
{localStorage.setItem("MyList", JSON.stringify(MyList))}
{localStorage.setItem("MyListN", JSON.stringify(MyListN))}

</>
  )
}

export default Kitchen