import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // À configurer: https://www.emailjs.com/
  // 1. Créer un compte EmailJS
  // 2. Ajouter un service (ex: Gmail)
  // 3. Créer un template avec variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
  // 4. Mettre les IDs ci-dessous:
  
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // À remplacer
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID'; // À remplacer
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // À remplacer
  private readonly TO_EMAIL = 'aurelandyou@gmail.com';

  constructor() {
    this.initEmailJS();
  }

  private initEmailJS(): void {
    if (this.PUBLIC_KEY && this.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(this.PUBLIC_KEY);
    }
  }

  async sendContactMessage(message: ContactMessage): Promise<{ success: boolean; message: string }> {
    if (!this.PUBLIC_KEY || this.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      return {
        success: false,
        message: 'Le service d\'email n\'est pas configuré. Veuillez contacter l\'administrateur.',
      };
    }

    try {
      const result = await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, {
        from_name: message.name,
        from_email: message.email,
        subject: message.subject,
        message: message.message,
        to_email: this.TO_EMAIL,
        reply_to: message.email,
      });

      if (result.status === 200) {
        return {
          success: true,
          message: 'Ton message a été envoyé avec succès! Je vais te répondre très bientôt.',
        };
      }

      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Réessaye plus tard.',
      };
    } catch (error) {
      console.error('Email error:', error);
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Réessaye plus tard.',
      };
    }
  }
}
