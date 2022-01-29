module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c667e695566615075ceb6107615bb51'),
  },
});
