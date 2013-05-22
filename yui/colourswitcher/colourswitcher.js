YUI.add('moodle-theme_standard_custom-colourswitcher', function(Y) {
    // Available colours
    var COLOURS = ['default','white','grey','cream','blue','yellow','cyan','magenta','black','blacktwo','bluetwo','bluethree'];
	var FONTS = ['default','large','medium','small'];
	var BACKS = ['default','a','b','c','d','e','f','g','h','i'];
	var WIDTHS = ['fixed','full'];
    var NAVS = ['default','top'];
    /**
     * Splash theme colour switcher class.
     * Initialise this class by calling M.theme_svc.init
     */
    var ColourSwitcher = function() {
        ColourSwitcher.superclass.constructor.apply(this, arguments);
    };
    ColourSwitcher.prototype = {
        /**
         * Constructor for this class
         * @param {object} config
         */
        initializer : function(config) {
            Y.one('#customtool').on('click', this.showAccessPanel, this, config);
        },
        /**
         * Sets the colour being used for the splash theme
         * @param {Y.Event} e The event that fired
         * @param {string} colour The new colour
         */
        setColour : function(e, colour) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            // Switch over the CSS classes on the body
            Y.one(document.body).replaceClass('cs-'+this.get('colour'), 'cs-'+colour);
            // Update the current colour
            this.set('colour', colour);
            // Store the users selection (Uses AJAX to save to the database)
            M.util.set_user_preference('theme_standard_custom_chosen_colour', colour);
            //alert(colour);
        },
		setFont : function(e, font) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            // Switch over the CSS classes on the body
            Y.one(document.body).replaceClass('csfont-'+this.get('font'), 'csfont-'+font);
            // Update the current font
            this.set('font', font);
            // Store the users selection (Uses AJAX to save to the database)
            M.util.set_user_preference('theme_standard_custom_chosen_font', font);
            //alert(colour);
        },
		setBack : function(e, back) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            // Switch over the CSS classes on the body
            Y.one(document.body).replaceClass('csback-'+this.get('back'), 'csback-'+back);
            // Update the current font
            this.set('back', back);
            // Store the users selection (Uses AJAX to save to the database)
            M.util.set_user_preference('theme_standard_custom_chosen_back', back);
            //alert(colour);
        },
		setWidth : function(e, width) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            // Switch over the CSS classes on the body
            Y.one(document.body).replaceClass('cswidth-'+this.get('width'), 'cswidth-'+width);
            // Update the current font
            this.set('width', width);
            // Store the users selection (Uses AJAX to save to the database)
            M.util.set_user_preference('theme_standard_custom_chosen_width', width);
            //alert(colour);
        },
		setNav : function(e, navi) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            // Switch over the CSS classes on the body
            Y.one(document.body).replaceClass('csnav-'+this.get('nav'), 'csnav-'+navi);
            // Update the current font
            this.set('nav', navi);
            // Store the users selection (Uses AJAX to save to the database)
            M.util.set_user_preference('theme_standard_custom_chosen_nav', navi);
            //alert(colour);
        },        
        showAccessPanel : function (e, config) {
            // Prevent the event from refreshing the page
            e.preventDefault();
             var cs = '<div id="colourswitcher" class="access_tools">'
                    + '<div class="inner"><div id="txt_opt">'
                    + '<ul><li class="font-default"><a href="#">Default Text Size</a></li>'
                    + '<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>'
                    + '<li class="font-small"><a href="#">Small</a></li>'
                    + '<li class="font-medium"><a href="#">Medium</a></li>'
                    + '<li class="font-large"><a href="#">Large</a></li></ul>'
                    + '<a id="reset_access" class="reset" href="#">Reset All</a></div>'
                    + '<div id="switchstyle"><h3>Change accessibility colours:</h3>'
                    + '<ul><li class="colour-default"><a href="#"><span class="text">Default</span></a></li>'
                    + '<li class="colour-grey"><a href="#"><span class="text">Grey with black text</span></a></li>'
                    + '<li class="colour-cream"><a href="#"><span class="text">Cream with black text</span></a></li>'
                    + '<li class="colour-blue"><a href="#"><span class="text">Blue with black text</span></a></li>'
                    + '<li class="colour-yellow"><a href="#"><span class="text">Yellow with black text</span></a></li>'
                    + '<li class="colour-cyan"><a href="#"><span class="text">Cyan with black text</span></a></li>'
                    + '<li class="colour-magenta"><a href="#"><span class="text">Magenta with black text</span></a></li>'
                    + '<li class="colour-white"><a href="#"><span class="text">White with black text</span></a></li>'
                    + '<li class="colour-black"><a href="#"><span class="text">Black with white text</span></a></li>'
                    + '<li class="colour-blacktwo"><a href="#"><span class="text">Black with yellow text</span></a></li>'
                    + '<li class="colour-bluetwo"><a href="#"><span class="text">Dark blue with white text</span></a></li>'
                    + '<li class="colour-bluethree"><a href="#"><span class="text">Dark blue with yellow text</span></a></li>'
                    + '</ul><h3>Change background</h3>'
                    + '<ul id="acc-backs"><li class="back-default"><a href="#"></a></li>'
                    + '<li class="back-a"><a href="#"></a></li>'
                    + '<li class="back-b"><a href="#"></a></li>'
                    + '<li class="back-c"><a href="#"></a></li>'
                    + '<li class="back-d"><a href="#"></a></li>'
                    + '<li class="back-e"><a href="#"></a></li>'
                    + '<li class="back-f"><a href="#"></a></li>'
                    + '<li class="back-g"><a href="#"></a></li>'           
                    + '</ul><h3>Change other settings</h3>'
                    + '<ul><li class="width-fixed"><a href="#"><span class="text">Fixed Width</span></a></li>'
                    + '<li class="width-full"><a href="#"><span class="text">Full Width</span></a></li>'
                    + '</ul></div><div id="access_close"><a href="#">Close theme tools</a></div></div></div>';
           
            colourswitchtool = Y.Node.create(cs);
            Y.one('#page').appendChild(colourswitchtool);
            Y.one('#colourswitcher').setStyle('display', 'block');
            Y.one('#access_close').on('click', this.hideAccessPanel, this);
            Y.one('#reset_access').on('click', this.resetAccess, this);   
                        var i, j,k,l,m, c, d,e,f,g;
            // Attach events to the links to change colours so we can do it with
            // JavaScript without refreshing the page
            for (i in COLOURS) {
                c = COLOURS[i];
                // Check if this is the current colour
                if (Y.one(document.body).hasClass('cs-'+c)) {
                    this.set('colour', c);
                }
                Y.all(config.div+' .colour-'+c).on('click', this.setColour, this, c);
            }
			for (j in FONTS) {
                d = FONTS[j];
                // Check if this is the current colour
                if (Y.one(document.body).hasClass('csfont-'+d)) {
                    this.set('font', d);
                }
                Y.all(config.div+' .font-'+d).on('click', this.setFont, this, d);
            }
			for (k in BACKS) {
                e = BACKS[k];
                // Check if this is the current colour
                if (Y.one(document.body).hasClass('csback-'+e)) {
                    this.set('back', e);
                }
                Y.all(config.div+' .back-'+e).on('click', this.setBack, this, e);
            }
			for (l in WIDTHS) {
                f = WIDTHS[l];
                // Check if this is the current colour
                if (Y.one(document.body).hasClass('cswidth-'+f)) {
                    this.set('width', f);
                }
                Y.all(config.div+' .width-'+f).on('click', this.setWidth, this, f);
            }			
			for (m in NAVS) {
                g = NAVS[m];
                // Check if this is the current colour
                if (Y.one(document.body).hasClass('csnav-'+g)) {
                    this.set('nav', g);
                }
                Y.all(config.div+' .nav-'+g).on('click', this.setNav, this, g);
            }
            
        },
        hideAccessPanel : function (e) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            cs = Y.one('#colourswitcher')
            cs.setStyle('display', 'none');
            cs.remove();
        },
		resetAccess : function(e) {
			colour='default';
			font='default';
			back='default';
			width='fixed';
            navi='default';
            e.preventDefault();
            Y.one(document.body).replaceClass('cs-'+this.get('colour'), 'cs-'+colour);
            this.set('colour', colour);
            M.util.set_user_preference('theme_standard_custom_chosen_colour', colour);
			Y.one(document.body).replaceClass('csfont-'+this.get('font'), 'csfont-'+font);
            this.set('font', font);
            M.util.set_user_preference('theme_standard_custom_chosen_font', font);
			Y.one(document.body).replaceClass('csback-'+this.get('back'), 'csback-'+back);
            this.set('back', back);
            M.util.set_user_preference('theme_standard_custom_chosen_back', back);
			Y.one(document.body).replaceClass('cswidth-'+this.get('width'), 'cswidth-'+width);
            this.set('width', width);
            M.util.set_user_preference('theme_standard_custom_chosen_width', width);
			Y.one(document.body).replaceClass('csnav-'+this.get('nav'), 'csnav-'+navi);
            this.set('nav', navi);
            M.util.set_user_preference('theme_standard_custom_chosen_nav', navi);            
		}
    };
	//Y.on("domready", function() {

	
    // Make the colour switcher a fully fledged YUI module
    Y.extend(ColourSwitcher, Y.Base, ColourSwitcher.prototype, {
        NAME : 'SVC theme colour switcher',
        ATTRS : {
            colour : {
                value : 'default'
            },
			font : {
                value : 'default'
            },
			back : {
				value : 'default'
			},
			width : {
				value : 'fixed'
			},
            navi : {
				value : 'default'
			}
        }
    });
    // Our splash theme namespace
    M.theme_standard_custom = M.theme_standard_custom || {};
    // Initialisation function for the colour switcher
    M.theme_standard_custom.initColourSwitcher = function(cfg) {
        return new ColourSwitcher(cfg);
    }

}, '@VERSION@', {requires:['base','node','event-base','io']});

/*YUI({
    //Last Gallery Build of this module
    gallery: 'gallery-2011.01.18-21-05'
}).use('gallery-event-konami', function(Y) {
 
    Y.one('#shortsearchbox').on('konami', function (e) {
        alert('You have been rewarded for your cheating');
        M.util.set_user_preference('theme_svc_chosen_colour', 'defaultcheater');
		

    });
 
});*/






