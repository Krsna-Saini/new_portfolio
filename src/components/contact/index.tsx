
'use client';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/lib/action';
import { Loader2 } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const SubmitButton = () => {
  const { pending} = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition duration-200 disabled:opacity-70"
    >
      {pending ? (
        <div className='flex gap-2 items-center justify-center text-black'>
          <Loader2 className='animate-spin' />
          <span>Sending...</span>
        </div>
      ) : (
        <span>🚀 Send Message</span>
      )}
    </button>
  );
};

const initialState = {
  success: false,
  error: '',
};

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state?.success) {
      toast.success("Message has been sent", {
          description: `${format(new Date(), 'MMM d, yyyy - h:mm a')}`,
          action: {
            label: "Ok",
            onClick: () => console.log("Ok"),
          },
        })
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-neutral-400 via-neutral-700 to-neutral-800 px-4 md:px-8 py-16 text-white"
    >
      <div className="w-full sm:max-w-4xl bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-14 border border-white/10">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-extrabold text-green-300 mb-4">📬 Get In Touch</h2>
          <p className="text-gray-300 text-lg">
            Whether you have a project in mind or just want to chat, my inbox is always open!
          </p>
        </div>

        <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="col-span-1 md:col-span-2 bg-neutral-800 text-white px-5 py-4 rounded-xl border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required
            className="bg-neutral-800 text-white px-5 py-4 rounded-xl border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-neutral-800 text-white px-5 py-4 rounded-xl border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="message"
            placeholder="Your Message *"
            rows={5}
            required
            className="col-span-1 md:col-span-2 bg-neutral-800 text-white px-5 py-4 rounded-xl border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="col-span-1 md:col-span-2">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}