import { useState,useEffect,useRef } from "react";
import SponcerCardStart from "./landingPage/SponcerCardStart";
import PaymentPage from "./landingPage/Payment";
import { useNavigate  } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import {
  Button,
} from "@material-tailwind/react";
const pricingData = [

  {
    mainTitle: "الاشتراك الحالي",
    monthlyPrice: 10,
    yerlyPrice: 100,
    infoNote: "يمكنك الغاء الاشتراك في اي وقت",
    isSelected: true,
    getIn: [
      {
        rightIcon: true,
        description: "20,000+ of PNG & SVG graphics",
      },
      {
        rightIcon: true,
        description: "Access to 100 million stock images",
      },
      {
        rightIcon: false,
        description: "Instant Access to our design system",
      },
      {
        rightIcon: false,
        description: "Create teams to collaborate on designs",
      },
    ],
  },
  
];
const RightIcon = ({ fillColor }) => {





  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="16" fill="#E8EDFB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
        fill={fillColor}
      />
    </svg>
  );
};
const CloseIcon = ({ fillColor }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect width="32" height="32" rx="16" fill="#F7F8F9" />
    <path
      d="M20.2421 20.2426C20.5025 19.9822 20.5025 19.5601 20.2421 19.2997L16.9428 16.0004L20.243 12.7001C20.5034 12.4397 20.5034 12.0176 20.243 11.7573C19.9827 11.4969 19.5606 11.4969 19.3002 11.7573L15.9999 15.0576L12.6997 11.7573C12.4393 11.4969 12.0172 11.4969 11.7568 11.7573C11.4965 12.0176 11.4965 12.4397 11.7568 12.7001L15.0571 16.0004L11.7578 19.2997C11.4974 19.5601 11.4974 19.9822 11.7578 20.2426C12.0181 20.5029 12.4402 20.5029 12.7006 20.2426L15.9999 16.9432L19.2993 20.2426C19.5597 20.5029 19.9818 20.5029 20.2421 20.2426Z"
      fill={fillColor}
    />
  </svg>
);
const Arrow = ({ strokColor }) => {
  return (
    <svg
      width="107"
      height="88"
      viewBox="0 0 107 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 md:w-20 h-20 -mt-8"
    >
      <path
        d="M95.4463 61.5975C83.1573 64.6611 68.4838 65.2433 57.6839 57.506C50.782 52.5613 47.1171 42.5628 49.6964 34.4471C52.1324 26.7825 57.8212 20.0482 66.3457 20.2534C70.789 20.3604 74.6201 22.4047 75.429 27.084C76.6648 34.2329 69.5331 41.6308 63.8629 44.7405C46.1672 54.4452 21.1341 53.9052 4.27686 42.6407"
        stroke={strokColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11.7068 55.8447C9.64482 52.9634 5.14208 46.2418 3.62681 42.4054"
        stroke={strokColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M3.62695 42.4055C7.1396 41.942 15.124 40.6363 18.9603 39.121"
        stroke={strokColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
const PricingReact = ({CompanyName,CompanyEmail,userId,ingredientName,image,ingredientType,IngId,TrueName}) => {

console.log(CompanyName,CompanyEmail,userId,ingredientName,image,ingredientType,IngId,TrueName)



const componentRef2 = useRef(null);
const [isPayButtonClicked, setIsPayButtonClicked] = useState(false);
const [pricePayed, setPricePayed] = useState();
const [pricePlan, setPricePlan] = useState();

useEffect(() => {
  if (isPayButtonClicked && componentRef2.current) {
    componentRef2.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [isPayButtonClicked]);


const handleCreate2 = async() => {
  let pricec = 100
  let pricePlanc = "oneYear"
  if(monthPrice){
      pricec =10
      pricePlanc = "oneMonth"
  }
  setPricePayed(pricec)
  setPricePlan(pricePlanc)


setIsPayButtonClicked(true);
}







const [imageDataUrl, setImageDataUrl] = useState('');

useEffect(() => {
  const reader = new FileReader();

  reader.onload = (e) => {
    setImageDataUrl(e.target.result);
  };

  reader.readAsDataURL(image);
}, []);


  const [monthPrice, setMonthPrice] = useState(true);
  const [OpenPayment, setOpenPayment] = useState(false);

  const navigate = useNavigate();




  return (
    <>

    
    
    <container className="flex flex-col justify-center items-center py-3 bg-[#f5f0f051] min-h-screen font-sans">
      {/* heading section  */}
      <div className="flex flex-col w-auto px-6 text-center text-2xl sm:text-3xl md:text-4xl">
 
        <span className="text-xl mt-4">
          اختر طريقة الدفع التي تناسبك
        </span>
        <div className="text-base mt-8 md:mt-12 gap-4 flex items-center justify-center pl-5">
          <span>اشتراك شهري </span>
          <div className="items-center flex">
            <label
              htmlFor="small-toggle"
              className="inline-flex relative cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                onClick={() => setMonthPrice(!monthPrice)}
                id="small-toggle"
                className="sr-only peer"
              />
              <div
                className="w-9 h-5 flex-1 align-middle bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-[#E8AA42] rounded-full peer dark:bg-[#E8AA42] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#219D80]"
              ></div>
            </label>
          </div>
          <span>اشتراك سنوي</span>
        </div>
      </div>
      <div className="w-[300px] sm:w-[350px] md:w-[590px] flex justify-end pt-2 md:pt-0">
        <Arrow strokColor={`#219D80`} />
        <span
          className="text-sm md:text-lg text-[#E8AA42] font-medium pr-2 pt-2"
        >
           25% وفر
        </span>
      </div>
      {/* pricing section   */}
      <div className="flex flex-col lg:flex-row gap-6 h-full px-5 items-center justify-center">
      <SponcerCardStart       
         cardId={IngId}
         img0={image}
         Type={ingredientType}
         Name={ingredientName}  
         />
        {pricingData.map((data, index) => (
          <div
            className={`flex flex-col text-right w-full h-full max-w-[378px] py-6 px-5 sm:px-10 lg:w-auto xl:w-[378px] rounded-xl ${
              data?.isSelected
                ? `bg-[#219D80] text-white`
                : "bg-white text-black"
            }`}
            key={index}
          >
            <div className="flex flex-col text-left text-right">
              <div className="flex flex-col gap-3 ">
                <span className="text-2xl">{data?.mainTitle}</span>
                <span>{data?.infoNote}</span>
              </div>
              <div className="flex items-center gap-3 my-4">
                <span className="text-6xl font-semibold">
                  ${monthPrice ? data?.monthlyPrice : data?.yerlyPrice}
                </span>
                <span className="font-light">
                  /&nbsp;&nbsp;{monthPrice ? "Month" : "Year"}
                </span>
              </div>
              {/* <button onClick={()=>handleCreate2()}
                className={`w-full border-[1px] rounded py-2.5 text-[#E8AA42] ${
                  data?.isSelected
                    ? "bg-white"
                    : "bg-transparent border-[#E8AA42]"
                }`}
              >
                Get Started Now
              </button> */}


                 <Button
                    className="w-full border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                    variant="text"
                    onClick={()=>handleCreate2()}
                  >
                    اشترك الان
                  </Button>
              {/* <div className="mt-10 space-y-3">
                {data?.getIn?.map((description, index) => (
                  <div className="flex items-center gap-4 max-w-xs" key={index}>
                    <div className="w-8 h-8">
                      {description?.rightIcon ? (
                        <RightIcon fillColor={`#365CCE`} />
                      ) : (
                        <CloseIcon fillColor={`#365CCE`} />
                      )}
                    </div>
                    <span className="font-medium text-base">
                      {description?.description}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </container>
    
    
  {isPayButtonClicked  ? 
 <section ref={componentRef2} >
<PaymentPage
      
      CompanyName={CompanyName}
      CompanyEmail={CompanyEmail}
      userId={userId}
      ingredientName={ingredientName}
      image={image}
      ingredientType={ingredientType}
      IngId={IngId}
      TrueName={TrueName}
      pricePayed={pricePayed}
      pricePlan={pricePlan}
/>
</section>
 :
null

} 

    </>
  );
};
export default PricingReact;
