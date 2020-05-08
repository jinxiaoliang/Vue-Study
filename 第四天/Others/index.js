const express = require('express');
const app = express();
const body = require('body-parser')
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/fdata',(req,res) => {
	res.send('Hello Fetch')
});

app.post('/book',(req,res) => {
	res.send('Post' + req.body.uname + '---' + req.body.age)
});

app.get('/json',(req,res) => {
	res.json({
		uname: 'lisi',
		age: 20,
		gender: 'male'
	})
});

app.get('/adata',(req,res) => {
	res.json({
		uname: 'lisi',
		age: 20,
		gender: 'male'
	})
});

app.get('/axios',(req,res) => {
	res.send("axios get(传统方式)传递参数" + req.query.id)
});
app.get('/axios/:id',(req,res) => {
	res.send("axios get(Restful)传递参数" + req.params.id)
});

app.post('/axios',(req,res) => {
	res.send("axios post传递参数" + req.body.uname + req.body.age)
});
app.listen(3000);
console.log('success');