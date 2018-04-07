process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    console.log("Check Node version: '/version', check system language: '/language', quit app: '/exit'")
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
        switch(instruction) {
        	case '/exit':
            	process.stdout.write('Quitting app!\n');
            	process.exit();
                break;
            
            case '/version':
                console.log('Node version: ' + process.versions.node);
                break;
            
            case '/language':
                var system = process.platform;
                if (system === "darwin") {
                    console.log("The system language is: " + process.env.LANG);
                } else if (system === "linux") {
                    console.log("The system language is: " + process.env.LANG);
                } else {
                    process.stderr.write('The language info is available only for OS or Linux users.\n');
                } 
               break;
        	default:
            	process.stderr.write('Wrong instruction!\n');
        }
    }
});
