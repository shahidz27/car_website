"use client";

// SignupForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
interface SignupFormData {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/register', formData);
            console.log('Response:', response.data);
            // Handle success - perhaps redirect, show message, etc.
        } catch (error) {
            console.error('Error registering:', error);
            // Handle error - show error message, etc.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default SignupForm;
