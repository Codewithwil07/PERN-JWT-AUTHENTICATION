const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

const jwtGenerator = require('../utils/jwtGenerator');

// register
router.post('/register', async (req, res) => {
  try {
    // destructure req.body
    const { name, email, password } = req.body;
    // cek jika user sudah ada maka akan error
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email,
    ]);

    if (user.rows.length !== 0) {
      res.status(401).send('user already exist');
    }

    // bcrypt password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // menambah user baru ke database
    const newUser = await pool.query(
      'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, bcryptPassword]
    );

    // membuat token jwt
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error yes');
  }
});

module.exports = router;
