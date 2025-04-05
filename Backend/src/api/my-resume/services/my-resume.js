'use strict';

/**
 * my-resume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-resume.my-resume');
