import React, { useEffect, useState } from 'react';
import Input from 'src/lib/components/atoms/Input';
import { validatePassword, validateUsername } from 'src/lib/helpers/validation';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from 'src/lib/hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { useMutationLogin } from '../hooks';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[] | null>(null);
  const { login, isLoggedIn, loginWithGitHub } = useAuth();
  const [searchParams] = useSearchParams();
  const codeGithub = searchParams.get('code');
  const { mutate } = useMutationLogin();
  useEffect(() => {
    if (codeGithub) {
      const authData = {
        token: 'dummyToken123',
        user: codeGithub,
      };
      login(authData);
    }
  }, [codeGithub, login]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
  }, [isLoggedIn, navigate]);
  const handleLogin = () => {
    setErrors(null);
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    const newErrors: string[] = [];
    if (usernameError) {
      newErrors.push(usernameError);
    }

    if (passwordError) {
      newErrors.push(passwordError);
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    mutate(
      {
        username,
        password,
      },
      {
        onSuccess: (e: any) => {
          login({
            token: e?.data?.data?.token,
            user: e?.data?.data?.name,
          });
        },
      }
    );
  };
  return (
    <div className="flex flex-col justify-center items-center text-gray-800 h-full ">
      <div className=" w-full max-w-[450px] rounded-lg  flex flex-col justify-center relative  p-6">
        <h1 className="font-semibold text-2xl w-full text-blue-600">LOGIN</h1>
        <p>
          Hi, <br /> Wellcome back
        </p>
        <button
          onClick={() => loginWithGitHub()}
          className="rounded p-2 space-x-2 my-6 w-full flex items-center justify-center border border-gray-300 text-black"
        >
          <span>
            {' '}
            <FcGoogle />
          </span>

          <span>Login with google</span>
        </button>
        <div className="relative text-xs text-gray-400 text-center isolate">
          <span className="z-0 absolute top-0 border-t border-gray-300 w-full right-0 transform top-1/2 -translate-y-1/2" />
          <span className="z-20 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            or Login with Email
          </span>
        </div>
        <div className=" w-full mt-6">
          <Input
            label="Username"
            value={username}
            propsInput={{
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value),
            }}
            placeholder="Username"
          />
          <Input
            label="Password"
            value={password}
            propsInput={{
              type: 'password',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value),
            }}
            placeholder="Password"
          />
          <div className="flex justify-between text-xs py-4">
            <span>Forgot password?</span>
          </div>
          <button
            onClick={handleLogin}
            className="rounded text-white p-4 w-full bg-blue-700 text-xs"
          >
            Login
          </button>
          <div className="mt-4 text-sm flex items-center space-x-2">
            <p>Not registered yet? </p>
            <button className="text-purple-700">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
