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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
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
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
            type="email"
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
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            type="password"
          />
        </div>

        <div className="text-center">
          <button
            className="bg-red-700 text-white rounded-2xl px-4 py-2 hover:bg-red-800 transition"
            onClick={(e) => {
              e.preventDefault();
              setSubmitting((prev) => !prev);
              handleSubmit();
            }}
          >
            {submitting ? "Submited" : "Click Me"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;