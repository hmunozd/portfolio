import { Terminal, Database, Laptop } from '@lucide/astro';

export const experience = [
    {
        title: "Analista de desarrollo",
        company: "Konecta",
        dates: "Mar. 2023 - Actualidad",
        description: "Jornada completa. En remoto. Tecnologías principales: Node.js, React.js.",
        icon: Terminal,
        active: true
    },
    {
        title: "Analista de Soluciones TI",
        company: "Invamer",
        dates: "May. 2022 - Mar. 2023",
        description: "Jornada completa. Medellín, Antioquia. Tecnologías principales: MySQL, Angular.",
        icon: Database,
        active: false
    },
    {
        title: "Desarrollador web",
        company: "Garantías Comunitarias Grupo S. A.",
        dates: "Nov. 2021 - May. 2022",
        description: "Contrato temporal. Tecnologías principales: MySQL, Angular.",
        icon: Laptop,
        active: false
    }
];
