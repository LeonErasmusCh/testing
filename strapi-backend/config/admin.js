module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '73496a482cdb2d00e83b6a90a54027a8'),
  },
});
