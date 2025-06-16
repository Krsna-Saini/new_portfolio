// app/admin/messages/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { getAllMessages } from '@/lib/action';
import { format } from 'date-fns';
import { Mail, Calendar, RefreshCw } from 'lucide-react';
import AdminAuthWrapper from '@/components/authWrapper';

interface Message {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
}

export default function MessagesAdminPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const res = await getAllMessages();
            setMessages(res || []);
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <AdminAuthWrapper>
            <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 p-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="text-4xl font-bold text-neutral-800 tracking-tight">📬 Messages Inbox</h1>
                        <button
                            onClick={fetchMessages}
                            disabled={loading}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition disabled:opacity-70"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            {loading ? 'Refreshing...' : 'Refetch'}
                        </button>
                    </div>

                    {messages.length === 0 ? (
                        <p className="text-gray-500 text-center">No messages found.</p>
                    ) : (
                        <div className="grid gap-6">
                            {messages.map((message: Message) => (
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                {/* Name and Email */}
                <div className="flex flex-wrap items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold">{message.name}</span>
                    <span className="text-sm text-gray-500 break-all">&lt;{message.email}&gt;</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(message.createdAt), 'MMM d, yyyy - h:mm a')}</span>
                </div>
            </div>

            {/* Subject (optional) */}
            {message.subject && (
                <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2">
                    📝 Subject: <span className="font-normal">{message.subject}</span>
                </h3>
            )}

            {/* Message */}
            <div className="text-gray-600 text-sm leading-relaxed break-words">
                {message.message}
            </div>
        </div>

    );
}
