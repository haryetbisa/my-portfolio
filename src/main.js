import './style.css'

const projects = [
  {
    number: '01',
    category: 'graphic-design',
    title: 'Publication Materials',
    type: 'graphic-design',
    description: 'Created multiple publication materials for my school organization as Creative Member using Canva.',
    tags: ['Canva', 'PubMats', 'Graphics Design'],
    tone: 'graphic-design',
    image: '/gallery/School.png',
    imageAlt: 'pubmats',
  },
  {
    number: '02',
    category: 'graphic-design',
    title: 'Personal Edit',
    type: 'graphic-design',
    description: 'Designed a social media graphics for my section during sophomore years and upload it on Facebook using our block FB page.',
    tags: ['Canva', 'PubMats', 'Graphics Design'],
    tone: 'graphic-design',
    image: '/gallery/Section.png',
    imageAlt: 'Personal edit',
  },
  {
    number: '03',
    category: 'graphic-design',
    title: 'Paid Designs',
    type: 'graphic-design',
    description: 'Accept freelance editing from other such as digital poster.',
    tags: ['Canva', 'Freelance', 'Graphics Design'],
    tone: 'graphic-design',
    image: '/gallery/paid.png',
    imageAlt: 'posters',
  },
]

projects.push(
  {
    number: '04',
    category: 'school-projects',
    title: 'Capstone Project',
    type: 'Programming · Research · Prototypes',
    description: 'Built an application user interface using Pyside6, a Python GUI library for our thesis application called BasaMatika.',
    tags: ['VS Code', 'Pyside6', 'Python'],
    tone: 'school-project',
    image: '/gallery/Capstone.png',
    imageAlt: 'outdoor photography.',
  },
  {
    number: '06',
    category: 'photography',
    title: 'Outdoor Birthday Portraits',
    type: 'Photography / Outdoors',
    description: 'A DIY outdoor photography of my nephew for his first birthday. Used an android phone and edited and color graded using Adobe Lightroom.',
    tags: ['Photography', 'Android', 'Adobe Lightroom'],
    tone: 'photography',
    image: '/gallery/outdoor.png',
    imageAlt: 'outdoor photography.',
  },
  {
    number: '07',
    category: 'photography',
    title: 'Studio Inspired Portraits',
    type: 'Photography / First birthday',
    description: 'DIY birthday portraits using phone and color-graded using Adobe Lightroom.',
    tags: ['Photography', 'Adobe Lightroom'],
    tone: 'photography',
    image: '/gallery/studio.png',
    imageAlt: 'A collage of first-birthday portraits, balloons, decorations, and cake details.',
  },
  {
    number: '08',
    category: 'school-projects',
    title: 'Virtuality',
    type: 'Technopreneurship · Research · Prototypes',
    description: 'Designed a user interface of a website for our Technopreneurship Project',
    tags: ['Prototype', 'Wireframing', 'Canva'],
    tone: 'school-project',
    image: '/gallery/techno.png',
    imageAlt: 'virtuality.',
  },
)

