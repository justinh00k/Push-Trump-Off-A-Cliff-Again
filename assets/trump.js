//YouTube Video

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
	playerDefaults = {
		autoplay: 0,
		autohide: 1,
		modestbranding: 0,
		rel: 0,
		showinfo: 0,
		controls: 0,
		disablekb: 1,
		enablejsapi: 0,
		iv_load_policy: 3,
	};
var vid = {
	videoId: 'Wimkqo8gDZ0',
	startSeconds: 0,
	endSeconds: 3600,
	suggestedQuality: 'default',
	host: 'https://www.youtube.com',
};

function onYouTubePlayerAPIReady() {
	tv = new YT.Player('tv', {
		events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
		playerVars: playerDefaults,
	});
	tv.setSize(800, 450);
}

var is_tv_ready = false;

function onPlayerReady() {
	tv.loadVideoById(vid);
	tv.mute();

	is_tv_ready = true;

	if (scene === 5) {
		tv.playVideo();
		$('#smoker2').show();
	} else tv.pauseVideo();
}

function onPlayerStateChange(e) {
	if (e.data === 1) {
		$('#tv').addClass('active');
	}
}

function vidRescale() {
	var w = $(window).width() + 200,
		h = $(window).height() + 200;

	if (w / h > 16 / 9) {
		tv.setSize(w, (w / 16) * 9);
		$('.tv .screen').css({ left: '0px' });
	} else {
		tv.setSize((h / 9) * 16, h);
		$('.tv .screen').css({ left: -($('.tv .screen').outerWidth() - w) / 2 });
	}
}

$(window).on('load resize', function () {
	vidRescale();
});

// FASTCLICK

!(function (t) {
	function e(o) {
		if (n[o]) return n[o].exports;
		var i = (n[o] = { exports: {}, id: o, loaded: !1 });
		return t[o].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
	}
	var n = {};
	return (e.m = t), (e.c = n), (e.p = ''), e(0);
})([
	function (t, e, n) {
		'use strict';
		n(1), (window.Origami = { fastclick: n(2), 'o-autoinit': n(4) });
	},
	function (t, e) {
		t.exports = {
			name: '__MAIN__',
			dependencies: {
				fastclick: 'fastclick#*',
				'o-autoinit': 'o-autoinit#^1.0.0',
			},
		};
	},
	function (t, e, n) {
		t.exports = n(3);
	},
	function (t, e) {
		'use strict';
		var n = !1;
		!(function () {
			/**
			 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
			 *
			 * @codingstandard ftlabs-jsv2
			 * @copyright The Financial Times Limited [All Rights Reserved]
			 * @license MIT License (see LICENSE.txt)
			 */
			function e(t, n) {
				function o(t, e) {
					return function () {
						return t.apply(e, arguments);
					};
				}
				var r;
				if (
					((n = n || {}),
					(this.trackingClick = !1),
					(this.trackingClickStart = 0),
					(this.targetElement = null),
					(this.touchStartX = 0),
					(this.touchStartY = 0),
					(this.lastTouchIdentifier = 0),
					(this.touchBoundary = n.touchBoundary || 10),
					(this.layer = t),
					(this.tapDelay = n.tapDelay || 200),
					(this.tapTimeout = n.tapTimeout || 700),
					!e.notNeeded(t))
				) {
					for (
						var a = [
								'onMouse',
								'onClick',
								'onTouchStart',
								'onTouchMove',
								'onTouchEnd',
								'onTouchCancel',
							],
							c = this,
							s = 0,
							u = a.length;
						s < u;
						s++
					)
						c[a[s]] = o(c[a[s]], c);
					i &&
						(t.addEventListener('mouseover', this.onMouse, !0),
						t.addEventListener('mousedown', this.onMouse, !0),
						t.addEventListener('mouseup', this.onMouse, !0)),
						t.addEventListener('click', this.onClick, !0),
						t.addEventListener('touchstart', this.onTouchStart, !1),
						t.addEventListener('touchmove', this.onTouchMove, !1),
						t.addEventListener('touchend', this.onTouchEnd, !1),
						t.addEventListener('touchcancel', this.onTouchCancel, !1),
						Event.prototype.stopImmediatePropagation ||
							((t.removeEventListener = function (e, n, o) {
								var i = Node.prototype.removeEventListener;
								'click' === e
									? i.call(t, e, n.hijacked || n, o)
									: i.call(t, e, n, o);
							}),
							(t.addEventListener = function (e, n, o) {
								var i = Node.prototype.addEventListener;
								'click' === e
									? i.call(
											t,
											e,
											n.hijacked ||
												(n.hijacked = function (t) {
													t.propagationStopped || n(t);
												}),
											o
									  )
									: i.call(t, e, n, o);
							})),
						'function' == typeof t.onclick &&
							((r = t.onclick),
							t.addEventListener(
								'click',
								function (t) {
									r(t);
								},
								!1
							),
							(t.onclick = null));
				}
			}
			var o = navigator.userAgent.indexOf('Windows Phone') >= 0,
				i = navigator.userAgent.indexOf('Android') > 0 && !o,
				r = /iP(ad|hone|od)/.test(navigator.userAgent) && !o,
				a = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
				c = r && /OS [6-7]_\d/.test(navigator.userAgent),
				s = navigator.userAgent.indexOf('BB10') > 0;
			(e.prototype.needsClick = function (t) {
				switch (t.nodeName.toLowerCase()) {
					case 'button':
					case 'select':
					case 'textarea':
						if (t.disabled) return !0;
						break;
					case 'input':
						if ((r && 'file' === t.type) || t.disabled) return !0;
						break;
					case 'label':
					case 'iframe':
					case 'video':
						return !0;
				}
				return /\bneedsclick\b/.test(t.className);
			}),
				(e.prototype.needsFocus = function (t) {
					switch (t.nodeName.toLowerCase()) {
						case 'textarea':
							return !0;
						case 'select':
							return !i;
						case 'input':
							switch (t.type) {
								case 'button':
								case 'checkbox':
								case 'file':
								case 'image':
								case 'radio':
								case 'submit':
									return !1;
							}
							return !t.disabled && !t.readOnly;
						default:
							return /\bneedsfocus\b/.test(t.className);
					}
				}),
				(e.prototype.sendClick = function (t, e) {
					var n, o;
					document.activeElement &&
						document.activeElement !== t &&
						document.activeElement.blur(),
						(o = e.changedTouches[0]),
						(n = document.createEvent('MouseEvents')),
						n.initMouseEvent(
							this.determineEventType(t),
							!0,
							!0,
							window,
							1,
							o.screenX,
							o.screenY,
							o.clientX,
							o.clientY,
							!1,
							!1,
							!1,
							!1,
							0,
							null
						),
						(n.forwardedTouchEvent = !0),
						t.dispatchEvent(n);
				}),
				(e.prototype.determineEventType = function (t) {
					return i && 'select' === t.tagName.toLowerCase()
						? 'mousedown'
						: 'click';
				}),
				(e.prototype.focus = function (t) {
					var e;
					r &&
					t.setSelectionRange &&
					0 !== t.type.indexOf('date') &&
					'time' !== t.type &&
					'month' !== t.type
						? ((e = t.value.length), t.setSelectionRange(e, e))
						: t.focus();
				}),
				(e.prototype.updateScrollParent = function (t) {
					var e, n;
					if (((e = t.fastClickScrollParent), !e || !e.contains(t))) {
						n = t;
						do {
							if (n.scrollHeight > n.offsetHeight) {
								(e = n), (t.fastClickScrollParent = n);
								break;
							}
							n = n.parentElement;
						} while (n);
					}
					e && (e.fastClickLastScrollTop = e.scrollTop);
				}),
				(e.prototype.getTargetElementFromEventTarget = function (t) {
					return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
				}),
				(e.prototype.onTouchStart = function (t) {
					var e, n, o;
					if (t.targetTouches.length > 1) return !0;
					if (
						((e = this.getTargetElementFromEventTarget(t.target)),
						(n = t.targetTouches[0]),
						r)
					) {
						if (((o = window.getSelection()), o.rangeCount && !o.isCollapsed))
							return !0;
						if (!a) {
							if (n.identifier && n.identifier === this.lastTouchIdentifier)
								return t.preventDefault(), !1;
							(this.lastTouchIdentifier = n.identifier),
								this.updateScrollParent(e);
						}
					}
					return (
						(this.trackingClick = !0),
						(this.trackingClickStart = t.timeStamp),
						(this.targetElement = e),
						(this.touchStartX = n.pageX),
						(this.touchStartY = n.pageY),
						t.timeStamp - this.lastClickTime < this.tapDelay &&
							t.preventDefault(),
						!0
					);
				}),
				(e.prototype.touchHasMoved = function (t) {
					var e = t.changedTouches[0],
						n = this.touchBoundary;
					return (
						Math.abs(e.pageX - this.touchStartX) > n ||
						Math.abs(e.pageY - this.touchStartY) > n
					);
				}),
				(e.prototype.onTouchMove = function (t) {
					return (
						!this.trackingClick ||
						((this.targetElement !==
							this.getTargetElementFromEventTarget(t.target) ||
							this.touchHasMoved(t)) &&
							((this.trackingClick = !1), (this.targetElement = null)),
						!0)
					);
				}),
				(e.prototype.findControl = function (t) {
					return void 0 !== t.control
						? t.control
						: t.htmlFor
						? document.getElementById(t.htmlFor)
						: t.querySelector(
								'button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea'
						  );
				}),
				(e.prototype.onTouchEnd = function (t) {
					var e,
						n,
						o,
						s,
						u,
						l = this.targetElement;
					if (!this.trackingClick) return !0;
					if (t.timeStamp - this.lastClickTime < this.tapDelay)
						return (this.cancelNextClick = !0), !0;
					if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
						return !0;
					if (
						((this.cancelNextClick = !1),
						(this.lastClickTime = t.timeStamp),
						(n = this.trackingClickStart),
						(this.trackingClick = !1),
						(this.trackingClickStart = 0),
						c &&
							((u = t.changedTouches[0]),
							(l =
								document.elementFromPoint(
									u.pageX - window.pageXOffset,
									u.pageY - window.pageYOffset
								) || l),
							(l.fastClickScrollParent =
								this.targetElement.fastClickScrollParent)),
						(o = l.tagName.toLowerCase()),
						'label' === o)
					) {
						if ((e = this.findControl(l))) {
							if ((this.focus(l), i)) return !1;
							l = e;
						}
					} else if (this.needsFocus(l))
						return t.timeStamp - n > 100 ||
							(r && window.top !== window && 'input' === o)
							? ((this.targetElement = null), !1)
							: (this.focus(l),
							  this.sendClick(l, t),
							  (r && 'select' === o) ||
									((this.targetElement = null), t.preventDefault()),
							  !1);
					return (
						!(
							!r ||
							a ||
							((s = l.fastClickScrollParent),
							!s || s.fastClickLastScrollTop === s.scrollTop)
						) ||
						(this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)),
						!1)
					);
				}),
				(e.prototype.onTouchCancel = function () {
					(this.trackingClick = !1), (this.targetElement = null);
				}),
				(e.prototype.onMouse = function (t) {
					return (
						!this.targetElement ||
						!!t.forwardedTouchEvent ||
						!t.cancelable ||
						!(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
						(t.stopImmediatePropagation
							? t.stopImmediatePropagation()
							: (t.propagationStopped = !0),
						t.stopPropagation(),
						t.preventDefault(),
						!1)
					);
				}),
				(e.prototype.onClick = function (t) {
					var e;
					return this.trackingClick
						? ((this.targetElement = null), (this.trackingClick = !1), !0)
						: ('submit' === t.target.type && 0 === t.detail) ||
								((e = this.onMouse(t)), e || (this.targetElement = null), e);
				}),
				(e.prototype.destroy = function () {
					var t = this.layer;
					i &&
						(t.removeEventListener('mouseover', this.onMouse, !0),
						t.removeEventListener('mousedown', this.onMouse, !0),
						t.removeEventListener('mouseup', this.onMouse, !0)),
						t.removeEventListener('click', this.onClick, !0),
						t.removeEventListener('touchstart', this.onTouchStart, !1),
						t.removeEventListener('touchmove', this.onTouchMove, !1),
						t.removeEventListener('touchend', this.onTouchEnd, !1),
						t.removeEventListener('touchcancel', this.onTouchCancel, !1);
				}),
				(e.notNeeded = function (t) {
					var e, n, o, r;
					if ('undefined' == typeof window.ontouchstart) return !0;
					if (
						(n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
					) {
						if (!i) return !0;
						if ((e = document.querySelector('meta[name=viewport]'))) {
							if (e.content.indexOf('user-scalable=no') !== -1) return !0;
							if (
								n > 31 &&
								document.documentElement.scrollWidth <= window.outerWidth
							)
								return !0;
						}
					}
					if (
						s &&
						((o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/)),
						o[1] >= 10 &&
							o[2] >= 3 &&
							(e = document.querySelector('meta[name=viewport]')))
					) {
						if (e.content.indexOf('user-scalable=no') !== -1) return !0;
						if (document.documentElement.scrollWidth <= window.outerWidth)
							return !0;
					}
					return (
						'none' === t.style.msTouchAction ||
						'manipulation' === t.style.touchAction ||
						((r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]),
						!!(
							r >= 27 &&
							((e = document.querySelector('meta[name=viewport]')),
							e &&
								(e.content.indexOf('user-scalable=no') !== -1 ||
									document.documentElement.scrollWidth <= window.outerWidth))
						) ||
							'none' === t.style.touchAction ||
							'manipulation' === t.style.touchAction)
					);
				}),
				(e.attach = function (t, n) {
					return new e(t, n);
				}),
				'function' == typeof n && 'object' == typeof n.amd && n.amd
					? n(function () {
							return e;
					  })
					: 'undefined' != typeof t && t.exports
					? ((t.exports = e.attach), (t.exports.FastClick = e))
					: (window.FastClick = e);
		})();
	},
	function (t, e, n) {
		t.exports = n(5);
	},
	function (t, e) {
		'use strict';

		function n(t) {
			t in o ||
				((o[t] = !0), document.dispatchEvent(new CustomEvent('o.' + t)));
		}
		var o = {};
		window.addEventListener('load', n.bind(null, 'load')),
			window.addEventListener('load', n.bind(null, 'DOMContentLoaded')),
			document.addEventListener(
				'DOMContentLoaded',
				n.bind(null, 'DOMContentLoaded')
			),
			(document.onreadystatechange = function () {
				'complete' === document.readyState
					? (n('DOMContentLoaded'), n('load'))
					: 'interactive' !== document.readyState ||
					  document.attachEvent ||
					  n('DOMContentLoaded');
			}),
			'complete' === document.readyState
				? (n('DOMContentLoaded'), n('load'))
				: 'interactive' !== document.readyState ||
				  document.attachEvent ||
				  n('DOMContentLoaded'),
			document.attachEvent &&
				!(function () {
					var t = !1,
						e = 50;
					try {
						t = null === window.frameElement && document.documentElement;
					} catch (t) {}
					t &&
						t.doScroll &&
						!(function i() {
							if (!('DOMContentLoaded' in o)) {
								try {
									t.doScroll('left');
								} catch (t) {
									return e < 5e3 ? setTimeout(i, (e *= 1.2)) : void 0;
								}
								n('DOMContentLoaded');
							}
						})();
				})();
	},
]);

