import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import backgroundImage from '../../Assets/invertisHome.jpg'
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    console.log('Login Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Card className="w-full max-w-md mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="w-full placeholder:text-gray-200 bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input 
                type="password" 
                name="password"
                placeholder="Password" 
                className="w-full  placeholder:text-gray-200 bg-white bg-opacity-20 text-white placeholder-gray-200" 
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              <Link to='/HomePage'>Login</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;