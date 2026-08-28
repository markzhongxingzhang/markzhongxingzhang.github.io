---
permalink: /
title: ""
excerpt: "Zhongxing Zhang — Computer Science Ph.D. candidate at the University of Minnesota, working on multimodal learning, large language models, and misinformation detection."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="af-hero" id="about">
  <div class="af-hero__glow" aria-hidden="true"></div>
  <div class="af-hero__grid">

    <div class="af-hero__main">
      <p class="af-eyebrow">Ph.D. Candidate in Computer Science</p>
      <h1 class="af-name">Zhongxing Zhang</h1>
      <p class="af-affil">
        <strong>University of Minnesota, Twin Cities</strong> &middot; Department of Computer Science &amp; Engineering<br>
        Advised by <a href="https://cse.umn.edu/cs/jaideep-srivastava">Prof. Jaideep Srivastava</a>
      </p>

      <div class="af-chips">
        <span class="af-chip">Multimodal Learning</span>
        <span class="af-chip">Large Language Models</span>
        <span class="af-chip">Misinformation Detection</span>
        <span class="af-chip">Computational Social Science</span>
      </div>

      <div class="af-bio">
        <p>
          I build systems that reason jointly over text, images, and external knowledge to detect
          fake news and assess the credibility of information online. My work sits at the
          intersection of <strong>multimodal learning</strong>, <strong>large language models</strong>,
          and <strong>computational social science</strong>.
        </p>
        <p>
          Before Minnesota I received my M.Eng. and B.Eng. from Shandong University of Finance and
          Economics, where I worked with Prof. Hui Liu on low-level computer vision — image
          super-resolution and restoration with low-rank priors.
        </p>
      </div>

      <div class="af-actions">
        <a class="af-btn af-btn--primary" href="mailto:zhan8889@umn.edu"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
        <a class="af-btn" href="https://scholar.google.com/citations?user=Wh6O-NgAAAAJ&amp;hl=en" target="_blank" rel="noopener"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>
        <a class="af-btn" href="https://github.com/cvzh" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
        <a class="af-btn" href="https://linkedin.com/in/zhongxing-zhang-1956a02a5" target="_blank" rel="noopener"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
        <a class="af-btn" href="https://www.researchgate.net/profile/Zhongxing-Zhang-8" target="_blank" rel="noopener"><i class="ai ai-researchgate" aria-hidden="true"></i> ResearchGate</a>
      </div>
    </div>

    <aside class="af-hero__side">
      <div class="af-photo">
        <img src="/images/Zhongxing.png" alt="Portrait of Zhongxing Zhang" width="200" height="200">
      </div>
      <ul class="af-meta">
        <li><i class="fas fa-building-columns" aria-hidden="true"></i><span>Computer Science &amp; Engineering, UMN</span></li>
        <li><i class="fas fa-location-dot" aria-hidden="true"></i><span>Minneapolis, MN 55455</span></li>
        <li><i class="fas fa-envelope" aria-hidden="true"></i><a href="mailto:zhan8889@umn.edu">zhan8889@umn.edu</a></li>
      </ul>
    </aside>

  </div>
</div>

<section class="af-section af-reveal" id="news">
  <div class="af-section__head">
    <h2 class="af-section__title">News</h2>
  </div>
  <ul class="af-news">
    {% for item in site.data.news %}
    <li>
      <span class="af-news__date">{{ item.date }}</span>
      <span class="af-news__text">{{ item.text }}</span>
    </li>
    {% endfor %}
  </ul>
</section>

