// JSON data for the tech stack
const techStack = [
  { src: "./src/png/htmllogo.png", alt: "Html skill", tooltip: "HTML" },
  { src: "./src/png/csslogo.png", alt: "CSS skill", tooltip: "CSS" },
  { src: "./src/png/jslogo.png", alt: "JS skill", tooltip: "JS" },
  {
    src: "./src/png/bootstraplogo.png",
    alt: "Bootstrap skill",
    tooltip: "BOOTSTRAP",
  },
  { src: "./src/png/reactlogo.png", alt: "React skill", tooltip: "REACTJS" },
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
