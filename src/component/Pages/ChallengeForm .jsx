import React, { useState } from "react";

const ChallengeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    duration: "",
    imageUrl: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // validation
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.imageUrl) newErrors.imageUrl = "Image URL is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit with timestamps
    const challengeData = {
      ...formData,
      participants: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    onSubmit(challengeData);
    setFormData({ title: "", category: "", description: "", duration: "", imageUrl: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      {["title", "category", "description", "duration", "imageUrl"].map(field => (
        <div key={field} className="mb-4">
          <label className="block font-semibold mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === "duration" ? "number" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
        </div>
      ))}
      <button type="submit" className="btn w-full bg-blue-500 text-white rounded-full mt-4">
        Add Challenge
      </button>
    </form>
  );
};

export default ChallengeForm;
