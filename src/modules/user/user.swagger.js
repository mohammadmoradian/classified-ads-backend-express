/**
 * @swagger
 * tags: 
 *  name: User
 *  description: User modules and Routes
 */

/**
 * @swagger
 *  components: 
 *      schemas: 
 *          sendOTP:
 *              type: object
 *              required: 
 *                  -   mobile
 *              properties: 
 *                  mobile: 
 *                      type: string
 *                      example: ""
 */

/**
 * @swagger
 * 
 * /user/whoami: 
 *  get: 
 *      summary: get user profile
 *      tags: 
 *          -   User
 *      responses:
 *          200:
 *              description: success
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/sendOTP'
 */

