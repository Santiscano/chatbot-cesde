import puppeteer from "puppeteer";
import { connection } from './config/mysql';

// Conectar a la base de datos y traer los datos de la tabla Programs_cesde_medellin
const insertPrograms = async (programs: { title: string; content: string }[]) => {
    // Transformar los objetos a un array de arrays con los valores
    const values = programs.map((program) => [program.title, program.content]);

    // Crear la query con placeholders
    const placeholders = values.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO Programs_cesde_medellin (title, content) VALUES ${placeholders}`;

    // Ejecutar la query con los valores planos
    const [insert] = await connection.query(query, values.flat());
    console.log('Insert:', insert);
    return insert;
};


const scrape = async () => {
    try {
            const browser = await puppeteer.launch({ 
                headless: false, // Mostrar el navegador
                defaultViewport: null, // Usar la resolución completa
                args: ['--start-maximized'], // Abrir en pantalla completa
            });
            const page = await browser.newPage();
            console.log('Navegando a la página...');
            const url = "https://www.cesde.edu.co/sedes/medellin";
            await page.goto(url);

            // Esperar a que el elemento esté presente en el DOM
            await page.waitForSelector('.sedes__programas__text');

            // Extraer los datos
            const programs = await page.evaluate(() => {
                // Seleccionar todos los articles dentro del acordeón
                const articles = Array.from(document.querySelectorAll('#cesde-accordeon article'));

                // Crear la lista de objetos
                return articles.map(article => {
                    // Extraer el título del h3
                    const title = article.querySelector('.programas__accordeon__item__title h3')?.textContent?.trim() || '';

                    // Extraer el contenido del párrafo
                    const content = article.querySelector('.acordeon__content .text__content p')?.textContent?.trim() || '';

                    // Retornar el objeto
                    return { title, content };
                });
            });
            console.log('Contenido:', programs);
            insertPrograms(programs);
            await browser.close();

            // const planes = await page.evaluate(() => {
            //     const planes = Array.from(document.querySelectorAll('#planes__wrapper article'));

            //     return planes.map(plan => {

            //     });
            // })
        
    } catch (error) {
        
    }
};

scrape().catch(console.error);