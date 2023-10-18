const createTransporter = require("./utils/createTransporter");
require("dotenv").config();

const sendPaymentFailure = async (userMail, HTMLpath) => {
  const transporter = await createTransporter();

  const options = {
    from: process.env.MAIL_ADDR,
    to: userMail,
    subject: "Fallo en el pago",
    html: `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido a Patitas Felices</title>
        <style>
            /* Estilos generales */
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
            }
            
            header {
                background-color: #4527a0;
                color: #fff;
                text-align: center;
                padding: 20px;
            }
            
            nav {
                background-color: #673ab7;
                color: #fff;
                padding: 10px;
            }
            
            main {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            
            h1 {
                font-size: 36px;
            }
            
            h2 {
                color: #4527a0;
            }
            
            /* Estilos de productos destacados */
            .productos-destacados {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }
            
            .producto {
                flex: 0 0 calc(33.33% - 20px);
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 10px;
                text-align: center;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
            
            .producto img {
                max-width: 100%;
                height: auto;
            }
            
            /* Estilos del pie de página */
            footer {
                text-align: center;
                background-color: #4527a0;
                color: #fff;
                padding: 10px;
                position: absolute;
                bottom: 0;
                width: 100%;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>¡Bienvenido a Patitas Felices!</h1>
            <p>Tu tienda en línea de productos para mascotas</p>
        </header>
        
        <main>
            <section>
                <h2>Nuestros Productos Destacados</h2>
                <div class="productos-destacados">
                    <!-- Aquí puedes listar algunos de tus productos destacados con imágenes, nombres y precios -->
                    <div class="producto">
                        <img src="imagen-producto-1.jpg" alt="Producto 1">
                        <h3>Producto 1</h3>
                        <p>Precio: $XX.XX</p>
                    </div>
                    <div class="producto">
                        <img src="imagen-producto-2.jpg" alt="Producto 2">
                        <h3>Producto 2</h3>
                        <p>Precio: $XX.XX</p>
                    </div>
                    <!-- Agrega más productos destacados según sea necesario -->
                </div>
            </section>
            
            <section>
                <h2>¿Por qué elegirnos?</h2>
                <p>En Patitas Felices, nos apasiona ofecer amplia variedad de productos de alta calidad para perros, gatos y otras mascotas. Nuestra misión es brindarles a tus peludos amigos todo lo que necesitan para llevar una vida feliz y saludable.</p>
            </section>
        </main>
        
        
    </body>
    </html><!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Pago Fallido - Patitas Felices</title>
        <style>
            body {
                background-color: #f2f2f2;
                font-family: Arial, sans-serif;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border: 1px solid #cccccc;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #ff0000; /* Rojo */
            }
    
            p {
                color: #333333; /* Gris oscuro */
            }
    
            a {
                color: #4b0082; /* Violeta oscuro */
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Pago Fallido</h1>
            <p>Lamentablemente, el pago de tu orden en Patitas Felices no se ha procesado correctamente.</p>
            <p>Por favor, verifica que la información de tu tarjeta de crédito o débito sea correcta e intenta realizar el pago nuevamente.</p>
            <p>Si el problema persiste o necesitas asistencia, no dudes en <a href="mailto:patitasfelices.consult@gmail.com">contactar a nuestro equipo de soporte</a>.</p>
            <p>Gracias por elegir Patitas Felices.</p>
        </div>
    </body>
    </html>`,
  };

  transporter.sendMail(options);
};

module.exports = sendPaymentFailure;
