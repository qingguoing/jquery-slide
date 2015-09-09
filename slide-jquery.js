;(function($) {
	'use strict';
	
	var Slide = function(ele, options) {
		this.$element = ele;
		this.interval = null;
		this.current = 0;
		this.defaults = {
			speed: 100,
			second: 3000,
			showMarker: false,
			marker: false,
			showController: false,
			setClass: {
				marker: '',
				active: '',
				unactive: '',
				controllerPrev: '',
				controllerNext: ''
			}
		};
		this.config = $.extend({}, this.defaults, options);
		
		// showMarker
		this.showMarker = this.config.showMarker;
		this.mark = this.config.marker;
		this.marker = this.config.setClass.marker;
		this.active = this.config.setClass.active;
		this.unactive = this.config.setClass.unactive;
		
		// show left and right controller
		this.showController = this.config.showController;
		this.controllerPrev = this.config.setClass.controllerPrev;
		this.controllerNext = this.config.setClass.controllerNext;		
		
		// initialize
		this.init();
		this.handleEvent();
	};
	
	Slide.prototype = {
		init: function() {
			this.$oUl = $('ul', this.$element);
			this.$oULi = $('li', this.$oUl[0]);
			this.width = this.$oULi.outerWidth(true);
			this.number = this.$oULi.length;
			this.$oUl.css('width', this.number * this.width);
			
			// marker
			if (this.showMarker) {
				var oOlis = [],html;
				
				for (var i = 1; i <= this.number; i++) {
					if (i === 1) {
						this.mark ? oOlis.push('<li class="' + this.active + '">' + i + '<\/li>') : oOlis.push('<li class="' + this.active + '">' + "" + "<\/li>");
					} else {
						this.mark ? oOlis.push('<li class="' + this.unactive + '">' + i + '<\/li>') : oOlis.push('<li class="' + this.unactive + '">' + "" + "<\/li>");	
					}
				}
				
				html = '<ol class="' + this.marker + '">' + oOlis.join('') + '</ol>';
				this.$element.append(html);
				
				this.$oOl = $('ol', this.$element);
			}
			
			// controller
			if (this.showController) {
				html = '<span class="' + this.controllerPrev + '"></span>';
				html += '<span class="' + this.controllerNext + '"></span>';
				this.$element.append(html);
			}
			
		},
		
		handleEvent: function() {
			var that = this;
			this.start();
			
			this.$element.hover(this.stop.bind(this), this.start.bind(this));
			
			if (this.showMarker) {
				this.$oOl.find('li').hover(function() {
					that.move($(this).index());
				});
			}
			
			if (this.showController) {
				
				this.$element.find('span').eq(0).click(function() {
					that.prev();
				});
				
				this.$element.find('span').eq(1).click(function() {
					that.next();
				});
			}
		},
		
		start: function() {
			this.interval = setInterval(this.next.bind(this),this.config.second);
		},
		
		stop: function() {
			clearInterval(this.interval);
		},
		
		prev: function() {
			this.move(this.current - 1);
		},
		
		next: function() {
			this.move(this.current + 1);
		},
		
		move: function(index) {		
			if (index < 0) index = (this.number - 1);
			if (index >= this.number) index = 0;
			
			var left = -index * this.width;
			
			this.current = index;
			if (this.showMarker) {
				this.$oOl.find('li:eq(' + index + ')').removeClass().addClass(this.active).siblings().removeClass().addClass(this.unactive);
			}
			this.$oUl.stop().animate({left: left}, this.config.speed);
		}
	};
	
	$.fn.slide = function(opt) {
		return this.each(function() {
			var $this = $(this);
			new Slide($this, opt);
		});
	};
})(window.jQuery);