// SMOKE.JS
var smokemachine = function (t, a) {
	function i(a, i, e) {
		(this.x = a),
			(this.y = i),
			(this.age = 0),
			(this.vx = (8 * Math.random() - 4) / 100),
			(this.startvy = -(30 * Math.random() + 10) / 100),
			(this.vy = this.startvy),
			(this.scale = 0.5 * Math.random()),
			(this.lifetime = Math.random() * e + e / 2),
			(this.finalscale = 5 + this.scale + Math.random()),
			(this.update = function (t) {
				(this.x += this.vx * t), (this.y += this.vy * t);
				var a = Math.pow(this.age / this.lifetime, 0.5);
				(this.vy = (1 - a) * this.startvy),
					(this.age += t),
					(this.scale = a * this.finalscale);
			}),
			(this.draw = function () {
				t.globalAlpha = (1 - Math.abs(1 - (2 * this.age) / this.lifetime)) / 8;
				var a = (this.scale * p) / 2,
					i = this.x - a,
					e = i + this.scale * y,
					s = this.y - a,
					n = s + this.scale * y;
				t.drawImage(d, i, s, e - i, n - s);
			});
	}

	function e(t, a, e, s) {
		if (((s = s || 4e3), (e = e || 10) < 1))
			return Math.random() <= e && u.push(new i(t, a, s));
		for (var n = 0; n < e; n++) u.push(new i(t, a, s));
	}

	function s(a) {
		t.clearRect(0, 0, canvas.width, canvas.height), (a = a || 16);
		var i = [];
		(m = m.concat(u)),
			(u = []),
			m.forEach(function (t) {
				t.update(a), t.age < t.lifetime && (t.draw(), i.push(t));
			}),
			(m = i);
	}

	function n(t) {
		if (M) {
			var a = t - r;
			(r = t), s(a), c(n);
		}
	}

	function h() {
		(M = !0),
			c(function (t) {
				(r = t), c(n);
			});
	}

	function o() {
		M = !1;
	}
	a = a || [24, 46.8, 48.2];
	var r,
		c =
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame,
		m = [],
		u = [],
		d = document.createElement('canvas'),
		f = d.getContext('2d');
	(d.width = 20), (d.height = 20);
	for (
		var l = [
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 3, 5, 5, 7, 4, 4, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 17, 27,
				41, 52, 56, 34, 23, 15, 11, 4, 9, 5, 1, 0, 0, 0, 0, 0, 0, 1, 45, 63, 57,
				45, 78, 66, 52, 41, 34, 37, 23, 20, 0, 1, 0, 0, 0, 0, 1, 43, 62, 66, 64,
				67, 115, 112, 114, 56, 58, 47, 33, 18, 12, 10, 0, 0, 0, 0, 39, 50, 63,
				76, 87, 107, 105, 112, 128, 104, 69, 64, 29, 18, 21, 15, 0, 0, 0, 7, 42,
				52, 85, 91, 103, 126, 153, 128, 124, 82, 57, 52, 52, 24, 1, 0, 0, 0, 2,
				17, 41, 67, 84, 100, 122, 136, 159, 127, 78, 69, 60, 50, 47, 25, 7, 1,
				0, 0, 0, 34, 33, 66, 82, 113, 138, 149, 168, 175, 82, 142, 133, 70, 62,
				41, 25, 6, 0, 0, 0, 18, 39, 55, 113, 111, 137, 141, 139, 141, 128, 102,
				130, 90, 96, 65, 37, 0, 0, 0, 2, 15, 27, 71, 104, 129, 129, 158, 140,
				154, 146, 150, 131, 92, 100, 67, 26, 3, 0, 0, 0, 0, 46, 73, 104, 124,
				145, 135, 122, 107, 120, 122, 101, 98, 96, 35, 38, 7, 2, 0, 0, 0, 50,
				58, 91, 124, 127, 139, 118, 121, 177, 156, 88, 90, 88, 28, 43, 3, 0, 0,
				0, 0, 30, 62, 68, 91, 83, 117, 89, 139, 139, 99, 105, 77, 32, 1, 1, 0,
				0, 0, 0, 0, 16, 21, 8, 45, 101, 125, 118, 87, 110, 86, 64, 39, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 1, 28, 79, 79, 117, 122, 88, 84, 54, 46, 11, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 1, 0, 6, 55, 61, 68, 71, 30, 16, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 14, 23, 25, 20, 12, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 2, 12, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,
			],
			v = f.createImageData(20, 20),
			w = v.data,
			g = 0;
		g < w.length;
		g += 4
	)
		(w[g] = a[0]), (w[g + 1] = a[1]), (w[g + 2] = a[2]), (w[g + 3] = l[g / 4]);
	f.putImageData(v, 0, 0);
	var p = 100,
		y = 100,
		M = !1;
	return { start: h, stop: o, step: s, addsmoke: e };
};

