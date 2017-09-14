//https://serverless.com/framework/docs/providers/aws/guide/testing/

const uuid = require('uuid');

class xSharedFunctions { 
    
    constructor(component,disableLogging){
        
        
                this.component      =  (component != true ) ? 'undefined' : component ;;
                this.disableLogging =  disableLogging
        
                this.sns = new AWS.SNS({
                    apiVersion: '2010-03-31',
                    region: process.env.REGION
                });
        
            }

    generateSuccessResponse(dataSuc, component,respCode){
            let that = this;

            var responseCode = (respCode != true ) ? 200 :respCode ;
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

    generateErrorResponse(dataErr, component, respCode){
            let that = this;

            var responseCode = (respCode != true ) ? 400:respCode ;
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

    logmsg(component, uniqueId, severity,  message, logEnabled) {
        let that = this;

        if(that.disableLogging === true){
            var timestamp = new Date().getTime();
            console.log(`[${component}] [${timestamp}] [${uniqueId}][${severity}] ${message}`);
        }

    }


}
  
module.exports = xSharedFunctions;



  



