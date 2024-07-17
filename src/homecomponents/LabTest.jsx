import React, { useEffect, useState } from 'react';
import CloseIcon from "@mui/icons-material/Close"
import { Button } from '@mui/material';
import { Getlablist } from '../redux/services/otherServices/Lab';
import banner from "../images/banner.png"
import { getData, storageKey } from '../constants/storage';
import { toast} from 'react-toastify';
import { Box, Dialog, DialogContent, IconButton } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import fistimg from "../images/Apollo-Clinic-Logo 4.png"
import secondimg from "../images/MP 1.png"
import thirdimg from "../images/finall-logo.39c1a2e7 3.png"
import fourthimg from "../images/Thyrocare_new_Logo2022.svg 1.png"
import { useNavigate } from 'react-router-dom';
function LabTest() {
  const navigate =useNavigate();
  const [labsdata, setLabsdata] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNearbyLabs, setShowNearbyLabs] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openusermember, setOpenusermember] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [staticlabdata,setstaticlabdata]=useState([])
  const [isOpentermandcondition, setIsOpentermandcondition] = useState(false);
  const [phonenumber ,setPhonenumber]=useState("")
  const handleOpen = () => {
    const data = getData(storageKey.USER_LOGIN);
    const subscription = getData(storageKey.SUBSCRIPTION);
  
    if (data === "User") {
      if (subscription === "1") {
        toast.error("Subscribe first");
        setOpen(true);
      } else if (subscription === "0") {
        navigate("/user/userlablisting");
      } else {
        toast.error("Invalid subscription value");
      }
    } else {
      toast.error("Please login first");
    }
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };
  useEffect(() => {

    handleGetLabData();
  }, []);


  const handleGetLabData = async() => {
    const res = await Getlablist();
    console.log(res.response?.body?.findLab,"i am  labs data from ashwin");

    if (res.success === true) {
      setLabsdata(res.response?.body?.findLab);
       }

setstaticlabdata([
  {
    id: "1",
    image: fistimg,
  },
  {
    id: "2",
    image:  fourthimg,
  },
  {
    id: "3",
    image: thirdimg,
  },
  {
    id: "4",
    image:secondimg ,
  },
]);
  };
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  const findNearbyLabs = (userLat, userLong) => {
    const nearbyLabs = labsdata.filter((lab) => {
      const distance = calculateDistance(userLat, userLong, lab.latitude, lab.longitude);
      return distance <= 1000;
    });
    setSearchResults(nearbyLabs);
  };
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);

          if (showNearbyLabs) {
            findNearbyLabs(latitude, longitude);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  useEffect(() => {
    handleNearbyLabsButtonClick();
  }, [])

  const handleNearbyLabsButtonClick = () => {
    if (!showNearbyLabs) {
      setShowNearbyLabs(true);

      getCurrentLocation();
    } else {
      setShowNearbyLabs(false);
      setSearchResults([]);

    }
  };

  const filterLabs = (query) => {
    return labsdata.filter(
      (lab) =>
        lab.Name.toLowerCase().includes(query.toLowerCase()) ||
        lab.Address.city.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    if (value.trim() === '') {

      getCurrentLocation();
    } else {
      setSearchResults(filterLabs(value));
      setShowNearbyLabs(false);

    }
  };

  const renderLabCards = () => {
    return searchResults.map((lab) => (
      <div key={lab._id} className="flex justify-center">
        <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">
                  {lab.name}
                </span>
              </div>
            </div>
            <p className="mb-4 text-gray-700 font-semibold">
              {lab.fullAddress}, {lab.city}, {lab.state}, {lab.pincode}
            </p>
          </div>
          <div className="mt-auto">
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white buttoncolor rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:buttoncolor dark:focus:ring-blue-800"
              onClick={handleOpen}
            >
              Book Now
              <svg
                className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    if (showNearbyLabs && latitude && longitude) {
      findNearbyLabs(latitude, longitude);
    }
  }, [showNearbyLabs, latitude, longitude]);

  const userFormik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      age: '',
      address: '', // Optional field
      gender: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Name is Required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
        .required('Phonenumber is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is  Required'),
      age: Yup.number()
        .typeError('Age must be a number')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .required('Age is Required'),
      gender: Yup.string()
        .required('Gender is Required'),
    }),
    onSubmit: (values) => {
      console.log('User Detail Submitted:', values);
      // Handle form submission logic here if needed
    },
  });

  // Formik for Member details
  const memberFormik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      age: '',
      address: '', // Optional field
      gender: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      age: Yup.number()
        .typeError('Age must be a number')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .required('Required'),
      gender: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
      if (selectedUserIndex !== null) {
        const updatedUsers = [...users];
        updatedUsers[selectedUserIndex] = { ...values };
        setUsers(updatedUsers);
        setSelectedUserIndex(null);
      } else {
        if (users.length < 3) {
          setUsers([...users, values]);
        } else {
          alert('You can only add up to 3 members.');
        }
      }
      memberFormik.resetForm();
    },
  });

  const handleOpenusermember = () => {
    const userdata = getData(storageKey.USER_PHONE);
    setPhonenumber(userdata);
    setOpen(false)
    setIsOpentermandcondition(true)
    
  };

  const handleCloseusermember = () => {
    setOpenusermember(false);
  };

  const handleEditUser = (index) => {
    memberFormik.setValues(users[index]);
    setSelectedUserIndex(index);
  };

  
  const handleSubscribeNow = () => {
    userFormik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        console.log('User Data:', userFormik.values);
        console.log('Member Data:', users);
        setOpenusermember(false); // Close the modal after saving
      } else {
        userFormik.setTouched({
          fullName: true,
          phone: true,
          email: true,
          age: true,
          gender: true,
        });
      }
    });
  };


  const handleAgree = () => {
      console.log('User agreed to the terms and conditions');
      setOpenusermember(true);
  };
  return (
    <div>
      <div className="locationsection-main-div space-x-4">

        <div className="py-2">
          <label
            htmlFor="search"
            className="text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full py-2 px-4 text-sm text-gray-900 border border-gray-300 bg-white placeholder-gray-400 rounded-md"
              placeholder="Search by name or city"
              value={searchQuery}
              onChange={handleSearchChange}
              required
              style={{ height: 'auto', border: '1px solid #66ceff', borderRadius: '4px' }}
            />

          </div>
        </div>
        <div className="py-1">
  <div className="flex items-center py-2 ">
    <ArrowRightAltIcon sx={{ color: 'gray', mr: 1 }} />
  </div>
</div>
        <div className="py-1">
          <button className="search-button" onClick={handleNearbyLabsButtonClick}>
            Search Labs Nearby Me
          </button>

        </div>
      </div>

      {searchResults.length === 0 && (
  <section className="flex justify-center m-10">
    <img
      src={banner}
      alt="Full width image"
      className="w-full"

    />
  </section>
)}


 {searchResults.length === 0 && (
  <div className="flex flex-col md:flex-row px-4 md:px-12 mt-6">
    <div className="flex-1 mb-8 md:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staticlabdata.slice(0, 4).map((lab) => (
          <div key={lab.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={lab.image} alt="labimage" />
              </div>
            </div>
           
            <div className="mt-auto">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white buttoncolor rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:buttoncolor dark:focus:ring-blue-800"
                onClick={handleOpen}
              >
                Book Now
                <svg
                  className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 ml-1">
      <div className="w-full md:w-3/3 mx-auto">
        <div className="benefit-card">
          <div className="benefit-subcard-card">
            <div className="benefit-plan">
              <div>
                <div className="logo-container">
                  <img src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" width="133" height="33" className="logo" alt="logo" />
                </div>
                <div className="first-heading-card">More discounts, faster delivery and extra care</div>
              </div>
              <div className="member-heading">
                <div>Membership includes</div>
                <div className='textcontainer'>
                  <div className="membership-container">
                    <div className="membership-sub">
                      <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" width="16" height="16" className="tick-img" alt="tick" />
                    </div>
                    <div className="plan-heading">Free Shipping</div>
                  </div>
                  <div className="membership-container">
                    <div className="membership-sub">
                      <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" width="16" height="16" className="tick-img" alt="tick" />
                    </div>
                    <div className="plan-heading">1 Free E-consultation</div>
                  </div>
                  <div className="membership-container">
                    <div className="membership-sub">
                      <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" width="16" height="16" className="tick-img" alt="tick" />
                    </div>
                    <div className="plan-heading">All other benefits mentioned above</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="choose-plan-section" className="plan-container">
              <div className="choose-plan-heading">Choose a plan that’s right for you</div>
              <div className="planlogo-container">
                <div
                  className={`price-container ${selectedPlan === '6months' ? 'selected' : ''}`}
                  onClick={() => handlePlanSelect('6months')}
                >
                  <div className="price-detail">
                    <div className="price-sub-detail">
                      <span className="price-heading">6 months plan</span>
                    </div>
                    <div className="plan-price">₹275</div>
                    <div className="monthly-price">
                      <span>₹46/month</span>
                      <span className="monthly-save">Save 16%</span>
                    </div>
                  </div>
                </div>
                <div className="btn-container">
                  <a  onClick={handleOpen} target="_self" rel="noopener">
                    <div className="btn-heading">
                      <span>Join now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {showNearbyLabs && renderLabCards()}
        {!showNearbyLabs && searchResults.length > 0 && renderLabCards()}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" >
          <Box >
            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
              <Button onClick={handleClose} color="inherit" size="small">
                <CloseIcon className='text-color-skyblue' />
              </Button>
            </Box>
            <DialogContent >
              <div className="benefit-card">
                <div className="benefit-subcard">
                  <div className="benefit-plan">
                    <div>
                      <div className="logo-container">
                        <div>
                          <img src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" width="133" height="33" className="logo" alt="logo" />
                        </div>
                      </div>
                      <div className="first-heading">More discounts, faster delivery and extra care</div>
                      <div className="second-heading">Join now and enjoy all the benefits</div>
                    </div>
                    <div className="member-heading">
                      <div>Membership includes</div>
                      <div>
                        <div className="membership-container">
                          <div className="membership-sub">
                            <div className=''>
                              <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" width="16" height="16" className="tick-img" alt="tick" />
                            </div>
                          </div>
                          <div className="plan-heading">Free Shipping</div>
                        </div>
                        <div className="membership-container">
                          <div className="membership-sub">
                            <div>
                              <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" width="16" height="16" className="tick-img" alt="tick" />
                            </div>
                          </div>
                          <div className="plan-heading">1 Free E-consultation</div>
                        </div>
                        <div className="membership-container">
                          <div className="membership-sub">
                            <div>
                              <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" width="16" height="16" className="tick-img" alt="tick" />
                            </div>
                          </div>
                          <div className="plan-heading">All other benefits mentioned above</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="choose-plan-section" className="plan-container">
                    <div className="choose-plan">Choose a plan that’s right for you</div>
                    <div className="planlogo-container">

                      <div
                        className={`price-container ${selectedPlan === '6months' ? 'selected' : ''}`}
                        onClick={() => handlePlanSelect('6months')}
                      >
                        <div className="price-detail">
                          <div className="price-sub-detail">
                            <div>
                              <span className="price-heading">
                                <span>6 months plan</span>
                              </span>
                            </div>
                          </div>
                          <div className="plan-price">₹275</div>
                          <div className="monthly-price">
                            <span>₹46/month</span>
                            <span className="monthly-save">Save 16%</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="btn-container">
                          <a onClick={handleOpenusermember} target="_self" rel="noopener">
                            <div className="btn-heading">
                              <span>Join now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Box>
        </Dialog>
      </div>
      <Dialog open={openusermember} onClose={handleCloseusermember} fullWidth maxWidth="lg">
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleCloseusermember} color="inherit" size="small">
              <CloseIcon className="text-color-skyblue" />
            </IconButton>
          </Box>
          <DialogContent sx={{ padding: 0 }}>
            <div className="benefit-card">
              <div className="benefit-subcard flex flex-col">

                <div className='flex flex-row'>
                  <div className="right-section">
                    <div className="user-detail-container">
                      <div className="custom-detail">
                        <div className="detail-heading">
                          <div className="main-user-heading">User Detail</div>
                          <div className="sub-user-heading">Basic Info and personal details for better experience</div>
                        </div>
                        <div className="input-container">
                          <form className="user-form" onSubmit={userFormik.handleSubmit}>

                            <div className='flex flex-col w-full gap-[10px]'>
                              <div className="input-detail-container">
                                <div className="input-detail">
                                  <label htmlFor="fullName" className="input-detail-label">Full Name*</label>
                                  <input
                                    name="fullName"
                                    type="text"
                                    className="custom-input"
                                    value={userFormik.values.fullName}
                                    onChange={userFormik.handleChange}
                                    onBlur={userFormik.handleBlur}
                                  />
                                  {userFormik.touched.fullName && userFormik.errors.fullName ? (
                                    <div className="error">{userFormik.errors.fullName}</div>
                                  ) : null}
                                </div>
                                <div className="input-detail">
                                  <label htmlFor="phone" className="input-detail-label">Phone*</label>
                                  <input
                                    name="phone"
                                    type="text"
                                    className="custom-input"
                                    value={phonenumber}
                                    disabled
                                    onBlur={userFormik.handleBlur}
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-section">
                    <div className="user-detail-container">
                      <div className="custom-detail">
                        <div className="detail-heading">
                          <div className="main-user-heading">Member Details</div>
                          <div className="sub-user-heading">Add up to 3 members only</div>
                        </div>
                        <div className="input-container">
                          <form className="user-form" onSubmit={memberFormik.handleSubmit}>

                            <div className='flex flex-col w-full gap-[10px]'>
                              <div className="input-detail-container">
                                <div className="input-detail">
                                  <label htmlFor="fullName" className="input-detail-label">Full Name*</label>
                                  <input
                                    name="fullName"
                                    type="text"
                                    className="custom-input"
                                    value={memberFormik.values.fullName}
                                    onChange={memberFormik.handleChange}
                                    onBlur={memberFormik.handleBlur}
                                  />
                                  {memberFormik.touched.fullName && memberFormik.errors.fullName ? (
                                    <div className="error">{memberFormik.errors.fullName}</div>
                                  ) : null}
                                </div>
                                <div className="input-detail">
                                  <label htmlFor="phone" className="input-detail-label">Phone*</label>
                                  <input
                                    name="phone"
                                    type="text"
                                    className="custom-input"
                                    value={memberFormik.values.phone}
                                    onChange={memberFormik.handleChange}
                                    onBlur={memberFormik.handleBlur}
                                  />
                                  {memberFormik.touched.phone && memberFormik.errors.phone ? (
                                    <div className="error">{memberFormik.errors.phone}</div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="input-detail-container">
                                <div className="input-detail">
                                  <label htmlFor="email" className="input-detail-label">Email*</label>
                                  <input
                                    name="email"
                                    type="text"
                                    className="custom-input"
                                    value={memberFormik.values.email}
                                    onChange={memberFormik.handleChange}
                                    onBlur={memberFormik.handleBlur}
                                  />
                                  {memberFormik.touched.email && memberFormik.errors.email ? (
                                    <div className="error">{memberFormik.errors.email}</div>
                                  ) : null}
                                </div>
                                <div className="input-detail">
                                  <label htmlFor="age" className="input-detail-label">Age*</label>
                                  <input
                                    name="age"
                                    type="text"
                                    className="custom-input"
                                    value={memberFormik.values.age}
                                    onChange={memberFormik.handleChange}
                                    onBlur={memberFormik.handleBlur}
                                  />
                                  {memberFormik.touched.age && memberFormik.errors.age ? (
                                    <div className="error">{memberFormik.errors.age}</div>
                                  ) : null}
                                </div>
                              </div>

                              <div className="input-detail-container">
                                <div className="input-detail">
                                  <label htmlFor="address" className="input-detail-label">Address</label>
                                  <input
                                    name="address"
                                    type="text"
                                    className="custom-input"
                                    value={memberFormik.values.address}
                                    onChange={memberFormik.handleChange}
                                    onBlur={memberFormik.handleBlur}
                                  />
                                  {memberFormik.touched.address && memberFormik.errors.address ? (
                                    <div className="error">{memberFormik.errors.address}</div>
                                  ) : null}
                                </div>
                                <div className="input-detail">
                                  <label htmlFor="gender" className="input-detail-label">Gender*</label>
                                  <select
                                    name="gender"
                                    className="custom-input"
                                    value={memberFormik.values.gender}
                                    onChange={memberFormik.handleChange}
                                    onBlur={memberFormik.handleBlur}
                                  >
                                    <option value="" label="Select" />
                                    <option value="male" label="Male" />
                                    <option value="female" label="Female" />
                                    <option value="other" label="Other" />
                                  </select>
                                  {memberFormik.touched.gender && memberFormik.errors.gender ? (
                                    <div className="error">{memberFormik.errors.gender}</div>
                                  ) : null}
                                </div>
                              </div>

                              <div className="button-container">
                                <button type="submit" className="button-header">ADD MEMBER</button>
                              </div>
                            </div>

                          </form>
                        </div>

                      </div>


                    </div>
                  </div>
                </div>
                <div className="add-user-container">
                  <div className="add-user">
                  <div className="main-user-heading">View Edit From Here!</div>
                    <div className=" flex add-user justify-between ">
                      <div className="show-user-container">
                        {/* Display added members */}
                        {users.map((user, index) => (
                          <div className="show-user" key={index} onClick={() => handleEditUser(index)}>
                            {/* Render each member's details here */}
                            <div className="icon-heading">TT</div>
                            <div className='plus-icon-heading'>{user.fullName}</div>

                            {/* Add more fields as needed */}
                          </div>
                        ))}
                      </div>
                      <div className="button-subscribe justify-end">
                        <button type="button" onClick={handleSubscribeNow} className="button-header px-4">Subscribe Now</button>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </DialogContent>
        </Box>
      </Dialog>

      {/* term&conditionmodal */}
      {isOpentermandcondition && (
                <div
                    id="static-modal"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
                    onClick={() => setIsOpentermandcondition(false)}
                >
                    <div
                        className="relative p-6 w-full max-w-3xl bg-white rounded-lg shadow dark:bg-gray-700"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        {/* Modal header */}
                        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-600">
                            <h3 className="text-xl font-bold text-customcolor dark:text-white">
                                Terms and Conditions
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-customcolor rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => setIsOpentermandcondition(false)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Acknowledgement and acceptance of these terms of services.
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                This page states the terms and conditions (the T&C) under which you may access and/or use this website (the Website). Please read this page carefully. If you do not accept the Terms and Conditions stated herein, you are advised not to use the Website.
                                <br /><br />
                                Eines Healthcare Private Limited ("Company" or "We" or "Us" or “Eines Healthcare Private Limited”) is the owner of this Website, and all the content herein, and reserves the right to change these T&C at any time without notice to you, and upon such change, the same shall be effective immediately. You agree to review these T&Cs regularly. By using the Website, you are agreeing to be bound by the T&C as updated from time to time.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Applicable Law
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                This site is created and controlled by Eines Healthcare Private Limited. The laws of India shall apply and govern all content herein and courts in Bangalore, Karnataka shall have jurisdiction in respect of all the terms, conditions and disclaimers herein.
                                <br /><br />
                                The Company accepts no liability whatsoever, direct or indirect for non-compliance with the laws of any country other than that of India. The mere fact that the Website can be accessed in a country other than India would not result in such laws of the said country applying to the Website.
                                <br /><br />
                                It shall be the sole responsibility of foreign residents including Non-Resident Indians in foreign jurisdictions to verify whether the services available on the Website can be accessed and utilised in their respective jurisdictions. The services which are part of the Website do not constitute an offer to sell or a solicitation of an offer to buy any policies/products to any person in any jurisdiction where it is unlawful to make such an offer or solicitation.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Eligibility
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                You represent and warrant that you are competent and eligible to enter into a legally binding agreement and have the requisite authority to enter into this Agreement and perform your obligations herein. You shall not use this Website if you are not competent to contract under the applicable laws, rules and regulations.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Registration Requirement
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                You agree to use such services of the Company in a manner consistent with the terms and conditions of this Agreement and with all applicable laws and regulations.
                                <br /><br />
                                Further, the “Partner/Customer" of this Website does hereby agree and understand that the information furnished on this Website is for information and guidance purposes only and must not be construed as a recommendation by Eines Healthcare Private Limited to purchase any product. The decision to purchase the product should be based on your evaluation of the product. Further, you must exercise due care in ensuring the completeness and accuracy of the information provided. Eines Healthcare Private Limited and its employees shall not be liable for any loss or damage caused by or arising out of reliance placed on such incomplete or inaccurate information.
                                <br /><br />
                                Further, by effecting a transaction that may be allowed by Eines Healthcare Private Limited on the Website, you agree to provide complete and irrevocable authority to Eines Healthcare Private Limited to take steps and carry out tasks that are essential and relevant to the provision of the services for which the transaction is effected. You further acknowledge and accept that the records maintained by Eines Healthcare Private Limited concerning the transactions effected by you at the Website shall be the conclusive evidence of such transaction and shall be final and binding on you and your assigns and successors.
                                <br /><br />
                                Eines Healthcare Private Limited reserves the right to suspend, withdraw, modify, add or cancel any or all of the services offered on the Website without any prior notice. Any such suspension, withdrawal, modification, addition or cancellation shall become binding on you forthwith.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                This Agreement shall continue to be valid and in effect as long as you are using the Website or the services provided through the Website. The Website provides an online platform wherein the “Partner/Customers” can purchase/buy insurance policies of various providers and other health benefit products as listed on the Website per the terms and conditions set forth for such policies/products.
                                <br /><br />
                                You agree to use such services of the Company in a manner consistent with the terms and conditions of this Agreement and with all applicable laws and regulations.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Card or Bank Account Details
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                You agree, understand and confirm that the bank or credit/debit card details provided by you for buying the insurance policies offered by Eines Healthcare Private Limited on the Website shall be correct and accurate and you shall not use the bank account and/or credit/debit card which is not lawfully owned by you. You further agree and undertake to provide the correct and valid bank account and/or credit/debit card details to Eines Healthcare Private Limited.
                                <br /><br />
                                Further, the said information shall not be stored, utilized and shared with any of the third parties by the Company unless required by law, regulation or court order. You shall fully indemnify the Company from any loss or damage arising out of a non-compliance of this condition by you.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Cancellation Policy
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                The “Partner/Customer" does hereby agree that before purchasing the policy/products listed on the Website, the “Partner/Customer” shall be solely responsible for verifying the accuracy and completeness of all information and shall be satisfied by the suitability of the product and shall not be entitled to any refund for the product so purchased.
                                <br /><br />
                                Further, the Partner/Customer does hereby understand and agree that the Company shall not be liable for any discrepancies in the information provided by the “Partner/Customer”.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Limitation of Liability
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                The Company shall not be responsible for any errors, omissions or representations on any of the pages or links on any of the pages. The Company and its affiliates, directors, employees, agents, representatives, partners and service providers shall not be liable for any direct, indirect, special, incidental, consequential or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data or other intangible losses, resulting from: (a) the use or the inability to use the Website; (b) unauthorized access to or alteration of the user’s transmissions or data; (c) any other matter relating to the Website or the services provided therein.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Assistance 
                            </h4>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">For any concerns or questions about any aspect of these Terms &amp; Conditions of use of the Website, please feel free to contact us at
                         <br/>
                         <a className='text-customcolor' href="#">contact@jodohealth.in</a>.</p>

                        </div>

                        {/* Modal footer */}
                        <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                            <button
                                type="button"
                                className="text-white bg-customcolor hover:bg-customcolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleAgree}
                            >
                                I Agree
                            </button>

                            <button
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-customcolor focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 mr-2"
                                onClick={() => setIsOpentermandcondition(false)}
                            >
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
}

export default LabTest;