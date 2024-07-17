import React, { useEffect, useState } from "react";
import Footer from "../homecomponents/Footer";
import Header from "../homecomponents/Header";
import networkAds from "../images/networkAds.png";
// import { Getlablistwithauth } from "../redux/services/otherServices/Lab";
import { Loader } from "../constants/Loader";

function Userlablisting() {
  const [labsdata, setLabsdata] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showImageSection, setShowImageSection] = useState(true); 
  const [loading, setLoading] = useState(false);
useEffect(()=>{
  window.scrollTo(0, 0);
  handleGetLabData()
},[])


// const handleGetLabData = async () => {
//   const res = await Getlablistwithauth();
 
//   if (res.success === true) {
//     setLabsdata(res.response.labs);
//     setSearchResults(res.response.labs); 
//     setShowImageSection(true); 
//   }
// };
const handleGetLabData = 
// async 
() => {
  // setLoading(true);
  // try {
  //   const res = await Getlablistwithauth();
  //   if (res.success === true) {
      // setLabsdata(res.response.labs);
      // setSearchResults(res.response.labs);
      setLabsdata([ {
        "Address": {
            "address": "Dr delta labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e61d540e01cc9966b50fd",
        "state": "medi",
        "Name": "Dr delta",
        "contactf": "delta",
        "contactN": 4536766587,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e61d540e01cc9966b50fe"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.62717190798957,
        "longitude": 77.02738374886579,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr delta labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e64aa40e01cc9966b515b",
        "state": "delta diagnostics",
        "Name": "Dr delta",
        "contactf": "delta",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e64aa40e01cc9966b515c"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.711215856455865,
        "longitude": 77.10634798315233,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr uncle labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e654c40e01cc9966b515f",
        "state": "lab uncle",
        "Name": "Dr uncle",
        "contactf": "uncle",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e654c40e01cc9966b5160"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.640939095480476,
        "longitude": 77.08670854709037,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr saral labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e660b40e01cc9966b5163",
        "state": "Saral diagnostics",
        "Name": "Dr saral",
        "contactf": "saral",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e660b40e01cc9966b5164"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.69932074419619,
        "longitude": 77.12949420130482,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr Agilus labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e66fe40e01cc9966b51f7",
        "state": "Agilus diagnostics",
        "Name": "Dr Agilus",
        "contactf": "agilus",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e66fe40e01cc9966b51f8"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.670218403489663,
        "longitude": 77.12312383904155,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr asdfsa labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "66824cbe9b9b568b55adc070",
        "state": "delhi test",
        "Name": "Dr house",
        "contactf": "house",
        "contactN": 7654533677,
        "email": "afadsewg@gmail.com",
        "tests": [
            {
                "testName": "ct adfsadf",
                "price": 400,
                "availability": true,
                "_id": "66824cbe9b9b568b55adc071"
            }
        ],
        "image": "Screenshot (9).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr house  labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "668290f6a8cd4e4e01db5409",
        "state": "delhi test",
        "Name": "Dr house",
        "contactf": "house",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "668290f6a8cd4e4e01db540a"
            }
        ],
        "image": "Screenshot (10).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr house  labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "6683bdd069cfd88206920a6c",
        "state": "delhi ashwani ka raj",
        "Name": "  ",
        "contactf": "house",
        "contactN": 7654533677,
        "email": "sigma1@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "6683bdd069cfd88206920a6d"
            }
        ],
        "image": "Screenshot (6).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr house  labs, loha bajaar",
            "city": "banglore",
            "zip": "32443"
        },
        "_id": "6685fdcd6e303d886d1bf524",
        "state": "banglore",
        "Name": "Dr house",
        "contactf": "house",
        "contactN": 8344934884,
        "email": "sigma1@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "6685fdcd6e303d886d1bf525"
            }
        ],
        "image": "http://192.168.29.104:4000/uploads/Screenshot (9).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr shai labs, loha bajaar",
            "city": "banglore",
            "zip": "32443"
        },
        "_id": "6685fe1351bf8b535454f189",
        "state": "Maharastra",
        "Name": "Dr shahi",
        "contactf": "house",
        "contactN": 8344934884,
        "email": "sigma1@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "6685fe1351bf8b535454f18a"
            }
        ],
        "image": "http://192.168.29.104:4000/uploads/Screenshot (9).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    }]);
    

      setSearchResults([ {
        "Address": {
            "address": "Dr delta labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e61d540e01cc9966b50fd",
        "state": "medi",
        "Name": "Dr delta",
        "contactf": "delta",
        "contactN": 4536766587,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e61d540e01cc9966b50fe"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.62717190798957,
        "longitude": 77.02738374886579,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr delta labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e64aa40e01cc9966b515b",
        "state": "delta diagnostics",
        "Name": "Dr delta",
        "contactf": "delta",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e64aa40e01cc9966b515c"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.711215856455865,
        "longitude": 77.10634798315233,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr uncle labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e654c40e01cc9966b515f",
        "state": "lab uncle",
        "Name": "Dr uncle",
        "contactf": "uncle",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e654c40e01cc9966b5160"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.640939095480476,
        "longitude": 77.08670854709037,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr saral labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e660b40e01cc9966b5163",
        "state": "Saral diagnostics",
        "Name": "Dr saral",
        "contactf": "saral",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e660b40e01cc9966b5164"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.69932074419619,
        "longitude": 77.12949420130482,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr Agilus labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "667e66fe40e01cc9966b51f7",
        "state": "Agilus diagnostics",
        "Name": "Dr Agilus",
        "contactf": "agilus",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "667e66fe40e01cc9966b51f8"
            }
        ],
        "image": "Screenshot (12).png",
        "latitude": 28.670218403489663,
        "longitude": 77.12312383904155,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr asdfsa labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "66824cbe9b9b568b55adc070",
        "state": "delhi test",
        "Name": "Dr house",
        "contactf": "house",
        "contactN": 7654533677,
        "email": "afadsewg@gmail.com",
        "tests": [
            {
                "testName": "ct adfsadf",
                "price": 400,
                "availability": true,
                "_id": "66824cbe9b9b568b55adc071"
            }
        ],
        "image": "Screenshot (9).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr house  labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "668290f6a8cd4e4e01db5409",
        "state": "delhi test",
        "Name": "Dr house",
        "contactf": "house",
        "contactN": 7654533677,
        "email": "sigma@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "668290f6a8cd4e4e01db540a"
            }
        ],
        "image": "Screenshot (10).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr house  labs, loha bajaar",
            "city": "new delhi",
            "zip": "32443"
        },
        "_id": "6683bdd069cfd88206920a6c",
        "state": "delhi ashwani ka raj",
        "Name": "  ",
        "contactf": "house",
        "contactN": 7654533677,
        "email": "sigma1@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "6683bdd069cfd88206920a6d"
            }
        ],
        "image": "Screenshot (6).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr house  labs, loha bajaar",
            "city": "banglore",
            "zip": "32443"
        },
        "_id": "6685fdcd6e303d886d1bf524",
        "state": "banglore",
        "Name": "Dr house",
        "contactf": "house",
        "contactN": 8344934884,
        "email": "sigma1@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "6685fdcd6e303d886d1bf525"
            }
        ],
        "image": "http://192.168.29.104:4000/uploads/Screenshot (9).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    },
    {
        "Address": {
            "address": "Dr shai labs, loha bajaar",
            "city": "banglore",
            "zip": "32443"
        },
        "_id": "6685fe1351bf8b535454f189",
        "state": "Maharastra",
        "Name": "Dr shahi",
        "contactf": "house",
        "contactN": 8344934884,
        "email": "sigma1@gmail.com",
        "tests": [
            {
                "testName": "ct scan",
                "price": 400,
                "availability": true,
                "_id": "6685fe1351bf8b535454f18a"
            }
        ],
        "image": "http://192.168.29.104:4000/uploads/Screenshot (9).png",
        "latitude": 28.703508917942383,
        "longitude": 77.1807085800571,
        "__v": 0
    }]);
      setShowImageSection(true);
  //   }
  // } catch (error) {
  //   console.error("Error fetching lab data:", error);
  // } finally {
  //   setLoading(false);
  // }
};

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtered items based on search term
  const filteredItems = labsdata.filter((lab) =>
    lab.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (
      (currentPage - 1) * itemsPerPage + currentItems.length <
      filteredItems.length
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSearch = () => {
    // Perform search logic here if needed
    // For simplicity, we update state and let filtering handle it
    setCurrentPage(1); // Reset to first page when searching
  };
  return (
    <div>
       {loading && <Loader />}
      <Header/>
      <section
        className="listingdiv"
        style={{ background: "rgb(239, 242, 244)" }}
      >
    <div className="lg:w-6/12 mx-auto flex flex-col items-center justify-center">
  <div className="text-center mb-6">
    <h1 className="text-3xl md:text-3xl text-black font-bold">
      Book Appointment
    </h1>
  </div>
  
  <div className="text-center">
    <h1 className="text-2xl md:text-2xl text-black font-normal">
      Get best deals on tests across 1000+ labs
    </h1>
  </div>
</div>


        <div>
          <div className="flex justify-between items-center  py-4">
            <div className="flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search labs..."
                className="px-3 py-2  rounded-l-lg focus:outline-none bordercolor"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 buttoncolor text-white rounded-r-lg hover:buttoncolor focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
            {currentItems.map((lab, index) => (
              <div
                key={index}
                className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-20 h-20" src={lab.image} alt="Lab Logo" />
                    <span className="ml-2 text-xl font-bold text-gray-900">
                      {lab.Name}
                      <p className="cardsaddress">
                        {lab.Address.address}, {lab.Address.city},{" "}
                        {lab.Address.zip}
                      </p>
                    </span>
                  </div>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white buttoncolor rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:buttoncolor dark:focus:ring-blue-800">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`py-2 px-4 rounded-lg bg-blue-500 text-white ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={indexOfLastItem >= filteredItems.length}
              className={`py-2 px-4 rounded-lg bg-blue-500 text-white ${
                indexOfLastItem >= filteredItems.length
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-[4.5rem]">
        <img src={networkAds} alt="Full width image" className="w-10/12 h-76" />
      </section>

      <Footer />
    </div>
  );
}

export default Userlablisting;
