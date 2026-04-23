import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Contact</p>
        <h1>Échangeons sur une opportunité</h1>
      </header>

      <div class="two-columns">
        <div class="contact-card">
          <p>Je suis disponible pour un poste fullstack junior et pour des missions freelance ciblées.</p>
          <ul>
            <li>Email : <a href="mailto:aurelandyou@gmail.com">aurelandyou@gmail.com</a></li>
            <li>Téléphone : <a href="tel:+33745303603">+33 7 45 30 36 03</a></li>
            <li>Site principal : <a href="https://yaurel.com" target="_blank" rel="noopener">yaurel.com</a></li>
            <li>GitHub : <a href="https://github.com/imaurelsan" target="_blank" rel="noopener">github.com/imaurelsan</a></li>
            <li>LinkedIn : <a href="https://www.linkedin.com/in/aurel-yahouedeou/" target="_blank" rel="noopener">linkedin.com/in/aurel-yahouedeou</a></li>
            <li>Instagram : <a href="https://www.instagram.com/imaurelsan/" target="_blank" rel="noopener">instagram.com/imaurelsan</a></li>
          </ul>

          <div class="contact-actions">
            <a class="btn btn--primary" href="https://canva.link/9fgszui3l3xedxs" target="_blank" rel="noopener">Télécharger mon CV</a>
          </div>
        </div>

        <div class="contact-card">
          <h2>Formulaire rapide</h2>
          <p>Ce formulaire ouvre votre client e-mail avec un message prérempli.</p>
          <form class="contact-form" (ngSubmit)="openMailDraft()">
            <label>
              Nom
              <input type="text" name="name" [(ngModel)]="name" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" [(ngModel)]="email" required />
            </label>
            <label>
              Objet
              <input type="text" name="subject" [(ngModel)]="subject" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" [(ngModel)]="message" required></textarea>
            </label>
            <button class="btn btn--primary" type="submit">Préparer l'e-mail</button>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactPage {
  protected name = '';
  protected email = '';
  protected subject = 'Contact via portfolio';
  protected message = '';

  protected openMailDraft(): void {
    const mailTo = 'aurelandyou@gmail.com';
    const safeSubject = encodeURIComponent(this.subject.trim() || 'Contact via portfolio');
    const body = [
      `Nom : ${this.name.trim()}`,
      `E-mail : ${this.email.trim()}`,
      '',
      this.message.trim(),
    ].join('\n');

    window.location.href = `mailto:${mailTo}?subject=${safeSubject}&body=${encodeURIComponent(body)}`;
  }
}
