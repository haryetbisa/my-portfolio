(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=[{number:"01",category:"graphic-design",title:"Publication Materials",type:"graphic-design",description:"Created multiple publication materials for my school organization as Creative Member using Canva.",tags:["Canva","PubMats","Graphics Design"],tone:"graphic-design",image:"/gallery/School.png",imageAlt:"pubmats"},{number:"02",category:"graphic-design",title:"Personal Edit",type:"graphic-design",description:"Designed a social media graphics for my section during sophomore years and upload it on Facebook using our block FB page.",tags:["Canva","PubMats","Graphics Design"],tone:"graphic-design",image:"/gallery/Section.png",imageAlt:"Personal edit"},{number:"03",category:"graphic-design",title:"Paid Designs",type:"graphic-design",description:"Accept freelance editing from other such as digital poster.",tags:["Canva","Freelance","Graphics Design"],tone:"graphic-design",image:"/gallery/paid.png",imageAlt:"posters"}];c.push({number:"04",category:"school-projects",title:"Capstone Project",type:"Programming · Research · Prototypes",description:"Built an application user interface using Pyside6, a Python GUI library for our thesis application called BasaMatika.",tags:["VS Code","Pyside6","Python"],tone:"school-project",image:"/gallery/Capstone.png",imageAlt:"outdoor photography."},{number:"06",category:"photography",title:"Outdoor Birthday Portraits",type:"Photography / Outdoors",description:"A DIY outdoor photography of my nephew for his first birthday. Used an android phone and edited and color graded using Adobe Lightroom.",tags:["Photography","Android","Adobe Lightroom"],tone:"photography",image:"/gallery/outdoor.png",imageAlt:"outdoor photography."},{number:"07",category:"photography",title:"Studio Inspired Portraits",type:"Photography / First birthday",description:"DIY birthday portraits using phone and color-graded using Adobe Lightroom.",tags:["Photography","Adobe Lightroom"],tone:"photography",image:"/gallery/studio.png",imageAlt:"A collage of first-birthday portraits, balloons, decorations, and cake details."},{number:"08",category:"school-projects",title:"Virtuality",type:"Technopreneurship · Research · Prototypes",description:"Designed a user interface of a website for our Technopreneurship Project",tags:["Prototype","Wireframing","Canva"],tone:"school-project",image:"/gallery/techno.png",imageAlt:"virtuality."});const g=c.map((a,s)=>`
  <article class="project-card reveal" data-category="${a.category}">
    <a class="project-art ${a.tone}${a.image?" has-image":""}" href="#contact" aria-label="Ask me about ${a.title}">
      <span class="art-index">${String(s+1).padStart(2,"0")} / ${String(c.length).padStart(2,"0")}</span>
      ${a.image?`<img class="project-image" src="${a.image}" alt="${a.imageAlt}" loading="lazy" />`:`<span class="art-shape" aria-hidden="true">${a.shape}</span>
          <span class="art-wordmark">${a.mark}</span>
          ${a.placeholder?`<span class="gallery-placeholder">${a.placeholder}</span>`:""}`}
      <span class="art-open" aria-hidden="true">↗</span>
    </a>
    <div class="project-info">
      <div>
        <p class="eyebrow">${a.type}</p>
        <h3>${a.title}</h3>
      </div>
      <p class="project-description">${a.description}</p>
      <div class="tag-list">${a.tags.map(i=>`<span>${i}</span>`).join("")}</div>
    </div>
  </article>
`).join("");document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Your Name, home">Hariette<span>·</span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#certificates">Certificates</a>
      <a class="nav-contact" href="#contact">Let’s talk <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero section-wrap" id="home">
      <div class="hero-copy">
        <p class="eyebrow hero-kicker"><span class="status-dot"></span> IT student and UI/UX Aspirant</p>
        <h1>Exploring the<br />space where codes turn to <span class="serif-word">playful ideas.</span></h1>
        <p class="hero-intro">Hi, I’m <strong>Hariette Bisa</strong> — I build thoughtful websites and digital designs, turning big ideas into clear and useful solution.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#projects">Explore my work <span>↓</span></a>
          <a class="button button-outline" href="/resume.pdf" download="Hariette-Bisa-Resume.pdf">Download my resume <span>↓</span></a>
        </div>
      </div>
      <img class="hero-visual" src="/pic_chibi.jpg" alt="A black-and-white chibi illustration portrait" />
      <a class="scroll-note" href="#about"><span class="scroll-line"></span> SCROLL TO EXPLORE</a>
    </section>

    <section class="about section-wrap section-space" id="about">
      <div class="section-label"><span>01</span><span>THE PERSON BEHIND THE PIXELS</span></div>
      <div class="about-grid">
        <h2>A good question<br />is where it <span class="serif-word">starts.</span></h2>
        <div class="about-copy">
          <p class="about-lede">I am an IT student who are on creative side of technology. </p>
          <p>I work across research, visual design, and front-end development to bring ideas to life. I believe the best work comes from staying curious, listening closely, and making room for a little improvement.</p>
          <p>I am familiar with different sides of information technology but focused on UI/UX design and still learning and improving in front-end development.</p>
          <a class="text-link" href="#contact">More about working together <span>↗</span></a>
        </div>
      </div>
      <div class="about-note"><span>Currently open to</span><strong>Good people & thoughtful projects</strong><span class="note-arrow">↗</span></div>
    </section>

    <section class="skills section-space" id="skills">
      <div class="section-wrap">
        <div class="section-label"><span>02</span><span>WHAT I BRING TO THE TABLE</span></div>
        <div class="skills-heading"><h2>Tools I <span class="serif-word">think</span> and <br /><span class="serif-word">build with.</span></h2><p>From first sketch to final handoff, I like being part of the whole journey.</p></div>
        <div class="skill-list">
          <article class="skill-item"><span class="skill-number">01</span><div><h3>Design & Prototyping</h3><p>Research, wireframes, prototyping, design systems</p></div><span class="skill-icon">↗</span></article>
          <article class="skill-item"><span class="skill-number">02</span><div><h3>Creative practice</h3><p>Graphic design, layout, photography</p></div><span class="skill-icon">✳</span></article>
          <article class="skill-item"><span class="skill-number">03</span><div><h3>Development</h3><p>HTML, CSS, JavaScript, Python, Java</p></div><span class="skill-icon">⌘</span></article>
        </div>
        <div class="tool-row"><span class="eyebrow">TOOLS I REACH FOR</span><div><span>Figma</span><span>Canva</span><span>Adobe Lightroom</span><span>Visual Studio Code</span><span>Git</span><span>Github</span></div></div>
      </div>
    </section>

    <section class="projects section-wrap section-space" id="projects">
      <div class="section-label"><span>03</span><span>A FEW RECENT FAVORITES</span></div>
      <div class="projects-heading"><h2>Selected <span class="serif-word">work.</span></h2><p>A gallery of graphic design, school projects, and photography.</p></div>
      <div class="gallery-filters" role="group" aria-label="Filter gallery by category">
        <button class="gallery-filter is-active" type="button" data-filter="all" aria-pressed="true">All work</button>
        <button class="gallery-filter" type="button" data-filter="graphic-design" aria-pressed="false">Graphic Design</button>
        <button class="gallery-filter" type="button" data-filter="school-projects" aria-pressed="false">School Projects</button>
        <button class="gallery-filter" type="button" data-filter="photography" aria-pressed="false">Photography</button>
      </div>
      <div class="project-grid">${g}</div>
      <div class="projects-foot"><a class="text-link" href="#contact">Ask me what’s next <span>↗</span></a></div>
    </section>

    <section class="education section-space" id="education">
      <div class="section-wrap">
        <div class="section-label"><span>04</span><span>ALWAYS LEARNING SOMETHING</span></div>
        <div class="education-grid">
          <h2>Curiosity<br />got me <span class="serif-word">here.</span></h2>
          <div class="education-content">
            <article class="education-item"><span class="education-year">2023 — Present</span><div><h3>Bachelor of Science in Information Technology</h3><p>STI College Batangas</p><span class="education-detail">Add a focus, favorite class, or achievement here.</span></div><span class="education-mark">✳</span></article>
          </div>
        </div>
      </div>
    </section>

    <section class="certificates section-space" id="certificates">
      <div class="section-wrap">
        <div class="section-label"><span>05</span><span>COURSES, AWARDS & MILESTONES</span></div>
        <div class="certificates-heading"><h2>Learning, <span class="serif-word">recognized.</span></h2><p>A place for certificates, workshops, and achievements collected along the way.</p></div>
        <div class="certificate-gallery">
          <article class="certificate-tile">
            <div class="certificate-preview">
              <img src="/certificate/Java.png" alt="Java certificate" loading="lazy" />
            </div>
            <div class="certificate-details">
              <span class="eyebrow">ORACLE ACADEMY</span>
              <h3>Java Fundamentals</h3>
              <p>Course certificate</p>
            </div>
          </article>
          <article class="certificate-tile">
            <div class="certificate-preview">
              <img src="/certificate/Java.png" alt="Java certificate" loading="lazy" />
            </div>
            <div class="certificate-details">
              <span class="eyebrow">ORACLE ACADEMY</span>
              <h3>Java Fundamentals</h3>
              <p>Course certificate</p>
            </div>
          </article>
          <article class="certificate-tile">
            <div class="certificate-preview">
              <img src="/certificate/Java.png" alt="Java certificate" loading="lazy" />
            </div>
            <div class="certificate-details">
              <span class="eyebrow">ORACLE ACADEMY</span>
              <h3>Java Fundamentals</h3>
              <p>Course certificate</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="contact section-wrap section-space" id="contact">
      <div class="contact-card">
        <div class="contact-top"><span>HAVE A GOOD ONE IN MIND?</span><span class="contact-star">✳</span></div>
        <h2>Let’s make<br />something <span class="serif-word">matter.</span></h2>
        <div class="contact-bottom"><p>Have a project, a question, or a playlist to swap?<br />My inbox is always open.</p><a class="button button-light" href="mailto:hello@example.com">Say hello <span>↗</span></a></div>
      </div>
    </section>
  </main>

  <footer class="site-footer section-wrap"><a class="wordmark" href="#home">Hariette<span>·</span></a><span>HarietteBisa · © <span id="year"></span></span><a href="#home">Back to top ↑</a></footer>
`;const o=document.querySelector(".menu-toggle"),l=document.querySelector(".site-nav"),p=document.querySelectorAll(".gallery-filter"),h=document.querySelectorAll(".project-card");p.forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.filter;p.forEach(i=>{const r=i===a;i.classList.toggle("is-active",r),i.setAttribute("aria-pressed",String(r))}),h.forEach(i=>{i.hidden=s!=="all"&&i.dataset.category!==s})})});o.addEventListener("click",()=>{const a=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!a)),o.setAttribute("aria-label",a?"Open navigation":"Close navigation"),l.classList.toggle("is-open",!a)});l.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Open navigation"),l.classList.remove("is-open")})});document.querySelector("#year").textContent=new Date().getFullYear();const d=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),d.unobserve(s.target))})},{threshold:.12});document.querySelectorAll(".reveal, .skill-item, .education-item").forEach(a=>d.observe(a));
