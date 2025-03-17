import { useState } from "react";

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
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="exampleInputEmail1"
            className="block mb-1 font-semibold text-gray-700"
          >
            Email address
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="inputPassword6"
            className="block mb-1 font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-800 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setSubmitting((prev) => !prev);
              handleSubmit();
            }}
          >
            {submitting ? "Submitted" : "Click Me"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
