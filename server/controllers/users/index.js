const { Router: router } = require('express');


const { create } = require('./create');
const {listAll}=require('./list')
const {show}=require('./show')
const {update}=require('./update')







module.exports = () => {
  const api = router();

  api.post('/', create());
  api.get('/', listAll());
  api.get('/:name', show());
  api.put('/:age', update());
 

  return api;
};
