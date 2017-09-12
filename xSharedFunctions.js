//https://serverless.com/framework/docs/providers/aws/guide/testing/

const uuid = require('uuid');

class xSharedFunctions {  
    generateSuccessResponse(respCode, dataSuc){
        
            var responseCode = (respCode === null) ? 400:respCode ;
            var responseBody = "";
        
            var response = {
              statusCode: responseCode,
              body:       responseBody
            };
            
            response.body = {
                status:  "success",
                data: dataSuc
            };
            
            response.body = JSON.stringify(response.body);
        
            return response;
    }

    generateErrorResponse(respCode, dataErr){
        
            var responseCode = (respCode === null) ? 400:respCode ;
            var responseBody = "";
        
            var response = {
              statusCode: responseCode,
              body:       responseBody
            };
            
            response.body = {
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



  



