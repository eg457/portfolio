
whenWindowLoaded();

function whenWindowLoaded() {
    
    window.onload = function() {
		
        window.fct = {};

        initUserData();
        
        startSim();
		
    }
}



function startSim() {

	var o;
    
    o = fct.userData.generateUserID();
    o = fct.userData.postPageView();
	
    
}
	



