import { useState } from 'react';
import axios from 'axios';
import { useAppContext } from './AppContext';

const ProductImageUpdateForm = ({ id }) => {
  const [productId] = useState(id);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { path } = useAppContext();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert('Please select an image');

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    try {
      await axios.put(`${path}products/${productId}/image`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Image updated successfully!');
    } catch (error) {
      console.error('Error updating image:', error);
      alert('Failed to update image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
      <input type="file" onChange={handleImageChange} required className="file:border file:bg-gray-100" />
      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 rounded bg-gray-600 text-white ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
        }`}
      >
        {loading ? 'Updating...' : 'Update Product Image'}
      </button>
    </form>
  );
};

export default ProductImageUpdateForm;
