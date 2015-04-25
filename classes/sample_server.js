/*
 The MIT License (see LICENSE)
 Copyright (C) 2014-2015 Teem2 LLC
*/

define(function(require, exports, module)
{
	var node = require("../classes/node")
	return node.extend("sample_server", function()
	{
		this.attribute("init", "event")
		this.attribute("load", "method")
		
		this.init = function()
		{
			console.log(this);
			console.color('~br~sample_server~~ object started on server\n')	
		}
		
		this.load = function()
		{
			console.log("load called!");
			return "payload";
		}
	})
})