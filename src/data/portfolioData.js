// src/data/portfolioData.js
// Reemplaza esto con tus propios datos y rutas a las imágenes/videos
import thumb1 from '../assets/images/character-design-thumb.jpg';
import video1 from '../assets/videos/el-rey-de-la-torre.mp4';
import scifiThumb from '../assets/images/character-design-thumb.jpg';
import scifiFull from '../assets/images/character-design-full.jpg';

export const portfolioData = [
    {
        id: 1,
        title: 'El Rey de la Torre',
        category: '2d', // '2d', 'character', 'background'
        thumbnail: thumb1, // imagen en miniatura para la cuadrícula
        mediaType: 'video', // 'image' o 'video'
        mediaUrl: video1, // ruta al video o imagen en alta resolución
        description: 'Cortometraje ganador del premio a la mejor animación 2D. Explora temas de soledad y amistad a través de un personaje entrañable.',
    },
    {
        id: 2,
        title: 'Diseño de Personajes Sci-Fi',
        category: 'character',
        thumbnail: scifiThumb,
        mediaType: 'image',
        mediaUrl: scifiFull, // Asegúrate de que este archivo exista o actualiza la ruta según corresponda
        description: 'Proceso de conceptualización y diseño de un dúo de personajes para un videojuego de ciencia ficción.',
    },
    // ... añade más proyectos
];