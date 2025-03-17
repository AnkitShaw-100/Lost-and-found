import React, { useState } from "react";

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
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Profile Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                console.log(e.target.value);
                setFirstName(e.target.value);
              }}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                console.log(e.target.value);
                setLastName(e.target.value);
              }}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="enrollmentNumber" className="mb-1 font-semibold">
              University Enrollment Number
            </label>
            {/* Input field allowing only up to 10 digits and showing an alert when exceeding 10 */}
            <input
              type="text"
              value={enrollmentNumber}
              onChange={(e) => {
                // Allow only digits
                if (!/^[0-9]*$/.test(e.target.value)) {
                  return;
                }
                // Check length to limit to 10
                if (e.target.value.length <= 10) {
                  setEnrollmentNumber(e.target.value);
                } else {
                  alert("Limit reached");
                }
              }}
              pattern="^[0-9]{10}$"
              maxLength={10}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="hostel" className="font-semibold">
              Hostel
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="hostel"
                  value="A"
                  checked={hostel === "A"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-1">A</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="hostel"
                  value="B"
                  checked={hostel === "B"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-1">B</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="hostel"
                  value="C"
                  checked={hostel === "C"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-1">C</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="hostel"
                  value="D"
                  checked={hostel === "D"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-1">D</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="hostel"
                  value="E"
                  checked={hostel === "E"}
                  onChange={(e) => setHostel(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-1">E</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="department" className="mb-1 font-semibold">
              Department
            </label>
            <select
              id="department"
              value={department}
              onChange={(e) => {
                console.log(e.target.value);
                setDepartment(e.target.value);
              }}
              className="border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electronics and Communication">
                Electronics and Communication
              </option>
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
            className="bg-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-800 transition-colors"
          >
            {submitting ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
