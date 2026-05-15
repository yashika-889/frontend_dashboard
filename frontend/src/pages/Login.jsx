import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiMailLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center pt-[100px] md:pt-[166px] font-['Roboto'] px-[24px]">
      {/* Main Container */}
      <div className="w-full max-w-[385px] flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-[28px] font-semibold leading-[33px] text-black tracking-[-0.01em] text-center mb-[64px]">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-[24px]">
          {/* Email Input Group */}
          <div className="flex flex-col gap-[12px]">
            <label className="text-[16px] font-normal leading-none tracking-[0.01em] text-black">
              Email
            </label>
            <div className="relative w-full h-[48px]">
              <div className="absolute left-[20px] top-1/2 -translate-y-1/2 text-black/25">
                <RiMailLine size={20} />
              </div>
              <input
                type="email"
                placeholder="Example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full bg-[#F7F8F9] border border-[#CED1D8] rounded-[8px] pl-[52px] pr-[16px] text-[14px] font-normal tracking-[0.01em] text-black placeholder:text-[#9CA3AF] focus:outline-none focus:border-black/30 transition-colors"
                required
              />
            </div>
          </div>

          {/* Password Input Group */}
          <div className="flex flex-col gap-[12px]">
            <label className="text-[16px] font-normal leading-none tracking-[0.01em] text-black">
              Password
            </label>
            <div className="relative w-full h-[48px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-full bg-[#F7F8F9] border border-[#CED1D8] rounded-[8px] px-[16px] text-[16px] font-normal tracking-[0.01em] text-black placeholder:text-black/50 focus:outline-none focus:border-black/30 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-black transition-colors"
              >
                {showPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="pt-[8px] flex justify-center">
            <button
              type="submit"
              className="w-[128px] md:w-full h-[48px] bg-black text-white rounded-[8px] flex items-center justify-center gap-[8px] hover:bg-black/80 transition-all font-['Inter'] font-medium text-[16px] leading-[150%]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
