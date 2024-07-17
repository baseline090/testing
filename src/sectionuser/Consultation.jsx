import React from 'react';
import looka from '../images/looka.png'
import Header from '../homecomponents/Header';
import Footer from '../homecomponents/Footer';
const Consultation = () => {

  const conditions1 = [
    { name: "Diet & Lifestyle", info: "Eat lots of fruit and vegetables" },
    { name: "Dizziness", info: "Dizziness is a term used to describe a range of sensations, such as feeling faint, woozy, weak or unsteady." },
    { name: "GERD", info: "Gastroesophageal reflux disease (GERD) is a common condition in which the stomach contents move up into the esophagus." },
    { name: "Covid-19", info: "Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment" },
    { name: "Cough", info: "A cough is your body's way of responding when something irritates your throat or airways." },
    { name: "PCOS", info: "Polycystic ovary syndrome is a condition where you have few, unusual or very long periods" },
    { name: "Viral Infection", info: " Viral infections are illnesses you get from tiny organisms that use your cells to make more copies of themselves (viruses). " },
    { name: "Beta HCG", info: "Human chorionic gonadotrophin (hCG) is a hormone produced by the placenta during pregnancy." },
  ];

  const conditions2 = [
    { name: "Cough", info: " A cough is your body's way of responding when something irritates your throat or airways." },
    { name: "Blood Pressure", info: " Blood pressure is the force of your blood pushing against the walls of your arteries" },
    { name: "Sore Throat", info: "The most common cause of a sore throat (pharyngitis) is a viral infection, such as a cold or the flu." },
    { name: "Viral Infection", info: "Viral infections are illnesses you get from tiny organisms that use your cells to make more copies of themselves (viruses)." },
    { name: "HIV", info: "HIV (human immunodeficiency virus) is a virus that attacks cells that help the body fight infection, making a person more vulnerable to other infections and diseases." },
    { name: "Paracetamol", info: "Paracetamol is a medicine used to treat mild to moderate pain. Paracetamol can also be used to treat fever (high temperature)." },
    { name: "Pantoprazole", info: "Pantoprazole is a type of medicine called a proton pump inhibitor (PPI)." },
    { name: "Acid Reflux", info: "Gastroesophageal reflux disease is a condition in which stomach acid repeatedly flows back up into the tube connecting the mouth and stomach, called the esophagus. " },
  ];


  return (
    <div>
      <Header/>
      <div className="bookAppointmentBody">
        <div className="relative w-full h-[320px]" id="home">
          <div className="absolute inset-0 opacity-70">
            <img 
              src="https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg" 
              alt="Background" 
              className="object-cover object-center w-full h-full" 
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-black font-medium text-4xl md:text-5xl leading-tight mb-2">
                Jodo Health Care
              </h1>
              <p className="font-regular text-xl mb-8 mt-4">One stop solution for Lab Testing</p>
              <a 
                href="#contactUs"
                className="px-6 py-3 bg-customcolor text-white font-medium rounded-full transition duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>


      <section class="sm:mt-6 lg:mt-8 mt-12 mx-auto px-4 sm:px-6 lg:px-8">

<div class="my-10 mx-auto  px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-6 lg:flex-justify lg:flex flex-col lg:flex-row">
    
    <div class="lg:w-1/2 flex flex-col justify-center">
        <h1 class="text-[35px] tracking-tight font-medium text-customcolor sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Dedicated Team of Doctors</span>
        </h1>

        <div class="mt-6 text-base text-gray-500 sm:mt-8 sm:text-lg sm:max-w-xl md:mt-8 md:text-xl lg:mx-0">
            <div class="mb-4 flex flex-row items-center gap-3 mt-[4.8vw]  ">
              <div className=''>
             <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgBpZKxDcIwEEX/mQZRJRIDZIRsQChTsgEbhAmQRyAbsAGiSglskBE8AFIoafBhHw5KgYgRr0rse9aXvwmB7qATzCYV2BYg5GAkbrl9MNXzcrvHABKh0RmITu4zw2cMmJdpqY3/US/1qwDZczOSxkvXRq9HhLdop9iINCGqEIkiWvTxcsRT9NLPeOkcPU1oRbLMl2jJUi2SumMH38M4Jg0lq3Slb764EdGEmZByQOc7I7gKKNwot+45HeHSyOH/8AQtCjoWHv6pVwAAAABJRU5ErkJggg=='></img>
              </div>
                <p className=''>Doctors from across specialties under a single roof.</p>
            </div>
            <div class="mb-4 flex flex-row items-center gap-3 mt-[4.8vw]  ">
            <div className=''>
             <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgBpZKxDcIwEEX/mQZRJRIDZIRsQChTsgEbhAmQRyAbsAGiSglskBE8AFIoafBhHw5KgYgRr0rse9aXvwmB7qATzCYV2BYg5GAkbrl9MNXzcrvHABKh0RmITu4zw2cMmJdpqY3/US/1qwDZczOSxkvXRq9HhLdop9iINCGqEIkiWvTxcsRT9NLPeOkcPU1oRbLMl2jJUi2SumMH38M4Jg0lq3Slb764EdGEmZByQOc7I7gKKNwot+45HeHSyOH/8AQtCjoWHv6pVwAAAABJRU5ErkJggg=='></img>
              </div>
                <p>Available 24/7 to provide top-quality, personalized care whenever you need it.</p>
            </div>
            <div className='flex flex-row items-center gap-3 mt-[4.8vw]  '>
            <div className=''>
             <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgBpZKxDcIwEEX/mQZRJRIDZIRsQChTsgEbhAmQRyAbsAGiSglskBE8AFIoafBhHw5KgYgRr0rse9aXvwmB7qATzCYV2BYg5GAkbrl9MNXzcrvHABKh0RmITu4zw2cMmJdpqY3/US/1qwDZczOSxkvXRq9HhLdop9iINCGqEIkiWvTxcsRT9NLPeOkcPU1oRbLMl2jJUi2SumMH38M4Jg0lq3Slb764EdGEmZByQOc7I7gKKNwot+45HeHSyOH/8AQtCjoWHv6pVwAAAABJRU5ErkJggg=='></img>
              </div>
                <p>24-hour support team to assist you.</p>
            </div>
        </div>
    </div>

    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://yuvahealth.in/static/media/DoctorMedical.010e77622cc8e741ab30.png" alt="Doctors" />
    </div>
</div>

</section>



<div className="mt-[-2vw]">
        <div className="p-4 flex flex-col items-center">
          <div className="flex justify-center font-medium leading-[150%] mb-[4vw] mt-[2vw] uppercase text-customcolor lg:text-[35px]">
            Most searched medical conditions
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            {conditions1.map((condition, index) => (
              <div
                key={index}
                className="relative group bg-customcolor p-4 rounded-md flex-1 min-w-[200px] text-center"
              >
                {condition.name}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-40 p-2 bg-gray-700 text-white text-sm rounded-md shadow-lg z-10">
                  {condition.info}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {conditions2.map((condition, index) => (
              <div
                key={index}
                className="relative group bg-customcolor p-4 rounded-md flex-1 min-w-[200px] text-center"
              >
                {condition.name}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-40 p-2 bg-gray-700 text-white text-sm rounded-md shadow-lg z-10">
                  {condition.info}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <div className='mb-[8vw] mt-[4vw]'>
  <div className="flex justify-center  font-medium leading-[150%] mt-[2vw] uppercase text-customcolor  lg:text-[35px]">
    Consultation at Your Fingertip
  </div>
  <div className="text-[#44576a] font-[Rubik]   leading-[150%] mt-[1vw] text-center lg:text-[35px] ">
    How it works:
  </div>
  <div className='flex flex-col lg:flex-row justify-between p-4 gap-4'>
    <div className='bg-[hsla(0,0%,100%,0.8)] relative w-full lg:w-[50%]'>
      <div className="pl-[6.3vw]">
        <div className='flex items-center justify-start'>
        <h1 className="text-[#44576a] font-[Rubik]  font-medium leading-[150%]  mt-[6.8vw] pt-[8.2px] text-lg md:text-xl ">
          Write your health query in detail.
        </h1>
        </div>
        
        <div className='flex items-center justify-start'>
        <h1 className="text-[#44576a] font-[Rubik]  font-medium leading-[150%]  mt-[6.8vw] pt-[8.2px] text-lg md:text-xl ">
          Choose a subscription plan that fits your needs and pay online.
        </h1>
        </div>
        
        <div className='flex items-center justify-start'>
        <h1 className="text-[#44576a] font-[Rubik]  font-medium leading-[150%]  mt-[6.8vw] pt-[8.2px] text-lg md:text-xl ">
          Chat unlimited with a doctor based on your plan.
        </h1>
        </div>
        <button className="bg-[rgb(74,176,225)] border-none rounded-[6px] text-white cursor-pointer  mt-[6vw] outline-none py-[1vw] px-[4vw] text-[20px]">
          Book Consultation
        </button>
      </div>
    </div>

    <div className='bg-[hsla(0,0%,100%,0.8)] flex flex-col items-center w-full lg:w-[50%]'>
      <div className="bg-white rounded-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-between mt-[3vw] w-full px-[2vw] py-[1vw]">
        <div className="text-[#1e2959] font-[Poppins]  text-sm md:text-base">
          Booking request with WKBY Albany, NY @11:35AM et via satellite radio.
        </div>
        <div className='w-[20%]'>
          <img src={looka} alt="User Icon" />
        </div>
      </div>

      <div className="bg-white rounded-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-between mt-[5vw] w-full px-[2vw] py-[1vw]">
        <div className="text-[#1e2959] font-[Poppins]  text-sm md:text-base">
          Booking request with WKBY Albany, NY @11:35AM et via satellite radio.
        </div>
        <div className='w-[20%]'>
          <img src={looka} alt="User Icon" />
        </div>
      </div>

      <div className="bg-white rounded-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-between mt-[5vw] w-full px-[2vw] py-[1vw]">
        <div className="text-[#1e2959] font-[Poppins]  text-sm md:text-base">
          Booking request with WKBY Albany, NY @11:35AM et via satellite radio.
        </div>
        <div className='w-[20%]'>
          <img src={looka} alt="User Icon" />
        </div>
      </div>
    </div>
  </div>
</div>


      
      <section className="text-gray-700 body-font">
        <div className="flex justify-center mt-10 text-4xl font-regular text-customcolor">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" 
                    className="w-32 mb-3" 
                    alt="Quick Lab Reports" 
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">Quick Lab Reports</h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" 
                    className="w-32 mb-3" 
                    alt="Reasonable Rates" 
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" 
                    className="w-32 mb-3" 
                    alt="Time Efficiency" 
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" 
                    className="w-32 mb-3" 
                    alt="Expertise in Industry" 
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Consultation;