//TRUMP.JS
Origami.fastclick(document.body);

var hat_dance = 0;
var sound_off_to_start = true;
var dance = 0;
var start = 0;
var lights = 0;
var angry_num = 1; // Don't change
var effect_count = 1; // ditto
var fall_count = 0;
var no_more_dancing = false;
var step_sound = true;
var walking = false;
var dancing = false;
var startup = true;
var falling = false;
var marching = false;
var jumping = false;
var konami_code = false;
var running = false;
var left_walking = false;
var right_walking = false;
var left = false;
var mouse_go = false;
var preloaded = false;
var audio_loaded = false;
var jumpcount = 0;
var fallen = false;
var user_drop = false;
var partying = false;
var still_partying = false;

var elem = document.getElementById('donald');
var leg1 = document.getElementById('leg1');
var leg2 = document.getElementById('leg2');

var reset_time = 2200;
var light_bonus = 4000;
var last_position = (position = -126);
var initial_position = (landing_position = 50);
var cutoff_1 = 366;
var cutoff_2 = 160;
var cutoff_3 = 293;
var cutoff_4 = 360;
var cutoff_5 = 720;
var cutoff_4_bonus = 80;
var step = 10;
var volume_on = 0;
var scene = 1;
var top_1 = 85;
var top_2 = 120;
var top_3 = 185;
var top_4 = 195;
var top_5 = 130;
var angry_count = 3; // number of heads
var buffer = 0.8;
var speed = 1;
var mobile = false;
var first_mobile = true;
var smoke_multiplier = 1;
var button_height = '-4px';

step1_audio = new Audio('./assets/step_1.mp3');
step2_audio = new Audio('./assets/step_2.mp3');
step1_audio.volume = step2_audio.volume = step1_volume = 0.6;

bg_audio_1 = new Audio('./assets/wind.mp3');
bg_audio_1.volume = bg_volume_1 = 0.15;

bg_audio_1.addEventListener(
	'timeupdate',
	function () {
		if (
			volume_on &&
			(scene === 1 || scene === 5) &&
			this.currentTime > this.duration - buffer
		) {
			this.currentTime = 0;
			this.play();
		}
	},
	false
);

function load_audio() {
	bg_audio_2 = new Audio('./assets/lava.mp3');
	bg_audio_3 = new Audio('./assets/city.mp3');
	bg_audio_4 = new Audio('./assets/jungle.mp3');
	preloaded = true;
	bg_audio_2.volume = bg_volume_2 = 0.4;
	bg_audio_3.volume = bg_volume_3 = 0.3;
	bg_audio_4.volume = bg_volume_4 = 0.18;

	bg_audio_2.addEventListener(
		'timeupdate',
		function () {
			if (
				volume_on &&
				scene === 2 &&
				this.currentTime > this.duration - buffer
			) {
				this.currentTime = 0;
				this.play();
			}
		},
		false
	);

	bg_audio_3.addEventListener(
		'timeupdate',
		function () {
			if (
				volume_on &&
				scene === 3 &&
				this.currentTime > this.duration - buffer
			) {
				this.currentTime = 0;
				this.play();
			}
		},
		false
	);

	bg_audio_4.addEventListener(
		'timeupdate',
		function () {
			if (
				volume_on &&
				scene === 4 &&
				this.currentTime > this.duration - buffer
			) {
				this.currentTime = 0;
				this.play();
			}
		},
		false
	);
}

effect1_audio = new Audio('./assets/se4_echo.mp3');
effect1_audio.volume = effect1_volume = 0.8;

document
	.getElementById('leftborder')
	.addEventListener('touchstart', function (event) {
		event.preventDefault();
	});

document
	.getElementById('rightborder')
	.addEventListener('touchstart', function (event) {
		event.preventDefault();
	});

document.getElementById('a').addEventListener('touchstart', function (event) {
	event.preventDefault();
});

document.getElementById('b').addEventListener('touchstart', function (event) {
	event.preventDefault();
});

document
	.getElementById('volume')
	.addEventListener('touchstart', function (event) {
		event.preventDefault();
	});

window.addEventListener('keydown', function (e) {
	if (
		(e.keyCode == 32 || e.keyCode == 37 || e.keyCode == 39) &&
		e.target == document.body
	) {
		e.preventDefault();
	}
});

window.addEventListener('mouseup', function (event) {
	mouse_up();
});

function touch_end(action) {
	if (action === 1) {
		$('#rightborder').css('bottom', '0');
		right_walking = false;

		if (!right_walking && !left_walking) walking = false;
		else step_left();
	}
	if (action === 2) {
		$('#leftborder').css('bottom', '0');
		left_walking = false;
		if (!right_walking && !left_walking) walking = false;
		else step_right();
	}

	if (action === 3 || action === 4) {
		return;
	}
}

$(window).focus(function () {
	$('#error').hide();
	if (volume_on) bg(true);
});

$(window).blur(function () {
	$('#error').show();
	bg(false);
});

function bg(play) {
	if (play && volume_on) {
		if (scene === 1 || scene === 5) bg_audio_1.play();
		else if (scene === 2) bg_audio_2.play();
		else if (scene === 3) bg_audio_3.play();
		else if (scene === 4) bg_audio_4.play();
	} else {
		bg_audio_1.pause();

		if (preloaded) {
			bg_audio_2.pause();
			bg_audio_3.pause();
			bg_audio_4.pause();
		}
	}
}

var was_5 = false;
var tv_activated = false;

