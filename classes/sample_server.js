/*
 The MIT License (see LICENSE)
 Copyright (C) 2014-2015 Teem2 LLC
*/

define(function(require, exports, module)
{
	var node = require("$CLASSES/node")
	return node.extend("sample_server", function()
	{
		this.attribute("init", "event")
		
		this.init = function()
		{
			console.log(this);
			console.color('~br~sample_server~~ object started on server\n')	
		}
		
		this.load = function(param)
		{
			console.log("load called! incoming param: "  + param);
			return "payload";
		}
	})
})