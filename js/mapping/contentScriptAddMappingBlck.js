var _CSS = `
	<style id="CSS_TLG_CSS">
		/** Trumbowyg v2.10.0 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
		#trumbowyg-icons,#trumbowyg-icons svg{height:0;width:0}#trumbowyg-icons{overflow:hidden;visibility:hidden}.trumbowyg-box *,.trumbowyg-box ::after,.trumbowyg-box ::before{box-sizing:border-box}.trumbowyg-box svg{width:17px;height:100%;fill:#222}.trumbowyg-box,.trumbowyg-editor{display:block;position:relative;border:1px solid #DDD;width:100%;min-height:300px;margin:17px auto}.trumbowyg-box .trumbowyg-editor{margin:0 auto}.trumbowyg-box.trumbowyg-fullscreen{background:#FEFEFE;border:none!important}.trumbowyg-editor,.trumbowyg-textarea{position:relative;box-sizing:border-box;padding:20px;min-height:300px;width:100%;border-style:none;resize:none;outline:0;overflow:auto}.trumbowyg-editor.trumbowyg-autogrow-on-enter,.trumbowyg-textarea.trumbowyg-autogrow-on-enter{transition:height .3s ease-out}.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:transparent!important;text-shadow:0 0 7px #333}@media screen and (min-width:0 \0){.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(200,200,200,.6)!important}}@supports (-ms-accelerator:true){.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(200,200,200,.6)!important}}.trumbowyg-box-blur .trumbowyg-editor hr,.trumbowyg-box-blur .trumbowyg-editor img{opacity:.2}.trumbowyg-textarea{position:relative;display:block;overflow:auto;border:none;font-size:14px;font-family:Inconsolata,Consolas,Courier,"Courier New",sans-serif;line-height:18px}.trumbowyg-box.trumbowyg-editor-visible .trumbowyg-textarea{height:1px!important;width:25%;min-height:0!important;padding:0!important;background:0 0;opacity:0!important}.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-textarea{display:block}.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-editor{display:none}.trumbowyg-box.trumbowyg-disabled .trumbowyg-textarea{opacity:.8;background:0 0}.trumbowyg-editor[contenteditable=true]:empty:not(:focus)::before{content:attr(placeholder);color:#999;pointer-events:none}.trumbowyg-button-pane{width:100%;min-height:36px;background:#ecf0f1;border-bottom:1px solid #d7e0e2;margin:0;padding:0 5px;position:relative;list-style-type:none;line-height:10px;backface-visibility:hidden;z-index:11}.trumbowyg-button-pane::after{content:" ";display:block;position:absolute;top:36px;left:0;right:0;width:100%;height:1px;background:#000}.trumbowyg-button-pane .trumbowyg-button-group{display:block;float:left}.trumbowyg-button-pane .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:transparent}.trumbowyg-button-pane .trumbowyg-button-group::after{content:" ";display:inline-block;width:1px;background:#d7e0e2;margin:0 5px;height:35px;vertical-align:top}.trumbowyg-button-pane .trumbowyg-button-group:last-child::after{content:none}.trumbowyg-button-pane button{display:inline-block;position:relative;width:35px;height:35px;padding:1px 6px!important;margin-bottom:1px;overflow:hidden;border:none;cursor:pointer;background:0 0;vertical-align:middle;transition:background-color 150ms,opacity 150ms}.trumbowyg-button-pane button.trumbowyg-textual-button{width:auto;line-height:35px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.trumbowyg-button-pane button.trumbowyg-disable,.trumbowyg-button-pane.trumbowyg-disable button:not(.trumbowyg-not-disable):not(.trumbowyg-active),.trumbowyg-disabled .trumbowyg-button-pane button:not(.trumbowyg-not-disable):not(.trumbowyg-viewHTML-button){opacity:.2;cursor:default}.trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::before,.trumbowyg-disabled .trumbowyg-button-pane .trumbowyg-button-group::before{background:#e3e9eb}.trumbowyg-button-pane button.trumbowyg-active,.trumbowyg-button-pane button:not(.trumbowyg-disable):focus,.trumbowyg-button-pane button:not(.trumbowyg-disable):hover{background-color:#FFF;outline:0}.trumbowyg-button-pane .trumbowyg-open-dropdown::after{display:block;content:" ";position:absolute;top:25px;right:3px;height:0;width:0;border:3px solid transparent;border-top-color:#555}.trumbowyg-button-pane .trumbowyg-open-dropdown.trumbowyg-textual-button{padding-left:10px!important;padding-right:18px!important}.trumbowyg-button-pane .trumbowyg-open-dropdown.trumbowyg-textual-button::after{top:17px;right:7px}.trumbowyg-modal,.trumbowyg-modal-box{top:0;left:50%;transform:translateX(-50%);backface-visibility:hidden;position:absolute}.trumbowyg-button-pane .trumbowyg-right{float:right}.trumbowyg-dropdown{width:200px;border:1px solid #ecf0f1;padding:5px 0;border-top:none;background:#FFF;margin-left:-1px;box-shadow:rgba(0,0,0,.1) 0 2px 3px;z-index:12}.trumbowyg-dropdown button{display:block;width:100%;height:35px;line-height:35px;text-decoration:none;background:#FFF;padding:0 10px;color:#333!important;border:none;cursor:pointer;text-align:left;font-size:15px;transition:all 150ms}.trumbowyg-dropdown button:focus,.trumbowyg-dropdown button:hover{background:#ecf0f1}.trumbowyg-dropdown button svg{float:left;margin-right:14px}.trumbowyg-modal{max-width:520px;width:100%;height:350px;z-index:12;overflow:hidden}.trumbowyg-modal-box{max-width:500px;width:calc(100% - 20px);padding-bottom:45px;z-index:1;background-color:#FFF;text-align:center;font-size:14px;box-shadow:rgba(0,0,0,.2) 0 2px 3px}.trumbowyg-modal-box .trumbowyg-modal-title{font-size:24px;font-weight:700;margin:0 0 20px;padding:15px 0 13px;display:block;border-bottom:1px solid #EEE;color:#333;background:#fbfcfc}.trumbowyg-modal-box .trumbowyg-progress{width:100%;height:3px;position:absolute;top:58px}.trumbowyg-modal-box .trumbowyg-progress .trumbowyg-progress-bar{background:#2BC06A;width:0;height:100%;transition:width 150ms linear}.trumbowyg-modal-box label{display:block;position:relative;margin:15px 12px;height:29px;line-height:29px;overflow:hidden}.trumbowyg-modal-box label .trumbowyg-input-infos{display:block;text-align:left;height:25px;line-height:25px;transition:all 150ms}.trumbowyg-modal-box label .trumbowyg-input-infos span{display:block;color:#69878f;background-color:#fbfcfc;border:1px solid #DEDEDE;padding:0 7px;width:150px}.trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error{color:#e74c3c}.trumbowyg-modal-box label.trumbowyg-input-error input,.trumbowyg-modal-box label.trumbowyg-input-error textarea{border:1px solid #e74c3c}.trumbowyg-modal-box label.trumbowyg-input-error .trumbowyg-input-infos{margin-top:-27px}.trumbowyg-modal-box label input{position:absolute;top:0;right:0;height:27px;line-height:27px;border:1px solid #DEDEDE;background:#fff;font-size:14px;max-width:330px;width:70%;padding:0 7px;transition:all 150ms}.trumbowyg-modal-box label input:focus,.trumbowyg-modal-box label input:hover{outline:0;border:1px solid #95a5a6}.trumbowyg-modal-box label input:focus{background:#fbfcfc}.trumbowyg-modal-box label input[type=checkbox]{left:5px;top:5px;right:auto}.trumbowyg-modal-box label input[type=checkbox]+.trumbowyg-input-infos span{width:auto;padding-left:25px}.trumbowyg-modal-box .error{margin-top:25px;display:block;color:red}.trumbowyg-modal-box .trumbowyg-modal-button{position:absolute;bottom:10px;right:0;text-decoration:none;color:#FFF;display:block;width:100px;height:35px;line-height:33px;margin:0 10px;background-color:#333;border:none;cursor:pointer;font-family:"Trebuchet MS",Helvetica,Verdana,sans-serif;font-size:16px;transition:all 150ms}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit{right:110px;background:#2bc06a}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus,.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover{background:#40d47e;outline:0}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active{background:#25a25a}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset{color:#555;background:#e6e6e6}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus,.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover{background:#fbfbfb;outline:0}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active{background:#d5d5d5}.trumbowyg-overlay{position:absolute;background-color:rgba(255,255,255,.5);height:100%;width:100%;left:0;display:none;top:0;z-index:10}body.trumbowyg-body-fullscreen{overflow:hidden}.trumbowyg-fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;z-index:99999}.trumbowyg-fullscreen .trumbowyg-editor,.trumbowyg-fullscreen.trumbowyg-box{border:none}.trumbowyg-fullscreen .trumbowyg-editor,.trumbowyg-fullscreen .trumbowyg-textarea{height:calc(100% - 37px)!important;overflow:auto}.trumbowyg-fullscreen .trumbowyg-overlay{height:100%!important}.trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:#222;fill:transparent}.trumbowyg-editor embed,.trumbowyg-editor img,.trumbowyg-editor object,.trumbowyg-editor video{max-width:100%}.trumbowyg-editor img,.trumbowyg-editor video{height:auto}.trumbowyg-editor img{cursor:move}.trumbowyg-editor.trumbowyg-reset-css{background:#FEFEFE!important;font-family:"Trebuchet MS",Helvetica,Verdana,sans-serif!important;font-size:14px!important;line-height:1.45em!important;color:#333}.trumbowyg-editor.trumbowyg-reset-css a{color:#15c!important;text-decoration:underline!important}.trumbowyg-editor.trumbowyg-reset-css blockquote,.trumbowyg-editor.trumbowyg-reset-css div,.trumbowyg-editor.trumbowyg-reset-css ol,.trumbowyg-editor.trumbowyg-reset-css p,.trumbowyg-editor.trumbowyg-reset-css ul{box-shadow:none!important;background:0 0!important;margin:0 0 15px!important;line-height:1.4em!important;font-family:"Trebuchet MS",Helvetica,Verdana,sans-serif!important;font-size:14px!important;border:none}.trumbowyg-editor.trumbowyg-reset-css hr,.trumbowyg-editor.trumbowyg-reset-css iframe,.trumbowyg-editor.trumbowyg-reset-css object{margin-bottom:15px!important}.trumbowyg-editor.trumbowyg-reset-css blockquote{margin-left:32px!important;font-style:italic!important;color:#555}.trumbowyg-editor.trumbowyg-reset-css ul{list-style:disc}.trumbowyg-editor.trumbowyg-reset-css ol,.trumbowyg-editor.trumbowyg-reset-css ul{padding-left:20px!important}.trumbowyg-editor.trumbowyg-reset-css ol ol,.trumbowyg-editor.trumbowyg-reset-css ol ul,.trumbowyg-editor.trumbowyg-reset-css ul ol,.trumbowyg-editor.trumbowyg-reset-css ul ul{border:none;margin:2px!important;padding:0 0 0 24px!important}.trumbowyg-editor.trumbowyg-reset-css hr{display:block;height:1px;border:none;border-top:1px solid #CCC}.trumbowyg-editor.trumbowyg-reset-css h1,.trumbowyg-editor.trumbowyg-reset-css h2,.trumbowyg-editor.trumbowyg-reset-css h3,.trumbowyg-editor.trumbowyg-reset-css h4{color:#111;background:0 0;margin:0!important;padding:0!important;font-weight:700}.trumbowyg-editor.trumbowyg-reset-css h1{font-size:32px!important;line-height:38px!important;margin-bottom:20px!important}.trumbowyg-editor.trumbowyg-reset-css h2{font-size:26px!important;line-height:34px!important;margin-bottom:15px!important}.trumbowyg-editor.trumbowyg-reset-css h3{font-size:22px!important;line-height:28px!important;margin-bottom:7px!important}.trumbowyg-editor.trumbowyg-reset-css h4{font-size:16px!important;line-height:22px!important;margin-bottom:7px!important}.trumbowyg-dark .trumbowyg-textarea{background:#111;color:#ddd}.trumbowyg-dark .trumbowyg-box{border:1px solid #343434}.trumbowyg-dark .trumbowyg-box.trumbowyg-fullscreen{background:#111}.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{text-shadow:0 0 7px #ccc}@media screen and (min-width:0 \0){.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(20,20,20,.6)!important}}@supports (-ms-accelerator:true){.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(20,20,20,.6)!important}}.trumbowyg-dark .trumbowyg-box svg{fill:#ecf0f1;color:#ecf0f1}.trumbowyg-dark .trumbowyg-button-pane{background-color:#222;border-bottom-color:#343434}.trumbowyg-dark .trumbowyg-button-pane::after{background:#343434}.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty)::after{background-color:#343434}.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty) .trumbowyg-fullscreen-button svg{color:transparent}.trumbowyg-dark .trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::after{background-color:#2a2a2a}.trumbowyg-dark .trumbowyg-button-pane button.trumbowyg-active,.trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):focus,.trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):hover{background-color:#333}.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-open-dropdown::after{border-top-color:#fff}.trumbowyg-dark .trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:#ecf0f1;fill:transparent}.trumbowyg-dark .trumbowyg-dropdown{border-color:#222;background:#333;box-shadow:rgba(0,0,0,.3) 0 2px 3px}.trumbowyg-dark .trumbowyg-dropdown button{background:#333;color:#fff!important}.trumbowyg-dark .trumbowyg-dropdown button:focus,.trumbowyg-dark .trumbowyg-dropdown button:hover{background:#222}.trumbowyg-dark .trumbowyg-modal-box{background-color:#222}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-title{border-bottom:1px solid #555;color:#fff;background:#3c3c3c}.trumbowyg-dark .trumbowyg-modal-box label{display:block;position:relative;margin:15px 12px;height:27px;line-height:27px;overflow:hidden}.trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span{color:#eee;background-color:#2f2f2f;border-color:#222}.trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error{color:#e74c3c}.trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error input,.trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error textarea{border-color:#e74c3c}.trumbowyg-dark .trumbowyg-modal-box label input{border-color:#222;color:#eee;background:#333}.trumbowyg-dark .trumbowyg-modal-box label input:focus,.trumbowyg-dark .trumbowyg-modal-box label input:hover{border-color:#626262}.trumbowyg-dark .trumbowyg-modal-box label input:focus{background-color:#2f2f2f}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit{background:#1b7943}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus,.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover{background:#25a25a}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active{background:#176437}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset{background:#333;color:#ccc}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus,.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover{background:#444}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active{background:#111}.trumbowyg-dark .trumbowyg-overlay{background-color:rgba(15,15,15,.6)}
		
		/* Joelthorner */
		.tlg-arrow-connector-container{
			z-index: 900000;
		}
		.tlg-block{
			background-color: rgba(255, 0, 0, 0.15);
			width: 200px;
			height: 200px;
			z-index: 900000;
			position: absolute;
			border: 4px solid red;
			border-radius: 4px;
		}
		.tlg-block:hover .ui-resizable-handle,
		.ui-resizable-resizing .ui-resizable-handle{
			opacity: 1;
		}
		.ui-resizable-handle{
			width: 10px;
			height: 10px;
			background-color: #ffffff;
			border: 1px solid #000000;
			position: absolute;
			opacity: 0;
			z-index: 900000;
		}
		.negrip {
			cursor: ne-resize;
			top:-6px; right:-6px;
		}
		.segrip {
			cursor: se-resize;
			bottom:-6px; right:-6px;
		}
		.nwgrip {
			cursor: nw-resize;
			top:-6px; left:-6px;
		}
		.swgrip {
			cursor: sw-resize;
			bottom:-6px; left:-6px;
		}
		.ngrip {
			cursor: n-resize;
			top:-6px; 
			left:50%; margin-left:-6px;
		}
		.egrip {
			cursor: e-resize;
			right:-6px; 
			top:50%; margin-top:-6px;
		}
		.sgrip {
			cursor: n-resize;
			bottom:-6px; 
			left:50%; margin-left:-6px;
		}
		.wgrip {
			cursor: w-resize;
			left:-6px; 
			top:50%; margin-top:-6px;
		}
		.tlg-block .mover{
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 4;
			position: absolute;
		}
		.tlg-block-text{
			background-color: #FFF;
			width: auto;
			height: auto;
			padding: 0;
			z-index: 910000;
			position: absolute;
			border: 1px solid #000;
		}
		.trumbowyg-box, .trumbowyg-editor{
			border: 0;
			margin: 0;
			min-height: 80px;
		}
		.trumbowyg-editor, .trumbowyg-textarea{
			padding: 15px;
		}
		.tlg-arrow-connector {
			stroke: black;
		}
		svg.leader-line{
			z-index: 910000 !important;
			transition: none !important
		}
		.trumbowyg-button-pane {
			position: absolute;
			top: -38px;
			min-width: 255px;
			border: 1px solid #000;
			left: -1px;
			opacity: 0;
			visibility: hidden;
		}
		.trumbowyg-button-pane.tlg-custom-focus{
			opacity: 1;
			visibility: visible;
		}
	</style>
`;

