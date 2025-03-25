import React, {useState, useCallback} from 'react';
import {db} from '../../firebase';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: ''
  });

  // Memoized change handler to prevent unnecessary re-renders
  const handleChange = useCallback(e => {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  // Improved email validation
  const validateEmail = useCallback(email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  }, []);

  // Form validation with more specific error messages
  const validateForm = useCallback(() => {
    const {name, email, message} = formData;

    if (!name.trim()) {
      return 'Name is required and cannot be just spaces';
    }

    if (!email.trim()) {
      return 'Email address is required';
    }

    if (!validateEmail(email)) {
      return 'Please enter a valid email address (e.g., example@domain.com)';
    }

    if (!message.trim()) {
      return 'Message cannot be empty';
    }

    return null;
  }, [formData, validateEmail]);

  const handleSubmit = async e => {
    e.preventDefault();

    // Reset previous error
    setSubmitState(prev => ({...prev, error: ''}));

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitState(prev => ({...prev, error: validationError}));
      return;
    }

    // Set submitting state
    setSubmitState(prev => ({
      ...prev,
      isSubmitting: true
    }));

    try {
      // Firestore submission with additional sanitization
      await addDoc(collection(db, 'feedback'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        // Optional: Add metadata for tracking
        source: window.location.href
      });

      // Reset form and show success
      setFormData({name: '', email: '', message: ''});
      setSubmitState({
        isSubmitting: false,
        isSubmitted: true,
        error: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitState(prev => ({...prev, isSubmitted: false}));
      }, 5000);
    } catch (err) {
      console.error('Error saving feedback:', err);
      setSubmitState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to submit feedback. Please check your connection and try again.'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex my-8">
      {/* Illustration section - unchanged */}
      <div className="hidden md:block md:w-1/2">
        <img src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Feedback Illustration" className="w-full h-full object-cover" />
      </div>

      <div className="w-full md:w-1/2 p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Talk to us and get your project moving!</div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">We will respond to you within 24 hours.</h2>
        <p className="text-gray-600 mb-6">You'll be talking to product and tech experts (no account managers).</p>

        {submitState.isSubmitted ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 animate-fadeIn">
            <p className="font-medium">Thank you for your feedback!</p>
            <p>We appreciate you taking the time to share your thoughts.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input fields - with improved accessibility and validation */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required aria-required="true" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your full name" autoComplete="name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-required="true" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your.email@example.com" autoComplete="email" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required aria-required="true" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us what you think..."></textarea>
            </div>

            {submitState.error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 animate-shake">
                <p>{submitState.error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitState.isSubmitting}
              className={`
                w-full flex justify-center py-2 px-4 rounded-md 
                text-sm font-medium text-white 
                bg-indigo-600 hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                transition-all duration-300
                ${submitState.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
              `}
            >
              {submitState.isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
