import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js'


const router = express.Router();

// URL 1
router.get('/', paginaInicio);

// URL 2
router.get('/nosotros', paginaNosotros)

// URL 3
router.get('/viajes', paginaViajes);
// Sirve para dirigir a los detalles del viaje
router.get('/viajes/:slug', paginaDetalleViaje); 

// URL 4
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial)


export default router;
