import xSharedFunctions from '../xRes/shared/xSharedFunctions'
import xSnsEndpointManager from '../xRes/xSnsEndpointManager'

var xSharedFnc = new xSharedFunctions()

var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;

var AWS = require('aws-sdk-mock');

describe('xSharedFunctions', function() {


    describe('#generateErrorResponse()', function() {

            it('should always return value for component', function(done){
                let result = xSharedFnc.generateErrorResponse('e');
                
                expect(result.body).to.equal('{"component":"undefined","status":"error","error":"e"}');
            
                done();

            });

            it('should return default status code', function(done){
                let x = xSharedFnc.generateErrorResponse('e');

                expect(x.statusCode).to.equal(400);
                expect(x.body).to.equal('{"component":"undefined","status":"error","error":"e"}');
                
                done();
            });

            it('should return specific status code if provided', function(done){
                let x = xSharedFnc.generateErrorResponse('e',500);

                expect(x.statusCode).to.equal(500);
                expect(x.body).to.equal('{"component":"undefined","status":"error","error":"e"}');
                
                done();
            });
      });
});
