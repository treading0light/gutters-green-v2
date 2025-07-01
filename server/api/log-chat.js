export default defineEventHandler(async (event) => {

  if (process.env.NODE_ENV === 'development') {
    return {
      status: 200,
      message: 'Transcript email skipped in development mode.',
    };
  }

  const body = await readBody(event);
  const { messages } = body;

  if (!Array.isArray(messages) || messages.some(m => !m.role || !m.content)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid message format. Expected array of { role, content }.',
    });
  }

  const formattedTranscript = messages
    .map((msg) => `[${msg.role.toUpperCase()}]: ${msg.content}`)
    .join('\n');

  try {
    const { sendMail } = useNodeMailer();

    await sendMail({
      to: 'tonygreen@theguttersgreen.com',
      subject: `New Chat Transcript`,
      text: formattedTranscript,
    });

    return { status: 200, message: 'Transcript sent successfully!' };
  } catch (err) {
    console.error('Transcript email error:', err);

    throw createError({
      statusCode: 500,
      message: 'Failed to send chat transcript.',
    });
  }
});