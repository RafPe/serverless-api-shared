//https://serverless.com/framework/docs/providers/aws/guide/testing/

const uuid = require('uuid');

class xSharedFunctions {  
    generateSuccessResponse(respCode, dataSuc, component){
        
            var responseCode = (respCode === null) ? 200:respCode ;
            var responseBody = "";
        
            var response = {
              statusCode: responseCode,
              body:       responseBody
            };
            
            response.body = {
                component: component,
                status:  "success",
                data: dataSuc
            };
            
            response.body = JSON.stringify(response.body);
        
            return response;
    }

    generateErrorResponse(respCode, dataErr, component){
        
            var responseCode = (respCode === null) ? 400:respCode ;
            var responseBody = "";
        
            var response = {
              statusCode: responseCode,
              body:       responseBody
            };
            
            response.body = {
                component: component,
                status:  "error",
                error:   dataErr,
            };
            
            response.body = JSON.stringify(response.body);
        
            return response;
    }

    isDef(v) {
        return v !== undefined && v !== null;
    }

    logmsg(component, uniqueId, severity,  message) {
        var timestamp = new Date().getTime();
        console.log(`[${component}] [${timestamp}] [${uniqueId}][${severity}] ${message}`);
    }


}
  
module.exports = xSharedFunctions;



  



