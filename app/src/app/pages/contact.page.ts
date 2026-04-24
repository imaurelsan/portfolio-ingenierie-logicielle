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
        <h1>Entrer en contact</h1>
      </header>

      <div class="two-columns">
        <div class="contact-card contact-card--contact-info">
          <h2>Coordonnées principales</h2>
          <p>Je suis disponible pour un poste fullstack junior, et aussi pour des missions freelance bien définies.</p>

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
          </div>

          <div class="contact-socials">
            <p class="card-meta-title">Réseaux</p>
            <div class="contact-socials__list">
              <a class="contact-socials__item" href="https://github.com/imaurelsan" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.2-1.4-4.2-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1 0 1.8 1.1 1.8 1.1 1 .1.5 2.3 3.7 1.6.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.5 9c-.1-.3-.6-1.5.1-3 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6.1 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.7.1 3 .8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
                <span>GitHub</span>
              </a>

              <a class="contact-socials__item" href="https://www.linkedin.com/in/aurel-yahouedeou/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.96 1.96 0 1 0 5.2 6.9a1.96 1.96 0 0 0 1.96-1.96ZM20.44 13.4c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.86 1.1-3.36 1.86V8.5H9.42V20h3.36v-6.42c0-1.7.32-3.34 2.42-3.34 2.06 0 2.08 1.92 2.08 3.46V20h3.36v-6.6Z"/></svg>
                <span>LinkedIn</span>
              </a>

              <a class="contact-socials__item" href="https://www.instagram.com/imaurelsan/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.1A4.9 4.9 0 1 0 16.9 12 4.9 4.9 0 0 0 12 7.1Zm0 8.1a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2Zm6.2-8.3a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM22 7a7 7 0 0 0-1.9-4.9A7 7 0 0 0 15.2.2C13.3.1 10.7.1 8.8.2A7 7 0 0 0 3.9 2 7 7 0 0 0 2 7c-.1 1.9-.1 4.5 0 6.4a7 7 0 0 0 1.9 4.9 7 7 0 0 0 4.9 1.9c1.9.1 4.5.1 6.4 0a7 7 0 0 0 4.9-1.9 7 7 0 0 0 1.9-4.9c.1-1.9.1-4.5 0-6.4ZM20 14c0 1.7-.1 2.6-.4 3.4a4.9 4.9 0 0 1-2.8 2.8c-.8.3-1.7.4-3.4.4s-2.6-.1-3.4-.4a4.9 4.9 0 0 1-2.8-2.8c-.3-.8-.4-1.7-.4-3.4s.1-2.6.4-3.4a4.9 4.9 0 0 1 2.8-2.8c.8-.3 1.7-.4 3.4-.4s2.6.1 3.4.4a4.9 4.9 0 0 1 2.8 2.8c.3.8.4 1.7.4 3.4Z"/></svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-card">
          <h2>Formulaire rapide</h2>
          <p>Complétez ce formulaire et cliquez sur Envoyer. Je recevrai votre message directement et vous répondrai très bientôt.</p>
          <p class="intro-text intro-text--tight">Je vous réponds sous 24h maximum.</p>
          <form class="contact-form" (ngSubmit)="sendMessage()">
            <label>
              Nom
              <input type="text" name="name" placeholder="Votre nom complet" [(ngModel)]="name" required [disabled]="isSubmitting" />
            </label>
            <label>
              E-mail
              <input type="email" name="email" placeholder="votreadresse@email.com" [(ngModel)]="email" required [disabled]="isSubmitting" />
            </label>
            <label>
              Objet
              <input type="text" name="subject" placeholder="Ex. : candidature, mission freelance, échange" [(ngModel)]="subject" required [disabled]="isSubmitting" />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" placeholder="Présentez brièvement votre besoin, le contexte et votre délai." [(ngModel)]="message" required [disabled]="isSubmitting"></textarea>
            </label>

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
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </form>
        </div>
      </div>

      <div class="contact-actions contact-actions--band">
        <a class="btn btn--primary" href="https://canva.link/9fgszui3l3xedxs" target="_blank" rel="noopener">Télécharger mon CV</a>
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
