import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../homecomponents/Header';
import Footer from '../homecomponents/Footer';

const MembersDetail = () => {
    const [showForm, setShowForm] = useState(false);
    const [members, setMembers] = useState([]);

    const initialMemberData = {
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        address: '',
    };

    const memberFormik = useFormik({
        initialValues: initialMemberData,
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
                .required('Required'),
            age: Yup.number()
                .typeError('Age must be a number')
                .positive('Age must be a positive number')
                .integer('Age must be an integer')
                .required('Required'),
            address: Yup.string().required('Required'),
            gender: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            toast.success('Member Added');
            setMembers([...members, values]);
            memberFormik.resetForm();
            setShowForm(false);
        },
    });

    useEffect(() => {
        // Example: Fetch members from an API or use dummy data
        // Replace this with your actual API call
        const fetchMembers = async () => {
            try {
                // Example dummy data
                const dummyMembers = [
                    { id: 1, name: 'Member 1', email: 'member1@example.com', phone: '1234567890', age: '25', gender: 'male', address: '123 Street' },
                    { id: 2, name: 'Member 2', email: 'member2@example.com', phone: '9876543210', age: '30', gender: 'female', address: '456 Avenue' },
                    // Add more members as needed
                ];
                setMembers(dummyMembers);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, []);

    const handleAddMember = () => {
        if (members.length < 3) {
            setShowForm(true);
        } else {
            toast.error('You can only add 3 members');
        }
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col w-full lg:w-60% p-5">
                <div className='flex flex-row gap-3 justify-between'>
                    <p className='m-0 font-semibold leading-relaxed tracking-tight text-customcolor text-[24px] font-popins2'>Members</p>
                    <div className="flex flex-col pb-4 w-1/2 overflow-y-scroll">
                        <div className="button-subscribe flex justify-end">
                            <button
                                type="button"
                                className="botton-header h-10 bg-[#4ab0e1] font-bold rounded-lg border-none text-sm text-center text-white cursor-pointer px-4"
                                onClick={handleAddMember}
                            >
                                Add Member
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <div className={`flex flex-col lg:flex-row justify-between w-full ${showForm ? '' : 'lg:flex-col'}`}>
                        <div className={`flex flex-col p-5 w-full ${!showForm && members.length < 3 ? 'lg:w-full' : 'lg:w-full'}`}>
                            <div className='flex justify-center w-full gap-5'>
                                {members.map((member) => (
                                    <div key={member.id} className='flex flex-col gap-3 w-full'>
                                        <div className="flex flex-col w-full">
                                            <div className="flex flex-col p-5 rounded-lg bg-[#f0f8ff] shadow-custom1 border border-customborder mb-3">
                                                <p className="font-bold">{member.name}</p>
                                                <p className="font-bold">
                                                    <span className="font-medium mr-2">Email:</span>
                                                    {member.email}
                                                </p>
                                                <p className="font-bold">
                                                    <span className="font-medium mr-2">Phone:</span>
                                                    {member.phone}
                                                </p>
                                                <p className="font-bold">
                                                    <span className="font-medium mr-2">Age:</span>
                                                    {member.age}
                                                </p>
                                                <p className="font-bold">
                                                    <span className="font-medium mr-2">Gender:</span>
                                                    {member.gender}
                                                </p>
                                                <p className="font-bold">
                                                    <span className="font-medium mr-2">Address:</span>
                                                    {member.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {showForm && (
                            <div className='flex flex-col p-5 w-full lg:w-1/2 mx-[14px]'>
                                <form onSubmit={memberFormik.handleSubmit} className="flex flex-col p-4 rounded-lg shadow-custom1 border border-customborder shadow-customshadow">
                                    <div className='flex flex-row gap-4'>
                                        <div className="flex gap-2 flex-col w-1/2">
                                            <label htmlFor="name" className="m-0 font-popins1 font-normal text-base leading-relaxed tracking-tight text-[#212124] opacity-70">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={memberFormik.values.name}
                                                onChange={memberFormik.handleChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {memberFormik.touched.name && memberFormik.errors.name ? (
                                                <div className="error">{memberFormik.errors.name}</div>
                                            ) : null}
                                        </div>
                                        <div className=" flex gap-2 flex-col w-1/2">
                                            <label htmlFor="email" className="m-0 font-popins1 font-normal text-base leading-relaxed tracking-tight text-[#212124] opacity-70">Email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={memberFormik.values.email}
                                                onChange={memberFormik.handleChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {memberFormik.touched.email && memberFormik.errors.email ? (
                                                <div className="error">{memberFormik.errors.email}</div>
                                            ) : null}
                                        </div>
                                    </div>


                                    <div className='flex flex-row gap-4'>
                                        <div className="mt-2 flex gap-2 flex-col w-1/2">
                                            <label htmlFor="phone" className="m-0 font-popins1 font-normal text-base leading-relaxed tracking-tight text-[#212124] opacity-70">Phone:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={memberFormik.values.phone}
                                                onChange={memberFormik.handleChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {memberFormik.touched.phone && memberFormik.errors.phone ? (
                                                <div className="error">{memberFormik.errors.phone}</div>
                                            ) : null}
                                        </div>
                                        <div className="mt-2 flex gap-2 flex-col w-1/2">
                                            <label htmlFor="age" className="m-0 font-popins1 font-normal text-base leading-relaxed tracking-tight text-[#212124] opacity-70">Age:</label>
                                            <input
                                                type="number"
                                                id="age"
                                                name="age"
                                                value={memberFormik.values.age}
                                                onChange={memberFormik.handleChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {memberFormik.touched.age && memberFormik.errors.age ? (
                                                <div className="error">{memberFormik.errors.age}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-4'>
                                        <div className="mt-2 flex gap-2 flex-col w-1/2">
                                            <label htmlFor="address" className="m-0 font-popins1 font-normal text-base leading-relaxed tracking-tight text-[#212124] opacity-70">Address:</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={memberFormik.values.address}
                                                onChange={memberFormik.handleChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {memberFormik.touched.address && memberFormik.errors.address ? (
                                                <div className="error">{memberFormik.errors.address}</div>
                                            ) : null}
                                        </div>
                                        <div className="mt-2 flex gap-2 flex-col w-1/2">
                                            <label htmlFor="gender" className="m-0 font-popins1 font-normal text-base leading-relaxed tracking-tight text-[#212124] opacity-70">Gender:</label>
                                            <input
                                                type="text"
                                                id="gender"
                                                name="gender"
                                                value={memberFormik.values.gender}
                                                onChange={memberFormik.handleChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {memberFormik.touched.gender && memberFormik.errors.gender ? (
                                                <div className="error">{memberFormik.errors.gender}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="button-subscribe flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-[#4ab0e1] font-bold rounded-lg border-none text-sm text-center text-white cursor-pointer px-4 py-2"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MembersDetail;
