const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
 var filename = "";
 var content = "";
 var filename1 = "";

var createdir = () =>{
    rl.question("Enter the name of directory you wouldd like to create", (call) =>{
        var dir = "./";
        dir = dir + call;
        console.log(dir);
        fs.mkdir(dir,{ recursive: true },(err)=>{
            if (err) throw err;
            
        });
        console.log("file created succesfully");
        options();
        //r1.close();
    });
    
};

var removedir = () => {
    rl.question("Enter the name of file you want to delete",(call) =>{
        fs.rmdir(call,()=>{
            console.log("folder deleted");
            options();
        });
        console.log("not deleted/found");
    });
};
var createFile = () =>{
    fs.writeFile(filename, content, (err) =>{
        if(err){
            console.log(err);
        } else{
            console.log("File Saved Successfully ");
        }
        repeat();
    });
};
var readFile = () =>{
    fs.readFile(filename,"utf8",function(err,content){
        if(err){
            console.log(err);
        }else{
            console.log(content);
        }
        repeat();
    });
 };
 var deleteFile =() =>{
    fs.unlink(filename, function (err) {
        if(err){
            console.log(err);
        }else{
            console.log('File Deleted Sucessfully !');
        }
       
        repeat();
      });
 };

 var AppendDatas = () =>{
    fs.appendFile(filename, content, function (err) {
        if(err){
            console.log(err);
        }else{
           console.log('Content Saved Sucessfully!');
        }
        repeat();
      });
 };
 var updateDatas = () =>{
    fs.writeFile(filename+".txt",content,(err) => {
        if (err){
            console.log(err);
        }else {
            console.log(' File Updated Sucessfully!');
        }
       repeat();
      });
 };

 var renameFile = () =>{
    fs.rename(filename, filename1, function (err) {
        if (err) throw err;
        console.log('File Renamed Sucessfully!');
        repeat();
      });
 };
var createFiles = () => {
    console.log("Welcome To File Creation Block");
    rl.question("Name of The File : ", (ans) =>{
        filename  = ans + ".txt";
        rl.question("Contents of The File : ", (ans)=>{
            content = ans;
            createFile();
        });
    });
};

var readFiles = () => {
    console.log("Welcome To File Read Block");
    rl.question("Enter  File Name : ", (ans) =>{
        filename = ans ;
        readFile();
    });  
};

var deleteFiles = () => {
    console.log("Welcome To  Delete File Block");
    rl.question("Enter  File Name : ", (ans) =>{
        filename = ans ;
        deleteFile();
    });  
};

var AppendData = () => {
    console.log("Welcome To File Append Data Block");
    rl.question("Name of The File : ", (ans) =>{
        filename  = ans ;
        rl.question("Contents of The File To Append : ", (ans)=>{
            content = ans;
            AppendDatas();
        });
    });
};

var updateData = () => {
    console.log("Welcome To File Update Data Block");
    rl.question("Name of The File : ", (ans) =>{
        filename  = ans ;
        rl.question("Contents of The File To Update : ", (ans)=>{
            content = ans;
            updateDatas();
        });
    });
};

var renameFiles = () => {
    console.log("Welcome To File Rename Block");
    rl.question("Name of The File : ", (ans) =>{
        filename  = ans ;
        rl.question("Name of The Another File : ", (ans) =>{
            filename1  = ans + ".txt";
            renameFile();
        });
    });
};

 var  instructions = () =>{
    console.log("\nEnter 1 To Create a new  Directory");
    console.log("Enter 2 To Remove Directory");
     console.log("Enter 3 To Create a new Text File");
     console.log("Enter 4 To Read the Context From the File");
     console.log("Enter 5 To Delete a File");
     console.log("Enter 6 To Append to an existing File");
     console.log("Enter 7 To Update to an existing File");
     console.log("Enter 8 To Rename a File");
     console.log("Enter 9 To Exit");
 }

 var start = () => {
    rl.question("Please Enter Your Choice : ", (answer) =>{
       if(answer === "1"){
        createdir();
       } else if(answer === "2"){
        removedir();
       } else if (answer === "3"){
           createFiles();
       } else if (answer === "4"){
           readFiles();
       } else if (answer === "5"){
           deleteFiles();
       } else if (answer === "6"){
           AppendData();
       } else if (answer === "7"){
           updateData();
       } else if (answer === "8"){
           renameFiles();
       } else if (answer === "9"){
         rl.close();
       } else{
           console.log("Wrong Choice Please Enter Right Write");
           start();
       }
    });
 }
 
 var repeat = () => {
     instructions();
     start();
 };

 console.log("Welcome To File System Module");
 repeat();
