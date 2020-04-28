/*jslint node: true */
module.exports = function (RED) {
    "use strict";
    var common = require('./lib/common');
    var Message = require("./lib/msg");
    var Helper = require("./lib/helper");
  
  
    /*
        Defines the output node for a rule. Copied to a large extent from 66-mongodb.js
    */
    function NoreliteHassLightOutNode(config) {
      RED.nodes.createNode(this, config);
      var self = this;
      self.toggle = config.toggle;
  
      common.setStatus(self);
  
      /* When a message is received */
      self.on("input", function (msg) {
        var omsg = new Message(self, msg);
        //Convert color to RGB
        var color = Helper.getColorHexToRgb(omsg.getColor());
        
        var nmsg = {
            payload: {
                "service" : "",
                "data" : {
                    "rgb_color" : [color.r, color.g, color.b],
                    "brightness" : parseInt(omsg.getDim()/100*255),
                    "transition": omsg.getTransition()
                }    
            }
        };

        if (omsg.is_enabled()){
            if (self.toggle){
                nmsg.payload.service = "toggle";
                common.setStatus(self, 1, "Toggle " + omsg.getDim() + "%");
            } else {
                nmsg.payload.service = "turn_on";
                common.setStatus(self, 1, "On " + omsg.getDim() + "%");
            }
        } else {
            nmsg.payload.service = "turn_off";
            common.setStatus(self, -1, "Off");
        }
  
        //Also passing the original instruction if
        nmsg.instruction = omsg.toMessageObject();
  
        self.send(nmsg);
      });
  
    }
    RED.nodes.registerType("lights-out", NoreliteHassLightOutNode);
  };
  