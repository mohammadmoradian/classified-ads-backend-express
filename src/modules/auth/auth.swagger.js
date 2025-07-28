/**
 * @swagger
 * tags: 
 *  name: Auth
 *  description: Auth modules and Routes
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
 *          checkOTP:
 *              type: object
 *              required: 
 *                  -   mobile
 *                  -   code
 *              properties: 
 *                  mobile: 
 *                      type: string
 *                      example: ""
 *                  code: 
 *                      type: string
 *                      example: ""
 */

/**
 * @swagger
 * 
 * /auth/send-otp: 
 *  post: 
 *      summary: login with OTP in this end-point
 *      tags: 
 *          -   Auth
 *      requestBody: 
 *          content: 
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/sendOTP'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/sendOTP'
 *      responses:
 *          200:
 *              description: success
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/sendOTP'
 */

/**
 * @swagger
 * 
 * /auth/check-otp: 
 *  post: 
 *      summary: check otp for login user
 *      tags: 
 *          -   Auth
 *      requestBody: 
 *          content: 
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/checkOTP'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/checkOTP'
 *      responses:
 *          200:
 *              description: success
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/sendOTP'
 */

/**
 * @swagger
 * 
 * /auth/logout: 
 *  get: 
 *      summary: logout user
 *      tags: 
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */