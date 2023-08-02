import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Hero = () => {

  const [selectedType, setSelectedype] = useState("");
  const navigate = useNavigate();

  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/SignUp/${SignUpType}`);
  }
  function handleKitchen() {
  
    navigate(`/Kitchen`);
  }


  return (
    <>
      <div className="relative bg-[#fcfbfb] py-8  shadow-sm lg:h-[100vh]">
        <div className="container ">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center ">
           
           
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://albwabh.com/wp-content/uploads/2022/05/%D9%8A%D8%B1%D9%8A%D8%AF-%D8%B7%D8%A8%D8%A7%D8%AE-%D8%A3%D9%86-%D9%8A%D8%B4%D9%88%D9%8A-6-%D9%83%D9%8A%D9%84%D9%88-%D8%AC%D8%B1%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%84%D9%84%D8%AD%D9%85-%D8%A5%D8%B0%D8%A7-%D9%83%D8%A7%D9%86-%D9%83%D9%84-%D9%83%D9%8A%D9%84%D9%88-%D8%AC%D8%B1%D8%A7%D9%85-%D9%8A%D8%AD%D8%AA%D8%A7%D8%AC-%D8%A5%D9%84%D9%89-20-%D8%AF%D9%82%D9%8A%D9%82%D8%A9.jpg"
                    alt="hero"
                    className="w-[30rem] h-[33rem] lg:mr-16 rounded-sm rounded-tr-[7rem] mt-10"
                  />
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#E8AA42" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#E8AA42" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#E8AA42" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#E8AA42" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#E8AA42" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#E8AA42" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#E8AA42" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#E8AA42" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#E8AA42" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#E8AA42" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#E8AA42" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#E8AA42" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#E8AA42" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#E8AA42" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#E8AA42" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#E8AA42" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#E8AA42" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#E8AA42" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#E8AA42" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#E8AA42" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#E8AA42" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#E8AA42" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#E8AA42" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#E8AA42" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#E8AA42" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
           
           
           
           
           
           
            <div className="w-full px-4 lg:w-[45rem]">
              <div className="hero-content lg:pl-14 lg:pt-10 ">
                <h1 className="mb-3 max-w-[480px] text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px] text-right">
                اكتشف النكهات الأصيلة من الشرق الأوسط
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color text-right">
                استكشف مكتبة الوصفات الشاملة لدينا ، كاملة مع الإرشادات خطوة بخطوة ،
              نصائح مفيدة ، وقصص آسرة وراء كل وصفة. انطلق في تجربة حسية
              رحلة وتذوق الأذواق المتنوعة للشرق الأوسط مع المسرات العربية.
                </p>
                {
              localStorage.auth == null ? 
            <p className="my-2 mb-4 text-end max-w-[480px]">سجل الان</p>
             :null}

                <div className="flex items-center justify-end max-w-[480px]">
              
              {
              localStorage.auth == null ? (
                <>
                  <Button
                    className="mr-5  border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleTypeSelection("user")}
                  >
                    تصفح الوصفات
                  </Button>
                  <Button
                    className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleTypeSelection("beneficiary")}
                  >
                    اضف وصفات
                  </Button>
                </>
              ) : 
              
              
              <Button
              className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
              variant="text"
              onClick={() => handleKitchen()}
            >
              المطبخ
            </Button>
              
              
              
              }
            </div>

                <ul className="flex flex-wrap items-center justify-end max-w-[520px]">
              
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
                    >
                       تحميل التطبيق
                      <span className="ml-2">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="11" cy="11" r="11" fill="#E8AA42" />
                          <rect
                            x="6.90906"
                            y="13.3636"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="10.1818"
                            y="6"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                     
                    </a>
                  </li>
                </ul>
    
              </div>
            </div>

         


          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="w-full h-10" />
      </a>
    </>
  );
};




