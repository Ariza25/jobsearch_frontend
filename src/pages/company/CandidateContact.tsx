// CandidateContact.jsx
import { useState, ChangeEvent, FormEvent } from 'react';
import {toast, ToastContainer} from "react-toastify"

const CandidateContact = () => {
  // State to manage form inputs and submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function sendMessageSuccess() {
    toast.success("Mensagem enviada com sucesso!");
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log('Submitted Form Data:', formData);

    setIsSubmitted(true);
    sendMessageSuccess();
    setFormData({ name: '', email: '', message: '' });
  };

  // Render form
  return (
    <>
    <ToastContainer/>
    <div className="container mx-auto p-4 bg-slate-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Contatar Candidato</h1>
      {isSubmitted && (
        <div className="mb-4 text-green-400 text-center">
          O candidato já recebeu sua mensagem!
        </div>
      )}
      <form
        className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg space-y-4 text-slate-800"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">
            Nome do Candidato
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-2">
            Email do Candidato
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
    </>
  );
};

export default CandidateContact;
