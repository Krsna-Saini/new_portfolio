import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true }
}, {
  timestamps: true
});

// Check if model already exists before creating it
const Message = models?.Message || model('Message', MessageSchema);

export default Message;