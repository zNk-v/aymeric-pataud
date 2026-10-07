/* ===== Consentement cookies (RGPD/CNIL) + Google Analytics 4 =====
   Chargé sur toutes les pages. Aucun cookie Google n'est déposé tant que le
   visiteur n'a pas cliqué « Accepter ». Le choix est redemandé au bout de
   13 mois (accord) ou 6 mois (refus), comme le recommande la CNIL.

   Événements envoyés à GA4 (après accord uniquement) :
   - clic_appel      : clic sur un lien tel:
   - clic_email      : clic sur un lien mailto:
   - generate_lead   : envoi réussi du formulaire de contact (appelé depuis src/components/ContactForm.tsx)
   Marqués comme « événements clés » dans GA4 > Administration > Événements clés. */
(function(){
  var GA_ID = 'G-M20LVKEBMC';
  var KEY = 'cookieConsent';
  var MOIS = 30 * 24 * 3600 * 1000;
  var loaded = false;

  function lireChoix(){
    try{
      var v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if(!v || !v.choix || !v.date) return null;
      var duree = v.choix === 'accept' ? 13 * MOIS : 6 * MOIS;
      return (Date.now() - v.date) < duree ? v.choix : null;
    }catch(e){ return null; }
  }
  function ecrireChoix(choix){
    try{ localStorage.setItem(KEY, JSON.stringify({choix: choix, date: Date.now()})); }catch(e){}
  }

  function chargerGA(){
    if(loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function supprimerCookiesGA(){
    document.cookie.split(';').forEach(function(c){
      var nom = c.split('=')[0].trim();
      if(nom.indexOf('_ga') === 0){
        var d = '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = nom + d;
        document.cookie = nom + d + '; domain=.' + location.hostname.replace(/^www\./, '');
      }
    });
  }

  // Suivi : n'envoie rien tant que GA n'est pas chargé (donc sans accord).
  window.apTrack = function(action, params){
    if(loaded && typeof window.gtag === 'function'){
      gtag('event', action, Object.assign({page_path: location.pathname}, params || {}));
    }
  };

  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href]');
    if(!a) return;
    var href = a.getAttribute('href');
    if(href.indexOf('tel:') === 0) window.apTrack('clic_appel', {emplacement: a.className || 'lien'});
    else if(href.indexOf('mailto:') === 0) window.apTrack('clic_email', {emplacement: a.className || 'lien'});
  });

  // ----- Bandeau -----
  var css =
    '.ap-ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:1000;background:#fff;border:1px solid #e6e0d4;border-radius:14px;box-shadow:0 18px 50px rgba(30,40,30,.18);padding:18px 20px;display:none;gap:18px;align-items:center;justify-content:space-between;flex-wrap:wrap;max-width:780px;margin:0 auto;font-family:inherit}' +
    '.ap-ck.show{display:flex}' +
    '.ap-ck strong{font-family:inherit;color:#2f4a3a;font-size:1rem;display:block;margin-bottom:4px}' +
    '.ap-ck p{font-size:.9rem;line-height:1.5;color:#5b5a55;max-width:540px;margin:0}' +
    '.ap-ck a{color:#2f4a3a;text-decoration:underline}' +
    '.ap-ck-btns{display:flex;gap:10px;flex:none}' +
    '.ap-ck button{font-family:inherit;font-weight:700;font-size:.95rem;padding:12px 22px;border-radius:14px;cursor:pointer;min-height:46px;border:2px solid #2f4a3a}' +
    '.ap-ck .ck-refuse{background:#fff;color:#2f4a3a}' +
    '.ap-ck .ck-accept{background:#2f4a3a;color:#fff}' +
    '@media(max-width:600px){.ap-ck{left:8px;right:8px;bottom:8px;padding:16px}.ap-ck-btns{width:100%}.ap-ck button{flex:1}}';

  var box;
  function construireBandeau(){
    if(box) return box;
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    box = document.createElement('div');
    box.className = 'ap-ck';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-label', 'Gestion des cookies');
    box.innerHTML =
      '<div><strong>Cookies de mesure d\'audience</strong>' +
      '<p>Avec votre accord, nous utilisons Google Analytics pour compter les visites et savoir quelles pages amènent des demandes de contact. Aucun cookie n\'est déposé si vous refusez. <a href="/politique-de-confidentialite/">En savoir plus</a></p></div>' +
      '<div class="ap-ck-btns"><button type="button" class="ck-refuse">Refuser</button><button type="button" class="ck-accept">Accepter</button></div>';
    document.body.appendChild(box);
    box.querySelector('.ck-accept').onclick = function(){
      ecrireChoix('accept'); box.classList.remove('show'); chargerGA();
    };
    box.querySelector('.ck-refuse').onclick = function(){
      ecrireChoix('refuse'); box.classList.remove('show');
      if(loaded){ supprimerCookiesGA(); location.reload(); }
    };
    return box;
  }

  // Rouvre le bandeau : window.apCookies() ou tout lien vers #gerer-cookies.
  window.apCookies = function(){ construireBandeau().classList.add('show'); };
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href$="#gerer-cookies"]');
    if(!a) return;
    e.preventDefault();
    window.apCookies();
  });

  function init(){
    var choix = lireChoix();
    if(choix === 'accept'){ chargerGA(); return; }
    if(choix === 'refuse') return;
    construireBandeau().classList.add('show');
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
