module.exports=function(req,res,next){
    var ip= req.headers['x-real-ip'].split('.');
    if (ip[3]%2===1)return next();
    res.status(400).send('Fuck-Off');
};