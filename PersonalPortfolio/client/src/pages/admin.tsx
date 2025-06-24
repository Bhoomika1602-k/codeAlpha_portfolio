import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, MessageSquare, Calendar } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const { data: contacts, isLoading, error } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: async () => {
      const response = await fetch('/api/contacts');
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      return response.json() as Promise<Contact[]>;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Contact Messages</h1>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white h-32 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Contact Messages</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">Error loading contacts: {error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Contact Messages</h1>
        
        <div className="grid gap-6">
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <Card key={contact.id} className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="text-blue-600" size={20} />
                      <span>{contact.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={16} />
                      <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="text-slate-400" size={16} />
                      <span className="text-slate-600">{contact.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="text-slate-400 mt-1" size={16} />
                      <p className="text-slate-700 leading-relaxed">{contact.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="mx-auto text-slate-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No messages yet</h3>
              <p className="text-slate-500">Contact messages will appear here when submitted.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}