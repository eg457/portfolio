function initUserData(){
    
    
    var url = 
    'https://script.google.com/macros/s/AKfycbzSiqgw3VuWYcFpeQJhRsl11oyI00st4px7Wm7Jv26YlwEXt6E/exec';
    
    var sheetNum = "1";
    //var activityNumber = "2_1";
    
    var userRating = ""; //1-5
    var userComments = ""; //comments
    
    
	fct.userData = function() {
        
        
        
		function generateUserID(){
            
            
            
            //console.log("generateUserID");
            
            //"AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax"
            // path=/Main/;
            if (!document.cookie){
                document.cookie = "name="+Math.round(1000000 - (Math.random()) * 1000000)+"; SameSite=Strict";
            }
            
            var output = document.cookie;
            
            //console.log(document.cookie);
            
            return output;
            
        }
        
        
        function postPageView(a){
            
            //console.log(a);
            
            eventHappened(a);//page loaded
            
        }
        
        
        function eventHappened(a){
            
            //console.log("eventHappened");
            
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var timeStamp = date+' '+time;
            
            
            
            ////// JQUERY //////////
            
            
            
            /*
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data:   ""+sectionNumber+"=true"+
                        "&UserID="+document.cookie+
                        "&TimeStamp="+timeStamp+
                        "&"+activityNumber+"=1"
            });
            */
            
            
            $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=2b90368eb0984d46a17d07d4bca25176", 
            function(data) {
            
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data:   ""+sheetNum+"=true"+
                        //"&cookie="+document.cookie+
                        "&time="+timeStamp+
                        "&count=1"+
                        //"&"+activityNumber+"=1"+
                        "&country="+data.country+
                        "&city="+data.city+
                        "&ip="+data.ip_address+
                        "&event="+a
            });
            
            });
            
            
            
            
            /*
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data:   "BCSC2="+a + "=newColumn"
            });
            */
            
            
            //console.log(a, timeStamp, b, c);
            
            
            /////////////////////////
            
        }
    
    
	return{
		generateUserID,
        postPageView
	}
    
    
    
	}();


} //END: initUserData()




