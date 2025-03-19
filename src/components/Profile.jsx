import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { getDatabase, ref, set } from "../../firebase.js";
const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [hostel, setHostel] = useState("");
  const [department, setDepartment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      enrollmentNumber,
      hostel,
      department,
    });

    const database = getDatabase()
    console.log(database)

    set(ref(database, "users"), {
      firstName, lastName, enrollmentNumber, hostel, department
    })



  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 text-center"
      >
        {/* Logo on top */}
        <img src={Logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />

        <h2 className="text-2xl font-semibold mb-6">Profile Registration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="mb-1 font-semibold">University Enrollment Number</label>
            <input
              type="text"
              value={enrollmentNumber}
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) return;
                if (e.target.value.length <= 10) {
                  setEnrollmentNumber(e.target.value);
                } else {
                  alert("Limit reached");
                }
              }}
              pattern="^[0-9]{10}$"
              maxLength={10}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="font-semibold mb-2">Hostel</label>
            <div className="flex gap-8">
              <label className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-lg">
                <input
                  type="radio"
                  name="hostel"
                  value="H1"
                  checked={hostel === "H1"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio text-yellow-500"
                />
                <span className="font-medium">H1</span>
              </label>

              <label className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-lg">
                <input
                  type="radio"
                  name="hostel"
                  value="H2"
                  checked={hostel === "H2"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="font-medium">H2</span>
              </label>

              <label className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-lg">
                <input
                  type="radio"
                  name="hostel"
                  value="H3"
                  checked={hostel === "H3"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio text-green-500"
                />
                <span className="font-medium">H3</span>
              </label>

              <label className="flex items-center space-x-2 bg-purple-100 px-3 py-1 rounded-lg">
                <input
                  type="radio"
                  name="hostel"
                  value="H4"
                  checked={hostel === "H4"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio text-purple-500"
                />
                <span className="font-medium">H4</span>
              </label>

              <label className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-lg">
                <input
                  type="radio"
                  name="hostel"
                  value="H5"
                  checked={hostel === "H5"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio text-red-500"
                />
                <span className="font-medium">H5</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col col-span-2">
            <label className="mb-1 font-semibold">Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            >
              <option value="" disabled>Choose...</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electronics and Communication">Electronics and Communication</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSubmitting((prev) => !prev);
              handleSubmit(e);
            }}
            className="bg-yellow-400 text-white w-40 py-2 rounded hover:bg-yellow-500 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            {submitting ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
