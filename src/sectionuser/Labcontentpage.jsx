
import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import labtests from "../images/lab-tests.jpg"
import test2 from "../images/test2.jpg"
import test3 from "../images/test3.jpg"
import test4 from "../images/test4.png"
import test5 from "../images/test5.jpg"
import test6 from "../images/test6.jpg"
import fever from "../images/Fever.svg"
import kidney from "../images/Kidney.svg"
import diabetes from "../images/Diabetes.svg"
import skin from "../images/Skin.svg"
import bones from "../images/Bones.svg"
import cancer from "../images/Cancer.svg"
import backtowork from "../images/backtowork.png"
import homeSamplePickup from "../images/home_sample_pickup.webp"
import iconlab from "../images/icon_lab.svg"
import iconrecords from "../images/icon_records.svg"
import icondoctor from "../images/icon_doctor.svg"
import e_reports from "../images/e_reports_on_next_day.webp"
import offers from "../images/offers.webp"
import Header from '../homecomponents/Header';
import Footer from '../homecomponents/Footer';
const tests = [
  { name: "Complete Blood Count", price: "₹300", description: "Known as Complete Blood Count Automated Blood", report: "E-Reports on same day", image:labtests },
  { name: "Lipid Profile", price: "₹434", description: "Known as Lipid Profile Blood", report: "E-Reports on same day", image:test2  },
  { name: "Liver Function Test", price: "₹673", description: "Known as Liver Function Tests Blood", report: "E-Reports on same day",image:test3 },
  { name: "HbA1c", price: "₹300", description: "Known as Glycosylated Haemoglobin Blood", report: "E-Reports on same day",image:test4 },
  { name: "Vitamin B 12", price: "₹490", description: "Known as Vitamin B12 Conventional Blood", report: "E-Reports on same day",image:test5 },
  { name: "Beta HCG", price: "₹400", description: "Known as Beta Hcg Automated Blood", report: "E-Reports on next day",image:test6 }
];
const tests2 = [
  { name: "Fever", image:fever },
  { name: "Kidney",image:kidney  },
  { name: "Bones",image:bones },
  { name: "Diabetes",image:diabetes },
  { name: "Skin",image:skin },
  { name: "Cancer",image:cancer }
];
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} rounded-full`}
        style={{ ...style, display: "block",background:"wheat", right: "14px",width:"39px" }}
        onClick={onClick}
      />
    );
  }
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} rounded-full `}
        style={{ ...style, display: "block", left: "1px", zIndex: 1,background:"wheat"
         }}
        onClick={onClick}
      />
    );
  }