var thisId = "ID_" + (new Date().getUTCMilliseconds() + Math.floor(Math.random() * 10) ),
	 thisTop = ($(document).scrollTop() + (window.innerHeight / 2)) + ($('.tlg-block-cont').length * 10),
	 thisLeft = (window.innerWidth / 2) + ($('.tlg-block-cont').length * 10);

var _BLOCK = `
	<div class="tlg-block-cont" id="${thisId}_MAIN">

		<div id="${thisId}" class="tlg-block" style="left: ${thisLeft}px;top:${thisTop}px">

			<div class="ui-resizable-handle ui-resizable-nw nwgrip" id="${thisId}_nwgrip"></div>
			<div class="ui-resizable-handle ui-resizable-ne negrip" id="${thisId}_negrip"></div>
			<div class="ui-resizable-handle ui-resizable-sw swgrip" id="${thisId}_swgrip"></div>
			<div class="ui-resizable-handle ui-resizable-se segrip" id="${thisId}_segrip"></div>
			<div class="ui-resizable-handle ui-resizable-n ngrip" id="${thisId}_ngrip"></div>
			<div class="ui-resizable-handle ui-resizable-e egrip" id="${thisId}_egrip"></div>
			<div class="ui-resizable-handle ui-resizable-s sgrip" id="${thisId}_sgrip"></div>
			<div class="ui-resizable-handle ui-resizable-w wgrip" id="${thisId}_wgrip"></div>

			<div class="mover"></div>
		</div>
		<div id="${thisId}_TEXT" class="tlg-block-text" style="left: ${thisLeft + 250}px;top:${thisTop}px" data-arrow-target="#${thisId}">
			<div id="${thisId}_EDITOR" class="tlg-editor" placeholder="Pages position 3" spellcheck="false"></div>
		</div>
	</div>
`;

