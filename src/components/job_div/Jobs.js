import React from 'react';

export default function Jobs() {

  const Books = [
    {
      title: "Microservices",
      imageAddress: "https://m.media-amazon.com/images/I/616ESSUzesS._AC_UY218_.jpg",
      price:"24"
    },
    {
      title: "Spring Boot",
      imageAddress: "https://m.media-amazon.com/images/I/61pSe-fMZML._AC_UY218_.jpg",
      price:"24"
    },
    {
      title: "Apps and Services with .NET",
      imageAddress: "https://m.media-amazon.com/images/I/61heeP8FtYL._AC_UY218_.jpg",
      price:"24"
    },
    {
      title: "Spring Boot in Practice",
      imageAddress: "https://m.media-amazon.com/images/I/61pSe-fMZML._AC_UY218_.jpg",
      price:"24"
    },
    {
      title: "Microservices Patterns",
      imageAddress: "https://m.media-amazon.com/images/I/71eY7tYDS4L._AC_UL320_.jpg",
      price:"24"
    },
    {
      title: "Full Stack Development",
      imageAddress: "https://m.media-amazon.com/images/I/71CRZ0mdLLL._AC_UY218_.jpg",
      price:"24"
    },
    {
      title: "JHipster",
      imageAddress: "https://m.media-amazon.com/images/I/81veYKT7kWL._AC_UY218_.jpg",
      price:"24"
    },
    {
      title: "React JS",
      imageAddress: "https://m.media-amazon.com/images/I/71f7ATQsGwL._AC_UY218_.jpg",
      price:"24"
    }
  ]

  
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Books.map((book, index) => {
            return (
              <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor  group-hover:text-white">{book.title}</h1>
                </span>
                <img className='mx-auto w-full' src={book.imageAddress} alt="" />

                <button className="border-[2px] rounded-[10px] block p-[10px] mt-[15px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Buy Now</button>
              </div>
            );
        })}        
      </div>
    </div>
  )
}