<section class="af-section af-reveal" id="research">
  <div class="af-section__head">
    <h2 class="af-section__title">Research</h2>
  </div>
  <div class="af-cards">

    <div class="af-card">
      <span class="af-card__icon"><i class="fas fa-photo-film" aria-hidden="true"></i></span>
      <h3 class="af-card__title">Multimodal Misinformation Detection</h3>
      <p class="af-card__text">Models that reason jointly over text and images to identify fake news, with applications to social media and cross-lingual settings.</p>
    </div>

    <div class="af-card">
      <span class="af-card__icon"><i class="fas fa-brain" aria-hidden="true"></i></span>
      <h3 class="af-card__title">Vision-Language Models</h3>
      <p class="af-card__text">Using large pretrained models — CLIP, LLaVA, Qwen-VL — as reasoning engines for credibility assessment.</p>
    </div>

    <div class="af-card">
      <span class="af-card__icon"><i class="fas fa-magnifying-glass" aria-hidden="true"></i></span>
      <h3 class="af-card__title">Retrieval-Augmented Generation</h3>
      <p class="af-card__text">Grounding predictions in external knowledge to improve factual accuracy and make model decisions interpretable.</p>
    </div>

    <div class="af-card">
      <span class="af-card__icon"><i class="fas fa-diagram-project" aria-hidden="true"></i></span>
      <h3 class="af-card__title">Computational Social Science</h3>
      <p class="af-card__text">Analyzing social behavior, network dynamics, and information propagation to understand online misinformation ecosystems.</p>
    </div>

    <div class="af-card">
      <span class="af-card__icon"><i class="fas fa-wand-magic-sparkles" aria-hidden="true"></i></span>
      <h3 class="af-card__title">Low-Level Vision <span class="af-badge">Prior work</span></h3>
      <p class="af-card__text">Image super-resolution and restoration via low-rank priors and probabilistic nuclear norm minimization.</p>
    </div>

  </div>
</section>

<section class="af-section af-reveal" id="publications">
  <div class="af-section__head">
    <h2 class="af-section__title">Publications</h2>
    <span class="af-section__note">* Selected</span>
  </div>
  <div class="af-pubs">
    {% for pub in site.data.publications %}
    <article class="af-pub">
      <div class="af-pub__year">{{ pub.year }}</div>
      <div class="af-pub__body">
        <h3 class="af-pub__title">{{ pub.title }}</h3>
        <p class="af-pub__authors">{{ pub.authors | replace: "Zhongxing Zhang", '<span class="af-me">Zhongxing Zhang</span>' }}</p>
        <p class="af-pub__venue">
          {{ pub.venue }}
          {% if pub.badges %}
          <span class="af-badges">
            {% for b in pub.badges %}<span class="af-badge{% if b.style == 'accent' %} af-badge--accent{% elsif b.style == 'warm' %} af-badge--warm{% endif %}">{{ b.text }}</span>{% endfor %}
          </span>
          {% endif %}
        </p>
        {% if pub.links %}
        <div class="af-links">
          {% for l in pub.links %}<a class="af-link" href="{{ l.url }}" target="_blank" rel="noopener"><i class="{{ l.icon }}" aria-hidden="true"></i>{{ l.name }}</a>{% endfor %}
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="af-section af-reveal" id="experience">
  <div class="af-section__head">
    <h2 class="af-section__title">Experience</h2>
  </div>
  <ul class="af-timeline">

    <li>
      <p class="af-role">Applied Scientist Intern &middot; <span class="af-org">Adobe</span></p>
      <span class="af-period">May 2026 &ndash; August 2026</span>
    </li>

    <li>
      <p class="af-role">Graduate Research Assistant &middot; <span class="af-org">University of Minnesota</span></p>
      <span class="af-period">2023 &ndash; Present</span>
      <ul>
        <li>Designing multimodal fake news detection architectures that combine VLMs, knowledge graphs, and cross-modal attention.</li>
        <li>Developing retrieval-augmented pipelines that ground LLM-based misinformation classifiers in external knowledge.</li>
        <li>Investigating dual-head reasoning with geometry-aware adapters for improved credibility inference (BiMind).</li>
      </ul>
    </li>

    <li>
      <p class="af-role">Volunteer Teacher &middot; <span class="af-org">China Western Volunteer Program</span></p>
      <ul>
        <li>Taught chemistry, English, mathematics, and computer science in underserved communities.</li>
        <li>Organized environmental protection campaigns and community outreach activities.</li>
      </ul>
    </li>

  </ul>
