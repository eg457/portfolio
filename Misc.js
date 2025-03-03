function initMisc(){
	
	var savedWinWidth = 0;
	var savedWinHeight = 0;
    var resized = false;
    var mobileScaleThreshold = 0.6;
    var mobileScaleValue = 1.08;
    var prescaleValue = 0;
	
	fct.misc = function() {
	
		function resizeScreen(
			winWidth,
			winHeight,
			minScreen,
			minScreenWidth
			){
		
		
		if (savedWinHeight !== winHeight || savedWinWidth !== winWidth) {
            
            resized = true;
            
			preScaleValue = (1 / minScreen) * winHeight;
            
			if (minScreenWidth * preScaleValue > winWidth) {
                preScaleValue = (1 / minScreenWidth) * winWidth;
            }
			
			if (preScaleValue < mobileScaleThreshold){
                scaleValue = preScaleValue;
                //scaleValue = preScaleValue * mobileScaleValue;
                
                //document.getElementById("mainContainer").style.backgroundColor = "#000";
                
                
            } else {
                scaleValue = preScaleValue;
                
                //document.getElementById("mainContainer").style.backgroundColor = "#333";
                
                
            }
            
            
            
            document.getElementById("mainContainer").style.transform = "scale(" + scaleValue + ")";
            
            if (window.work){
                document.getElementById("mainContainer").style.display = "block";
            }
            
            //location.reload();
            
        }

        savedWinHeight = winHeight;
        savedWinWidth = winWidth;
		
        
        
        
        //document.getElementById("screenLayout").style.display = "none";
        
        //console.log(winWidth);
        
        
        
        
        
		var output;
                
		output = scaleValue;
                
		return output;
		
        
        
        
        
        
        
    	}
        
        
        
        function defaultResize(){
            document.getElementById("mainContainer").style.transform = "scale(1)";
            if (window.work){
                document.getElementById("mainContainer").style.display = "block";
            }
        }
            
            
            
		
        
        var restartScreen = false;
        
        
        //var startingMobile = 99;
        
        var startVar = 0;
        
        
        function enablePanelBar(
            scaleValue
            ){
            
            if (resized) {
                
                
                if (preScaleValue > mobileScaleThreshold){
                    
                    mode.mobile = false;
                    
                    if (startVar===1){
                    //if (!restartScreen){
                        console.log("display regular restart screen");
                        location.reload();
                        //document.getElementById("restartScreen").style.display = "block";
                        //restartScreen = true;
                    //}
                    }
                    
                
                } else {
                
                    mode.mobile = true;
                    
                    if (startVar===1){
                    //if (!restartScreen){
                        console.log("display mobile restart screen");
                        location.reload();
                        //document.getElementById("restartScreen").style.display = "block";
                        //restartScreen = true;
                    //}
                    }
                    
                }
                
                startVar = 1;
                
            }

            resized = false;
            
            
            //if (savedMobile!==mode.mobile && saveMobile!==99){
                
            //    savedMobile = mode.mobile;
                
            //}
            
        }
        
        
        
        //document.getElementById("restartScreen").addEventListener("click", function () {
            
            //document.getElementById("restartScreen").style.display = "none";
            //restartScreen = false;
            //location.reload();
            
        //});
    
        
        
		
		
		
		function stopiPhoneRubberBanding(){
    		document.addEventListener('touchmove', function(event) {
        		event.preventDefault();
    		});
            
            
            
		}
		
		
        
        //function restartScreen(){
            
            //console.log(":::");
        
        //}
        
        
        function repositionPanels(){
        
            //console.log("-> "+info.panelPos[0].length);
            
            var mmb;
            
            if (mode.mobile){
                mmb = 1;
            } else {
                mmb = 0;
            }
            
    		for (var i = 0; i < info.panelPos[0].length; i++) {
        	   document.getElementById("panel" + i).style.left = info.panelPos[mode.panelConfiguration][i][mmb][0] + "px";
        	   document.getElementById("panel" + i).style.top = info.panelPos[mode.panelConfiguration][i][mmb][1] + "px";
               if (info.panelPos[mode.panelConfiguration][i][mmb][2]){
                    document.getElementById("panel" + i).style.transform = "scale("+info.panelPos[mode.panelConfiguration][i][mmb][2] + ")";
                    //console.log(i);
               }
               
               if (mmb){
                //for (var i = 0; i < info.panelPos[0].length; i++) {
                  document.getElementById("panel" + i).style.display = "none";
                //}
                //document.getElementById("panel9").style.display = "none";
                //document.getElementById("panel10").style.display = "none";
                
                }
                }
                document.getElementById("panel11").style.display = "block";
                
                // HERE
                document.getElementById("panel12").style.display = "block";
                //document.getElementById("panel13").style.display = "block";
                //document.getElementById("panel14").style.display = "block";
                
               //if (info.panelPos[mode.panelConfiguration][i][mmb][3]){
            //        document.getElementById("panel" + i).style.width = info.panelPos[mode.panelConfiguration][i][mode.mobile][3]/info.panelPos[mode.panelConfiguration][i][mode.mobile][2] + "px";
              // }
               
               
               // NO PANEL IDs:
               if (!mode.mobile){//regular
                    document.getElementById("panel11").style.width = info.screenScaling.minScreenWidth+"px";
                    document.getElementById("toolsMobileButton").style.display = "none";
                    document.getElementById("settingsMobileButton").style.display = "none";
                    document.getElementById("mobileMenuTab").style.display = "none";
                    document.getElementById("universalPanelButton").style.display = "none";
                    
                    document.getElementById("mainContainer").style.width = info.screenScaling.minScreenWidth+"px";
                    document.getElementById("universalPanelContainer").style.width = info.screenScaling.minScreenWidth+"px";
                    document.getElementById("universalPanelContainer").style.height = "500px";
                    //document.getElementById("universalPanelContainer").style.backgroundColor = "#BBB";
                    document.getElementById("uniPanelBackground").style.backgroundColor = "#BBB";
                    document.getElementsByClassName("panelConditionList")[0].style.height = "500px";
                    document.getElementById("panel3").style.display = "block";
                    //document.getElementById("panel11").style.display = "none";
                    
                    document.getElementById("mobileBarCover").style.display = "none";
                    document.getElementById("mobileToolTab").style.display = "none";
                    document.getElementById("mobileSettingsTab").style.display = "none";
                    
                    document.getElementById("mainContainer").style.backgroundColor = "#333";
                    
               } else {//mobile
                    //console.log("---");
                    document.getElementById("faceCoverForMobile").style.display = "none";
                    document.getElementById("uniPanelBackground").style.display = "none";
                    document.getElementById("mobileBarCover").style.display = "none";
                    
                    // change font size in menu
                    for (var i = 0; i < document.getElementsByClassName("condition").length; i++){
                        document.getElementsByClassName("condition")[i].style.fontSize = "35px";
                        document.getElementsByClassName("condition")[i].style.height = "62px";
                        document.getElementsByClassName("condition")[i].style.marginLeft = "0px";
                    }
                    // make explore/test tabs invisible
                    //document.getElementsByClassName("exploreBackground")[0].style.display = "none";
                    document.getElementsByClassName("exploreBackground")[0].style.height = "520px";
                    document.getElementsByClassName("exploreBackground")[0].style.width = "900px";
                    document.getElementsByClassName("exploreBackground")[0].style.backgroundColor = "#000";
                    document.getElementsByClassName("exploreTab")[0].style.display = "none";
                    document.getElementsByClassName("testTab")[0].style.display = "none";
                    document.getElementsByClassName("panelConditionList")[0].style.top = "0px";
                    
                    document.getElementsByClassName("exploreStartButton")[0].innerHTML = "";
                    document.getElementsByClassName("exploreStartButton")[0].style.bottom = "-100px";
                    document.getElementsByClassName("exploreStartButton")[0].style.right = "140px";
                    document.getElementsByClassName("exploreStartButton")[0].style.width = "135px";
                    document.getElementsByClassName("exploreStartButton")[0].style.height = "100px";
                    document.getElementsByClassName("exploreStartButton")[0].style.backgroundColor = "#333";
                    document.getElementsByClassName("exploreStartButton")[0].style.backgroundImage = "url(images/menu_icon.svg)";
                    document.getElementsByClassName("exploreStartButton")[0].style.borderRadius = "0px 0px 30px 30px";
                    document.getElementsByClassName("exploreStartButton")[0].style.border = "0px";
                    //document.getElementsByClassName("exploreStartButton")[0].style.borderLeft = "2px solid #f0f";
                    
                    
                    /*
.exploreStartButton{
    position:absolute;
    bottom:18px;
    right:17px;
    width:100px;
    height:45px;
    padding:12px;
    font-size:20px;
	text-align:center;
	box-sizing:border-box;
	border-radius:10px;
    border-bottom:1px solid #777;
	background-color:#FFF;
    cursor:pointer;
}
*/


                    
                    //document.getElementsByClassName("panelConditionList")[0].style.backgroundColor = "#F0F";
                    document.getElementsByClassName("panelConditionList")[0].style.width = "900px";
                    
                    
                    document.getElementById("panel11").style.width = vars.scene.w/info.panelPos[mode.panelConfiguration][11][mmb][2]+"px";
                    document.getElementById("toolsMobileButton").style.display = "block";
                    document.getElementById("settingsMobileButton").style.display = "block";
                    document.getElementById("mainContainer").style.width = vars.scene.w+"px";
                    document.getElementById("universalPanelContainer").style.width = vars.scene.w+"px";
                    document.getElementById("universalPanelContainer").style.height = "440px";
                    //document.getElementById("universalPanelContainer").style.backgroundColor = "transparent";
                    document.getElementById("uniPanelBackground").style.backgroundColor = "#transparent";
                    document.getElementsByClassName("panelConditionList")[0].style.height = "440px";
                    //document.getElementById("uniPanelBackground").style.display = "none";
                    document.getElementById("panel3").style.display = "none";
                    //document.getElementById("panel11").style.display = "block";
                    //document.getElementsByClassName("restrictPanel")[0].style.display = "block";
                    document.getElementsByClassName("uniRestrictTab")[0].style.display = "none";
                    document.getElementsByClassName("uniRestrictTab")[1].style.display = "none";
                    
                    var el = document.getElementsByClassName("condition");
                    
                    for (var i = 0; i < el.length; i++){
                        el[i].style.width = 898+"px";
                        //document.getElementsByClassName("condition")[i].style.fontSize = 36+"px";
                    }
                    
                    el[7].style.display = "none";// remove "custom" from menu
                    
                    document.getElementsByClassName("panelConditionList")[0].style.left = 0+"px";
                    document.getElementsByClassName("panelConditionList")[0].style.textAlign = "center";
                    document.getElementsByClassName("panelConditionList")[0].style.fontSize = 36+"px";
                    document.getElementsByClassName("panelConditionList")[0].style.lineHeight = 34+"px";
                    //
                    
                    // HERE FROG
                    
                    //info.mobileSettings...
                    
                    
                    //document.getElementById("mobileBarCover").style.display = "block";
                    document.getElementById("mobileToolTab").style.display = "block";
                    document.getElementById("mobileSettingsTab").style.display = "block";
                    
                    document.getElementById("mainContainer").style.backgroundColor = "#222";
                    
                    // 
                    
                    document.getElementById("instructionsContainer").style.display = "none";
                    document.getElementById("instrButton").style.display = "none";
                    document.getElementById("vidButton").style.display = "none";
                    
                    
                    }
                
                
                
                
                
            
		}
        
        
        
		
		
	
	return{
		resizeScreen,
        defaultResize,
        enablePanelBar,
		stopiPhoneRubberBanding,
        repositionPanels
	}
	
	}();
	
	


} //END: initTemplate()




