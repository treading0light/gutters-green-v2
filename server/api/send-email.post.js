import * as yup from 'yup';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Parse the request body

  // Yup schema copied from the frontend
  const formSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name cannot exceed 50 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Must be a valid email'),
    address: yup
      .string()
      .required('Address is required')
      .max(100, 'Address cannot exceed 100 characters'),
    city: yup
      .string()
      .required('City is required')
      .max(50, 'City cannot exceed 50 characters'),
    state: yup
      .string()
      .required('State is required')
      .length(2, 'State must be exactly 2 characters (e.g., CA, NY)'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(
        /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/,
        'Must be a valid phone number'
      ),
    message: yup
      .string()
      .max(500, 'Message cannot exceed 500 characters'),
  });

  try {
    // Validate the request body
    const validatedData = await formSchema.validate(body, { abortEarly: false });

    // Use validatedData to send the email
    const { sendMail } = useNodeMailer();
    await sendMail({
      to: 'tonygreen@theguttersgreen.com',
      subject: `New message from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Address: ${validatedData.address}
        City: ${validatedData.city}
        State: ${validatedData.state}
        Phone: ${validatedData.phone}
        Message: ${validatedData.message}
      `,
    });

    return { status: 200, message: 'Email sent successfully!' };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      // Handle validation errors
      const validationErrors = error.inner.map((err) => ({
        field: err.path,
        message: err.message,
      }));

      return {
        status: 400,
        message: 'Validation failed',
        errors: validationErrors,
      };
    }

    // Handle other errors
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to send email.',
    });
  }
});