</section>

<section class="af-section af-reveal" id="education">
  <div class="af-section__head">
    <h2 class="af-section__title">Education</h2>
  </div>
  <ul class="af-timeline">
    <li>
      <p class="af-role">Ph.D. in Computer Science &middot; <span class="af-org">University of Minnesota, Twin Cities</span></p>
      <span class="af-period">Expected 2027</span>
    </li>
    <li>
      <p class="af-role">M.Eng. in Digital Media Technology &middot; <span class="af-org">Shandong University of Finance and Economics</span></p>
      <span class="af-period">2023</span>
    </li>
    <li>
      <p class="af-role">B.Eng. in Computer Science and Technology &middot; <span class="af-org">Shandong University of Finance and Economics</span></p>
      <span class="af-period">2018</span>
    </li>
  </ul>
</section>

<section class="af-section af-reveal" id="skills">
  <div class="af-section__head">
    <h2 class="af-section__title">Technical Skills</h2>
  </div>
  <div class="af-skills">

    <div class="af-skills__group">
      <h4>Languages</h4>
      <div class="af-tags">
        <span class="af-tag">Python</span><span class="af-tag">MATLAB</span><span class="af-tag">C/C++</span><span class="af-tag">Java</span><span class="af-tag">SQL</span><span class="af-tag">JavaScript</span><span class="af-tag">HTML/CSS</span>
      </div>
    </div>

    <div class="af-skills__group">
      <h4>ML &amp; Deep Learning</h4>
      <div class="af-tags">
        <span class="af-tag">PyTorch</span><span class="af-tag">HuggingFace Transformers</span><span class="af-tag">PEFT / LoRA</span><span class="af-tag">Scikit-learn</span>
      </div>
    </div>

    <div class="af-skills__group">
      <h4>Multimodal &amp; LLM Tooling</h4>
      <div class="af-tags">
        <span class="af-tag">CLIP</span><span class="af-tag">LLaVA</span><span class="af-tag">Qwen-VL</span><span class="af-tag">BLIP-2</span><span class="af-tag">vLLM</span><span class="af-tag">LangChain</span>
      </div>
    </div>

    <div class="af-skills__group">
      <h4>Data &amp; Visualization</h4>
      <div class="af-tags">
        <span class="af-tag">Pandas</span><span class="af-tag">NumPy</span><span class="af-tag">Matplotlib</span><span class="af-tag">Seaborn</span><span class="af-tag">Weights &amp; Biases</span>
      </div>
    </div>

    <div class="af-skills__group">
      <h4>Infrastructure</h4>
      <div class="af-tags">
        <span class="af-tag">Git</span><span class="af-tag">Docker</span><span class="af-tag">SLURM (HPC)</span><span class="af-tag">Linux</span><span class="af-tag">VS Code</span>
      </div>
    </div>

  </div>
</section>

<section class="af-section af-reveal" id="awards">
  <div class="af-section__head">
    <h2 class="af-section__title">Honors &amp; Awards</h2>
  </div>
  <div class="af-awards">
    <div class="af-award"><i class="fas fa-award" aria-hidden="true"></i><span>National Scholarship for Graduate Students</span></div>
    <div class="af-award"><i class="fas fa-award" aria-hidden="true"></i><span>Postgraduate Research Scholarship</span></div>
    <div class="af-award"><i class="fas fa-award" aria-hidden="true"></i><span>President&rsquo;s Scholarship</span></div>
    <div class="af-award"><i class="fas fa-hand-holding-heart" aria-hidden="true"></i><span>Excellent Volunteer &mdash; China Western Volunteer Program</span></div>
  </div>
</section>
