// app/admin/messages/page.tsx
import { getAllMessages } from '@/lib/action';
import { format } from 'date-fns';
import { Mail, Calendar } from 'lucide-react';
import AdminAuthWrapper from '@/components/authWrapper'; // Adjust the path
interface Message {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt:Date
}
export default async function MessagesAdminPage() {
    const messages = await getAllMessages();
    console.log(messages)
    return (
        <AdminAuthWrapper>
            <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-neutral-800 mb-10 tracking-tight">📬 Messages Inbox</h1>

                    {messages.length === 0 ? (
                        <p className="text-gray-500 text-center">No messages found.</p>
                    ) : (
                        <div className="grid gap-6">
                            {messages.map((message:Message) => (
                                <MessageCard key={message._id} message={message} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AdminAuthWrapper>
    );
}

function MessageCard({ message }: { message: Message }) {
    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-6 group">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold">{message.name}</span>
                    <span className="text-sm text-gray-500">&lt;{message.email}&gt;</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(message.createdAt), 'MMM d, yyyy - h:mm a')}</span>
                </div>
            </div>

            {message.subject && (
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                    📝 Subject: <span className="font-normal">{message.subject}</span>
                </h3>
            )}

            <div className="text-gray-600 text-sm leading-relaxed">
                {message.message}
            </div>
        </div>
    );
}
