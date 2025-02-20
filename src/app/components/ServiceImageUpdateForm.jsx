import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ServiceImageUpdateForm = ({ id }) => {
  const [serviceId] = useState(id);
  const [image, setImage] = useState(null);
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/'; // Adjust accordingly

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('images', image);

    try {
      await axios.put(`${basePath}services/${serviceId}/image`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Image updated successfully!');
      router.reload(); // Reload to reflect the update
    } catch (error) {
      console.error('Error updating image:', error);
      alert('Failed to update image.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input 
        type="file" 
        onChange={handleImageChange} 
        required 
        className="border border-gray-300 p-2 rounded-lg"
      />
      <button 
        type="submit" 
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
      >
        Update Service Image
      </button>
    </form>
  );
};

export default ServiceImageUpdateForm;
