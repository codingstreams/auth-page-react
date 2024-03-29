import './LoginForm.css';

interface FormState {
  name: string,
  username: string,
  password: string,
  isLoginForm: boolean,
  hasError: boolean,
  errorMessage: string | null
}

export default function LoginForm() {
  const defaultFormState: FormState = {
    name: "",
    username: "",
    password: "",
    isLoginForm: true,
    hasError: false,
    errorMessage: null
  };

  return (
    <div className="login-form">
      <form>
        <img src="cs-logo.png" alt="coding streams logo" className="d-flex m-auto mb-3" height="128" />
        <h3 className='text-center text-light mb-4'>Login</h3>

        <div className='form-floating mb-2'>
          <input className="form-control" type="text" name="nameInput" id="nameInput" placeholder="Enter your name" />
          <label htmlFor="nameInput" className='mb-1'>Name</label>
        </div>

        <div className='form-floating mb-2'>
          <input className="form-control" type="text" name="usernameInput" id="usernameInput" placeholder="Enter your username" />
          <label htmlFor="usernameInput" className='mb-1'>Username</label>
        </div>

        <div className='form-floating mb-2'>
          <input className="form-control" type="password" name="passwordInput" id="passwordInput" placeholder="Enter your password" />
          <label htmlFor="passwordInput" className='mb-1'>Password</label>
        </div>

        <button className="btn btn-primary w-100 mt-2 p-2">Login</button>

        <button className="btn w-100 mt-2 text-light">New Here? Click here to Sign up</button>
      </form>
    </div>
  );
}