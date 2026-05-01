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
  
  private readonly PUBLIC_KEY: string = 'w1pbqIBx-TVLgvCPk'; 
  private readonly SERVICE_ID: string = 'service_blrx5al'; 
  private readonly TEMPLATE_ID: string = 'template_573vv2s'; 
  private readonly TO_EMAIL: string = 'aurelandyou@gmail.com';

  constructor() {
    this.initEmailJS();
  }

  private initEmailJS(): void {
    // Initialisation defensive: on evite d'initialiser EmailJS avec une cle vide/placeholder.
    if (this.PUBLIC_KEY && this.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(this.PUBLIC_KEY);
    }
  }

  async sendContactMessage(message: ContactMessage): Promise<{ success: boolean; message: string }> {
    // Si la configuration est absente, on renvoie un message explicite au lieu d'un echec silencieux.
    if (!this.PUBLIC_KEY || this.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      return {
        success: false,
        message: 'Le service d\'email n\'est pas configuré. Veuillez contacter l\'administrateur.',
      };
    }

    try {
      // Mapping des champs vers le template EmailJS configure cote tableau de bord.
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
          message: 'Votre message a bien été envoyé. Je vous répondrai très bientôt.',
        };
      }

      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Réessayez plus tard.',
      };
    } catch (error) {
      console.error('Email error:', error);
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Réessayez plus tard.',
      };
    }
  }
}
