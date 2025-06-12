// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

// Es una buena práctica guardar estas claves en un archivo .env
// Pero para este ejemplo, las ponemos aquí.
const SERVICE_ID = 'TU_SERVICE_ID';
const TEMPLATE_ID = 'TU_TEMPLATE_ID';
const PUBLIC_KEY = 'TU_PUBLIC_KEY';

const ContactForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSuccess(true);
        setIsSubmitting(false);
        reset(); // Limpia el formulario
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsError(true);
        setIsSubmitting(false);
      });
  };

  if (isSuccess) {
    return <p className="text-center text-lg py-20">¡Gracias por tu mensaje! Te responderé pronto.</p>;
  }

  return (
    <section id="contact" className="py-20 px-4 bg-navy-light/20">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-display text-center mb-8 text-accent">{t('contact_title')}</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo Nombre */}
          <div className="mb-4">
            <input 
              {...register("name", { required: "El nombre es requerido." })}
              placeholder={t('contact_name')}
              className="w-full p-3 rounded-md bg-cream border border-navy-light/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.name && <span className="text-red-500 text-sm float-left mt-1">{errors.name.message}</span>}
          </div>
          
          {/* Campo Email */}
          <div className="mb-4">
            <input 
              {...register("email", { 
                required: "El email es requerido.", 
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Introduce un email válido."
                } 
              })}
              placeholder={t('contact_email')}
              className="w-full p-3 rounded-md bg-cream border border-navy-light/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.email && <span className="text-red-500 text-sm float-left mt-1">{errors.email.message}</span>}
          </div>

          {/* Campo Mensaje */}
          <div className="mb-4">
            <textarea 
              {...register("message", { required: "El mensaje no puede estar vacío." })}
              rows="5"
              placeholder={t('contact_message')}
              className="w-full p-3 rounded-md bg-cream border border-navy-light/50 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm float-left mt-1">{errors.message.message}</span>}
          </div>
          
          {/* Botón de envío y mensajes de estado */}
          <div className="mt-6">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors duration-300 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Enviando...' : t('contact_send')}
            </button>
            {isError && <p className="text-red-500 mt-4">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;