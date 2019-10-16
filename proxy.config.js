const proxy = [
    {
  context: ['/cepApi'],
  target: 'http://viacep.com.br/ws', 
  secure: false, 
  changeOrigin: true,
  pathRewrite: {'^/cepApi': ''}

}
    
  ];
  module.exports = proxy;