function select(x) {
	if (scene === x || (falling && !mobile)) return;
	if (!preloaded) load_audio();

	if (scene === 5) was_5 = true;

	scene = x;

	jumpcount = 0;

	$('#scenes div').css('border-color', '#283681');
	$('#scene' + x).css('border-color', '#FFFFFF');
	$('#torso').css(
		'background-image',
		"url('./assets/trump_torso_normal.png' )"
	);
	$('#donald').css({ transition: 'left 0s, top 0s' });
	$('#donald').css('transition-duration', '0');
	$('#torso').css('left', '0');
	$('#torso').css('transform', 'rotate(0deg)');
	$('#torso').css('background-size', '100%');
	$('#torso').css('animation', 'none');

	$('#overlay').hide();
	$('#smoker').hide();
	$('#smoker2').hide();
	$('#letter_wrapper').hide();
	$('#tv').css('visibility', 'hidden');
	$('#b_wrapper').css('visibility', 'hidden');
	$('#cover').hide();
	$('#leg1,#leg2').show();

	if (is_tv_ready) tv.pauseVideo();

	bg(false);

	party.stop();

	if (scene === 1) {
		$('#box').css('background-image', "url('./assets/bg1.jpg')");

		if (!falling) {
			$('#donald').css({
				top: top_1 + 'px',
			});

			if (position > cutoff_1) {
				position = last_position = cutoff_1 + 40;

				$('#donald').css('left', cutoff_1);
				setTimeout(function () {
					take_step();
				}, 50);
			}
		}
	} else if (scene === 2) {
		party.start();

		party.addsmoke(600, 640, 80 * smoke_multiplier);
		party.step(2600);

		$('#smoker').show();

		$('#box').css('background-image', "url('./assets/bg2.jpg')");
		$('#overlay').css('background-image', "url('./assets/overlay_2.png')");
		$('#overlay').show();
		if (!falling) {
			$('#donald').css({
				top: top_2 + 'px',
			});

			if (position > cutoff_2) {
				position = last_position = cutoff_2 + 40;
				$('#donald').css('left', cutoff_2);
				setTimeout(function () {
					take_step();
				}, 50);
			}
		}

		drawSmoke();
	} else if (scene === 3) {
		$('#box').css('background-image', "url('./assets/bg3.jpg')");
		$('#overlay').css('background-image', "url('./assets/overlay_3.png')");
		$('#overlay').show();
		$('#letter_wrapper').show();
		if (!falling) {
			$('#donald').css({
				top: top_3 + 'px',
			});

			if (position > cutoff_3) {
				position = last_position = cutoff_3 + 40;
				$('#donald').css('left', cutoff_3);
				setTimeout(function () {
					take_step();
				}, 50);
			}
		}
	} else if (scene === 4) {
		$('#box').css('background-image', "url('./assets/bg4.jpg')");

		$('#dino').show();
		if (!falling) {
			$('#donald').css({
				top: top_4 + 'px',
			});

			if (position > cutoff_4) {
				position = last_position = cutoff_4;
				$('#donald').css('left', cutoff_4);
				fall();
			}
		}
	} else if (scene === 5) {
		if (!is_tv_ready) {
			tv.loadVideoById(vid);
			tv.mute();

			is_tv_ready = true;

			tv.playVideo();
			$('#smoker2').show();

			balloons(false);
		}

		Matter.Runner.run(runner, engine);

		$('#box').css('background-image', 'url(assets/bg5.jpg)');

		$('#cover').show();

		$('#tv').css('visibility', 'visible');
		$('#b_wrapper').css('visibility', 'visible');

		$('#donald').css('left', '+=40px');
		last_position += 40;
		position += 40;
		landing_position += 40;
		initial_position += 40;

		$('#torso').css('background-image', "url('./assets/trump_torso_b.png' )");
		$('#torso').css('background-size', '50%');
		$('#torso').css('animation', 'swing 2s infinite ease-in-out');
		$('#leg1,#leg2').hide();

		if (!falling) {
			$('#donald').css({
				top: top_5 + 'px',
			});
		}

		party2.addsmoke(150, 150, 150);
		party2.start();
		party2.step(150);
		drawClouds();

		$('#smoker2').show();

		var popballoons = true;

		while (popballoons) {
			if (position > (8 - active_balloons.length + 2) * (cutoff_5 / 9)) {
				bpop(active_balloons.length - 1);
			} else popballoons = false;
		}

		if (is_tv_ready) tv.playVideo();
	}

	if (was_5) {
		$('#donald').css('left', '-=40px');

		last_position -= 40;
		position -= 40;
		landing_position -= 40;
		initial_position -= 40;

		was_5 = false;
		Matter.Runner.stop(runner);
		party2.stop();
		//leaving scene 5 corrections
	}

	bg(true);
}

function mouse_up() {
	if (!map[37]) $('#leftborder').css('bottom', '0');

	if (!map[39]) $('#rightborder').css('bottom', '0');

	if (!map[37] && !map[39]) walking = false;
}

var hat_mouse = ['0', '1', '0', '1', '0', '1', '0', '1'];
var mouse_sequence = [];

function mouse_down(left) {
	if (left) {
		step_left();
		mouse_sequence.push('0');
	} else {
		step_right();
		mouse_sequence.push('1');
	}

	if (mouse_sequence.length > 8) mouse_sequence = mouse_sequence.slice(-8);

	if (mouse_sequence.length === 8) {
		var m = 0;
		for (i = 0; i < 8; i++) {
			if (mouse_sequence[i] === hat_mouse[i]) m++;
			else break;

			if (m === 8 && !no_more_dancing) hatDance();
		}
	}
}

var sequence = [];
var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var hatdance_sequence = [37, 39, 37, 39, 37, 39, 37, 39, 37, 39];
var map = {};
onkeydown = onkeyup = function (e) {
	e = e || event;
	map[e.keyCode] = e.type == 'keydown';

	if (sound_off_to_start) {
		volume_on = 1;
		bg(true);
		$('#volume').attr('src', volumeon.src);
		sound_off_to_start = false;
	}

	if (!map[16] && !map[66] && e.type === 'keyup') run(false);

	if ((map[16] || map[66]) && e.type === 'keydown') run(true);

	if (map[32] || map[65]) {
		jump();
	}

	if (map[37]) {
		step_left();
	}
	if (map[39]) {
		step_right();
	}

	if (!map[39]) {
		$('#rightborder').css('bottom', '0');
	}
	if (!map[37]) {
		$('#leftborder').css('bottom', '0');
	}

	if (!map[39] && !map[37]) {
		walking = false;
	}

	if (
		e.type === 'keydown' &&
		e.keyCode !== 16 &&
		e.keyCode !== 32 &&
		!(no_more_dancing && konami_code)
	) {
		sequence.push(e.keyCode);

		if (sequence.length > 10) sequence = sequence.slice(-10);

		if (sequence.length === 10) {
			var k = 0;
			hatdance = 0;
			for (i = 0; i < 10; i++) {
				if (sequence[i] === konami[i]) k++;

				if (sequence[i] === hatdance_sequence[i]) hatdance++;

				if (sequence[i] !== hatdance_sequence[i] && sequence[i] !== konami[i])
					break;

				if (k === 10 && !konami_code) konamiCode();

				if (hatdance === 10 && !no_more_dancing) hatDance();
			}
		}
	}
};

function mouse_run() {
	if (running || mouse_go) {
		mouse_go = false;
		run(false);
	} else {
		run(true);
		mouse_go = true;
	}
}

function run(go) {
	if (!go && !mouse_go) {
		running = false;
		speed = 1;
		$('#a').css('background-color', '#283681');
		$('#a').css('bottom', '0');
	} else {
		running = true;
		speed = 2;
		$('#a').css('background-color', '#111637');
		$('#a').css('bottom', '-2px');
	}
}

function letter() {
	fallen = true;

	$('#letter_wrapper').css({
		'transition-duration': '.1s',
		top: '250px',
		left: position + 60 + 'px',
		transform: 'rotate(0deg)',
	});

	setTimeout(function () {
		$('#rubble').show();

		if (volume_on) {
			setTimeout(function () {
				metal_sound.play();
			}, 100);
		}
	}, 280);
	gtag('event', 'Letter Crash');
}

function jump() {
	if (jumping || falling || startup || scene === 5) return;
	var jump_height = 50;
	jumping = true;

	if (scene === 3 && !fallen) {
		jumpcount++;

		if (jumpcount > 3) {
			letter();
		}
	}

	$('#b').css('bottom', '-2px');
	setTimeout(function () {
		$('#b').css('bottom', '0');
	}, 150);

	var start_ce = ce;

	direction = 1;
	if (start_ce < 0) direction = -1;

	if (konami_code && volume_on) {
		konami_jump.play();
	}

	$('#dino_and_donald').css({
		'transition-duration': '.25s',
		top: '-=' + jump_height + 'px',
	});

	$('#leg1').css({
		'transition-duration': '.25s',
		transform: 'rotate(' + 20 * direction + 'deg)',
	});

	$('#leg2').css({
		'transition-duration': '.25s',
		transform: 'rotate(' + -20 * direction + 'deg)',
	});

	setTimeout(function () {
		if (falling) return;

		$('#dino_and_donald').css({
			'transition-duration': '.25s',
			top: '+=' + jump_height + 'px',
		});

		$('#leg1').css({
			'transition-duration': '.25s',
			transform: 'rotate(' + 0 + 'deg)',
		});

		$('#leg2').css({
			'transition-duration': '.25s',
			transform: 'rotate(' + 0 + 'deg)',
		});

		setTimeout(function () {
			jumping = false;

			landing_position = position;

			if (start_ce > 0) {
				landing_position = position - 100;
			}

			if (!falling && volume_on) {
				if (scene === 4) {
					grass_step2_audio.play();
					grass_step1_audio.play();
				} else {
					step2_audio.play();
					step1_audio.play();
				}
			}
		}, 250);
	}, 250);
}

