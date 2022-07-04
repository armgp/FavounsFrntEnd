import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Favoun from './Favoun';
import api from '../api/favouns'
import { useLocalState } from '../utils/useLocalStorage';

const Login = () => {
  const initialValues = {username:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [jwt, setJwt] = useLocalState("", "jwt");
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {

    if(Object.keys(formErrors).length === 0 && isSubmit && !jwt){

      api.post('/auth/login', {
        username: formValues.username,
        password: formValues.password
      })
       .then((response) => {
        if(response.status === 200){
          console.log(response);
          return Promise.all([response, response.headers]);
        }else{
          return Promise.reject("Invalid login attempt");
        }
      })
      .then(([body, headers]) => {
          // console.log(body);
          // console.log(headers);
          setJwt(headers.authorization);
          window.location.href = "/";
      })
      .catch((message) => {
        alert(message);
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
    if(!values.username){
      errors.username = "Username required";
    }

    if(!values.password){
      errors.password = "Password required";
    }else if(!regex.test(values.password)){
      errors.password = "password must contain minimum eight characters, at least one letter, one number and one special character"
    }

    return errors;
  }

  return (
    <div className='py-10 bg-slate-50'>
      <section className="h-full">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="p-10 flex flex-row justify-center gap-3">
              <Favoun name="Redeem Favoun" description="Redeem you favoun with your friends. Let your friend do the work he owes." price="10" />
              <Favoun name="Favoun Call" description="Earn oweins by finishing your favoun task for your friend who redeems the favoun" price="10" />
            </div>

            <div className="xl:ml-20 xl:w-3/12 lg:w-5/12 md:w-5/12 mb-12 md:mb-0 rounded shadow-md p-4 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full border-2 border-black shadow-md hover:bg-slate-800 hover:text-white hover:shadow-lg focus:bg-slate-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full border-2 border-black shadow-md hover:bg-slate-800 hover:text-white hover:shadow-lg focus:bg-slate-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full border-2 border-black shadow-md hover:bg-slate-800 hover:text-white hover:shadow-lg focus:bg-slate-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                    id="usernameInput"
                    placeholder="User-Name"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                  <p className="text-red-600">{formErrors.username}</p>
                </div>
                

                
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                    id="passwordInput"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p className="text-red-600">{formErrors.password}</p>
                </div>
                

                <div className="flex justify-between items-center mb-6">

                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-white text-black font-medium text-sm leading-snug uppercase rounded shadow-md border-2 border-black hover:bg-black hover:text-white hover:shadow-lg focus:bg-black focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-white active:shadow-lg transition duration-150 ease-in-out font-bold"
                  >
                    Login
                  </button>
                  <p className="flex flex-col text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link to={"/signup"}
                      href=""
                      className="text-gray-400 hover:text-black focus:text-gray-700 transition duration-200 ease-in-out"
                    >Register</Link>

                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;