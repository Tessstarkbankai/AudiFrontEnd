import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import backgroundImage from '../../Assets/invertisHome.jpg'
import { signUp } from '../../services/user_Auth';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    password: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    signUp(formData).then((res) => {
      console.log('Sign Up Response:', res);
    }).catch((error) => { 
      console.log('Sign Up Error:', error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Card className="w-full max-w-md mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input 
                type="text" 
                name="userId"
                placeholder="User ID" 
                className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.userId}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input 
                type="text" 
                name="name"
                placeholder="Name" 
                className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input 
                type="password" 
                name="password"
                placeholder="Password" 
                className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input 
                type="text" 
                name="department"
                placeholder="Department" 
                className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;