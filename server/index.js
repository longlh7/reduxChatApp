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

let messages = [];
io.on('message', (ctx, { msg }) => {
  console.log('[server] message: ',msg);
  const message = {
    id: messages.length,
    text: msg,
    username: ctx.socket.username,
  };
  messages.push(message);

  io.broadcast('messages.new', { message });
});

app.listen(3000, () => {
  console.log('[server] ready');
});
