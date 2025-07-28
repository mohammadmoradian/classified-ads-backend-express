const swaggerJsDoc = require("swagger-jsdoc"); 
const swaggerUi = require("swagger-ui-express");
const path = require("path");

function SwaggerConfig(app) {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1", 
            info: {
                title: 'divar-backend', 
                description: 'project', 
                version: '1.0.0'
            }
        }, 
        apis: [path.resolve(__dirname, "../modules/**/*.swagger.js")]
    })
    
    const swagger = swaggerUi.setup(swaggerDocument, {}); 
    app.use("/api-docs", swaggerUi.serve, swagger); 
}


module.exports = SwaggerConfig; 