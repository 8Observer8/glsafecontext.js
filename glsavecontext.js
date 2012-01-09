if(window["WebGLRenderingContext"]) {
	window["WebGLRenderingContext"]["prototype"]["getSaveContext"] = 
	(function (){
		"use strict"; 
		
		// var METHODS ... 
		/* this is autogenerated. Don't edit by hand! */ 
		var METHODS = 
		{"releaseShaderCompiler":[{"args":[]}],"getContextAttributes":[{"args":[]}],"isContextLost":[{"args":[]}],"getSupportedExtensions":[{"args":[]}],"getExtension":[{"args":[{"name":"name","type":"DOMString"}]}],"activeTexture":[{"args":[{"name":"texture","type":"GLenum"}]}],"attachShader":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"shader","type":"WebGLShader"}]}],"bindAttribLocation":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"index","type":"GLuint"},{"name":"name","type":"DOMString"}]}],"bindBuffer":[{"args":[{"name":"target","type":"GLenum"},{"name":"buffer","type":"WebGLBuffer"}]}],"bindFramebuffer":[{"args":[{"name":"target","type":"GLenum"},{"name":"framebuffer","type":"WebGLFramebuffer"}]}],"bindRenderbuffer":[{"args":[{"name":"target","type":"GLenum"},{"name":"renderbuffer","type":"WebGLRenderbuffer"}]}],"bindTexture":[{"args":[{"name":"target","type":"GLenum"},{"name":"texture","type":"WebGLTexture"}]}],"blendColor":[{"args":[{"name":"red","type":"GLclampf"},{"name":"green","type":"GLclampf"},{"name":"blue","type":"GLclampf"},{"name":"alpha","type":"GLclampf"}]}],"blendEquation":[{"args":[{"name":"mode","type":"GLenum"}]}],"blendEquationSeparate":[{"args":[{"name":"modeRGB","type":"GLenum"},{"name":"modeAlpha","type":"GLenum"}]}],"blendFunc":[{"args":[{"name":"sfactor","type":"GLenum"},{"name":"dfactor","type":"GLenum"}]}],"blendFuncSeparate":[{"args":[{"name":"srcRGB","type":"GLenum"},{"name":"dstRGB","type":"GLenum"},{"name":"srcAlpha","type":"GLenum"},{"name":"dstAlpha","type":"GLenum"}]}],"bufferData":[{"args":[{"name":"target","type":"GLenum"},{"name":"size","type":"GLsizeiptr"},{"name":"usage","type":"GLenum"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"data","type":"ArrayBufferView"},{"name":"usage","type":"GLenum"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"data","type":"ArrayBuffer"},{"name":"usage","type":"GLenum"}]}],"bufferSubData":[{"args":[{"name":"target","type":"GLenum"},{"name":"offset","type":"GLintptr"},{"name":"data","type":"ArrayBufferView"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"offset","type":"GLintptr"},{"name":"data","type":"ArrayBuffer"}]}],"checkFramebufferStatus":[{"args":[{"name":"target","type":"GLenum"}]}],"clear":[{"args":[{"name":"mask","type":"GLbitfield"}]}],"clearColor":[{"args":[{"name":"red","type":"GLclampf"},{"name":"green","type":"GLclampf"},{"name":"blue","type":"GLclampf"},{"name":"alpha","type":"GLclampf"}]}],"clearDepth":[{"args":[{"name":"depth","type":"GLclampf"}]}],"clearStencil":[{"args":[{"name":"s","type":"GLint"}]}],"colorMask":[{"args":[{"name":"red","type":"GLboolean"},{"name":"green","type":"GLboolean"},{"name":"blue","type":"GLboolean"},{"name":"alpha","type":"GLboolean"}]}],"compileShader":[{"args":[{"name":"shader","type":"WebGLShader"}]}],"copyTexImage2D":[{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"internalformat","type":"GLenum"},{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"},{"name":"border","type":"GLint"}]}],"copyTexSubImage2D":[{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"xoffset","type":"GLint"},{"name":"yoffset","type":"GLint"},{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"}]}],"createBuffer":[{"args":[]}],"createFramebuffer":[{"args":[]}],"createProgram":[{"args":[]}],"createRenderbuffer":[{"args":[]}],"createShader":[{"args":[{"name":"type","type":"GLenum"}]}],"createTexture":[{"args":[]}],"cullFace":[{"args":[{"name":"mode","type":"GLenum"}]}],"deleteBuffer":[{"args":[{"name":"buffer","type":"WebGLBuffer"}]}],"deleteFramebuffer":[{"args":[{"name":"framebuffer","type":"WebGLFramebuffer"}]}],"deleteProgram":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"deleteRenderbuffer":[{"args":[{"name":"renderbuffer","type":"WebGLRenderbuffer"}]}],"deleteShader":[{"args":[{"name":"shader","type":"WebGLShader"}]}],"deleteTexture":[{"args":[{"name":"texture","type":"WebGLTexture"}]}],"depthFunc":[{"args":[{"name":"func","type":"GLenum"}]}],"depthMask":[{"args":[{"name":"flag","type":"GLboolean"}]}],"depthRange":[{"args":[{"name":"zNear","type":"GLclampf"},{"name":"zFar","type":"GLclampf"}]}],"detachShader":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"shader","type":"WebGLShader"}]}],"disable":[{"args":[{"name":"cap","type":"GLenum"}]}],"disableVertexAttribArray":[{"args":[{"name":"index","type":"GLuint"}]}],"drawArrays":[{"args":[{"name":"mode","type":"GLenum"},{"name":"first","type":"GLint"},{"name":"count","type":"GLsizei"}]}],"drawElements":[{"args":[{"name":"mode","type":"GLenum"},{"name":"count","type":"GLsizei"},{"name":"type","type":"GLenum"},{"name":"offset","type":"GLintptr"}]}],"enable":[{"args":[{"name":"cap","type":"GLenum"}]}],"enableVertexAttribArray":[{"args":[{"name":"index","type":"GLuint"}]}],"finish":[{"args":[]}],"flush":[{"args":[]}],"framebufferRenderbuffer":[{"args":[{"name":"target","type":"GLenum"},{"name":"attachment","type":"GLenum"},{"name":"renderbuffertarget","type":"GLenum"},{"name":"renderbuffer","type":"WebGLRenderbuffer"}]}],"framebufferTexture2D":[{"args":[{"name":"target","type":"GLenum"},{"name":"attachment","type":"GLenum"},{"name":"textarget","type":"GLenum"},{"name":"texture","type":"WebGLTexture"},{"name":"level","type":"GLint"}]}],"frontFace":[{"args":[{"name":"mode","type":"GLenum"}]}],"generateMipmap":[{"args":[{"name":"target","type":"GLenum"}]}],"getActiveAttrib":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"index","type":"GLuint"}]}],"getActiveUniform":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"index","type":"GLuint"}]}],"getAttachedShaders":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"getAttribLocation":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"name","type":"DOMString"}]}],"getParameter":[{"args":[{"name":"pname","type":"GLenum"}]}],"getBufferParameter":[{"args":[{"name":"target","type":"GLenum"},{"name":"pname","type":"GLenum"}]}],"getError":[{"args":[]}],"getFramebufferAttachmentParameter":[{"args":[{"name":"target","type":"GLenum"},{"name":"attachment","type":"GLenum"},{"name":"pname","type":"GLenum"}]}],"getProgramParameter":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"pname","type":"GLenum"}]}],"getProgramInfoLog":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"getRenderbufferParameter":[{"args":[{"name":"target","type":"GLenum"},{"name":"pname","type":"GLenum"}]}],"getShaderParameter":[{"args":[{"name":"shader","type":"WebGLShader"},{"name":"pname","type":"GLenum"}]}],"getShaderInfoLog":[{"args":[{"name":"shader","type":"WebGLShader"}]}],"getShaderSource":[{"args":[{"name":"shader","type":"WebGLShader"}]}],"getTexParameter":[{"args":[{"name":"target","type":"GLenum"},{"name":"pname","type":"GLenum"}]}],"getUniform":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"location","type":"WebGLUniformLocation"}]}],"getUniformLocation":[{"args":[{"name":"program","type":"WebGLProgram"},{"name":"name","type":"DOMString"}]}],"getVertexAttrib":[{"args":[{"name":"index","type":"GLuint"},{"name":"pname","type":"GLenum"}]}],"getVertexAttribOffset":[{"args":[{"name":"index","type":"GLuint"},{"name":"pname","type":"GLenum"}]}],"hint":[{"args":[{"name":"target","type":"GLenum"},{"name":"mode","type":"GLenum"}]}],"isBuffer":[{"args":[{"name":"buffer","type":"WebGLBuffer"}]}],"isEnabled":[{"args":[{"name":"cap","type":"GLenum"}]}],"isFramebuffer":[{"args":[{"name":"framebuffer","type":"WebGLFramebuffer"}]}],"isProgram":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"isRenderbuffer":[{"args":[{"name":"renderbuffer","type":"WebGLRenderbuffer"}]}],"isShader":[{"args":[{"name":"shader","type":"WebGLShader"}]}],"isTexture":[{"args":[{"name":"texture","type":"WebGLTexture"}]}],"lineWidth":[{"args":[{"name":"width","type":"GLfloat"}]}],"linkProgram":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"pixelStorei":[{"args":[{"name":"pname","type":"GLenum"},{"name":"param","type":"GLint"}]}],"polygonOffset":[{"args":[{"name":"factor","type":"GLfloat"},{"name":"units","type":"GLfloat"}]}],"readPixels":[{"args":[{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"pixels","type":"ArrayBufferView"}]}],"renderbufferStorage":[{"args":[{"name":"target","type":"GLenum"},{"name":"internalformat","type":"GLenum"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"}]}],"sampleCoverage":[{"args":[{"name":"value","type":"GLclampf"},{"name":"invert","type":"GLboolean"}]}],"scissor":[{"args":[{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"}]}],"shaderSource":[{"args":[{"name":"shader","type":"WebGLShader"},{"name":"source","type":"DOMString"}]}],"stencilFunc":[{"args":[{"name":"func","type":"GLenum"},{"name":"ref","type":"GLint"},{"name":"mask","type":"GLuint"}]}],"stencilFuncSeparate":[{"args":[{"name":"face","type":"GLenum"},{"name":"func","type":"GLenum"},{"name":"ref","type":"GLint"},{"name":"mask","type":"GLuint"}]}],"stencilMask":[{"args":[{"name":"mask","type":"GLuint"}]}],"stencilMaskSeparate":[{"args":[{"name":"face","type":"GLenum"},{"name":"mask","type":"GLuint"}]}],"stencilOp":[{"args":[{"name":"fail","type":"GLenum"},{"name":"zfail","type":"GLenum"},{"name":"zpass","type":"GLenum"}]}],"stencilOpSeparate":[{"args":[{"name":"face","type":"GLenum"},{"name":"fail","type":"GLenum"},{"name":"zfail","type":"GLenum"},{"name":"zpass","type":"GLenum"}]}],"texImage2D":[{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"internalformat","type":"GLenum"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"},{"name":"border","type":"GLint"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"pixels","type":"ArrayBufferView"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"internalformat","type":"GLenum"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"pixels","type":"ImageData"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"internalformat","type":"GLenum"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"image","type":"HTMLImageElement"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"internalformat","type":"GLenum"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"canvas","type":"HTMLCanvasElement"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"internalformat","type":"GLenum"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"video","type":"HTMLVideoElement"}]}],"texParameterf":[{"args":[{"name":"target","type":"GLenum"},{"name":"pname","type":"GLenum"},{"name":"param","type":"GLfloat"}]}],"texParameteri":[{"args":[{"name":"target","type":"GLenum"},{"name":"pname","type":"GLenum"},{"name":"param","type":"GLint"}]}],"texSubImage2D":[{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"xoffset","type":"GLint"},{"name":"yoffset","type":"GLint"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"pixels","type":"ArrayBufferView"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"xoffset","type":"GLint"},{"name":"yoffset","type":"GLint"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"pixels","type":"ImageData"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"xoffset","type":"GLint"},{"name":"yoffset","type":"GLint"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"image","type":"HTMLImageElement"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"xoffset","type":"GLint"},{"name":"yoffset","type":"GLint"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"canvas","type":"HTMLCanvasElement"}]},{"args":[{"name":"target","type":"GLenum"},{"name":"level","type":"GLint"},{"name":"xoffset","type":"GLint"},{"name":"yoffset","type":"GLint"},{"name":"format","type":"GLenum"},{"name":"type","type":"GLenum"},{"name":"video","type":"HTMLVideoElement"}]}],"uniform1f":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLfloat"}]}],"uniform1fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"FloatArray"}]}],"uniform1i":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLint"}]}],"uniform1iv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"Int32Array"}]}],"uniform2f":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLfloat"},{"name":"y","type":"GLfloat"}]}],"uniform2fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"FloatArray"}]}],"uniform2i":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLint"},{"name":"y","type":"GLint"}]}],"uniform2iv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"Int32Array"}]}],"uniform3f":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLfloat"},{"name":"y","type":"GLfloat"},{"name":"z","type":"GLfloat"}]}],"uniform3fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"FloatArray"}]}],"uniform3i":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"z","type":"GLint"}]}],"uniform3iv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"Int32Array"}]}],"uniform4f":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLfloat"},{"name":"y","type":"GLfloat"},{"name":"z","type":"GLfloat"},{"name":"w","type":"GLfloat"}]}],"uniform4fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"FloatArray"}]}],"uniform4i":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"z","type":"GLint"},{"name":"w","type":"GLint"}]}],"uniform4iv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"v","type":"Int32Array"}]}],"uniformMatrix2fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"transpose","type":"GLboolean"},{"name":"value","type":"FloatArray"}]}],"uniformMatrix3fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"transpose","type":"GLboolean"},{"name":"value","type":"FloatArray"}]}],"uniformMatrix4fv":[{"args":[{"name":"location","type":"WebGLUniformLocation"},{"name":"transpose","type":"GLboolean"},{"name":"value","type":"FloatArray"}]}],"useProgram":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"validateProgram":[{"args":[{"name":"program","type":"WebGLProgram"}]}],"vertexAttrib1f":[{"args":[{"name":"indx","type":"GLuint"},{"name":"x","type":"GLfloat"}]}],"vertexAttrib1fv":[{"args":[{"name":"indx","type":"GLuint"},{"name":"values","type":"FloatArray"}]}],"vertexAttrib2f":[{"args":[{"name":"indx","type":"GLuint"},{"name":"x","type":"GLfloat"},{"name":"y","type":"GLfloat"}]}],"vertexAttrib2fv":[{"args":[{"name":"indx","type":"GLuint"},{"name":"values","type":"FloatArray"}]}],"vertexAttrib3f":[{"args":[{"name":"indx","type":"GLuint"},{"name":"x","type":"GLfloat"},{"name":"y","type":"GLfloat"},{"name":"z","type":"GLfloat"}]}],"vertexAttrib3fv":[{"args":[{"name":"indx","type":"GLuint"},{"name":"values","type":"FloatArray"}]}],"vertexAttrib4f":[{"args":[{"name":"indx","type":"GLuint"},{"name":"x","type":"GLfloat"},{"name":"y","type":"GLfloat"},{"name":"z","type":"GLfloat"},{"name":"w","type":"GLfloat"}]}],"vertexAttrib4fv":[{"args":[{"name":"indx","type":"GLuint"},{"name":"values","type":"FloatArray"}]}],"vertexAttribPointer":[{"args":[{"name":"indx","type":"GLuint"},{"name":"size","type":"GLint"},{"name":"type","type":"GLenum"},{"name":"normalized","type":"GLboolean"},{"name":"stride","type":"GLsizei"},{"name":"offset","type":"GLintptr"}]}],"viewport":[{"args":[{"name":"x","type":"GLint"},{"name":"y","type":"GLint"},{"name":"width","type":"GLsizei"},{"name":"height","type":"GLsizei"}]}]}
		;
		
		
		
		var checkType = {
			//OpenGL Type                      JS Types 
			"ArrayBuffer"          : checkType("null", "ArrayBuffer", "Float32Array", "Int32Array", "Array"), 
			"ArrayBufferView"      : checkType("null", "ArrayBuffer", "Float32Array", "Int32Array", "Array"), 
			"DOMString"            : checkType("null", "string"), 
			"FloatArray"           : checkType("null", "Float32Array", "Array"), 
			"GLbitfield"           : checkType("number"), 
			"GLboolean"            : checkType("boolean"),  
			"GLclampf"             : checkType("number"), 
			"GLenum"               : checkType("number"), 
			"GLfloat"              : checkType("number"), 
			"GLint"                : checkType("number"), 
			"GLintptr"             : checkType("number"), 
			"GLsizei"              : checkType("number"), 
			"GLsizeiptr"           : checkType("number"), 
			"GLuint"               : checkType("number"),
			"HTMLCanvasElement"    : checkType("null", "HTMLCanvasElement"),
			"HTMLImageElement"     : checkType("null", "HTMLImageElement"), 
			"HTMLVideoElement"     : checkType("null", "HTMLVideoElement"), 
			"ImageData"            : checkType("null", "ImageData"), 
			"Int32Array"           : checkType("null", "Int32Array", "Array"), 
			"WebGLBuffer"          : checkType("null", "WebGLBuffer"), 
			"WebGLFrameBuffer"     : checkType("null", "WebGLFrameBuffer"), 
			"WebGLProgram"         : checkType("null", "WebGLProgram"), 
			"WebGLRenderbuffer"    : checkType("null", "WebGLRenderbuffer"), 
			"WebGLShader"          : checkType("null", "WebGLShader"), 
			"WebGLTexture"         : checkType("null", "WebGLTexture"), 
			"WebGLUniformLocation" : checkType("null", "WebGLUniformLocation"), 
			"float"                : checkType("number"), 
			"long"                 : checkType("number") 
		};
		
		var checkValue = {
			//OpenGL Type            Way to check the correct value 
			"ArrayBuffer"          : isArrayBuffer,  
			"ArrayBufferView"      : isArrayBuffer, 
			"DOMString"            : ok, 
			"FloatArray"           : isFloatArray, 
			"GLbitfield"           : isInt, 
			"GLboolean"            : isBool, 
			"GLclampf"             : isClampf, 
			"GLenum"               : isInt, 
			"GLfloat"              : isFloat, 
			"GLint"                : isInt, 
			"GLintptr"             : isInt, 
			"GLsizei"              : isInt, 
			"GLsizeiptr"           : isInt, 
			"GLuint"               : isInt, 
			"HTMLCanvasElement"    : ok, 
			"HTMLImageElement"     : ok, 
			"HTMLVideoElement"     : ok, 
			"ImageData"            : ok, 
			"Int32Array"           : isInt32Array, 
			"WebGLBuffer"          : ok, 
			"WebGLFrameBuffer"     : ok, 
			"WebGLProgram"         : ok, 
			"WebGLRenderbuffer"    : ok, 
			"WebGLShader"          : ok, 
			"WebGLTexture"         : ok, 
			"WebGLUniformLocation" : ok, 
			"float"                : isFloat, 
			"long"                 : isInt
		};
		
		function saveContext (gl) { 
			var key, value, i, pair, savegl, map, keys; 
		
			keys = []; 
		
			for	(key in gl) {
				if(key === "getSaveContext") {
					continue; //ignore myself
				}
				keys.push(key); 
			}
		
			map = keys.map(function(key) {
				var val, type; 
				val = gl[key]; 
				type = typeof val; 
		
				if(type === "function") {
					return [key, createSaveCaller(gl, val, key)]; 
				}
			
				return [key]; 
			});
		
			savegl = { "isSaveContext" : true }; 
		
			//Add static properties. 
			for(i = 0; i != map.length; i++) {
				pair = map[i]; 
				key = pair[0]; 
				value = pair[1]; 
			
				if(value) {
					//override behaviour with my own function 
					savegl[key] = value; 
				} else {
					(function(key) { 
						//same behaviour as the original gl context. 
						Object.defineProperty(savegl, key, {
							get : function() { return gl[key]; }, 
							set : function(v) { gl[key] = v; }, 
							enumerable : true 
						}); 
					}(key)); 
				}
			}
		
			return savegl; 
		}
		
		function createSaveCaller (gl, func, funcname) {
			var glMethods = METHODS[funcname]; 
			if( !glMethods ) {
				console.warn("couldn't find reference definition for method " + funcname + "."); 
				//default behaviour
				return function() {
					return func.apply(gl, arguments); 	
				};
			}
		
			return function() {
				var funcDef = getFunctionDef(argumentsToArray(arguments), glMethods); 
		
				if(!funcDef) {
					throw new Error("couldn't apply arguments (" 
						+ argumentsToArray(arguments).join(", ") 
						+ ") to any of the possible schemas:\n" 
						+ glMethods.map(function(m) { 
							return "(" + m.args.map(function(arg) { return arg.type; }).join(", ") + ")" 
						  }).join("\n,") 
					); 
				}
		
				testArgumentValues(argumentsToArray(arguments), funcDef, funcname);
				
				//call original function 
				return func.apply(gl, arguments); 
			};
		}
		
		function argumentsToArray(args) {
			return Array.prototype.slice.call(args); 
		}
		
		function testArgumentValues(args, funcDef, funcname) {
			var arg, type, name, i; 
			//check Arguments 
			//check if type is correct
			for( i=0; i != args.length; i++) {
				arg = args[i]; 
				type = funcDef.args[i].type; 
				name = funcDef.args[i].name; 
		
				if(!checkValue[type](arg)) {
					throw new Error("Argument '" + name + "' in function '" + funcname + "' was expected to be of type '" + type + "' but instead was called with value: " + arg); 
				}
			}
		}
		
		function getFunctionDef(args, glMethods) {
				var args, glMethod, glType; 
				//get Correct reference function
				args = args.map(function(arg) { return arg; }); ; 
		
				return glMethods.filter(function(glMethod) {				
					if(glMethod.args.length !== args.length) { 
						return false; 
					} 
		
					var i = 0; 
					return glMethod.args.every(function(glarg) {
						var ret = checkType[glarg.type](args[i++]); 
						return ret; 
					});
				})[0]; //undefined for no matches 
		}
		
		// ~~~ Type checking methods ~~~  
		function checkType() {
			var possibleTypes = argumentsToArray(arguments).map(function(type) { return type.toLowerCase(); });
			return function(value) {
				var valueType = toType(value); 
				return possibleTypes.some(function(type) { return valueType === type; }); 
			}
		}
		
		function ok() {
			//Value allready passed the typecheck and so the value is also correct. 
			return true; 
		}
		
		function isArrayBuffer(v) {
			return isFloatArray(v) || isInt32Array(v) || toType(v) === "arraybuffer" || toType(v) === "arraybufferview"; 
		}
		
		function isFloatArray(v) {
			var type = toType(v); 
			if(type === "float32array" || type === "floatarray") {
				return true;
			}
		
			if(type === "array") {
				for(var i = 0; i != v.length; i++) {
					if(!isFloat(v[i])) {
						return false; 
					}
				}
				return true; 
			}
		
			return false; 
		}
		
		function isInt32Array(v) {
			var type = toType(v); 
			if(type === "int32array") {
				return true; 
			}
		
			if(type === "array") {
				for(var i = 0; i != v.length; i++) {
					if(!isInt(v[i])) {
						return false; 
					}
				}
				return true; 
			}
		
			return false; 
		}
		
		function isString(v) {
			return v === null || typeof v === "string"; 
		}
		
		function isFloat(v) {
			return typeof v === "number"; 
		}
		
		function isInt(v) {
			return typeof v === "number" && v === ~~v; 
		}
		
		function isBool(v) {
			return v === true || v === false; 
		}
		
		function isClampf(v) {
			return isFloat(v) && v >= 0 && v <= 1; 
		}
		
		//Fixing typeof http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/ 
		function toType (obj) {
			return ({}).toString.call(obj).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase();
		}
		

		return function() { return saveContext(this); }; 
	}()); 
}