// APENDS
if (!$('#CSS_TLG_CSS').length) $('body').append( _CSS);
$('body').append(_BLOCK);


// EVENTS ------------------------------------------
$('.tlg-block-cont').each(function(index, el) {
	
	if ($(this).data('tlg-init') == undefined) {
		
		var tlgBlockId = '#' + $(this).find('.tlg-block').attr('id');
		var CONNECTOR;
		
		// move drag
		$(tlgBlockId)
			.draggable({
				handle: '.mover',
				drag: function( event, ui ) {
					CONNECTOR.position();
				}
			});

		$(tlgBlockId + '_TEXT')
			.draggable({
				drag: function( event, ui ) {
					CONNECTOR.position();
				}
			});

		// resizers
		$(tlgBlockId).resizable({
			handles: {
				'ne': tlgBlockId + '_negrip',
				'se': tlgBlockId + '_segrip',
				'sw': tlgBlockId + '_swgrip',
				'nw': tlgBlockId + '_nwgrip',
				'n' : tlgBlockId + '_ngrip',
				'e' : tlgBlockId + '_egrip',
				's' : tlgBlockId + '_sgrip',
				'w' : tlgBlockId + '_wgrip'
			},
			resize: function( event, ui ) {
				CONNECTOR.position();
			}
		});

		// editors
		$('.tlg-editor').not('.trumbowyg-editor').each(function(index, el) {
			$(el).trumbowyg({
				btns: [
					['viewHTML'],
					['strong', 'em'],
					['unorderedList', 'orderedList'],
					['horizontalRule'],
					// ['removeformat'],
				],
				autogrow: true,
				autogrowOnEnter: true,
				removeformatPasted: true,
				resetCss: true
			})
			.on('tbwfocus', function(){
				$(this)
					.parents('.tlg-block-text')
					.find('.trumbowyg-button-pane')
					.addClass('tlg-custom-focus');
			})
			.on('tbwblur', function(){ 
				$(this)
					.parents('.tlg-block-text')
					.find('.trumbowyg-button-pane')
					.removeClass('tlg-custom-focus');
			});
		});

		CONNECTOR = new LeaderLine(
			$(tlgBlockId + '_TEXT')[0],
			$(tlgBlockId)[0],
			{
				endPlug : 'hand',
				color: 'red',
				size: 5
			}
		);

		$(this).data('tlg-init', true);
	}
});