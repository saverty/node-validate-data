
# NODE-VALIDATE-DATA

  

## Quick start

  **Installation**
 

    npm install node-validate-data --save

 **Validate email**
  

    var validate = require('node-validate-data');
	validate.email('steve.averty1992@gmail.com');
	
 **Validate string**
  

    var validate = require('node-validate-data');
	validate.string('Hello');
	
**Validate integer**

    var validate = require('node-validate-data');
	validate.integer(26);
	
**Validate password**

    var validate = require('node-validate-data');
    // 6 is the min length of password
	validate.password('secret', 6);

**Validate firstname**

    var validate = require('node-validate-data');
	validate.firstname('steve');