import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Contact</p>
        <h1>Entrons en relation</h1>
      </header>

      <div class="two-columns">
        <div class="contact-card contact-card--contact-info">
          <h2>Coordonnées principales</h2>

          <div class="contact-links">
            <a class="contact-link" href="mailto:aurelandyou@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.1L20 7H4l8 5.1Zm0 2L4 9v8h16V9l-8 5.1Z"/></svg>
              <span>
                <strong>E-mail</strong>
                <small>aurelandyou@gmail.com</small>
              </span>
            </a>

            <a class="contact-link" href="tel:+33745303603">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1 .33 2 .5 3.1.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.05.17 2.1.5 3.1a1 1 0 0 1-.24 1l-2.26 2.2Z"/></svg>
              <span>
                <strong>Téléphone</strong>
                <small>+33 7 45 30 36 03</small>
              </span>
            </a>

            <a class="contact-link" href="https://yaurel.com" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.9 9h-3.1a15.3 15.3 0 0 0-1.3-5A8 8 0 0 1 18.9 11ZM12 4.1c.9 1.1 1.8 3 2.2 6H9.8c.4-3 1.3-4.9 2.2-6ZM4.2 13h3.1c.1 1.9.5 3.7 1.3 5a8 8 0 0 1-4.4-5Zm3.1-2H4.2a8 8 0 0 1 4.4-5c-.8 1.3-1.2 3.1-1.3 5Zm1.9 0c.1-1.8.5-3.5 1-5h3.6c.5 1.5.9 3.2 1 5H9.2Zm0 2h5.6c-.1 1.8-.5 3.5-1 5h-3.6c-.5-1.5-.9-3.2-1-5Zm2.8 6.9c-.9-1.1-1.8-3-2.2-6h4.4c-.4 3-1.3 4.9-2.2 6Zm2.5-1.9c.8-1.3 1.2-3.1 1.3-5h3.1a8 8 0 0 1-4.4 5Z"/></svg>
              <span>
                <strong>Site principal</strong>
                <small>yaurel.com</small>
              </span>
            </a>

            <div class="contact-link" aria-label="Localisation">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
              <span>
                <strong>Localisation</strong>
                <small>Rueil-Malmaison / Remote</small>
              </span>
            </div>
          </div>

        </div>

        <div class="contact-card">
          <h2>Formulaire rapide</h2>
          <p class="intro-text intro-text--tight">Je vous répondrai sous 24 h maximum.</p>
          <form class="contact-form" (ngSubmit)="sendMessage()">
            <div class="field-float">
              <input type="text" id="f-name" name="name" placeholder=" " [(ngModel)]="name" required [disabled]="isSubmitting" />
              <label for="f-name">Nom</label>
            </div>
            <div class="field-float">
              <input type="email" id="f-email" name="email" placeholder=" " [(ngModel)]="email" required [disabled]="isSubmitting" />
              <label for="f-email">E-mail</label>
            </div>
            <div class="field-float">
              <input type="text" id="f-subject" name="subject" placeholder=" " [(ngModel)]="subject" required [disabled]="isSubmitting" />
              <label for="f-subject">Objet</label>
            </div>
            <div class="field-float field-float--textarea">
              <textarea id="f-message" name="message" rows="6" placeholder=" " [(ngModel)]="message" required [disabled]="isSubmitting"></textarea>
              <label for="f-message">Message</label>
            </div>

            @if (statusMessage) {
              <div class="form-status" [class.form-status--success]="isSuccess" [class.form-status--error]="!isSuccess">
                {{ statusMessage }}
              </div>
            }

            <button 
              class="btn btn--primary" 
              type="submit" 
              [disabled]="isSubmitting || !isFormValid()"
              [class.btn--loading]="isSubmitting"
            >
              {{ isSubmitting ? 'Envoi en cours…' : 'Envoyer le message' }}
            </button>
          </form>
        </div>
      </div>

      <div class="contact-actions contact-actions--band">
        <a class="btn btn--ghost" href="https://canva.link/9fgszui3l3xedxs" target="_blank" rel="noopener">Voir mon CV</a>
        <a class="btn btn--ghost" href="https://yaurel.com/wp-content/uploads/2026/04/Art-Portfolio-Aurel-Yahouedeou.pdf" target="_blank" rel="noopener">Voir mon portfolio artiste</a>
        <a class="btn btn--ghost" href="https://yaurel.com/wp-content/uploads/2026/04/Design-Portfolio-Aurel-Yahouedeou.pdf" target="_blank" rel="noopener">Voir mon portfolio designer</a>
      </div>
    </section>
  `,
})
export class ContactPage {
  private readonly emailService = inject(EmailService);

  protected name = '';
  protected email = '';
  protected subject = 'Prise de contact via votre portfolio';
  protected message = '';
  protected isSubmitting = false;
  protected statusMessage = '';
  protected isSuccess = false;

  protected async sendMessage(): Promise<void> {
    if (!this.isFormValid()) return;

    this.isSubmitting = true;
    this.statusMessage = '';

    try {
      const result = await this.emailService.sendContactMessage({
        name: this.name.trim(),
        email: this.email.trim(),
        subject: this.subject.trim(),
        message: this.message.trim(),
      });

      this.isSuccess = result.success;
      this.statusMessage = result.message;

      if (result.success) {
        this.resetForm();
        setTimeout(() => {
          this.statusMessage = '';
        }, 5000);
      }
    } catch (error) {
      this.isSuccess = false;
      this.statusMessage = 'Une erreur est survenue. Réessayez plus tard.';
    } finally {
      this.isSubmitting = false;
    }
  }

  protected isFormValid(): boolean {
    return (
      this.name.trim().length > 0 &&
      this.email.trim().length > 0 &&
      this.subject.trim().length > 0 &&
      this.message.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())
    );
  }

  private resetForm(): void {
    this.name = '';
    this.email = '';
    this.subject = 'Prise de contact via votre portfolio';
    this.message = '';
  }
}