const Labcontentpage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleReadMore = (index) => {
      setExpandedIndex(index);
    };
 
    const handleClose = (event) => {
   // Prevent the card's onClick event from being triggered
      setExpandedIndex(null);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1164,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              centerMode: true,
              dots: false
            }
          },
          {
            breakpoint: 946,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              initialSlide: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              centerMode: true, // Center mode for screens below 700px
        centerPadding: '10px'
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
               centerMode: true, // Center mode for screens below 700px
            }
          }
        ]
      };
  return (
    <>
    <Header/>
    <div class="relative w-full h-[320px]" id="home">
        <div class="absolute inset-0 ">
            <img src={backtowork} alt="Background Image" class=" object-cover  w-full h-full" />
    
       </div>
    </div>
    <div class="pt-5 inset-x-0 bottom-0 pb-2 sm:pb-5 z-50 mb-3">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="rounded-lg p-2 shadow-lg sm:p-3" style={{background:"rgb(13 121 173)"}}>
            <div class="flex flex-wrap items-center justify-between">
                <div class="flex w-0 flex-1 items-center">
                  
                    <p class="ml-3 truncate font-medium text-white">
                        <span class="hidden md:inline">Need help with booking your test?</span>
                    </p>
                </div>
                <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                    <a class="flex items-center justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-sm"
                        href="#">+91 8093709439
                    </a>
                </div>
              
            </div>
        </div>
    </div>
</div>

    {/* <!-- our services section --> */}
    <section className="font-[sans-serif] text-[#333] mb-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mx-5">
          <h3 className="text-2xl font-bold mb-2">Top Booked Diagnostic Tests</h3>
        </div>
        <div className="mx-5 mt-4 relative">
          <Slider {...settings}>
            {tests.map((test, index) => (
              <div 
                key={index} 
                className={`p-1 ${expandedIndex !== null && expandedIndex !== index ? 'blur-sm' : ''}`}
                onClick={() =>{expandedIndex === index ? handleClose(): handleReadMore(index)}}
                style={{ zIndex: expandedIndex === index ? 10 : 1 }}
              >
                <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-w-2xl w-full' : 'max-w-xs w-64'}`}>
                  <img 
                    src={test.image} 
                    alt="Test"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{test.name}</h3>
                    <p className={`text-gray-700 text-sm ${expandedIndex === index ? '' : 'h-12 overflow-hidden'}`}>{test.description}</p>
                    {expandedIndex === index && (
                      <p className="text-gray-700 text-sm mt-2">{test.report}</p>
                    )}
                    {expandedIndex === index ? (
                      <button 
                        className="text-blue-500 text-sm mt-2"
                        onClick={handleClose}
                      >
                        Close
                      </button>
                    ) : (
                      <button 
                        className="text-blue-500 text-sm mt-2 p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(index);
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>


<section className="font-[sans-serif] text-[#333] mb-2 mt-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-start mx-5">
      <h3 className="text-2xl font-bold mb-2">Find Test By Health Concern</h3>
    </div>
    <div className="mx-5 relative">
      <Slider {...settings}>
        {tests2.map((test, index) => (
          <div
            key={index}
            className={`p-1 transition-all duration-500 ease-in-out `}
          >
            <div className={`overflow-hidden w-64`}>
              <div className="mt-10 flex justify-center mb-5 grow">
                <img src={test.image} className="rounded-full" alt={test.name} />
              </div>
              <h1 className="text-xl text-black font-bold mt-2 text-center">
                {test.name}
              </h1>
              <div className="p-4">
                <p className="text-gray-700 text-sm mt-2">{test.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>


<section className='p-8 md:p-16' style={{ background: "#f0f8ff" }}>
  <div className='text-center mb-8'>
    <h2 className='text-2xl lg:text-3xl font-bold'>Why Book with us?</h2>
  </div>
  <div className='flex flex-col lg:flex-row flex-wrap justify-start items-start'>
    {/* Item 1 */}
    <div className='flex items-start mb-4 w-full lg:w-1/2 p-2'>
      <div className='w-20 h-16 mr-2'>
        <img src={homeSamplePickup} alt="Home sample collection" />
      </div>
      <div>
        <p className='font-semibold text-lg'>Home sample collection for Free</p>
        <p className='font-normal'>A certified professional will collect your sample from your preferred location.</p>
      </div>
    </div>

    {/* Item 2 */}
    <div className='flex items-start mb-4 w-full lg:w-1/2 p-2'>
      <div className='w-20 h-16 mr-2'>
        <img src={e_reports} alt="Digital report" />
      </div>
      <div>
        <p className='font-semibold text-lg'>Get digital report within a day</p>
        <p className='font-normal'>Our labs ensure turn-around-time of 24 hours from specimen pickup.</p>
      </div>
    </div>

    {/* Item 3 */}
    <div className='flex items-start mb-4 w-full lg:w-1/2 p-2'>
      <div className='w-20 h-16'>
        <img src={offers} alt="Offers and prices" />
      </div>
      <div>
        <p className='font-semibold text-lg'>Offers and affordable prices</p>
        <p className='font-normal'>Get great discounts and offers on tests and packages.</p>
      </div>
    </div>
  </div>
</section>




<section className='p-8 md:p-16'>
  <div className='text-center mb-8'>
    <h2 className='text-2xl lg:text-3xl font-bold'>How It Works?</h2>
  </div>
  <div className='flex flex-col lg:flex-row justify-evenly items-start lg:items-center '>
    {/* Step 1 */}
    <div className='flex items-center mb-4 lg:mb-0  w-full lg:w-80'>
      <div className='w-22 h-16 mr-2'>
        <img src={iconlab} alt="Home sample collection" className='w-full h-full object-contain' />
      </div>
      <div>
        <p className='font-normal text-sm text-center lg:text-left'>Search for tests and packages and seamlessly book a home sample collection.</p>
      </div>
    </div>
    <span className="flex-grow-0 border-t border-gray-500 opacity-50 mx-2 w-10 hidden lg:block"></span>

    {/* Step 2 */}
    <div className='flex items-center mb-4 lg:mb-0  w-full lg:w-80'>
      <div className='w-22 h-16 mr-2'>
        <img src={icondoctor} alt="Digital report" className='w-full h-full object-contain' />
      </div>
      <div>
        <p className='font-normal text-sm text-center lg:text-left'>We will send a certified professional to your place to assist you with the sample collection.</p>
      </div>
    </div>
    <span className="flex-grow-0 border-t border-gray-500 opacity-50 mx-2 w-10 hidden lg:block"></span>

    {/* Step 3 */}
    <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-80'>
      <div className='w-22 h-16 mr-2'>
        <img src={iconrecords} alt="Offers and prices" className='w-full h-full object-contain' />
      </div>
      <div>
        <p className='font-normal text-sm text-center lg:text-left'>We will email you the reports. You can also access your reports within your account on the Practo app.</p>
      </div>
    </div>
  </div>
</section>

<Footer/>

  
  </>
  )
}

export default Labcontentpage