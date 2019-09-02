module.exports = {
  secret: 'notepad',
  database: {
    dialect: 'sqlite',
    storage: './database/db.sqlite',
  },
  fromAddress: 'Notepad <notepad@example.com>',
  mailer: {
    host: 'example.com',
    port: 25,
    secure: false,
    auth: {
      user: 'user',
      pass: 'pass',
    },
  },
}
