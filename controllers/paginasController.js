import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';


// URL 1--------------------------------------------------------------
const paginaInicio = async (req, res) => { // req - lo que enviamios : res - lo que express nos recomienda
    
    // Consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push( Viaje.findAll( { limit : 3 } ) );
    promiseDB.push( Testimonial.findAll( { limit : 3 } ) )

    try {
        const resultado = await Promise.all( promiseDB )
        
    res.render('inicio', { // Render manda a llamar el archivo de pug en la carpeta view
        pagina: 'Inicio',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    });

    } catch (error) {
        console.log(error);
    }
}


// URL 2--------------------------------------------------------
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
       pagina: 'Nosotros'
    }); 
}


// URL 3----------------------------------------------------------
const paginaViajes = async (req, res) => {
    //Consultar base de datos
    const viajes =  await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
       pagina: 'Próximos Viajes',
       viajes
    }); 
}


// URL 4----------------------------------------------------------
const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
         }); 

    } catch (error) {
        console.log(error);
    }
}


//Muestra un viaje por su slug------------------------------------
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } } );

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}