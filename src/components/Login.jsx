import { useState } from "react";
import { auth } from "../components/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";  // ✅ Import database
import { getDatabase, ref, set } from "firebase/database";  // ✅ Import database functions
import { app } from "../components/firebaseConfig";  // ✅ Import Firebase app instance
import Logo from "../assets/logo.png";

const database = getDatabase(app);  // ✅ Initialize Firebase Realtime Database
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // ✅ Function to save user data in Firebase Realtime Database
  const saveUserData = (userId, email) => {
    console.log("Saving data:", userId, email);  // ✅ Debugging log

    set(ref(database, "/users" + userId), {
      email: email,
    })
      .then(() => console.log("User data saved successfully!"))  // ✅ Debugging log
      .catch((error) => console.error("Error saving user data:", error));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // ✅ User login
      console.log("Login successful!");
      alert("Login successful!");

      // ✅ Get user ID from Firebase Auth and save user data in Realtime Database
      const userId = userCredential.user.uid;
      saveUserData(userId, email);

    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }

    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md text-center">
        <img src={Logo} alt="Logo" className="w-20 h-20 mx-auto mb-3" />

        <h2 className="text-2xl font-semibold mb-6">Please sign in</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

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

        <button
          className="bg-yellow-400 text-white w-full py-2 rounded hover:ring-yellow-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-gray-500 mt-4">&copy; 2024–2027</p>
      </form>
    </div>
  );
};

export default LoginPage;
