
const Login = () => {
  const loginWithGoogle = () => {
    console.log("VITE_API_URL =", import.meta.env.VITE_API_URL); // 👈 ADD HERE

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
