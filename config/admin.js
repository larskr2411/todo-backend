module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c72a44170421e80cbf411347494081ed'),
  },
});
