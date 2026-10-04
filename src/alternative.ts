export {};
(() => {
    'use strict';
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const required = <T extends Element = HTMLElement>(selector: string): T => {
      const node = document.querySelector<T>(selector);
      if (!node) throw new Error(`Missing page element: ${selector}`);
      return node;
    };
    const hero = required('.hero');
    const motionButton = required<HTMLButtonElement>('#motionToggle');
    let backgroundPaused = motion.matches;
    function updateBackground() {
      hero.classList.toggle('motion-paused', backgroundPaused);
      motionButton.textContent = motion.matches ? 'Reduced motion on' : backgroundPaused ? 'Resume background' : 'Pause background';
      motionButton.setAttribute('aria-pressed', String(backgroundPaused));
      motionButton.disabled = motion.matches;
    }
    motionButton.addEventListener('click', () => { backgroundPaused = !backgroundPaused; updateBackground(); });
    updateBackground();

    const menu = required<HTMLDialogElement>('#menuDialog');
    const teamLink = document.createElement('a');
    teamLink.href = '#team'; teamLink.textContent = 'The people behind it';
    menu.querySelector('a[href="#contact"]')!.before(teamLink);
    function openDialog(dialog: HTMLDialogElement) { dialog.showModal(); document.body.classList.add('modal-open'); }
    required('#menuOpen').addEventListener('click', () => openDialog(menu));
    document.querySelectorAll<HTMLButtonElement>('[data-close]').forEach(button => button.addEventListener('click', () => required<HTMLDialogElement>('#' + button.dataset.close).close()));
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.close()));
    [menu].forEach(dialog => {
      dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); });
      dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
    });

    // Entrance animations only begin when their content comes into view.
    // Default content stays visible if JavaScript or motion APIs are unavailable.
    const entrances = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    function animate(node: Element, frames: Keyframe[], delay = 0, duration = 850) {
      const animation = node.animate(frames, { duration, delay, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards' });
      entrances.add(animation);
      animation.finished.then(() => entrances.delete(animation)).catch(() => entrances.delete(animation));
    }
    function enableScrollMotion() {
      if (motion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target;
          observer!.unobserve(node);
          if (node.classList.contains('project-art')) {
            animate(node, [{opacity:0,transform:'translateY(55px) scale(.96)'},{opacity:1,transform:'translateY(0) scale(1)'}],0,1050);
            const sheet = node.querySelector('.sheet');
            if (sheet) {
              animate(sheet,[{transform:'rotate(-16deg) translateY(24px)'},{transform:'rotate(-9deg) translateY(0)'}],100,900);
              const scan = document.createElement('i'); scan.className = 'scan-line'; scan.setAttribute('aria-hidden','true'); sheet.append(scan);
              animate(scan,[{opacity:0,transform:'translateY(0)'},{opacity:1,transform:'translateY(0)',offset:.15},{opacity:1,transform:'translateY(85px)',offset:.85},{opacity:0,transform:'translateY(85px)'}],350,950);
            }
            node.querySelectorAll('.output-stack span').forEach((item,i) => {
              const end = getComputedStyle(item).transform;
              animate(item,[{opacity:0,transform:'translateX(-35px) rotate(-5deg)'},{opacity:1,transform:end}],1000+i*180);
            });
            node.querySelectorAll('.sales-bar').forEach((bar,i) => animate(bar,[{transform:'scaleY(.05)'},{transform:'scaleY(1)'}],180+i*150,1100));
            node.querySelectorAll('.sales-bar b').forEach((label,i) => animate(label,[{opacity:0},{opacity:1}],1000+i*150,450));
            node.querySelectorAll('.rating-pair > div').forEach((item,i) => animate(item,[{opacity:0,transform:`translateX(${i ? '-35' : '35'}px)`},{opacity:1,transform:'translateX(0)'}],200+i*100,1000));
            const rule = node.querySelector('.rating-rule');
            if (rule) animate(rule,[{transform:'rotate(0deg) scaleY(0)'},{transform:'rotate(20deg) scaleY(1)'}],350,850);
            node.querySelectorAll('.review-topics span').forEach((item,i) => animate(item,[{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],950+i*130,650));
          } else {
            animate(node,[{opacity:0,transform:'translateY(35px)'},{opacity:1,transform:'translateY(0)'}]);
          }
        }
      }, {threshold:.12});
      document.querySelectorAll('.intro h2,.intro-copy,.section-title,.project-art,.project-caption,.services-header,.service-row,.team-heading,.person,.closing').forEach(node => observer!.observe(node));
    }
    enableScrollMotion();
    motion.addEventListener('change', () => {
      backgroundPaused = motion.matches; updateBackground();
      observer?.disconnect();
      entrances.forEach(animation => animation.cancel()); entrances.clear();
      if (!motion.matches) enableScrollMotion();
    });
    required('#year').textContent = String(new Date().getFullYear());
  })();
