import Koa from 'koa';
import IO from 'koa-socket';

const app = Koa();
const io = new IO();

io.attach(app);

io.on('connection', ctx => {
  console.log('New connection...');
});

app.listen(3000, () => {
  console.log('Server is running...');
});
