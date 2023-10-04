const prisma = require("../../db");

const editUser = async (id, name, email, password, celular) => {

  let user = await prisma.user.findFirst({
    where: {
      id,
    }
  });

  if(user.password === password) throw Error("Same password provided");

  user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password,
      celular,
    },
  });

  return user;
};

module.exports = editUser;




/*
[
{
"id": 3,
"name": "Coffee Bones",
"image": "https://www.ammascotas.com/wp-content/uploads/2018/10/CoffeBones.jpg",
"brand": "Marolio",
"category": "Alimentos",
"description": "Los 'Cofi Bones' son una deliciosa golosina diseñada especialmente para el cuidado dental de tus amigos peludos. Estas pequeñas delicias no solo son irresistibles para tu perro, sino que también ayudan a mantener sus dientes y encías saludables.",
"price": "1000",
"active": true
},
{
"id": 5,
"name": "Cepillos Dentales",
"image": "https://www.ammascotas.com/wp-content/uploads/2016/11/cepillodentalx4.jpg",
"brand": "Generic",
"category": "Accesorios",
"description": "Cepillos dentales x 4 ideal para la higiene de tu mascota, masajea las encías y dientes, reduce el sarro y la placa. Producto con fácil ajuste al dedo, práctico de usar, para perros y gatos. Producto no tóxico, biodegradable y amigable con el medio ambiente.",
"price": "8000",
"active": true
},
{
"id": 6,
"name": "Capa Impermeable",
"image": "https://www.ammascotas.com/wp-content/uploads/2018/10/CoffeBones.jpg",
"brand": "Pet Toys",
"category": "Accesorios",
"description": "Capa impermeable para mascotas, ideal para que tu peludo no tenga que mojarse en los días de lluvia. Capa impermeable transparente, disponible en diferentes colores de ribertes (bordes) colores surtidos.",
"price": "8900",
"active": true
},
{
"id": 12,
"name": "Camiseta para Perros",
"image": "https://i.linio.com/p/9fe9d5f27698f5918e1c9aab876028b9-product.jpg",
"brand": "Pet Fashion",
"category": "Ropa para Mascotas",
"description": "Camiseta de algodón suave y cómoda para perros. Disponible en varios colores y tallas.",
"price": "1500",
"active": true
},
{
"id": 13,
"name": "Collar de Cuero",
"image": "https://style4pets.com/cdn/shop/products/collar-classic-honey.jpg?v=1678126430",
"brand": "Luxury Pets",
"category": "Accesorios",
"description": "Elegante collar de cuero genuino para perros. Diseño duradero y resistente.",
"price": "2500",
"active": true
},
{
"id": 14,
"name": "Comida para Gatos",
"image": "https://jumbocolombiaio.vtexassets.com/arquivos/ids/205582/7702084057132.jpg?v=637814200413970000",
"brand": "Meow Delights",
"category": "Alimentos",
"description": "Nutritiva comida para gatos con ingredientes de alta calidad. Sabores variados.",
"price": "1200",
"active": true
},
{
"id": 15,
"name": "Juguete Pelota con Plumas",
"image": "https://imagenes.elpais.com/resizer/Em0F9S-lzZ0dPO6e_qnzEcA9rvc=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/423OQRR5TYDXJCOXE42CZL2BNM.jpg",
"brand": "Playful Pets",
"category": "Juguetes para Gatos",
"description": "Pelota de juguete con plumas para gatos. Ideal para estimular el juego y el ejercicio.",
"price": "800",
"active": true
},
{
"id": 16,
"name": "Cama de Lujo para Perros",
"image": "https://imagenes.elpais.com/resizer/RrBdTb0r5xaLv0MNST38nykE2Xg=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOTB2GS6R5G6FKLUCF3KRYEI4A.png",
"brand": "Luxury Pet Beds",
"category": "Camas y Muebles",
"description": "Cama de lujo con cojines suaves y diseño elegante para perros de todos los tamaños.",
"price": "35000",
"active": true
},
{
"id": 17,
"name": "Arnés Reflectante para Gatos",
"image": "https://m.media-amazon.com/images/I/710FMS6J1sL._AC_UF1000,1000_QL80_.jpg",
"brand": "SafePets",
"category": "Accesorios para Gatos",
"description": "Arnés ajustable y reflectante para gatos, proporciona seguridad durante los paseos nocturnos.",
"price": "12800",
"active": true
},
{
"id": 18,
"name": "Comida para Perros Saludable",
"image": "https://aratiendas.com/wp-content/uploads/2021/07/3060-7704269102651-1.jpg",
"brand": "Healthy Paws",
"category": "Alimentos",
"description": "Comida para perros con ingredientes naturales y equilibrados para una dieta saludable.",
"price": "1800",
"active": true
},
{
"id": 19,
"name": "Rascador de Gatos",
"image": "https://www.comportamientoanimal.com.co/wp-content/uploads/Rascador-gatos-2.jpg",
"brand": "Cat Haven",
"category": "Juguetes y Rascadores",
"description": "Rascador de sisal para gatos con múltiples plataformas y juguetes colgantes.",
"price": "2500",
"active": true
},
{
"id": 20,
"name": "Pelota de Tenis para Perros",
"image": "https://t1.ea.ltmcdn.com/es/posts/2/4/2/son_buenas_las_pelotas_de_tenis_para_los_perros_21242_orig.jpg",
"brand": "PlayFetch",
"category": "Juguetes",
"description": "Pelota de tenis resistente para perros. Perfecta para juegos de buscar y traer.",
"price": "500",
"active": true
},
{
"id": 21,
"name": "Chaqueta Impermeable para Perros",
"image": "https://m.media-amazon.com/images/I/61KHBFCvMXS.jpg",
"brand": "WeatherPaws",
"category": "Ropa para Mascotas",
"description": "Chaqueta impermeable para perros con forro polar. Ideal para paseos en días lluviosos.",
"price": "20000",
"active": true
},
{
"id": 22,
"name": "Comedero Automático para Gatos",
"image": "https://s.libertaddigital.com/2021/12/24/comedero-automatico-para-perros-y-gatos-honeyguaridan-4l.jpg",
"brand": "AutoFeeder",
"category": "Alimentación",
"description": "Comedero automático programable para gatos. Dispensa comida en horarios programados.",
"price": "8000",
"active": true
},
{
"id": 23,
"name": "Collar Antipulgas para Gatos",
"image": "https://i.ebayimg.com/thumbs/images/g/rAEAAOSwE8xh4R0B/s-l640.jpg",
"brand": "FleaGuard",
"category": "Cuidado de la Salud",
"description": "Collar antipulgas repelente para gatos. Protege a tu mascota de pulgas y garrapatas.",
"price": "1500",
"active": true
},
{
"id": 24,
"name": "Juguete para Perros Kong",
"image": "https://www.latiendadefrida.com/cdn/shop/products/kong-classic-s-m-l-xl-xxl_e19235a8-f552-4fb3-a7cb-0e7c0d657d5f.jpg",
"brand": "Kong Toys",
"category": "Juguetes",
"description": "Juguete clásico de goma Kong para perros. Perfecto para masticar y jugar.",
"price": "1200",
"active": true
},
{
"id": 1,
"name": "Collares Isabelinoss",
"image": "https://www.ammascotas.com/wp-content/uploads/2023/09/ISABELINO-GRANDE.jpg",
"brand": "Delta Brandds, Inc.",
"category": "Accesorios",
"description": "Collares Isabelinos, evite que las mascotas se muerden a sí mismas se lastimen o que las mascotas se rasquen las heridas después de la cirugía. Lámina de plástico translúcido suave fácil de poner.",
"price": "8700",
"active": true
},
{
"id": 2,
"name": "Chaleco Acolchado para Perro",
"image": "https://www.ammascotas.com/wp-content/uploads/2023/08/mateo-chaleco-acolchado-azul.jpg",
"brand": "Generic",
"category": "Accesorios",
"description": "Chaleco Acolchado para perros, ajustable, diseño ergonómico y práctico para tu mascota.",
"price": "1000",
"active": true
},
{
"id": 11,
"name": "Juguete Pelota de Goma",
"image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/880/994/products/pelota-dosificadora-goma-rascals1-1a0f27c20b5acc0f9216192822942414-640-0.jpg",
"brand": "Playful Pets",
"category": "Juguetes",
"description": "Pelota de goma resistente para perros. Perfecta para juegos de lanzar y traer.",
"price": "800",
"active": true
},
{
"id": 32,
"name": "Galletas 1000 gramos",
"image": "http://res.cloudinary.com/ddygbuhvi/image/upload/v1696425365/Pf-Images/svpghmc2iw4logdhp0wg.jpg",
"brand": "Nuuti ",
"category": "Alimentos",
"description": "INGREDIENTES: Harina de trigo , Huevo,  Avena Integral, Zanahoria, Aceite de oliva, Pechuga de pollo y/o sabor natural a cordero, y/o sabor natural a ternera, y/o sabor natural a pavo, vainilla, perejil.",
"price": "33500",
"active": true


*/
