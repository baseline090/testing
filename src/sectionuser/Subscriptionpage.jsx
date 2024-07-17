import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { getData, storageKey } from '../constants/storage';
import Header from '../homecomponents/Header';
import Footer from '../homecomponents/Footer';

function Subscriptionpage() {

    const [phonenumber, setPhonenumber] = useState("")
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);
    const [users, setUsers] = useState([]);
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


    const handleEditUser = (index) => {
        memberFormik.setValues(users[index]);
        setSelectedUserIndex(index);
    };
    useEffect(()=>{
        const userdata = getData(storageKey.USER_PHONE);
        setPhonenumber(userdata);
    },[])
    const handleSubscribeNow = () => {
        userFormik.validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            console.log('User Data:', userFormik.values);
            console.log('Member Data:', users);
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
    return (
        <div>
            <Header/>
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
                <Footer/>
            </div>
        </div>
    )
}

export default Subscriptionpage
