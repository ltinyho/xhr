import Xhr from '../src/xhr';
import axios from 'axios';

const xhr = new Xhr({
  cache: {},
});
const a   = xhr.request({
  method: 'get',
  url: 'http://www.kaoyaya.com/knew/api/wap/preLive',
  cache: true,
}).then(res => {
  const data = xhr.cache.get('http://www.kaoyaya.com/knew/api/wap/preLive');
  console.log(data);

});
/*
test('测试Xhr', () => {



  console.log(a);

});*/