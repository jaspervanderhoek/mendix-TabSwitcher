dojo.provide("tabswitcher.widget.tabswitcher");

mendix.widget.declare('tabswitcher.widget.tabswitcher', {
    inputargs: {
        
		tabclass : '',
        direction: '',
        btnTitle : '',
        showAsButton : '',
		btnIcon : ''
        
    },
    
    parent : null,
	btn : null,
    
	postCreate : function() {
        this.buildSwitcher();
		this.actRendered();
	},
    
    buildSwitcher : function () {
        this.btn = new mendix.widget._Button({
			caption		: this.btnTitle,
			icon		: this.btnIcon,
			action		: dojo.hitch(this, this.selectTab),
			type		: this.showAsButton,
			cssclass	: ""
		});
        this.domNode.appendChild(this.btn.domNode);
    },
	
	getTab : function ( tabIndex ) {
        var gototab = null;
        this.tabContainer = dijit.byNode(dojo.query("."+this.tabclass)[0]);
        var tablist = this.tabContainer.getChildren();
        
		if( tabIndex == null ) 
			tabIndex = 0;
		
		console.debug("Searching for tab index: " + tabIndex);
		
		if (tablist.length > 0 ) {
			if( tabIndex >= tablist.length ) {
				tabIndex = tablist.length - 1;
				console.debug("Setting tab index to: " + tabIndex);
			}
			
			gototab = tablist[tabIndex];
			console.debug("Found a tab: " + gototab);
		}
        return gototab;
    },
    
    selectTab : function (index) {
        var tab = this.getTab(index);
		if (tab) {
			logger.debug("Found a tab and setting selection: " + index);
            tab.container.show(tab);
		}
    },
    
	uninitialize : function(){
	}
});