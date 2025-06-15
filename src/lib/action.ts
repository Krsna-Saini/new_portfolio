// app/actions/contact.ts
'use server';

import { connectToDB } from '@/lib/mongodb';
import Message from '@/models/message';

type FormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string || 'No subject',
    message: formData.get('message') as string,
  };

  // Validation
  if (!rawFormData.name || !rawFormData.email || !rawFormData.message) {
    return { error: 'Please fill all required fields' };
  }

  try {
    await connectToDB();
    await Message.create(rawFormData);
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { error: 'Failed to submit form' };
  }
}
export async function getAllMessages() {
  try {
    await connectToDB();
    const messages = await Message.find().sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(messages));
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
}