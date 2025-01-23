// ----------------- Skills Section ----------------- //
const techStack = [
  { src: "./src/png/htmllogo.png", alt: "Html skill", tooltip: "HTML" },
  { src: "./src/png/csslogo.png", alt: "CSS skill", tooltip: "CSS" },
  { src: "./src/png/mui.png", alt: "MUI skill", tooltip: "MUI" },
  { src: "./src/png/jslogo.png", alt: "JS skill", tooltip: "JAVASCRIPT" },
  {
    src: "./src/png/typescript.png",
    alt: "TS skill",
    tooltip: "TYPESCRIPT",
    style: "width: 60% !important;",
  },
  {
    src: "./src/png/jest.png",
    alt: "Jest skill",
    tooltip: "JEST",
    style: "width: 55% !important;",
  },
  {
    src: "./src/png/bootstraplogo.png",
    alt: "Bootstrap skill",
    tooltip: "BOOTSTRAP",
  },
  {
    src: "./src/png/reactlogo.png",
    alt: "React.js skill",
    tooltip: "REACT JS",
  },
  { src: "./src/png/nextlogo.png", alt: "Next.js skill", tooltip: "NEXT JS" },
  { src: "./src/png/node.png", alt: "Node.js skill", tooltip: "NODE JS" },
  {
    src: "./src/png/express-js.png",
    alt: "Express.js skill",
    tooltip: "EXPRESS JS",
    style: "width: 65% !important;",
  },
  {
    src: "./src/png/graphql.png",
    alt: "GraphQL skill",
    tooltip: "GRAPHQL",
    style: "width: 65% !important;",
  },
  {
    src: "./src/png/nest.png",
    alt: "Nest.js skill",
    tooltip: "NEST JS",
    style: "width: 65% !important;",
  },
  {
    src: "./src/png/githublogo.png",
    alt: "GitHub skill",
    tooltip: "GITHUB",
    class: "needtobeinvert",
  },
];

// Select the container element
const techStackWrapper = document.querySelector(".tech-stack-wrapper");

// Dynamically generate the tech stack items
techStack.forEach((tech) => {
  const li = document.createElement("li");
  li.className = "tech-stack-box";
  li.setAttribute("data-aos", "fade-up");

  const img = document.createElement("img");
  img.src = tech.src;
  img.alt = tech.alt;
  img.className = "tech-stack-logo";

  // Add optional properties if they exist
  if (tech.style) img.style.cssText = tech.style;
  if (tech.class) img.classList.add(tech.class);

  const span = document.createElement("span");
  span.className = "tooltip";
  span.textContent = tech.tooltip;

  li.appendChild(img);
  li.appendChild(span);
  techStackWrapper.appendChild(li);
});

// ----------------- Projects Section ----------------- //
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Pexelicons",
      description:
        "A world of personalized file folder icons to transform your PC into a reflection of your style.",
      favicon: "src/webp/pexelicon-favicon.webp",
      previewImage: "src/webp/Group 76.webp",
      githubLink: "https://github.com/07/Pexelicons",
    },
    {
      title: "ComicKaze",
      description:
        "An e-commerce website built on WordPress, specializing in anime merchandise.",
      favicon: "src/webp/cropped-1086600-192x192.webp",
      previewImage: "src/webp/comickaze-preview.webp",
      githubLink: "https://github.com/07/Pexelicons",
    },
    {
      title: "Aquaregia",
      description:
        'A website for University Maharaja College fest "Aquaregia" for event registrations.',
      favicon: "src/svg/aquaregia-favicon.svg",
      previewImage: "src/webp/Aquaregia-project.webp",
      githubLink: "https://github.com/07/Aquaregia",
    },
    {
      title: "QR Generator",
      description: "A webpage to make a QR Code from text using API.",
      favicon: "src/webp/qr-favicon.webp",
      previewImage: "src/webp/QRgeneratorProject.webp",
      githubLink: "https://github.com/07/QR-Generator",
    },
    {
      title: "React Netflix Clone",
      description:
        "A webpage to categorize shows and redirect users to watch them.",
      favicon: "src/ico/netflixfavicon.ico",
      previewImage: "src/webp/NetflixCloneProject.webp",
      githubLink: "https://github.com/07/Netflix-clone",
    },
    {
      title: "AXOCEAN",
      description:
        "E-commerce frontend work to choose favorite designs and redirect to Flipkart.",
      favicon: "src/webp/axocean-favicon.webp",
      previewImage: "src/webp/AXOCEAN-project.webp",
      githubLink: "https://github.com/07/AXOCEAN",
    },
  ];

  const projectContainer = document.querySelector(".project-boxes-div");

  projects.forEach((project) => {
    const projectHTML = `
        <div class="project-box-wrapper" data-aos="fade-up">
          <div class="project-box">
            <div class="info-div">
              <img src="${project.favicon}" alt="${project.title} favicon" class="faviconforProject" />
              <article class="ProjectHeading">${project.title}</article>
              <p class="ProjectDescription">${project.description}</p>
              <div class="project-buttons">
                <a href="${project.githubLink}" target="_blank" class="github-redirect" aria-label="Visit ${project.title} on GitHub">
                  <img src="src/svg/github.svg" alt="GitHub redirect button" />
                </a>
              </div>
            </div>
            <div class="image-div">
              <img src="${project.previewImage}" alt="${project.title} preview image" />
            </div>
          </div>
        </div>
      `;

    projectContainer.innerHTML += projectHTML;
  });
});
