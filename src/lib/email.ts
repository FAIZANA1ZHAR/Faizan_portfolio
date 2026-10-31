export type EmailClient = 'default' | 'gmail' | 'outlook';
export type ContactFields = { name: string; email: string; subject: string; message: string };

export function createDraftUrl(fields: ContactFields, client: EmailClient, recipient: string): string {
  const subject = fields.subject.trim();
  const body = `${fields.message.trim()}\n\nFrom: ${fields.name.trim()}\nReply to: ${fields.email.trim()}`;
  if (client === 'gmail') return `https://mail.google.com/mail/?${new URLSearchParams({ view: 'cm', fs: '1', to: recipient, su: subject, body })}`;
  if (client === 'outlook') return `https://outlook.live.com/mail/0/deeplink/compose?${new URLSearchParams({ to: recipient, subject, body })}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function validateContactField(field: keyof ContactFields, value: string): string {
  if (!value.trim()) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Enter a valid email address.';
  const limits: Record<keyof ContactFields, number> = { name: 100, email: 254, subject: 200, message: 5000 };
  return value.length > limits[field] ? `Use ${limits[field]} characters or fewer.` : '';
}