function tablet_mode(keyboard) {
	if (keyboard) {
		$('#buttons').hide();
		$('#spaces').show();
		$('#arrows').css('font-size', '1em');
		$('#leftborder,#rightborder').css('border-width', '1px');

		$('#keyboard_icon').hide();
		$('#tablet_icon').show();
	} else {
		$('#spaces').hide();
		$('#buttons').show();
		$('#arrows').css('font-size', '1.7em');
		$('#leftborder,#rightborder').css('border-width', '0');

		$('#tablet_icon').hide();
		$('#keyboard_icon').show();
	}
}

function step_left() {
	$('#leftborder').css('bottom', button_height);

	if (startup) return;

	if (!falling) {
		walking = true;
		//   hatcheck(true);
		left_walking = true;
		left = true;

		if (scene === 5) {
			$('#torso').css('animation', 'swing_backwards 2s infinite ease-in-out');
			$('#torso').css('left', '12px');
		}

		if (!stepping) {
			take_step();
		}
	}
}

function step_right() {
	$('#rightborder').css('bottom', button_height);

	if (startup) return;

	walking = true;
	right_walking = true;
	left = false;

	if (scene === 5) {
		$('#torso').css('animation', 'swing 2s infinite ease-in-out');
		$('#torso').css('left', '0px');
	}

	if (!stepping && !falling) {
		// hatcheck(false);

		take_step();
	}
}

function volume_toggle() {
	if (sound_off_to_start) sound_off_to_start = false;

	if (mobile && first_mobile && audio_loaded) {
		first_mobile = false;

		metal_sound.volume =
			hatdance_audio.volume =
			konami_pipe.volume =
			konami_jump.volume =
			konami_start.volume =
			step2_audio.volume =
			step1_audio.volume =
			bg_audio_2.volume =
			bg_audio_3.volume =
			bg_audio_4.volume =
			effect1_audio.volume =
			effect2_audio.volume =
			effect3_audio.volume =
			effect4_audio.volume =
			effect5_audio.volume =
			grass_step1_audio.volume =
			grass_step2_audio.volume =
			roar.volume =
			balloon4_audio.volume =
			balloon3_audio.volume =
			balloon2_audio.volume =
			balloon1_audio.volume =
				0;

		step1_audio.play();
		step2_audio.play();
		bg_audio_2.play();
		bg_audio_3.play();
		bg_audio_4.play();
		hatdance_audio.play();
		roar.play();
		grass_step2_audio.play();
		grass_step1_audio.play();
		balloon1_audio.play();
		balloon4_audio.play();
		balloon3_audio.play();
		balloon2_audio.play();
		effect5_audio.play();
		effect4_audio.play();
		effect3_audio.play();
		effect2_audio.play();
		effect1_audio.play();
		metal_sound.play();

		step1_audio.pause();
		step2_audio.pause();
		bg_audio_2.pause();
		bg_audio_3.pause();
		bg_audio_4.pause();
		hatdance_audio.pause();
		roar.pause();
		grass_step2_audio.pause();
		grass_step1_audio.pause();
		balloon4_audio.pause();
		balloon3_audio.pause();
		balloon2_audio.pause();
		balloon1_audio.pause();
		effect5_audio.pause();
		effect4_audio.pause();
		effect3_audio.pause();
		effect2_audio.pause();
		effect1_audio.pause();
		metal_sound.pause();

		chief.play();
		chief.pause();

		roar.volume = roar_volume;

		bg_audio_2.volume = bg_volume_2;
		bg_audio_3.volume = bg_volume_3;
		bg_audio_4.volume = bg_volume_4;

		grass_step1_audio.volume = grass_step2_audio.volume = grass_step_volume;

		step1_audio.volume = step2_audio.volume = step1_volume;

		konami_pipe.volume =
			konami_jump.volume =
			konami_start.volume =
				konami_volume;

		hatdance_audio.volume = hat_dance_volume;

		effect1_audio.volume = effect1_volume;
		effect2_audio.volume = effect2_volume;
		effect3_audio.volume = effect3_volume;
		effect4_audio.volume = effect4_volume;
		effect5_audio.volume = effect5_volume;
		balloon1_audio.volume = balloon1_volume;
		balloon2_audio.volume = balloon2_volume;
		balloon3_audio.volume = balloon3_volume;
		balloon4_audio.volume = balloon4_volume;

		metal_sound.volume = metal_volume;

		chief.volume = chief_volume;
	}

	if (volume_on) {
		hatdance_audio.volume = 0;

		chief.volume = 0;

		volume_on = 0;

		bg(false);

		$('#volume').attr('src', volumeoff.src);
	} else {
		volume_on = 1;

		bg(true);

		hatdance_audio.volume = hat_dance_volume;
		chief.volume = chief_volume;

		if (still_partying) chief.play();

		if (dancing) hatdance_audio.play();

		$('#volume').attr('src', volumeon.src);
	}
}

function take_step() {
	if (left && position <= initial_position) return;

	if (falling && !marching) return;

	stepping = true;

	frame = function () {
		if (position >= initial_position) startup = false;

		if (
			(!marching || (scene === 4 && position > cutoff_4 + cutoff_4_bonus)) &&
			((scene === 4 && position > cutoff_4) ||
				(position > cutoff_1 && scene === 1) ||
				(position > cutoff_5 && scene === 5 && !left) ||
				(position > cutoff_2 && scene === 2) ||
				(position > cutoff_3 && scene === 3) ||
				(left && position <= initial_position) ||
				(startup && position >= initial_position && !walking) ||
				(!startup &&
					!walking &&
					(position >= last_position + step ||
						position <= last_position - step)))
		) {
			stepping = false;
			last_position = position;
			clearInterval(id);

			if (
				(scene === 4 && position > cutoff_4 && !falling) ||
				(scene === 1 && position > cutoff_1 && !falling) ||
				(scene === 2 && position > cutoff_2 && scene === 2 && !falling) ||
				(scene === 3 && position > cutoff_3 && !falling)
			) {
				fall();
			}
		} else {
			if (left) position -= speed;
			else position += speed;

			$('#donald').css({
				transition: 'left 0s, top 0s',
				left: position + 'px',
			});

			if (scene === 5) {
				$('#donald').css({
					transition: 'left 0s, top .5s cubic-bezier(1, 0, 0, 1)',
				});
			}

			ce = Math.sin(((position - landing_position) / 100) * Math.PI);

			if (!jumping) {
				$('#leg1').css({
					'transition-duration': '0s',
					transform: 'rotate(' + 20 * ce + 'deg)',
				});

				$('#leg2').css({
					'transition-duration': '0s',
					transform: 'rotate(' + -20 * ce + 'deg)',
				});
			}

			if (scene !== 5) {
				if (!jumping) {
					if (ce > 0.95 && step_sound && volume_on) {
						if (scene === 4) grass_step2_audio.play();
						else step2_audio.play();

						step_sound = false;
					} else if (ce < -0.95 && step_sound && volume_on) {
						if (scene === 4) grass_step1_audio.play();
						else step1_audio.play();

						step_sound = false;
					} else if (ce > -0.5 && ce < 0.5 && !step_sound) {
						step_sound = true;
					} else if (startup && ce === 0 && !walking && volume_on) {
						if (scene === 4) grass_step2_audio.play();
						else step2_audio.play();
					}
				}
			} // not scene 5
			else if (position > (8 - active_balloons.length + 2) * (cutoff_5 / 9))
				bpop(active_balloons.length - 1);
		}
	};

	var id = setInterval(frame, 7);
}

var clown = false;

