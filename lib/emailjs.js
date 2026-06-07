import emailjs from '@emailjs/browser';

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
}

export const sendInquiry = async (formData) => {
  try {
    const templateParams = {
      to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      messageId: response.status,
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendAutoReply = async (email, name) => {
  try {
    const templateParams = {
      to_email: email,
      user_name: name,
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      'template_autoreplies', // Separate template for auto-replies
      templateParams
    );

    return { success: true };
  } catch (error) {
    console.error('Auto-reply Error:', error);
    return { success: false };
  }
};
