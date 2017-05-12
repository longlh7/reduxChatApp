import Koa from 'koa';
import IO from 'koa-socket';

const app = Koa();
const io = new IO();

io.attach(app);

io.on('connection', ctx => {
  console.log('[server] connected');
});

let usernames = [];
io.on('disconnect', ctx => {
  const { username } = ctx.socket;
  if (username) {
    console.log(`[server io.on] disconnected: ${username}`);
    usernames = usernames.filter(u => u !== username)
  }
});

io.on('login', (ctx, {username}) => {
  console.log('\n[server io.on] login ',username);
  usernames.push(username);
  ctx.socket.username = username;

  io.broadcast('users.login', {username});
});

app.listen(3000, () => {
  console.log('[server] ready');
});
