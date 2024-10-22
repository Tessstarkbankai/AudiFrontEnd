import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import backgroundImage from '../../Assets/invertisHome.jpg';
import { signUp } from '../../services/user_Auth';
import { setAuthToken } from '../../services/auth_utility';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    password: '',
    department: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await signUp(formData);
      if (response.token) {
        setAuthToken(response.token);
        navigate('/HomePage');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      setError(error.message || 'An error occurred during signup.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Card className="w-full max-w-md mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Form inputs remain the same */}
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