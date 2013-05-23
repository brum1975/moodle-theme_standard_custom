/*
 * Replace standard_custom with the name of your theme 
 */

YUI.add('moodle-theme_standard_custom-colourswitcher', function(Y) {

    var ColourSwitcher = function() {
        ColourSwitcher.superclass.constructor.apply(this, arguments);
    };
    ColourSwitcher.prototype = {
        /**
         * Constructor for this class
         * @param {object} config
         */
        initializer : function(config) { 
            Y.one('#customtool').on('click', this.showAccessPanel, this);//change customtool for id of your own link
        },
        showAccessPanel : function (e) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            /*
             * This is the html for the colour picker
             * All selectable options require the class cs-option
             * All ids should be lower case and in format group-option
             * HTML is added and deleted as required it is not in the page at other times
             * */
            var cs = '<div id="colourswitcher" class="access_tools">'
                + '<div class="inner"><div id="switchstyle"><div id="txt_opt">'
                + '<ul><li class="cs-option" id="font-default"><a href="#">Default Text Size</a></li>'
                + '<li class="cs-option" id="font-small"><a href="#">Small</a></li>'
                + '<li class="cs-option" id="font-medium"><a href="#">Medium</a></li>'
                + '<li class="cs-option" id="font-large"><a href="#">Large</a></li></ul>'
                + '<a id="reset_access" class="reset" href="#">Reset All</a></div>'
                + '<h3>Change accessibility colours:</h3>'
                + '<ul><li class="cs-option" id="colour-default"><a href="#"><span class="text">Default</span></a></li>'
                + '<li class="cs-option" id="colour-grey"><a href="#"><span class="text">Grey with black text</span></a></li>'
                + '<li class="cs-option" id="colour-cream"><a href="#"><span class="text">Cream with black text</span></a></li>'
                + '<li class="cs-option" id="colour-blue"><a href="#"><span class="text">Blue with black text</span></a></li>'
                + '<li class="cs-option" id="colour-yellow"><a href="#"><span class="text">Yellow with black text</span></a></li>'
                + '<li class="cs-option" id="colour-cyan"><a href="#"><span class="text">Cyan with black text</span></a></li>'
                + '<li class="cs-option" id="colour-magenta"><a href="#"><span class="text">Magenta with black text</span></a></li>'
                + '<li class="cs-option" id="colour-white"><a href="#"><span class="text">White with black text</span></a></li>'
                + '<li class="cs-option" id="colour-black"><a href="#"><span class="text">Black with white text</span></a></li>'
                + '<li class="cs-option" id="colour-blacktwo"><a href="#"><span class="text">Black with yellow text</span></a></li>'
                + '<li class="cs-option" id="colour-bluetwo"><a href="#"><span class="text">Dark blue with white text</span></a></li>'
                + '<li class="cs-option" id="colour-bluethree"><a href="#"><span class="text">Dark blue with yellow text</span></a></li>'
                + '</ul><h3>Change background</h3>'
                + '<ul id="acc-backs"><li class="cs-option" id="back-default"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-alfa"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-bravo"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-charlie"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-delta"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-echo"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-foxtrot"><a href="#"></a></li>'
                + '<li class="cs-option" id="back-golf"><a href="#"></a></li>'           
                + '</ul><h3>Change other settings</h3>'
                + '<ul><li class="cs-option" id="width-fixed"><a href="#"><span class="text">Fixed Width</span></a></li>'
                + '<li class="cs-option" id="width-full"><a href="#"><span class="text">Full Width</span></a></li>'
                + '</ul></div><div id="access_close"><a href="#">Close theme tools</a></div></div></div>';
           
            colourswitchtool = Y.Node.create(cs);
            Y.one('#page').appendChild(colourswitchtool);
     
            Y.all("#switchstyle .cs-option").each(function (node){
                node.on('click', function(e){
                    e.preventDefault();
                    selected = this.get("id");
                    currentclass= selected;
                    chosen = selected.split("-",2);
                    filter= new RegExp("cs-"+chosen[0]+"-[a-z]*", "g");
                    var classList = Y.one(document.body).get('className');
                    currentclass=classList.match(filter);
                    Y.one(document.body).replaceClass(currentclass[0], 'cs-'+selected);
                    M.util.set_user_preference('theme_standard_custom_chosen_'+chosen[0], chosen[1]);
                })
            })
            
            Y.one('#access_close').on('click', this.hideAccessPanel, this);
            Y.one('#reset_access').on('click', this.resetAccess, this);   
        },
        hideAccessPanel : function (e) {
            // Prevent the event from refreshing the page
            e.preventDefault();
            cs = Y.one('#colourswitcher')
            cs.remove();
        },
		resetAccess : function(e) {
            e.preventDefault();
            var options = new Array("font","colour","back","width");
            var classList = Y.one(document.body).get('className');
            var thebody=Y.one(document.body);
            for (var i = 0; i < options.length; i++) {
                var filter= new RegExp("cs-"+options[i]+"-[a-z]*", "g");
                currentclass=classList.match(filter); 
                thebody.replaceClass(currentclass[0], 'cs-'+options[i]+'-default');
                M.util.set_user_preference('theme_standard_custom_chosen_'+options[i], 'default');               
            }
		}
    };
	
    // Make the colour switcher a fully fledged YUI module
    Y.extend(ColourSwitcher, Y.Base, ColourSwitcher.prototype, {
        NAME : 'YUI Colour Switcher',
    });
    // Our splash theme namespace
    M.theme_standard_custom = M.theme_standard_custom || {};
    // Initialisation function for the colour switcher
    M.theme_standard_custom.initColourSwitcher = function(cfg) {
        return new ColourSwitcher(cfg);
    }

}, '@VERSION@', {requires:['base','node','event-base','io']});






