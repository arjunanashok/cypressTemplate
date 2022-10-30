const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const userHomeDir = require("os").homedir();


let yamlData;
let fileContents;
let fileName='libraryLists.yaml';
let newFrameWorkFolderName;
let newFrameworkFolderPath;

class CreateCypressFrameWork {


    async createFramework(){
        if (process.argv.length === 2) {
            console.error('Expected at least one argument!');
            process.exit(1);
        }

        console.log("sdfdsf", process.argv[2])
        newFrameWorkFolderName = process.argv[2];
        let folder_status = await this.createFrameworkFolder();
        console.log("status", folder_status)
        if(folder_status){
            console.log("Directory created ")
            this.copyTemplateFolder();
        }
        else{
            console.log("Directory NOT created ")
            process.exit(1);
        }
        
    }

    async createFrameworkFolder(){
        let status = false
        return new Promise((resolve, reject) => {
            newFrameworkFolderPath = userHomeDir.concat("/Desktop/").concat(newFrameWorkFolderName);
            if(!fs.existsSync(newFrameworkFolderPath)){
                console.log("Created new Framefolder", newFrameWorkFolderName, " in this path =>", newFrameworkFolderPath)
                fs.mkdirSync(newFrameworkFolderPath);
                status = true;
                resolve(status);
            }
        });
    }

    async copyTemplateFolder(){
        console.log("Copying the template folder to destination")
        try{
            fs.cp(process.cwd().concat("/cyp_example"), newFrameworkFolderPath, { recursive: true }, (err) => {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy completed!')
            });
        }
        catch (e){
            console.log("Error while copying template folder ", e)
        }

    }

    async installLibraries(){
        try{
            fileContents = fs.readFileSync(fileName, 'utf8');
            yamlData = yaml.loadAll(fileContents);
            this.getDevDependencyLibraries().then((devDependencyList)=> {
                for (const list of Object.entries(devDependencyList[0])) {
                    console.log("Installing dev depedency library ==> ", list[1])
                }                
            });
            this.getDependencyLibraries().then((DependencyList)=> {
                for (const list of Object.entries(DependencyList[0])) {
                    console.log("Installing runtime depedency library =>", process.cwd())
                    
                    
                }                
            });    
        }
        catch (e)  {
            console.log(e)

        }
    }
    
    async getDevDependencyLibraries(){
       const result = Object.entries(yamlData).map(item =>{
            return item[1].devdependencies;
        });
       return Promise.resolve(result);
    }

    async getDependencyLibraries(){
        const result = Object.entries(yamlData).map(item =>{
            return item[1].dependencies;
        });
        return Promise.resolve(result);
    }

}

var justAGuy = new CreateCypressFrameWork();
justAGuy.createFramework();
