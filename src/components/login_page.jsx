import { useState } from "react";
import Logo from "../assets/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit() {
    const formData = { email, password };
    console.log(formData);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md text-center">
        <img src={Logo} alt="Logo" className="w-20 h-20 mx-auto mb-3" />

        <h2 className="text-2xl font-semibold mb-6">Please sign in</h2>

        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold text-gray-700">Email address</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold text-gray-700">Password</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Remember me</label>
        </div>

        <button
          className=" bg-yellow-400 text-white w-full py-2 rounded hover:ring-yellow-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            setSubmitting((prev) => !prev);
            handleSubmit();
          }}
        >
          {submitting ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-gray-500 mt-4">&copy; 2024–2027</p>
      </form>
    </div>
  );
};

export default LoginPage;
