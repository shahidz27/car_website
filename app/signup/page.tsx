// SignupForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface SignupFormData {
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        name: '',
        year: new Date().getFullYear(),
        color: '',
        pantone_value: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "year") {
            setFormData(prevState => ({ ...prevState, [name]: parseInt(value) }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/register', formData); // Assuming the endpoint is `/api/colors`
            if (response.data) {
                alert('Color registered successfully!');
            } else {
                console.error('Registration failed:', response.data);
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error registering:', error);
            alert('Registration error. Please check your input and try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name:
                </label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                    Year:
                </label>
                <input 
                    type="number" 
                    name="year" 
                    value={formData.year.toString()} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
                    Color:
                </label>
                <input 
                    type="color" 
                    name="color" 
                    value={formData.color} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pantone_value">
                    Pantone Value:
                </label>
                <input 
                    type="text" 
                    name="pantone_value" 
                    value={formData.pantone_value} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Register Color
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
