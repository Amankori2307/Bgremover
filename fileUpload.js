function callUpload(file){

    var filename = file.name
    file.mv('./public/upload/'+filename,function(err){
        if(err){
            console.log(err);
        }else{
            console.log(`${filename} Upload success`);
        }
    });
}
module.exports = callUpload