function fall() {
	if (scene === 4) {
		marching = true;

		take_step();
	}

	setTimeout(function () {
		update_counter(1);
	}, 500);

	falling = true;

	hat_dance = 0;
	// hat_step = false;
	no_more_dancing = false;
	jumpcount = 0;

	sequence = [];

	if (!dancing && !konami_code) {
		setTimeout(function () {
			if (!clown) {
				if (scene === 5)
					$('#torso').css(
						'background-image',
						"url('./assets/trump_torso_bugly.png' )"
					);
				else
					$('#torso').css(
						'background-image',
						"url('./assets/trump_torso_angry_" + angry_num + ".png' )"
					);
			}

			clown = false;

			//      setTimeout(snap, 0);

			angry_num++;

			if (angry_num > angry_count) angry_num = 1;

			if (volume_on) {
				if (effect_count === 1) effect1_audio.play();
				else if (effect_count === 2) effect2_audio.play();
				else if (effect_count === 3) effect3_audio.play();
				else if (effect_count === 4) effect4_audio.play();
				else if (effect_count === 5) {
					effect5_audio.play();
					effect_count = 0;
				}
				effect_count++;
			}
		}, 0);
	} else if (konami_code) konami_pipe.play();

	if (scene === 2) {
		setTimeout(function () {
			party.addsmoke(400, 450, 40 * smoke_multiplier);
		}, 800);
	} else if (scene === 3) {
		lights++;

		if (lights % 5 === 0) {
			setTimeout(function () {
				console.log('Cowabunga!');

				$('#wordbubble').show();

				gtag('event', 'Lights Out');
			}, 1000);

			for (i = 0; i < 3; i++) {
				setTimeout(function () {
					$('#wordbubble').hide();
				}, 1000 + 100 * i);

				setTimeout(function () {
					$('#wordbubble').show();
				}, 1000 + 50 + 100 * i);
			}

			setTimeout(function () {
				$('#wordbubble').hide();
				for (i = 0; i < 2; i++) {
					setTimeout(function () {
						$('#wordbubble').show();
					}, 50 + 100 * i);

					setTimeout(function () {
						$('#wordbubble').hide();
					}, 100 + 100 * i);
				}
			}, 5000);

			reset_time += light_bonus;
		}

		$('#donald').css({
			transitionDuration: '.2s',
			left: '390px',
			top: '150px',
		});

		$('#leg1').css({
			'transition-duration': '.2s',
			transform: 'rotate(-5deg)',
		});

		$('#leg2').css({
			'transition-duration': '.2s',
			transform: 'rotate(-5deg)',
		});
	} else if (scene === 4) {
		setTimeout(function () {
			$('#dino').css({
				'transition-duration': '.6s',

				transform: 'rotate(-65deg)',
			});

			if (volume_on) roar.play();
		}, 0);

		setTimeout(function () {
			$('#jaw').css({
				'transition-duration': '.2s',
				transform: 'rotate(25deg)',
			});
			marching = false;
		}, 500);

		setTimeout(function () {
			$('#dino_and_donald').css({
				'transition-duration': '.5s',

				transform: 'rotate(25deg)',
			});
		}, 900);

		// reset

		setTimeout(function () {
			$('#dino_and_donald').css({
				'transition-duration': '0s',

				transform: 'rotate(0deg)',
			});

			$('#dino').css({
				'transition-duration': '0s',

				transform: 'rotate(-25deg)',
			});

			$('#jaw').css({
				'transition-duration': '0',

				transform: 'rotate(0deg)',
			});
		}, reset_time);
	} else if (scene === 5) {
		$('#donald').css({
			transitionDuration: '1s',
			top: '+=200px',
		});
	}

	if (scene === 1 || scene === 2 || scene === 3) {
		var r = 0;

		if (scene !== 3) {
			$('#donald').css({
				transition: '.2s top ease, .2s left ease, .8s transform ease',
				left: '+=50px',
				top: '-=10px',
			});
			r = Math.random() * 90;
		} else r = 5 - Math.random() * 10;

		$('#donald').css({
			transform: 'rotate(' + r + 'deg)',
		});

		setTimeout(function () {
			$('#donald').css({
				'transition-duration': '1s',
				top: '490px',
			});
		}, 200);
	}

	setTimeout(function () {
		var toppx = top_1;

		top_5 = 130; // reset balloon offset

		if (scene === 2) toppx = top_2;
		else if (scene === 3) toppx = top_3;
		else if (scene === 4) toppx = top_4;
		else if (scene === 5) toppx = top_5;

		$('#donald').css({
			'transition-duration': '0s',
			transform: 'rotate(0deg)',
			left: '-126px',
			top: toppx,
		});

		$('#dino_and_donald').css({
			'transition-duration': '0s',

			top: '0',
		});

		if (dancing) {
			hatdance_audio.pause();
			hatdance_audio.currentTime = 0;
		}

		if (is_tv_ready) balloons(true);

		if (scene === 5) {
			$('#torso').css('background-image', "url('./assets/trump_torso_b.png' )");
			$('#torso').css('animation', 'swing 2s infinite ease-in-out');
		} else $('#torso').css('background-image', "url('./assets/trump_torso_normal.png' )");

		jumping = false;
		landing_position = initial_position;
		konami_code = false;

		position = last_position = -126;

		falling = false;
		startup = true;

		left = false;
		take_step();
	}, reset_time);

	if (scene === 3 && lights % 5 === 0) {
		reset_time -= light_bonus;
	}
	gtag('event', 'Fall Off Cliff', { scene });
}

function konamiCode() {
	if (scene === 5) return;

	console.log('Konami Code!!');

	$('#torso').css('background-image', "url('./assets/trump_torso_8bit.png')");

	konami_code = true;

	if (volume_on) konami_start.play();

	gtag('event', 'Konami Code');
}

function hatDance() {
	if (scene === 5) return;

	console.log('Mexican Hat Dance!!');

	$('#torso').css(
		'background-image',
		"url('./assets/trump_torso_sombrero.png')"
	);

	dance++; // tracking so we dont take hat off during second dance due to long timeout
	no_more_dancing = true;
	dancing = true;

	if (!volume_on) hatdance_audio.volume = 0;
	hatdance_audio.play();

	gtag('event', 'Hat Dance!');

	setTimeout(function () {
		dance--;

		if (dance > 0) return;

		dancing = false;

		if (konami_code)
			$('#torso').css(
				'background-image',
				"url('./assets/trump_torso_8bit.png')"
			);
		else if (!falling)
			$('#torso').css(
				'background-image',
				"url('./assets/trump_torso_normal.png')"
			);
	}, 7400);
}

var canvas = document.getElementById('smoker');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;
var party = smokemachine(ctx, [220, 220, 220]);

var canvas2 = document.getElementById('smoker2');
canvas2.width = 800;
canvas2.height = 450;
var party2 = smokemachine(canvas2.getContext('2d'), [255, 255, 255]);

function drawClouds() {
	var x = -200 + Math.random() * 1000;
	var y = -100 + Math.random() * 550;
	var t = Math.random() * 50 * smoke_multiplier;

	party2.addsmoke(x, y, t);

	setTimeout(function () {
		if (scene === 5) drawClouds();
	}, 500 * smoke_multiplier);
}

