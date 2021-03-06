# node-red-contrib-norelite-homeassistant [![npm version](https://badge.fury.io/js/node-red-contrib-norelite-homeassistant.svg)](https://badge.fury.io/js/node-red-contrib-norelite-homeassistant)
A set of Node-RED helper nodes to be used with [node-red-contrib-norelite](https://www.npmjs.com/package/node-red-contrib-norelite) and [node-red-contrib-home-assistant-websocket](https://www.npmjs.com/package/node-red-contrib-home-assistant-websocket).

## Install
```bash
cd ~/.node-red
npm install node-red-contrib-norelite-homeassistant
```
## Get started
Start by taking a look at the exmples that you get when you install the bundle. Examples are available through the Node-RED UI at **Import -> Examples**. 

Note that you need to install [node-red-contrib-norelite](https://www.npmjs.com/package/node-red-contrib-norelite) and [node-red-contrib-home-assistant-websocket](https://www.npmjs.com/package/node-red-contrib-home-assistant-websocket) first.

## What is it?
Helper nodes to build the message to managed calls to Home Assistant such as turning on/off a light or a switch. The input to the node is from a Norelite node that generates a message intended to steer lights or switches to ease implementing your home automation requirements.
