const express = require('express');
const { PrismaClient } = require('./generated/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// endpoint untuk mendapatkan semua user
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// endpoint untuk menambahkan user baru
app.post('/users', async (req, res) => {
  const { username, password, name, token } = req.body;
  const newUser = await prisma.user.create({
    data: { username, password, name, token }
  });
  res.json(newUser);
});

// endpoint untuk menghapus user berdasarkan ID
app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  await prisma.user.delete({
    where: { id: userId }
  });
  res.json({ message: 'User berhasil dihapus' });
});

// endpoint untuk memperbarui user berdasarkan ID
app.put('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const { username, password, name, token } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { username, password, name, token }
  });
  res.json(updatedUser);
});

// port server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
