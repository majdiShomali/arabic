import React from 'react'

const Test6 = () => {

    let array = [{image:"../image.png",title:"Jonathan Reinink",date:"Aug 18"},{image:"../image.png",title:"Jonathan Reinink",date:"Aug 18"},{image:"../image.png",title:"Jonathan Reinink",date:"Aug 18"},{image:"../image.png",title:"Jonathan Reinink",date:"Aug 18"}]
  return (
    <>
{


array.map((e)=>{


return(


<div className="max-w-sm w-full lg:max-w-full lg:flex mb-5">
          <div
            className="h-96 lg:h-80 lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
            style={{
              backgroundImage: url("https://images.pexels.com/photos/16762985/pexels-photo-16762985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"),
            }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
            <div className="collapse mb-8">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Click me to show/hide content
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={img}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{e.title}</p>
                <p className="text-gray-600">{e.date}</p>
              </div>
            </div>
          </div>
        </div>




)





})










}
    
    
    
    
    </>
  )
}

export default Test6