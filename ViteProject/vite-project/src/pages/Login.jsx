
const Login = () => {
  const loginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