const projectCards = projects.map((project, index) => `
  <article class="project-card reveal" data-category="${project.category}">
    <a class="project-art ${project.tone}${project.image ? ' has-image' : ''}" href="#contact" aria-label="Ask me about ${project.title}">
      <span class="art-index">${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span>
      ${project.image
        ? `<img class="project-image" src="${project.image}" alt="${project.imageAlt}" loading="lazy" />`
        : `<span class="art-shape" aria-hidden="true">${project.shape}</span>
          <span class="art-wordmark">${project.mark}</span>
          ${project.placeholder ? `<span class="gallery-placeholder">${project.placeholder}</span>` : ''}`}
      <span class="art-open" aria-hidden="true">↗</span>
    </a>
    <div class="project-info">
      <div>
        <p class="eyebrow">${project.type}</p>
        <h3>${project.title}</h3>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    </div>
  </article>
`).join('')

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Hariette Bisa, home">Hariette<span>·</span></a>
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
        <p class="eyebrow hero-kicker"><span class="status-dot"></span> OPEN FOR INTERNSHIP OPPORTUNITY</p>
        <h1>Exploring the<br />space where codes turn to <span class="serif-word">playful ideas.</span></h1>
        <p class="hero-intro">Hi, I’m <strong>Hariette Bisa</strong> — I build thoughtful websites and digital designs, turning big ideas into clear and useful solution.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#projects">Explore my work <span>↓</span></a>
          <a class="button button-outline" href="/Bisa,%20Hariette.pdf" download="Hariette-Bisa-Resume.pdf">Download my resume <span>↓</span></a>
        </div>
      </div>
      <div class="hero-visual-frame">
        <img class="hero-visual" src="/gallery/uniform_pic.jpg" alt="Portrait in a school uniform" />
      </div>
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
      <div class="project-grid">${projectCards}</div>
      <div class="projects-foot"><a class="text-link" href="#contact">Ask me what’s next <span>↗</span></a></div>
    </section>

    <section class="education section-space" id="education">
      <div class="section-wrap">
        <div class="section-label"><span>04</span><span>ALWAYS LEARNING SOMETHING</span></div>
        <div class="education-grid">
          <h2>Curiosity<br />got me <span class="serif-word">here.</span></h2>
          <div class="education-content">
            <article class="education-item"><span class="education-year">2023 — Present</span><div><h3>Bachelor of Science in Information Technology</h3><p>STI College Batangas</p><span class="education-detail">Relevant Courses: Computer Programming 1 & 2, Human-Computer Interaction, Web System and Technologies, Data Structures and Algorithms, Advanced Database Management</span></div><span class="education-mark">✳</span></article>
          </div>
        </div>
      </div>
    </section>

    <section class="certificates section-space" id="certificates">
      <div class="section-wrap">
        <div class="section-label"><span>05</span><span>COURSES, AWARDS & MILESTONES</span></div>
        <div class="certificates-heading"><h2>Learning, <span class="serif-word">recognized.</span></h2><p>A place for certificates, workshops, and achievements collected along the way.</p></div>
        <div class="certificate-gallery">
          <article class="certificate-card">
            <div class="certificate-frame">
              <img src="/certificate/Java.png" alt="Java certificate" loading="lazy" />
            </div>
            <div class="certificate-details">
              <h3>Java Fundamentals</h3>
              <p>Oracle Academy · Course certificate</p>
            </div>
          </article>
          <article class="certificate-card">
            <div class="certificate-frame">
              <img src="/certificate/TESDA.png" alt="TESDA certificate for Developing Designs for User Experience" loading="lazy" />
            </div>
            <div class="certificate-details">
              <h3>Developing Designs for User Experience (UX)</h3>
              <p>TESDA · Completion certificate</p>
            </div>
          </article>
            <article class="certificate-card">
            <div class="certificate-frame">
              <img src="/certificate/egov.png" alt="EGov Certificate" loading="lazy" />
            </div>
            <div class="certificate-details">
              <h3>eGOVPh Super App Orientation</h3>
              <p>DICT · Participation certificate</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="contact section-wrap section-space" id="contact">
      <div class="contact-card">
        <div class="contact-top"><span>HAVE A GOOD ONE IN MIND?</span><span class="contact-star">✳</span></div>
        <h2>Let’s make<br />something <span class="serif-word">matter.</span></h2>
        <div class="contact-bottom"><p>Have a project, a question, or a playlist to swap?<br />My inbox is always open.</p><a class="button button-light" href="mailto:hariettebisa@gmail.com">Say hello <span>↗</span></a></div>
      </div>
    </section>
  </main>

  <footer class="site-footer section-wrap"><a class="wordmark" href="#home">Hariette<span>·</span></a><span>HarietteBisa · © <span id="year"></span></span><a href="#home">Back to top ↑</a></footer>
`

const menuToggle = document.querySelector('.menu-toggle')
const siteNav = document.querySelector('.site-nav')
const galleryFilters = document.querySelectorAll('.gallery-filter')
const galleryCards = document.querySelectorAll('.project-card')

galleryFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const activeCategory = filter.dataset.filter

    galleryFilters.forEach((button) => {
      const isActive = button === filter
      button.classList.toggle('is-active', isActive)
      button.setAttribute('aria-pressed', String(isActive))
    })

    galleryCards.forEach((card) => {
      card.hidden = activeCategory !== 'all' && card.dataset.category !== activeCategory
    })
  })
})

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  siteNav.classList.toggle('is-open', !isOpen)
})

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    siteNav.classList.remove('is-open')
  })
})

document.querySelector('#year').textContent = new Date().getFullYear()

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal, .skill-item, .education-item').forEach((item) => revealObserver.observe(item))
