exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);

    // console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    // Si hay paginas, crear los archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
    
    
    //Aqui es importante señalar que esto genera la 
    //comunicación y crea de manera automatica la la pagina 
    //como vemos en el import  async ({ actions, graphql, reporter })
    //actions: es el evento 
    //graphql: es la consulta 
    //reporter: es donde  se ven los errores 
    //Nota: es importante resaltar que los resultados no se ven en el navegador se veran en la consola 

    //Explicación internar-> 
    //path: Practicamente en el cms creamos una variables que nosotros creamos para el llamado de esa  paginas el cms usa un valor interno llamado ID 
    //component:  es la ubicaciòn del componente que mostrara el detalle de dicho valor al dar clic
    //context: aqui  es como el post aqui envias el valor unico para que lo capture el componente declaro en la propiedad component
    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    })

    
}