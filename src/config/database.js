module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'projisDB',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true, 
  }
}