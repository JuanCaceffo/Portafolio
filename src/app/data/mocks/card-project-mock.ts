import { CardProjectDTO } from "../interfaces/CardProjectDTO";

export const projectCardData: CardProjectDTO[] = [
  {
    pjtType: { es: 'Aplicacion web', en: 'Web App' },
    title: { es: 'WorldCapp 2023', en: 'WorldCapp 2023' },
    content: {
      description: {
        es: 'worldcapp-2023 es una app de album de figuritas desrrollada con el framework Angular 16 y typescrip. Realizada con muy buenas practicas utilizando el patron de diseño arquitecutral MVC permitiendo una gran escalabilidad del proyecto',
        en: 'worldcapp-2023 is a sticker album app developed with the Angular 16 framework and TypeScript. It has been implemented with excellent practices using the MVC architectural design pattern, allowing for great scalability of the project.',
      },
      repo: 'https://github.com/JuanCaceffo/worldcapp-2023',
      deploy : 'https://worldcapp-2023.onrender.com/'
    },
    img: '/assets/mocks-imgs/pjt/wordlCapp.jpeg',
  },
  {
    pjtType: { es: 'Aplicacion web', en: 'Web App' },
    title: { es: 'WorldCapp admin 2023', en: 'WorldCapp admin  2023' },
    content: {
      description: {
        es: 'worldcapp admin 2023 es una app web para administrar, eliminar, registrar entidades de la app worldCapp2023 esta fue desrrollada con React y javascript. Creando componentes reutilizables permitiendo una gran escalabilidad del proyecto',
        en: 'WorldCapp Admin 2023 is a web application for managing, deleting, and registering entities within the WorldCapp2023 app. It was developed using React and JavaScript, creating reusable components to enable significant scalability of the project.',
      },
      repo: 'https://github.com/JuanCaceffo/worldcapp-2023-admin',
      deploy: 'https://worldcapp-2023-admin.onrender.com/'
    },
    img: '/assets/mocks-imgs/pjt/worldCappAdmin.png',
  },
] 