function drawSmoke() {
	var x = 300 + Math.random() * 600;
	var y = 200 + Math.random() * 600;
	var t = Math.random() * 10 * smoke_multiplier;

	party.addsmoke(x, y, t);

	setTimeout(function () {
		if (scene === 2) drawSmoke();
	}, 500 * smoke_multiplier);
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function update_counter(num) {
	fall_count += num;
	$('#hitcount_span').html(numberWithCommas(fall_count));

	user_drop = true;
}

message1 = message2 = '';

var g1, g2, g3, g4, g5, g6, g7, g8;
var active_balloons = [];

var world, engine, runner;

function balloons(first_time) {
	if (first_time) {
		Matter.World.remove(world, [g1, g2, g3, g4, g5, g6, g7, g8]);

		Matter.World.add(world, [g1, g2, g3, g4, g5, g6, g7, g8]);

		active_balloons = [g1, g2, g3, g4, g5, g6, g7, g8];

		return;
	}

	var Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		Body = Matter.Body,
		Constraint = Matter.Constraint,
		Composites = Matter.Composites,
		Composite = Matter.Composite,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse,
		World = Matter.World,
		Bodies = Matter.Bodies;

	// create engine
	engine = Engine.create();
	world = engine.world;

	// create renderer

	var c_width = 600;
	var c_height = 500;
	var render = Render.create({
		element: document.getElementById('b_wrapper'),
		engine: engine,
		options: {
			width: c_width,
			height: c_height,
			showAxes: false,
			showConvexHulls: false,
			wireframes: false,
			background: 'transparent',
		},
	});

	Render.run(render);

	// create runner
	runner = Runner.create();
	Runner.run(runner, engine);

	// Runner.stop(engine)

	world.gravity.y = -1;

	var b_density = 0.5,
		b_friction = 0.05,
		b_frictionAir = 0.1,
		b_restitution = 0.05,
		b_radius = 15,
		c_x = c_width / 2 + 7, // trump's hand root
		c_y = c_height / 2 - 35, // trump's hand root
		b_x = 0, // anchor on balloon
		b_y = 22, // anchor on balloon
		c_l = 95, // length
		b_s = 1, // stiffness
		spacer = b_radius * 2,
		b_xx = c_x - spacer,
		b_yy = c_y - 2 * spacer - c_l,
		xscale = 0.5,
		yscale = 0.5,
		topLevel = 0x0001,
		midLevel = 0x0002,
		botLevel = 0x0004;

	// console.log(b_xx, b_yy);
	// console.log(b_xx + 2 * spacer, b_yy + 2 * spacer);

	var group = Body.nextGroup(true);

	var b1 = Bodies.circle(b_xx, b_yy, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: topLevel },

		render: {
			sprite: {
				texture: 'assets/blue.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	var b2 = Bodies.circle(b_xx + spacer, b_yy, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: topLevel },

		render: {
			sprite: {
				texture: 'assets/white.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	var b3 = Bodies.circle(b_xx + 2 * spacer, b_yy, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: topLevel },

		render: {
			sprite: {
				texture: 'assets/red.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});
	group = Body.nextGroup(true);

	var b4 = Bodies.circle(b_xx, b_yy + spacer, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: midLevel },

		render: {
			sprite: {
				texture: 'assets/yellow.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	group = Body.nextGroup(true);

	var b5 = Bodies.circle(b_xx + spacer, b_yy + spacer, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: midLevel },

		render: {
			sprite: {
				texture: 'assets/green.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	var b6 = Bodies.circle(b_xx + spacer * 2, b_yy + spacer, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: midLevel },

		render: {
			sprite: {
				texture: 'assets/orange.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	var b7 = Bodies.circle(b_xx + 0.5 * spacer, b_yy + 2 * spacer, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: botLevel },

		render: {
			sprite: {
				texture: 'assets/pink.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	group = Body.nextGroup(true);

	var b8 = Bodies.circle(b_xx + 1.5 * spacer, b_yy + 2 * spacer, b_radius, {
		density: b_density,
		friction: b_friction,
		frictionAir: b_frictionAir,
		restitution: b_restitution,
		collisionFilter: { category: botLevel },

		render: {
			sprite: {
				texture: 'assets/purple.png',
				xScale: xscale,
				yScale: yscale,
			},
		},
	});

	var c1 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b1,
		pointB: { x: b_x, y: b_y },
		length: c_l,
		stiffness: b_s,

		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c2 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b2,
		pointB: { x: b_x, y: b_y },
		length: c_l,

		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c3 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b3,
		pointB: { x: b_x, y: b_y },
		length: c_l,

		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c4 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b4,
		pointB: { x: b_x, y: b_y },
		length: c_l - spacer,
		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c5 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b5,
		pointB: { x: b_x, y: b_y },
		length: c_l - spacer,

		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c6 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b6,
		pointB: { x: b_x, y: b_y },
		length: c_l - spacer,

		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c7 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b7,
		pointB: { x: b_x, y: b_y },
		length: c_l - 2 * spacer,
		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	var c8 = Constraint.create({
		pointA: { x: c_x, y: c_y },
		bodyB: b8,
		pointB: { x: b_x, y: b_y },
		length: c_l - 2 * spacer,

		stiffness: b_s,
		render: {
			strokeStyle: 'rgba(255,255,255,.15)',
			fillStyle: 'rgba(255,255,255,.15)',
			lineWidth: 1,
			anchors: false,
		},
	});

	g1 = Composite.create();
	Composite.add(g1, [b1, c1]);

	g2 = Composite.create();
	Composite.add(g2, [b2, c2]);

	g3 = Composite.create();
	Composite.add(g3, [b3, c3]);

	g4 = Composite.create();
	Composite.add(g4, [b4, c4]);

	g5 = Composite.create();
	Composite.add(g5, [b5, c5]);

	g6 = Composite.create();
	Composite.add(g6, [b6, c6]);

	g7 = Composite.create();
	Composite.add(g7, [b7, c7]);

	g8 = Composite.create();
	Composite.add(g8, [b8, c8]);

	World.add(world, [g1, g2, g3, g4, g5, g6, g7, g8]);

	active_balloons = [g1, g2, g3, g4, g5, g6, g7, g8];

	/*

     c1, c2, c3, c4, c5, c6, c7, c8,
        b1, b2, b3, b4, b5, b6, b7, b8, 

        Matter.Events.on(mouseconstraint, "enddrag", function(data) {
            console.log(data);
        });
    */

	// add mouse control
	var mouse = Mouse.create(render.canvas),
		mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.1,
				render: {
					visible: false,
				},
			},
		});

	World.add(world, mouseConstraint);

	// keep the mouse in sync with rendering
	render.mouse = mouse;

	var mouse_counter = 0;

	Matter.Events.on(mouseConstraint, 'startdrag', function (e) {
		mouse_counter = 0;
	});

	Matter.Events.on(mouseConstraint, 'mousemove', function (e) {
		mouse_counter++;
	});

	Matter.Events.on(mouseConstraint, 'enddrag', function (e) {
		if (mouse_counter < 5) {
			var id = parseInt(e.body.id);

			for (i = 0; i < active_balloons.length; i++) {
				if (active_balloons[i].bodies[0].id == id) {
					bpop(i);
					i--;
				}
			}
		} else {
			if (volume_on) {
				if (Math.random() > 0.5) balloon4_audio.play();
				else balloon3_audio.play();
			}
		}
	});

	// WIND GENERATOR

	Matter.Events.on(runner, 'beforeUpdate', function (e) {
		var yyy = Matter.Common.random(-0.03, 0);
		var xxx = c_width;

		if (left) yyy = Matter.Common.random(0, 0.03);

		var from = Matter.Vector.create(xxx, c_height - 15);
		var force = Matter.Vector.create(0, yyy);

		Body.applyForce(b1, from, force);
		Body.applyForce(b2, from, force);
		Body.applyForce(b3, from, force);
		Body.applyForce(b4, from, force);
		Body.applyForce(b5, from, force);
		Body.applyForce(b6, from, force);
		Body.applyForce(b7, from, force);
		Body.applyForce(b8, from, force);
	});

	return {
		engine: engine,
		runner: runner,
		render: render,
		canvas: render.canvas,
		stop: function () {
			Matter.Render.stop(render);
			Matter.Runner.stop(runner);
		},
	};
}
var next_b = true;

function bpop(num) {
	if (volume_on) {
		if (Math.random() > 0.5) {
			balloon1_audio.play();
			next_b = false;
			// console.log("playing b1");
		} else {
			balloon2_audio.play();
			next_b = true;
			// console.log("playing b2");
		}
	}

	Matter.Composite.remove(world, active_balloons[num]);

	active_balloons.splice(num, 1);

	if (active_balloons.length === 1 && active_balloons[0] == g3) {
		$('#torso').css('background-image', "url('./assets/trump_torso_it.png' )");
		clown = true;

		console.log('Pennywise!');

		gtag('event', 'IT Clown');
	}
	if (active_balloons.length === 0) fall();
	else {
		$('#donald').css({ transition: '.2s top ease', top: '+=20' });
		top_5 += 20;
	}
}

// ON START //

volumeoff = new Image();
volumeon = new Image();
volumeoff.src =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkVEOUU3MzY2NkFEMTFFN0FEM0NCRkI2NEMyMzk3NTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkVEOUU3Mzc2NkFEMTFFN0FEM0NCRkI2NEMyMzk3NTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRUQ5RTczNDY2QUQxMUU3QUQzQ0JGQjY0QzIzOTc1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRUQ5RTczNTY2QUQxMUU3QUQzQ0JGQjY0QzIzOTc1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtTrw2EAAAKrSURBVHja7JvBixJxFMdn1AZ0Lra1WakH6aKiNVPtJkJ6KYRAGCsCC08KmiD4X6R0EvoHREQPWoet1a27EHSQ/gDD8GoImpKk0xuYhWVZctl1nJ15vweDA7/D+P3Mb96872MeLYoihTkMFPIwlUolVf8Az/NUKBTCewfS6TQlPYZqHao/AmazmeQAVXPAJi9ms9lYQRCi8/n8T6PR2BuPx39pmsZB2u/3O3q93jdRjk6n855hmEu5XE7VHLAp8fbBYPBdPBaBQGA3mUzqOwmC+JutVmvfbrf7j6+xLLuldiFmUFj8DVn87ZPWlxC6rQRB/HVZ/B10pfAR8Rw6LwDibSD+E4jn0ZkhEH9NFn8XnRt0u93bsvh76OwwiN5uNpuS+Pvo+gEg+mq73f7o9Xp30DVEQPwVSbzP59tF1xE6Iv6Blj3KmQA4HI7LIH4PxAc0b4ctFoshlUq9DAaDO+DOJCCrinOR47iHLpeLp3QQpnq9/i4ajb7G2hAxgPgM5o6QtOVp7AAoAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIABwAej3+18xAzAJgvCiWCy+8Xg8nLwjVn6x4HQ6b8EPowsA3W73ZyQSeSV1h6lTtsdisdijcrncNBqNrOYBHJ5Mp9NTf61RrVYPlstlrFKpfNA6hDMnwVqt9iWRSDxdLBa/0b4FAMJnrUM492tQ6xDWUgfIEJ5pEcLaCiGAcCBDmKKtBLUIYe2lMEBoawmCIl5ASxAUM0MyhOcXHYKibhAgtGQIs5PW6QswLKC4Hf4fBCin52hsZzwefyLVCYezAsPh8IfVat3KZrOqzgtsbGQGdsL+ZDJ5nMlkstLITKFQeDsajX4xDEOhjnw+j3tsTvdJcFXMZjN1GyLSFlQzwuGwqtenyfQ48vgnwAAcTfJMqvJP7wAAAABJRU5ErkJggg==';
volumeon.src =
	'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDYxMS45ODEgNjExLjk4MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjExLjk4MSA2MTEuOTgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI4NC41NCw2NC4wN2MtOC4yNzgtMy40MjEtMTcuODEyLTEuNTExLTI0LjIzNSw0Ljg5NEwxMjUuODMyLDIwNC4yOTJIMjIuMjUxQzkuOTE2LDIwNC4yOTIsMCwyMTQuMjQ1LDAsMjI2LjU0NHYxNjAuNjAxICAgIGMwLDEyLjI5OSw5LjkxNiwyMi4yNTEsMjIuMjUxLDIyLjI1MUgxMjUuMzRsMTM1LjAzOCwxMzUuMzI5YzQuMjU3LDQuMjc1LDkuOTg5LDYuNTMyLDE1LjczOCw2LjUzMiAgICBjMi44MzgsMCw1Ljc4Ni0wLjU0Niw4LjQ5Ny0xLjY5MmM4LjM1MS0zLjQyMSwxMy43NTUtMTEuNTU0LDEzLjc1NS0yMC41NDFWODQuNjI4QzI5OC4zNDksNzUuNjIzLDI5Mi44OTEsNjcuNDksMjg0LjU0LDY0LjA3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik01MTYuMTE2LDMwNi4yMTZjMC04My4zNjUtNDkuNTQzLTE1OC40NTMtMTI2LjI1LTE5MS4zNjdjLTExLjI5OS00LjgzOS0yNC40MTYsMC4zODMtMjkuMjIsMTEuNjk5ICAgIGMtNC44NTcsMTEuMjgsMC4zNjQsMjQuMzYyLDExLjY2MiwyOS4yMDJjNjAuNDA1LDI1Ljg3Miw5OS4zMjMsODQuOTMxLDk5LjMyMywxNTAuNDY2YzAsNjUuMjQ1LTM4Ljc3MiwxMjQuMTU4LTk4LjgzMiwxNTAuMDQ5ICAgIGMtMTEuMjYyLDQuODc2LTE2LjQ4MywxNy45NTctMTEuNjI2LDI5LjIyYzMuNjIxLDguNDI0LDExLjgyNiwxMy40NDUsMjAuNTA1LDEzLjQ0NWMyLjg3NSwwLDUuODk2LTAuNTgyLDguNzctMS44MzggICAgQzQ2Ni44MjgsNDY0LjE3OSw1MTYuMTE2LDM4OS4yNTUsNTE2LjExNiwzMDYuMjE2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik00MTcuNjg2LDMwNi4xOGMwLTQ0LjA0OC0yNi4xODItODMuNjIxLTY2Ljc3My0xMDAuODMyYy0xMS4yNjItNC43MTMtMjQuMzQ0LDAuNDczLTI5LjExLDExLjgwOCAgICBjLTQuODc2LDExLjMxNiwwLjQxOCwyNC4zOCwxMS43MTcsMjkuMTg0YzI0LjA5LDEwLjE4OCwzOS42MjcsMzMuNjk1LDM5LjYyNyw1OS44NDFjMCwyNS44MzYtMTUuMzkyLDQ5LjIzNC0zOS4xNTMsNTkuNTg3ICAgIGMtMTEuMjk5LDQuODc2LTE2LjQ0OCwxNy45NzYtMTEuNTksMjkuMjU2YzMuNjU3LDguMzg4LDExLjgyNiwxMy4zNzMsMjAuNDMyLDEzLjM3M2MyLjk0NywwLDYuMDA0LTAuNTgyLDguODc5LTEuODU2ICAgIEMzOTEuNzc2LDM4OS4xNDYsNDE3LjY4NiwzNDkuNzM4LDQxNy42ODYsMzA2LjE4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik00MjcuNjc0LDI2LjgwN2MtMTEuMjk5LTQuODk0LTI0LjQ1MywwLjM0Ni0yOS4yMiwxMS42NjNjLTQuODc2LDExLjI5OSwwLjM0NiwyNC4zOCwxMS42NjIsMjkuMjAxICAgIGM5NS41OTMsNDEuMDI4LDE1Ny4zNDUsMTM0LjY1NiwxNTcuMzQ1LDIzOC41ODJjMCwxMDMuNTQzLTYxLjUxNiwxOTYuOTg5LTE1Ni44MTYsMjM4LjA5ICAgIGMtMTEuMjk5LDQuODc2LTE2LjUyMSwxNy45MzktMTEuNjk5LDI5LjIyYzMuNjU3LDguNDI0LDExLjgyNiwxMy40NDUsMjAuNDMyLDEzLjQ0NWMyLjk0OCwwLDYuMDA1LTAuNTgyLDguODc5LTEuODM3ICAgIGMxMTEuNTg2LTQ4LjEwNSwxODMuNzI2LTE1Ny42MTcsMTgzLjcyNi0yNzguOTM3QzYxMiwxODQuNTM0LDUzOS42NzgsNzQuODQsNDI3LjY3NCwyNi44MDd6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';

$(document).ready(function () {
	balloons(false);

	if ($('#buttons').is(':visible')) {
		mobile = true;
		smoke_multiplier = 0.7;
		button_height = '-2px';

		$('#volume').attr('src', volumeoff.src);
		volume_on = 0;
		// chief.volume = 0;
	} else if (!document.hasFocus()) {
		$('#volume').attr('src', volumeoff.src);
		volume_on = 0;
		//  chief.volume = 0;
	} else {
		$('#volume').attr('src', volumeoff.src);
		// bg(true);
	}

	$('#donald').css('top', top_1 + 'px');

	img5 = new Image();
	img6 = new Image();
	img7 = new Image();
	img5.src = './assets/trump_torso_normal.png';
	img6.src = './assets/trump_left_leg.png';
	img7.src = './assets/trump_right_leg.png';

	setTimeout(function () {
		img1 = new Image();
		img1.src = './assets/trump_torso_angry_1.png';

		bg2 = new Image();
		bg3 = new Image();
		bg4 = new Image();
		bg2.src = './assets/bg1.jpg';
		bg3.src = './assets/bg3.jpg';
		bg4.src = './assets/bg4.jpg';

		grass_step1_audio = new Audio('./assets/grass_step_1.mp3');
		grass_step2_audio = new Audio('./assets/grass_step_2.mp3');
		grass_step1_audio.volume =
			grass_step2_audio.volume =
			grass_step_volume =
				0.4;

		img2 = new Image();
		img3 = new Image();
		img2.src = './assets/trump_torso_angry_2.png';
		img3.src = './assets/trump_torso_angry_3.png';

		effect2_audio = new Audio('./assets/se3_echo.mp3');
		effect2_audio.volume = effect2_volume = 1;

		balloon1_audio = new Audio('./assets/pop.mp3');
		balloon2_audio = balloon2_audio = new Audio('./assets/pop2.mp3');
		balloon3_audio = balloon3_audio = new Audio('./assets/bounce.mp3');
		balloon4_audio = balloon4_audio = new Audio('./assets/bounce2.mp3');
		balloon3_audio.volume = balloon3_volume = 1;
		balloon4_audio.volume = balloon4_volume = 1;
		balloon1_audio.volume =
			balloon1_volume =
			balloon2_audio.volume =
			balloon2_volume =
				1;

		effect3_audio = new Audio('./assets/se2_echo.mp3');
		effect3_audio.volume = effect3_volume = 0.8;
		effect4_audio = new Audio('./assets/se1_echo.mp3');
		effect4_audio.volume = effect4_volume = 0.8;

		effect5_audio = new Audio('./assets/rich.mp3');
		effect5_audio.volume = effect5_volume = 0.4;

		roar = new Audio('./assets/roar.mp3');
		roar.volume = roar_volume = 0.4;

		if (!preloaded) {
			load_audio();
		}

		setTimeout(function () {
			hatdance_audio = new Audio('./assets/hatdance.mp3');
			hatdance_audio.volume = hat_dance_volume = 0.9;

			img4 = new Image();
			img4.src = './assets/trump_torso_sombrero.png';

			img9 = new Image();
			img9.src = './assets/trump_torso_b.png';

			img10 = new Image();
			img10.src = './assets/trump_torso_it.png';

			img11 = new Image();
			img11.src = './assets/trump_torso_bugly.png';

			img12 = new Image();
			img12.src = './assets/trump_torso_b.png';

			img13 = new Image();
			img13.src = './assets/blue.png';

			img14 = new Image();
			img14.src = './assets/white.png';

			img15 = new Image();
			img15.src = './assets/green.png';

			img16 = new Image();
			img16.src = './assets/yellow.png';

			img17 = new Image();
			img17.src = './assets/pink.png';

			img18 = new Image();
			img18.src = './assets/purple.png';

			img19 = new Image();
			img19.src = './assets/red.png';

			img8bit = new Image();
			img8bit.src = './assets/trump_torso_8bit.png';

			konami_pipe = new Audio('./assets/pipe.mp3');
			konami_jump = new Audio('./assets/jump.mp3');
			konami_start = new Audio('./assets/powerup.mp3');
			konami_pipe.volume =
				konami_jump.volume =
				konami_start.volume =
				konami_volume =
					0.8;

			metal_sound = new Audio('./assets/clink.mp3');
			metal_sound.volume = metal_volume = 0.8;

			chief = new Audio('./assets/chief.mp3');
			chief.volume = chief_volume = 0.7;

			setTimeout(function () {
				audio_loaded = true;
			});
		}, 0);
	}, 0);

	setTimeout(function () {
		take_step();
	}, 2000);
}); // on ready
