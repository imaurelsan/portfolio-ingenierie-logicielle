import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Contact</p>
        <h1>Échangeons sur une opportunité</h1>
      </header>

      <div class="contact-card">
        <p>Je suis disponible pour un poste fullstack junior et pour des missions freelance ciblées.</p>
        <ul>
          <li>Email : <a href="mailto:aurelduny@gmail.com">aurelduny@gmail.com</a></li>
          <li>Téléphone : <a href="tel:+33745303003">+33 7 45 30 30 03</a></li>
          <li>Site principal : <a href="https://yaurel.com" target="_blank" rel="noopener">yaurel.com</a></li>
          <li>GitHub : <a href="https://github.com/imaurelsan" target="_blank" rel="noopener">github.com/imaurelsan</a></li>
        </ul>
      </div>
    </section>
  `,
})
export class ContactPage {}
