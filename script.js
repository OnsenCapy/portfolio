function showContent(contentId) {
    // Esconde todos os conteúdos
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.style.opacity = 0;
    });
    
    // Mostra o conteúdo desejado
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
        setTimeout(() => {
            contentToShow.style.opacity = 1; // Gradual fade-in
        }, 50);
    }
}

// Garante que o home seja mostrado ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    showContent("home");
});

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.style.opacity = 0;
    });

    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
        setTimeout(() => {
            contentToShow.style.opacity = 1;
        }, 50);
    }
}

// Mostra home ao carregar
document.addEventListener("DOMContentLoaded", function () {
    showContent("home");
});

// Tradução
const translations = {
    "pt-BR": {
        navName: "Lucas Ruthes",
        navSkills: "Habilidades",
        navProjects: "Projetos",
        navResume: "Currículo",
        homeTitle: "Lucas Ruthes",
        homeDesc: "Olá, seja bem-vindo ao meu portfólio! Meu nome é Lucas Ruthes, e sou um desenvolvedor Full Stack Júnior com formação em Análise e Desenvolvimento de Sistemas. Sou apaixonado por tecnologia e sempre busco aprimorar minhas habilidades na área de programação. Navegue pelas seções para conhecer meus projetos, competências e experiências!",
        skillsTitle: "Habilidades",
        skillsWill: "Vontade de trabalhar em sua empresa",
        proj1Title: "Cookie Clicker",
        proj1Desc: "Jogo incremental desenvolvido em C# com Unity, focado em mecânicas de clique e gerenciamento de recursos.",
        proj2Title: "Space Invaders",
        proj2Desc: "Recriação do clássico Space Invaders com C# e Unity, incluindo lógica de inimigos e colisões.",
        proj3Title: "Platformer Básico",
        proj3Desc: "Plataformer 2.5D desenvolvido em Unity, explorando movimentação de personagem, colisões e física.",
        proj4Title: "Space Station 14 – Goobstation Fork",
        proj4Desc: "Contribuições em um fork open-source do Space Station 14, incluindo implementação de funcionalidades e correções de bugs.",
        proj5Title: "Portfólio Interativo",
        proj5Desc: "Site pessoal desenvolvido em HTML, CSS e JavaScript, com navegação dinâmica e responsiva.",
        proj6Title: "Site CRUD",
        proj6Desc: "Projeto de site CRUD em HTML, CSS, JavaScript e MySQL, com funcionalidades de criação, leitura, atualização e exclusão de dados.",
        resumeName: "Lucas Ruthes",
        resumeSubtitle: "Desenvolvedor Full Stack Júnior",
        resumeContact: "Contato",
        resumeExperience: "Experiência",
        resumeEducation: "Educação",
        resumeProjects: "Projetos",
        resumeSkills: "Habilidades Técnicas",
        resumeLanguages: "Idiomas",
        resumeDownload: "Baixar Currículo em PDF"
    },
    "en-US": {
        navName: "Lucas Ruthes",
        navSkills: "Skills",
        navProjects: "Projects",
        navResume: "Resume",
        homeTitle: "Lucas Ruthes",
        homeDesc: "Hello, welcome to my portfolio! My name is Lucas Ruthes, and I am a Junior Full Stack Developer with a degree in Systems Analysis and Development. I am passionate about technology and always strive to improve my programming skills. Navigate through the sections to see my projects, skills, and experiences!",
        skillsTitle: "Skills",
        skillsWill: "Motivation to work in your company",
        proj1Title: "Cookie Clicker",
        proj1Desc: "Incremental game developed in C# with Unity, focused on click mechanics and resource management.",
        proj2Title: "Space Invaders",
        proj2Desc: "Recreation of the classic Space Invaders in C# and Unity, including enemy logic and collisions.",
        proj3Title: "Basic Platformer",
        proj3Desc: "2.5D platformer developed in Unity, exploring character movement, collisions, and physics.",
        proj4Title: "Space Station 14 – Goobstation Fork",
        proj4Desc: "Contributions to an open-source fork of Space Station 14, including feature implementation and bug fixes.",
        proj5Title: "Interactive Portfolio",
        proj5Desc: "Personal website developed in HTML, CSS, and JavaScript, with dynamic and responsive navigation.",
        proj6Title: "CRUD Site",
        proj6Desc: "CRUD website project in HTML, CSS, JavaScript, and MySQL, with create, read, update, and delete functionalities.",
        resumeName: "Lucas Ruthes",
        resumeSubtitle: "Junior Full Stack Developer",
        resumeContact: "Contact",
        email: "Email: lucasgrds2003@gmail.com",
        phone: "Phone: +55 47 98400-2105",
        linkedin: "LinkedIn: linkedin.com/in/lucasgrds",
        github: "GitHub: github.com/OnsenCapy",
        resumeExperience: "Experience",
        expDesc: "Junior Freelancer Developer – Assisted in an open-source project, developing and maintaining features, fixing bugs, and working with a complex codebase (C#, ECS). Also created several personal projects (C#, HTML, CSS, JavaScript).",
        resumeEducation: "Education",
        edu1: "High School – E.E.M. Gov. Celso Ramos (2017–2020)",
        edu2: "Systems Analysis and Development – Anhanguera (2023–2025, completed)",
        edu3: "Web Development – Anhanguera (2025–2027, ongoing)",
        resumeProjects: "Projects",
        proj1: "Cookie Clicker (C# / Unity)",
        proj2: "Space Invaders (C# / Unity)",
        proj3: "Basic Platformer (C# / Unity)",
        proj4: "Space Station 14 (Open-source, C# / RobustToolbox)",
        proj5: "CRUD Site (HTML, CSS, JavaScript, MySQL)",
        proj6: "Interactive Portfolio (HTML, CSS, JavaScript)",
        resumeSkills: "Technical Skills",
        skill1: "Languages: JavaScript, C#",
        skill2: "Front-End: HTML, CSS, React",
        skill3: "Back-End: Node.js, MySQL",
        skill4: "Tools: Git, GitHub, Unity, MySQL Workbench",
        resumeLanguages: "Languages",
        lang1: "Portuguese (Native)",
        lang2: "English (Fluent)",
        lang3: "Japanese (Basic)",
        resumeDownload: "Download Resume PDF"
    }
};

// Aplica idioma
function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Eventos dos botões
document.getElementById("pt-br").addEventListener("click", () => setLanguage("pt-BR"));
document.getElementById("en-us").addEventListener("click", () => setLanguage("en-US"));

