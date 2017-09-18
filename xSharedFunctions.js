//https://serverless.com/framework/docs/providers/aws/guide/testing/

const uuid = require('uuid');

class xSharedFunctions { 
    
    constructor(component,callback,disableLogging){
        
                this.callback       =  callback;
                this.component      =  (component === null || component === undefined ) ? 'undefined' : component ;
                this.disableLogging =  disableLogging
                
            }

    generateSuccessResponse(dataSuc,respCode){
            let that = this;

            var responseCode = (respCode === null || respCode === undefined  ) ? 200:respCode ;
            var responseBody = "";
        
            var response = {
              statusCode: responseCode,
              body:       responseBody
            };
            
            response.body = {
                component: that.component,
                status:  "success",
                data: dataSuc
            };
            
            response.body = JSON.stringify(response.body);
        
            return response;
    }

    generateErrorResponse(dataErr, respCode){
            let that = this;

            var responseCode = (respCode === null || respCode === undefined  ) ? 400:respCode ;
            var responseBody = "";
        
            var response = {
              statusCode: responseCode,
              body:       responseBody
            };
            
            response.body = {
                component: that.component,
                status:  "error",
                error:   dataErr,
            };
            
            response.body = JSON.stringify(response.body);
        
            return response;
    }

    isDef(v) {
        return v !== undefined && v !== null;
    }

    logmsg(uniqueId, severity,  message) {
        let that = this;


        if(that.disableLogging !== true){
            var timestamp = new Date().getTime();
            console.log(`[${that.component}] [${timestamp}] [${uniqueId}][${severity}] ${message}`);
        }

    }


}
  
module.exports = xSharedFunctions;



  



