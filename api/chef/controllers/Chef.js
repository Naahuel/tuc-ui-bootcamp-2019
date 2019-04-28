'use strict';

/**
 * Chef.js controller
 *
 * @description: A set of functions called "actions" for managing `Chef`.
 */

module.exports = {

  /**
   * Retrieve chef records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.chef.search(ctx.query);
    } else {
      return strapi.services.chef.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a chef record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.chef.fetch(ctx.params);
  },

  /**
   * Count chef records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.chef.count(ctx.query);
  },

  /**
   * Create a/an chef record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.chef.add(ctx.request.body);
  },

  /**
   * Update a/an chef record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.chef.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an chef record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.chef.remove(ctx.params);
  }
};
