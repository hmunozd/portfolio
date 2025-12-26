export interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    image?: string;
    comingSoon?: boolean;
}

export const projects: Project[] = [
    {
        title: "Transmutation",
        description: "Juego de estrategia y memoria ambientado en un reactor cuántico. Compite por estabilizar protocolos manipulando estados de la materia en tiempo real.",
        tags: ["React", "Tailwind", "Supabase"],
        github: "#",
        demo: "https://transmutation.jildo.me/",
        comingSoon: false
    },
    {
        title: "...",
        description: "...",
        tags: ["Vue", "Firebase", "Pinia"],
        github: "#",
        demo: "#",
        comingSoon: true
    },
    {
        title: "...",
        description: "...",
        tags: ["Astro", "Tailwind", "TypeScript"],
        github: "#",
        demo: "#",
        comingSoon: true
    }
];
