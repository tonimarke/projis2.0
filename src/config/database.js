module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'projisdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true, 
  }
}