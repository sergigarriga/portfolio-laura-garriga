import awardReyTorre from '../assets/images/award-rey-torre.jpg';

// src/data/portfolioData.js
// He actualizado la estructura con los nuevos campos para el estudio de caso.
// Rellena tus propios proyectos siguiendo este ejemplo.

export const portfolioData = [
    {
        id: 1,
        title: 'El Rey de la Torre',
        category: '2d',
        thumbnail: awardReyTorre,
        mediaType: 'video',
        mediaUrl: '/assets/videos/el-rey-de-la-torre.mp4',
        description: 'Cortometraje ganador del premio a la mejor animación 2D.',
        // --- NUEVO: Campos para el estudio de caso ---
        challenge: 'Crear un personaje entrañable que transmita soledad y el anhelo de amistad sin necesidad de diálogo, usando únicamente la animación y el diseño de entorno.',
        role: 'Dirección, Diseño de Personajes, Animación 2D',
        processImages: [
            '/assets/images/process/rey-sketch-1.jpg',
            '/assets/images/process/rey-storyboard-2.jpg',
            '/assets/images/process/rey-color-test-3.jpg',
        ],
        solution: 'Se desarrolló un diseño de personaje con formas suaves y una paleta de colores apagados para el entorno, contrastando con la calidez de los momentos clave. La animación se centró en microexpresiones y un lenguaje corporal sutil para construir la narrativa emocional.',
        challenge: 'Diseñar un dúo de personajes (un explorador humano y su compañero robot) que tuvieran una silueta reconocible y una sinergia visual clara, aptos para un juego de exploración en tercera persona.',
        role: 'Diseño de Personajes, Ilustración',
        processImages: [
            '/assets/images/process/scifi-silhouettes.jpg',
            '/assets/images/process/scifi-robot-iterations.jpg',
        ],
        solution: 'Se crearon formas complementarias: el humano con líneas orgánicas y dinámicas, y el robot con una estructura más robusta y geométrica, pero con elementos curvos que denotan su rol de compañero. La paleta de colores y los materiales compartidos unifican sus diseños.'
    },
    // ... añade más proyectos con la nueva estructura
];