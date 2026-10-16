export function OriginalContact() {
  return (
<section className="cta" id="contact">
  <div className="wrap contact-grid">
    <div className="contact-copy">
      <h2>Bring us a problem</h2>
      <p>Tell us what you’re trying to do, which files you work with and where the process gets stuck. We’ll help you work out the next step.</p>
      <p className="contact-alt">Prefer email? <a href="mailto:blueberetgroup@gmail.com">blueberetgroup@gmail.com</a></p>
    </div>
    <form className="contact-form" id="contactForm" noValidate>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="field">
        <label htmlFor="cf-org">Organisation <span className="optional">(optional)</span></label>
        <input id="cf-org" name="organisation" type="text" autoComplete="organization" maxLength={150} />
      </div>
      <div className="field">
        <label htmlFor="cf-type">Type of organisation <span className="optional">(optional)</span></label>
        <select id="cf-type" name="orgType" defaultValue="">
          <option value="">Choose one</option>
          <option>Small business</option>
          <option>Charity or NGO</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-message">What are you trying to do, and where does it get stuck?</label>
        <textarea id="cf-message" name="message" rows={5} required minLength={20} maxLength={3000} />
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-tools">Which files or tools do you work with? <span className="optional">(optional)</span></label>
        <input id="cf-tools" name="tools" type="text" maxLength={500} placeholder="e.g. Excel workbooks, Xero exports, Google Sheets" />
      </div>
      {/* Hidden from people; bots that fill it in are quietly ignored. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field-wide form-foot">
        <button className="btn btn-solid" type="submit">Send message</button>
        <p className="form-note">We’ll only use these details to reply to you. Please don’t include passwords, bank details or other sensitive information.</p>
      </div>
      <p className="form-status field-wide" id="contactStatus" role="status" aria-live="polite" />
    </form>
  </div>
</section>

  );
}
