const Koa = require('koa');
const KoaRouter = require('koa-router');
//nicely format one's json
const json = require('koa-json');
//path module is a core node.js module to work with file paths
const path = require('path');
const render = require('koa-ejs');
const app = new Koa();
const router = new KoaRouter();
//Help us with post requests
const bodyParser = require('koa-bodyparser');

// Replace with Database later
const things = ['guns', 'more guns', 'cannons', 'even bigger guns', 'nukes']

//Json prettier middleware
app.use(json());
//BodyParser Middleware
app.use(bodyParser());

//Add additional properties to context
app.context.user = 'Mark';

// Simple middleware example
//app.use(async ctx => (ctx.body = {msg: "Hello world"}));

render(app, {
    //look for views folder
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})

//Routes
router.get('/', index);
router.get('/add', showAdd);
//You can use the same route for differnt purposes providing the request type differs
router.post('/add', add);

//List of things
async function index(ctx) {
    await ctx.render('index', {
        title: 'Things I like:',
        things: things
    });
}

//Show add page
async function showAdd(ctx) {
    await ctx.render('add');
}

//Add thing, needs bodyparser
async function add(ctx) {
    const body = ctx.request.body;
    things.push(body.thing);
    ctx.redirect('/');
}

router.get('/test', ctx => (ctx.body = `Hello ${ctx.user}`));
//get parameters from url
//http://localhost:3000/test2/timmy will say "Hello timmy"
router.get('/test2/:name', ctx => (ctx.body = `Hello ${ctx.params.name}`));


//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

// http://localhost:3000/
app.listen(3000, () => console.log('Server started'));

