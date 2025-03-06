



var ping = true;
    
    
    
var loadInc = -1;
    
    var loadingInterval = setInterval(function(){
		
        loadInc++;
        
        if (loadInc < 3){
        for (var i = 0; i < document.getElementsByClassName("loadDot").length; i++){
            document.getElementsByClassName("loadDot")[i].style.border = "2px solid #CCC";
            document.getElementsByClassName("loadDot")[i].style.backgroundColor = "#FFF";
        }
        
        document.getElementsByClassName("loadDot")[loadInc].style.border = "#AA9";
        document.getElementsByClassName("loadDot")[loadInc].style.backgroundColor = "#AA9";
        }
        if (loadInc===3){
            for (var i = 0; i < document.getElementsByClassName("loadDot").length; i++){
            document.getElementsByClassName("loadDot")[i].style.border = "2px solid #CCC";
            document.getElementsByClassName("loadDot")[i].style.backgroundColor = "#FFF";
            }
        }
        if (loadInc===20){
            loadInc = -1;
        }
        
	}, 50);
    
    //document.getElementsByClassName("myImg")[17].src = "images/017.jpg";
    
    
    
window.onload = function() {
    
    window.clearInterval(loadingInterval);
    
    document.getElementById("loadAnim").style.display = "none";
    
    /*
    for (var i = 4; i < document.getElementsByClassName("myImg").length; i++){
        if (i < 10){
        document.getElementsByClassName("myImg")[i].src = "images/image00"+i+".jpg";
        } else {
        document.getElementsByClassName("myImg")[i].src = "images/image0"+i+".jpg";
        }
    }
    */
    
    var devMode = true;
    
    var writerMode = false;
    
    window.fct = {};
    window.work = true;
    
    initMisc();
	
    var minScreen = 10;
    var minScreenWidth = 700;
    
    
    var perc;
    
	setInterval(function(){
		
        if (window.innerWidth < 700){
		o = fct.misc.resizeScreen(
			
			window.innerWidth,
			window.innerHeight,
			minScreen,
			minScreenWidth);
        
        perc = o;
        } else {
        o = fct.misc.defaultResize(
			
			window.innerWidth,
			window.innerHeight,
			minScreen,
			minScreenWidth);
        
        perc = o;
        }
        
        //console.log(window.innerWidth);
        
	}, 50);
    
    
    
    
    
    initUserData();
    
    if (ping){
    startUserData();
    }
    
    
    
    
    window.bottom = "N_";

    window.clicks = "";


function startUserData(a) {

	var o;
    
    o = fct.userData.generateUserID();
    o = fct.userData.postPageView("START");
    
    }
    
    
//function startUserData() {

//}
    // 0 = 
    
    
    var n = undefined;
    
    
    var imageCount = [1,2,0,0,2,1,1,0,1,0,
                      2,2,1,2,0,0,0,1,0,0,
                      1,1,0,0,1,0
                      ];
                      
                      /*
                      var imageCount = [0,2,0,0,0,1,1,0,1,1,
                      1,2,1,1,1,0,0,0,0,0,
                      1,0,0,0
                      ];
                      */
    
    //var imageCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    
    var videoPlacement = [[1,400,800],[2,592,800],n,n,[2,600,900],n,n,n,[1,400,710],n,
                          n,n,[1,576,1184],n,n,n,n,[1,600,900],n,n,
                          [1,500,935],[1,690,1024],n,[0,594,894],n,n
                          ];
    /*                    
    var videoPlacement = [n,n,n,n,[2,600,900],n,n,n,[1,400,710],n,
                          n,n,[1,576,1184],n,[0,874,1568],n,n,[1,600,900],n,n,
                          [1,500,935],[1,690,1024],n,[0,594,894],n,n
                          ];
    */
    //var videoPlacement = [1,n,n,n,n,n,n,n,1,n,n,2,n,n,n,n,n,n];
    
    //var hidePieces = [21,10,9,14,18,19,22];
    var hidePieces = [];
    
    var pieceNum = imageCount.length;
    
    var vidNum = videoPlacement.length - getOccurrence(videoPlacement, n);
    
    // change order of image sets per piece (maybe too much):
    //var imageOrder = [[1,0],n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,[1,0],n];
    
    //var order = [16,0,1,17,2,20,9,3,4,10,8,7,5,6,11,14,12,13,15,18,19];
    
    
    //var startOrder = [4,0,1,2,17,8,11,12,13,6,20,5,7,16,21,3,10,9,14,18,19,15];
    
    var order = [22,4,0,1,2,17,8,11,12,13,6,20,5,7,16,21,3,10,9,14,18,19,15,23,24,25];
    
    //var order = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    
    
    function getOccurrence(videoPlacement, n) {
        return videoPlacement.filter((undefined) => (undefined === n)).length;
    }
    
    
    // process exported data......
    
    
    
    var str;
    
    var catHolder = [];
    
    for (var i = 0; i < order.length; i++){
        catHolder[i] = data.info[i][str];
    }
    
    
    var cat2Holder = [];
    
    for (var i = 0; i < order.length; i++){
        cat2Holder[i] = data.info[i][str];
    }
    
    //console.log(data.info[0][str]);
    
    
    var catLength = 9;
    
    var catsArray = [];
    for (var i = 0; i < order.length; i++){
        catsArray.push([]);
        for (var ii = 0; ii < catLength; ii++){
            str = "cat" + ii;
            catsArray[i].push(data.info[i][str]);
        }
    }
    
    //console.log(catsArray[1]);
    
    
    // HERE
    var csCatArray = [];
    for (var i = 0; i < order.length; i++){
        csCatArray.push(data.info[i].subcat);
    }
    
    var csCatArray2 = [];
    for (var i = 0; i < order.length; i++){
        csCatArray2.push(data.info[i].subcat2);
    }
    
    var csSlideArray = [];
    for (var i = 0; i < order.length; i++){
        csSlideArray.push(data.info[i].slide);
    }
    
    var csSlideArray2 = [];
    for (var i = 0; i < order.length; i++){
        csSlideArray2.push(data.info[i].slide2);
    }
    
    //console.log(csCatArray);
    //console.log(csSlideArray);
    
    
    var weightArray = [];
    for (var i = 0; i < order.length; i++){
        weightArray.push(data.info[i].weight);
    }
    
    
    //console.log(order);
    
    for (var i = 0; i < order.length; i++){
        //weightArray.push(1-1/order.length*order[i]);
    }
    
    //console.log(weightArray);
    
    var descriptionArray = [];
    for (var i = 0; i < order.length; i++){
        descriptionArray.push([]);
        descriptionArray[i].push(desc.description[i].role);
        descriptionArray[i].push(desc.description[i].title);
        descriptionArray[i].push(desc.description[i].overview);
        descriptionArray[i].push(desc.description[i].details);
    }
    
    //console.log(descriptionArray[0][0]);
    
    
    /*
    var contentArray = [
    [954,0],[1026,0],[1241,0],[987,0],[1465,0],[1830,0],[1191,0],[1045,0],[1019,0],[1421,0],
    [882,0],[1025,0],[1190,0],[1371,0],[1010,0],[1738,0],[1220,0],[939,0],[1369,0],[833,0],
    [789,0],[1228,0],[992,0],[1036,0]];
    */
    
    var contentArray = [
    [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
    [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
    [0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
    
    
    
    
    
    //console.log(order);
    
    
    //document.getElementsByClassName("myImg")[0].src = "images/"+contentArray[0][0][0]+".jpg";
    //document.getElementsByClassName("myImg")[1].src = "images/"+contentArray[1][0][0]+".jpg";
    //document.getElementsByClassName("myImg")[2].src = "images/"+contentArray[2][0][0]+".jpg";
    
    
    
    document.getElementsByClassName("pieceContainer")[0].innerHTML = 
    "<div class='topSummary'>XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX</div>";
    
    
    for (var i = 0; i < pieceNum; i++){
    
    document.getElementsByClassName("pieceContainer")[0].innerHTML = 
    document.getElementsByClassName("pieceContainer")[0].innerHTML +
                
                '<div class="sortContainer">' +
                //'<div class="devNumber"></div>'+
                
                '<div class="imageContainer">'+
                '<div class="slide">'+
                    '<div class="imageSlide"></div>'+
                    '<div class="imageSlide"></div>'+
                    '<div class="imageSlide"></div>'+
                    '<div class="imageSlide"></div>'+
                    '<div class="imageSlide"></div>'+
                '</div>'+
                
                '</div>'+
                
                
                
                '<div class="decArrContainer">'+
                    '<div class="pieceNumber"></div>'+
                    '<div class="description"></div>'+
                    '<div class="navContainer">'+
                        
                        '<div class="dotContainerNEWNEW">'+
                            '<div class="dotPolka"></div>'+
                            '<div class="dotPolka"></div>'+
                            '<div class="dotPolka"></div>'+
                        '</div>'+
                        
                        '<div class="arrowContainerNEW">'+
                            '<div class="rightArrow"></div>'+
                        '</div>'+
                        
                    '</div>'+
                    '<div class="line"><div class="devNumber"></div></div>'+
                    
                    
                '</div>'
                
                '</div>';
                
            }
    
    
    
    var imageContainerWidth = 640;
    var imageShrinkPerc = 0.5;
    
    
    //order = [0,4,13,10,17,1,2,9,6,20,5,7,8,11,12,16,3,14,18,19,15,21];
    
    
    //filterArray = [1,1,1,1,1,1,1,1];
    
    
    var startCat = 8;
    
    var filterArray = [];
    
    for (var i = 0; i < startCat; i++){
        filterArray.push(0);
    }
    
    filterArray[startCat] = 1;
    
    var deleteCatsArray = [];
    
    var totalWeightArray = [];
    
    
    //var catsArray = [];
    
    for (var i = 0; i < contentArray.length; i++){
        
        //catsArray.push([]);
    
    }
    
    //console.log(catsArray);
    
    //for (var i = 0; i < contentArray.length; i++){
        //for (var ii = 0; ii < contentArray[i][7][1].length; ii++){
            //catsArray[i].push(contentArray[i][7][1][ii]);
        //}
    //}
    
    //console.log(catsArray);
    
    sortPieces();
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    
    function sortPieces(){
    
    //var filterArray = [0,0,0,0,0,0,0,0];
    
    deleteCatsArray = [];
    
    for (var i = 0; i < contentArray.length; i++){
        
        deleteCatsArray.push([]);
    
    }
    
    totalWeightArray = [];
    
    //console.log(filterArray);
    
    
    for (var i = 0; i < contentArray.length; i++){
        
        
        for (var ii = 0; ii < catsArray[i].length; ii++){
            deleteCatsArray[i].push(catsArray[i][ii]);
        }
    
        
        for (var ii = 0; ii < filterArray.length; ii++){
            if (filterArray[ii]===0){
                deleteCatsArray[i][ii] = 0;
            }
        }
    }
    
    
    hidePieces = [];
    
    for (var i = 0; i < contentArray.length; i++){
        
        
        totalWeightArray[i] = ([weightArray[i] + deleteCatsArray[i].reduce((a, b) => a + b, 0), i]);
        
        // HERE...
        
        if ([deleteCatsArray[i].reduce((a, b) => a + b, 0), i][0]===0){
            //console.log([deleteCatsArray[i].reduce((a, b) => a + b, 0), i][0]);
            hidePieces.push(i);
            //console.log();
        }
        
    }
    
    //console.log(hidePieces);
    
    
    
    totalWeightArray.sort();
    totalWeightArray.reverse();
    
    //console.log(totalWeightArray);
    
    order = [];
    
    for (var i = 0; i < contentArray.length; i++){
        order.push(totalWeightArray[i][1]);
    }
    
    if (filterArray.reduce((a, b) => a + b, 0)===0){
        //order = [13];
    }
    
    //console.log(totalWeightArray);
    
    
    //console.log(order);
    
    
    //////////////////////////////////////////////////////////////
    
    
    if (devMode){
        for (var i = 0; i < pieceNum; i++){
            document.getElementsByClassName("devNumber")[i].style.display = "block";
        }
    }
    
    
    for (var i =0; i < pieceNum; i++){
        contentArray[i][0] = document.getElementsByClassName("myImg")[i].naturalHeight;
        //document.getElementsByClassName("devNumber")[i].innerHTML = order[i];
        //document.getElementsByClassName("pieceNumber")[i].innerHTML = i+1;
        document.getElementsByClassName("pieceNumber")[i].innerHTML = "0"+order[i];
        if (order[i] < 10){
            document.getElementsByClassName("pieceNumber")[i].innerHTML = "00"+order[i];
            //document.getElementsByClassName("pieceNumber")[i].style.paddingRight = "7px";
        }
    }
    
    
    
    for (var i =0; i < pieceNum; i++){
        //contentArray[i][1]
    }
    
    
    for (var i =0; i < pieceNum; i++){
        if (imageCount[order[i]]===0){
            document.getElementsByClassName("rightArrow")[i].style.display = "none";
        } else {
            document.getElementsByClassName("rightArrow")[i].style.display = "block";
        }
    }
    
    
    
    for (var i =0; i < pieceNum; i++){
        for (var ii =0; ii < imageCount[order[i]]+2; ii++){
            
            if (order[i] < 10){
                document.getElementsByClassName("slide")[i].children[ii].style.backgroundImage = "url(images/image0"+order[i]+""+ii+".jpg)";
            } else {
                document.getElementsByClassName("slide")[i].children[ii].style.backgroundImage = "url(images/image"+order[i]+""+ii+".jpg)";
            }
        }
        
        if (order[i] < 10){
            document.getElementsByClassName("slide")[i].children[imageCount[order[i]]+1].style.backgroundImage = "url(images/image0"+order[i]+""+0+".jpg)";
        } else {
            document.getElementsByClassName("slide")[i].children[imageCount[order[i]]+1].style.backgroundImage = "url(images/image"+order[i]+""+0+".jpg)";
        }
            
            
    }
    
    
    
    
    for (var i =0; i < order.length; i++){
        
        document.getElementsByClassName("devNumber")[i].style.display = "block";
        document.getElementsByClassName("imageContainer")[i].style.display = "block";
        document.getElementsByClassName("decArrContainer")[i].style.display = "block";
        
    }
    
    for (var i =0; i < hidePieces.length; i++){
        
        for (var ii =0; ii < order.length; ii++){
            
            if (hidePieces[i]===order[ii]){
                
                document.getElementsByClassName("devNumber")[ii].style.display = "none";
                document.getElementsByClassName("imageContainer")[ii].style.display = "none";
                document.getElementsByClassName("decArrContainer")[ii].style.display = "none";
            }
        }
    }
    
    
    
    
    
    for (var i =0; i < pieceNum; i++){
    
    document.getElementsByClassName("imageContainer")[i].style.height = contentArray[order[i]][0]*imageShrinkPerc+"px";
    
        for (var ii =0; ii < imageCount[order[i]]+1; ii++){
        
        document.getElementsByClassName("slide")[i].children[ii].style.height = contentArray[order[i]][0]*imageShrinkPerc+"px";
        
        document.getElementsByClassName("slide")[i].children[imageCount[order[i]]+1].style.height = contentArray[order[i]][0]*imageShrinkPerc+"px";
        
        }
    }
    
    
    
    for (var i =0; i < pieceNum; i++){
    
    //document.getElementsByClassName("overviewTitle")[i].style.display = "none";
    //document.getElementsByClassName("descriptionDetails")[i].style.display = "none";
    
    //console.log(contentArray[order[i]][5]);
    
    document.getElementsByClassName("description")[i].innerHTML =
    "<p class='pTitle'><b>"+descriptionArray[order[i]][0]+"</b></p><p class='pRole'>"+descriptionArray[order[i]][1]+"</p><p>"+descriptionArray[order[i]][2]+"</p><p class='descriptionDetails'>"+descriptionArray[order[i]][3]+"</p>";
    
    //"contentArray[order[i]][5]"
    
    //console.log("-->"+descriptionArray[order[i]][0]);
    
    
    if (!descriptionArray[order[i]][0]){
        document.getElementsByClassName("pTitle")[i].style.display = "none";
        document.getElementsByClassName("pRole")[i].style.marginTop = "5px";
    }
    
    
    }
    
    
    if (!writerMode){
        for (var i = 0; i < document.getElementsByClassName("dHeader").length; i++){
            document.getElementsByClassName("dHeader")[i].style.display = "none";
        }
        //console.log("---> "+document.getElementsByClassName("descriptionDetails").length);
        
        for (var i = 0; i < document.getElementsByClassName("descriptionDetails").length; i++){
            if (!descriptionArray[order[i]][3]){
                document.getElementsByClassName("descriptionDetails")[i].style.display = "none";
            }
        }
    }
    
    //document.getElementsByClassName("descriptionDetails")[0].style.display = "none";
    
    
    
    
    for (var i =0; i < pieceNum; i++){
        
        for (var j =0; j < document.getElementsByClassName("dotContainerNEWNEW")[i].children.length; j++){
            document.getElementsByClassName("dotContainerNEWNEW")[i].children[j].style.display = "none";
        }
        
        for (var ii =0; ii < imageCount[order[i]]+1; ii++){
            if (imageCount[order[i]]>0){
                document.getElementsByClassName("dotContainerNEWNEW")[i].children[ii].style.display = "block";
            }
        }
        
        document.getElementsByClassName("dotContainerNEWNEW")[i].children[0].style.backgroundColor = "#BBB";
        
        
        if (imageCount[order[i]]===1){
            document.getElementsByClassName("dotContainerNEWNEW")[i].children[0].style.marginLeft = "11px";
            document.getElementsByClassName("navContainer")[i].style.marginRight = "30px";
        }
        
        if (imageCount[order[i]]===2){
            document.getElementsByClassName("dotContainerNEWNEW")[i].children[0].style.marginLeft = "0px";
            document.getElementsByClassName("navContainer")[i].style.marginRight = "25px";
        }
    }
    
    
    
    
    
    
    var vidInc = -1;
    
    for (var i = 0; i < document.getElementsByClassName("slide").length; i++){
        for (var ii = 0; ii < document.getElementsByClassName("slide")[i].children.length; ii++){
            //console.log("i = " + i, "ii = " + ii);
            document.getElementsByClassName("slide")[i].children[ii].innerHTML = "";
        }
    }
        
        
    for (var i =0; i < videoPlacement.length; i++){
    
    if (videoPlacement[order[i]]!==undefined){
    
    vidInc++;
    
    var videoFirstNum;
    
    if (order[i]<10){
        videoFirstNum = "0";
    } else {
        videoFirstNum = "";
    }
    
    //console.log(videoPlacement[order[i]][0]);
    
    
    
    document.getElementsByClassName("slide")[i].children[videoPlacement[order[i]][0]].innerHTML = 
                            "<video class='videoElement' playsinline controls>"+
                            "<source src='videos/video"+videoFirstNum+order[i]+""+videoPlacement[order[i]][0]+".mp4' type='video/mp4'>"+
                            "<source src='videos/video"+videoFirstNum+order[i]+""+videoPlacement[order[i]][0]+".ogv' type='video/ogv'>"+
                            "</video><div class='videoPlayButton'></div>";
                        
        var vidHeight = videoPlacement[order[i]][1]*(600/videoPlacement[order[i]][2]);
        
        document.getElementsByTagName("video")[vidInc].style.height = vidHeight + "px";
        
        document.getElementsByTagName("video")[vidInc].style.marginTop = vidHeight*-0.5 + "px";
        	
            
            
        document.getElementsByTagName("video")[vidInc].addEventListener('ended', vidRestart(vidInc))
    
        }
    }
    
    
    
    for (var i = 0; i < contentArray.length; i++){
        contentArray[i][1] = 0;
        document.getElementsByClassName("slide")[i].style.marginLeft = "0px";
        
        for (var ii = 0; ii < document.getElementsByClassName("dotContainerNEWNEW")[i].children.length; ii++){
            document.getElementsByClassName("dotContainerNEWNEW")[i].children[ii].style.backgroundColor = "#fbfaf6";
        }
        
        document.getElementsByClassName("dotContainerNEWNEW")[i].children[0].style.backgroundColor = "#BBB";
            
    }
    
    
    
	}//END: sortPieces()
    
    
    
    function vidRestart(a) {
		return function () {

    //console.log("sdfgnhj"+a);
    document.getElementsByTagName("video")[a].currentTime = 0;
    //document.getElementsByTagName("video")[a].setAttribute('poster', 'videos/video081.jpg');
    
    }
    }
    
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    
    
    var sliding = false;
    
    for (var i = 0; i < document.getElementsByClassName("rightArrow").length; i++) {
		document.getElementsByClassName("rightArrow")[i].addEventListener('click', nextImage(i));
	}
    
    
    
	function nextImage(a) {
		return function () {
            
            console.log(a);
            
            arrowClicks += "."+a;
            
            //clickString+="nm:"+a+" ";
            
            //window.clicks = window.clicks + order[a];
            
            if (!sliding){
            //document.getElementsByClassName("cover")[0].style.display = "block";
            
            var speed = imageContainerWidth/15;
            
            //var speedArray = [100,100,90,80,70,60,50,40,30,20,10];
            
            //console.log(speed);
            
            var slidePos = (-1*imageContainerWidth)*contentArray[order[a]][1];
            
            contentArray[order[a]][1]++;
            
            var slideElement = document.getElementsByClassName("slide")[a];
            
            sliding = true;
            
            for (k = 0; k < document.getElementsByClassName("dotContainerNEWNEW")[a].children.length; k++){
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[k].style.backgroundColor = "#fbfaf6";
            }
            
            if (contentArray[order[a]][1]===imageCount[order[a]]+1){
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[0].style.backgroundColor = "#BBB";
            } else {
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[contentArray[order[a]][1]].style.backgroundColor = "#BBB";
            }
                
            window.requestAnimationFrame(cycle);
            
            }
            
            //var s = -1;
            
            function cycle() {
                
                slideElement.style.marginLeft = slidePos + "px";
                
                //s++;
                
                //slidePos-=speedArray[s];
                slidePos-=speed;
                
                //console.log(slidePos);
                
                if (slidePos >= (-1*imageContainerWidth)*contentArray[order[a]][1]){
                    window.requestAnimationFrame(cycle);
                } else {
                    sliding = false;
                    
                    if (contentArray[order[a]][1]===imageCount[order[a]]+1){
                    contentArray[order[a]][1] = 0;
                    slidePos = (-1*imageContainerWidth)*contentArray[order[a]][1];
                    slideElement.style.marginLeft = slidePos + "px";
                    
                }
                
                
                
                
                /*
                for (k = 0; k < document.getElementsByClassName("dotContainerNEWNEW")[a].children.length; k++){
                    document.getElementsByClassName("dotContainerNEWNEW")[a].children[k].style.backgroundColor = "#fbfaf6";
                }
                
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[contentArray[a][6]].style.backgroundColor = "#BBB";
                */
                
                }   
            }
		}
	}
    
    
    // set image 1 to slide 1
    
    
    
    function setImage(a,b) {
            
            contentArray[order[a]][1] = b;
            
            var slidePos = (-1*imageContainerWidth)*contentArray[order[a]][1];
            
            var slideElement = document.getElementsByClassName("slide")[a];
            
            for (k = 0; k < document.getElementsByClassName("dotContainerNEWNEW")[a].children.length; k++){
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[k].style.backgroundColor = "#fbfaf6";
            }
            
            if (contentArray[order[a]][1]===imageCount[order[a]]+1){
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[0].style.backgroundColor = "#BBB";
            } else {
                document.getElementsByClassName("dotContainerNEWNEW")[a].children[contentArray[order[a]][1]].style.backgroundColor = "#BBB";
            }
                
            var slidePos = (-1*imageContainerWidth)*contentArray[order[a]][1];
            slideElement.style.marginLeft = slidePos + "px";
                
        }   
        
	
    
    
    
    
    var currentPage = "none";
    
    
    document.getElementsByClassName("contact")[0].addEventListener('click', clickContact());
	
    function clickContact() {
		return function () {
            
            //window.clicks = window.clicks + "C";
            
            if (currentPage!=="contact"){
            var headerMarginBefore = document.getElementsByClassName("header")[0].offsetWidth;
            document.getElementsByClassName("contact")[0].style.borderBottom = "1px solid #666";
            document.getElementsByClassName("work")[0].style.borderBottom = "0px";
            document.getElementsByClassName("navPointer")[0].style.right = "0px";
            document.getElementsByClassName("brands")[0].style.textDecoration = "none";
            document.getElementsByClassName("work")[0].style.textDecoration = "none";
            document.getElementsByClassName("contactForm")[0].style.display = "block";
            document.getElementsByClassName("contactForm")[1].style.display = "none";
            document.getElementsByClassName("closeContactForm")[0].style.display = "block";
            //document.getElementsByClassName("brandList")[0].style.display = "none";
            //document.getElementById("mainContainer").style.display = "none";
            window.work = false;
            
            var headerMarginAfter = document.getElementsByClassName("header")[0].offsetWidth;
            var headerMarginDifference = headerMarginAfter - headerMarginBefore;
            
            if (currentPage==="work"){
                document.getElementsByClassName("header")[0].style.right = headerMarginDifference + "px";
            }
            currentPage = "contact";
            } else {
            var headerMarginBefore = document.getElementsByClassName("header")[0].offsetWidth;
            document.getElementsByClassName("contact")[0].style.borderBottom = "0px";
            document.getElementsByClassName("work")[0].style.borderBottom = "0px";
            document.getElementsByClassName("navPointer")[0].style.right = "0px";
            document.getElementsByClassName("brands")[0].style.textDecoration = "none";
            document.getElementsByClassName("work")[0].style.textDecoration = "none";
            document.getElementsByClassName("contactForm")[0].style.display = "none";
            document.getElementsByClassName("contactForm")[1].style.display = "none";
            document.getElementsByClassName("closeContactForm")[0].style.display = "none";
            //document.getElementsByClassName("brandList")[0].style.display = "none";
            //document.getElementById("mainContainer").style.display = "none";
            window.work = false;
            
            var headerMarginAfter = document.getElementsByClassName("header")[0].offsetWidth;
            var headerMarginDifference = headerMarginAfter - headerMarginBefore;
            
            if (currentPage==="work"){
                document.getElementsByClassName("header")[0].style.right = headerMarginDifference + "px";
            }
            currentPage = "none";
            }
        }
    }
    
    
    
    var imageSlideLength = 5;// 5 slides per piece
    
    for (var i =0; i < document.getElementsByClassName("imageSlide").length; i++){
    
        document.getElementsByClassName("imageSlide")[i].addEventListener('click', clickImageSlide(i));
    
    }
    
	
        function clickImageSlide(a) {
            return function () {
                
                //console.log(a);
                
                var pn = order[Math.floor(a/5)];
                
                if (pn < 10){
                    pn = "0"+pn;
                }
                
                //document.getElementById("zoomImageContainer").style.backgroundImage = "url(images/image"+pn+contentArray[order[Math.floor(a/5)]][6]);
                
                //console.log(pn);
                //console.log(contentArray[order[Math.floor(a/5)]][1]);
                
                //if(){
                
                document.getElementById("zoomImage").style.backgroundImage = "url(images/image" + pn + contentArray[order[Math.floor(a/5)]][1]+".jpg)";
                
                //document.getElementById("zoomImage").style.overflow = "hidden";
                //document.getElementById("zoomImage").style.transform = "scale(1.3)";
                
                document.body.style.overflow = "hidden";
                
                                document.getElementById("zoomImageContainer").style.display = "block";
                                document.getElementById("zoomBackground").style.display = "block";
                                document.getElementById("zoomExit").style.display = "block";
                                
                                
                // PREVENT VIDEO ZOOM
                
                for (var i =0; i < videoPlacement.length; i++){
                     if (videoPlacement[order[i]]!==undefined){
                        
                        //console.log(Math.floor(a/5));
                        //console.log(i);
                        
                        if (Math.floor(a/5)===i){
                            //console.log("VID");
                            //console.log(a);
                            //console.log(Math.floor(a/5)*5);
                            //console.log(a-Math.floor(a/5)*5);
                            if (videoPlacement[order[i]][0]===a-Math.floor(a/5)*5){
                            
                            document.body.style.overflow = "auto";
                                document.getElementById("zoomImageContainer").style.display = "none";
                                document.getElementById("zoomBackground").style.display = "none";
                                document.getElementById("zoomExit").style.display = "none";
                            } else {
                                
                            }
                        }
                     }
                }
                //console.log(pn);
                //console.log(contentArray[order[Math.floor(a/5)]][1]);
                
                
                
                
                //}
                
                }
            
        }
    
    
    
    //for (var i = 0; i < document.getElementsByClassName("zoomImage").length; i++){
        
        var imageZoomed = false;
        
        document.getElementById("zoomImage").addEventListener('click', clickImageZoom());
        
   // }
    
	
        function clickImageZoom() {
            return function () {
                
                
                if (!imageZoomed){
                    document.getElementById("zoomImage").style.transform = "scale(1.4)";
                    document.getElementById("zoomImage").style.cursor = "zoom-out";
                    imageZoomed = true;
                } else {
                    document.getElementById("zoomImage").style.transform = "scale(1)";
                    document.getElementById("zoomImage").style.cursor = "zoom-in";
                    imageZoomed = false;
                }
            }
        }
    
    
    
    var zoomElements = document.querySelectorAll("#zoomExit, #zoomBackground");
    
    for (var i = 0; i < zoomElements.length; i++) {
        zoomElements[i].addEventListener("click", function() {
        document.getElementById("zoomImageContainer").style.display = "none";
        document.getElementById("zoomBackground").style.display = "none";
        document.getElementById("zoomExit").style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementById("zoomImage").style.transform = "scale(1)";
            document.getElementById("zoomImage").style.cursor = "zoom-in";
            imageZoomed = false;
    });
    }
    
    var clickString = "CS=";
    
    var sortBubbleViewed = false;
    
    var sortClicked = false;
    
    for (var i = 0; i < document.getElementsByClassName("workSort").length; i++){
    document.getElementsByClassName("workSort")[i].addEventListener('click', clickWork());
    }
	
    function clickWork() {
		return function () {
            
            if (!sortClicked){
                o = fct.userData.postPageView("sort");
                sortClicked = true;
            }
            document.getElementsByClassName("closeSeeSort")[0].style.display = "none";
            document.getElementsByClassName("seeSort")[0].style.display = "none";
            document.getElementsByClassName("sortHighlighted")[0].style.display = "none";
            
            sortBubbleViewed = true;
            
            //document.getElementsByClassName("pieceContainer")[0].style.paddingBottom = "0px";
            
            //window.clicks = window.clicks + "P";
            if (currentPage!=="work"){
            document.getElementsByClassName("contact")[0].style.textDecoration = "none";
            document.getElementsByClassName("brands")[0].style.textDecoration = "none";
            document.getElementsByClassName("work")[0].style.borderBottom = "1px solid #666";
            document.getElementsByClassName("contact")[0].style.borderBottom = "0px";
            document.getElementsByClassName("borderCover")[0].style.right = "200px";
            document.getElementsByClassName("contactForm")[0].style.display = "none";
            document.getElementsByClassName("contactForm")[1].style.display = "block";
            
            document.getElementsByClassName("closeContactForm")[0].style.display = "block";
            document.getElementsByClassName("brandList")[0].style.display = "none";
            document.getElementById("mainContainer").style.display = "block";
            window.work = true;
            
            document.getElementsByClassName("header")[0].style.right = 0 + "px";
            
            currentPage = "work";
            } else{
            document.getElementsByClassName("contact")[0].style.textDecoration = "none";
            document.getElementsByClassName("brands")[0].style.textDecoration = "none";
            document.getElementsByClassName("work")[0].style.borderBottom = "none"
            document.getElementsByClassName("contact")[0].style.borderBottom = "0px";
            document.getElementsByClassName("borderCover")[0].style.right = "200px";
            document.getElementsByClassName("contactForm")[0].style.display = "none";
            document.getElementsByClassName("contactForm")[1].style.display = "none";
            
            document.getElementsByClassName("closeContactForm")[0].style.display = "none";
            document.getElementsByClassName("brandList")[0].style.display = "none";
            document.getElementById("mainContainer").style.display = "block";
            window.work = true;
            
            document.getElementsByClassName("header")[0].style.right = 0 + "px";
            
            currentPage = "none";
            }
        }
    }
    
    
    /*
    
    document.getElementsByClassName("brands")[0].addEventListener('click', clickBrands());
	
    function clickBrands() {
		return function () {
            
            var headerMarginBefore = document.getElementsByClassName("header")[0].offsetWidth;
            document.getElementsByClassName("contact")[0].style.textDecoration = "none";
            //document.getElementsByClassName("brands")[0].style.textDecoration = "underline";
            document.getElementsByClassName("work")[0].style.textDecoration = "none";
            document.getElementsByClassName("myEmail")[0].style.display = "none";
            document.getElementsByClassName("brandList")[0].style.display = "block";
            document.getElementById("mainContainer").style.display = "none";
            window.work = false;
            
            var headerMarginAfter = document.getElementsByClassName("header")[0].offsetWidth;
            var headerMarginDifference = headerMarginAfter - headerMarginBefore;
            
            if (currentPage==="work"){
                document.getElementsByClassName("header")[0].style.right = headerMarginDifference + "px";
            }
            
            currentPage = "brands";
        }
    }
    
    */
    
    document.getElementsByClassName("closeContactForm")[0].addEventListener('click', clickCloseContact());
	
    function clickCloseContact() {
		return function () {
            
            currentPage = "none";
            
            document.getElementsByClassName("contactForm")[0].style.display = "none";
            document.getElementsByClassName("contactForm")[1].style.display = "none";
            
            document.getElementsByClassName("closeContactForm")[0].style.display = "none";
            
            document.getElementsByClassName("contact")[0].style.borderBottom = "0px";
            
            document.getElementsByClassName("work")[0].style.borderBottom = "0px";
            
            
        }
    }
    
    
    
    
    for (var i = 0; i < document.getElementsByClassName("sortItem").length; i++){
        document.getElementsByClassName("sortItem")[i].addEventListener('click', clickCloseSeeSort());
	}
    
    
    function clickCloseSeeSort() {
		return function () {
            
            document.getElementsByClassName("closeSeeSort")[0].style.display = "none";
            
            document.getElementsByClassName("seeSort")[0].style.display = "none";
            
            document.getElementsByClassName("sortHighlighted")[0].style.display = "none";
            
            sortBubbleViewed = true;
            
            //document.getElementsByClassName("pieceContainer")[0].style.paddingBottom = "0px";
            
        }
    }
    
    
    
    //var filterArray = [0,0,0,0,0,0,0,0];
    
    
    
    for (var i = 0; i < document.getElementsByClassName("checkBox").length; i++) {
		document.getElementsByClassName("checkBox")[i].addEventListener('click', checkThis(i));
	}
    
    function checkThis(a){
        return function(){
            
            filterArray[startCat] = 0;
            
            if (filterArray[a]===0){
            document.getElementsByClassName("check")[a].style.backgroundImage = "url(images/checkFilled.svg)";
            filterArray[a]=1;
            } else {
            document.getElementsByClassName("check")[a].style.backgroundImage = "url(images/checkBlank.svg)";
            filterArray[a]=0;
            }
            
            document.getElementsByClassName("abCover")[0].style.display = "none";
            
            
            
            // if all unchecked....
            //filterArray[startCat] = 1;
            
            //console.log(filterArray);
            
            if (filterArray.indexOf(1) !== -1){
                document.getElementsByClassName("cbCover")[0].style.display = "none";
            } else {
                document.getElementsByClassName("cbCover")[0].style.display = "block";
                filterArray[startCat] = 1;
            }
            
            
        }
    }
    
    
    document.getElementsByClassName("clearButton")[0].addEventListener('click', clickClear());
	
    
    function clickClear(){
        return function(){
         
            filterArray = [0,0,0,0,0,0,0,0,1];
            
            filterArray[startCat] = 1;
            
            for (var i = 0; i < document.getElementsByClassName("checkBox").length; i++) {
		      document.getElementsByClassName("check")[i].style.backgroundImage = "url(images/checkBlank.svg)";
	       }
           
           document.getElementsByClassName("cbCover")[0].style.display = "block";
           document.getElementsByClassName("abCover")[0].style.display = "none";
            
        }
    }
    
    
    document.getElementsByClassName("applyButton")[0].addEventListener('click', clickApply());
	
    
    function clickApply(){
        return function(){
           
           document.getElementsByClassName("abCover")[0].style.display = "block";
           
           window.scrollTo(0, 0);
           //document.getElementsByClassName("sortContainer")[1].after(document.getElementsByClassName("sortContainer")[0]);
           
           //document.getElementsByClassName("sortContainer")[13].after(document.getElementsByClassName("sortContainer")[0]);
           
           //order = [13,20,3,12,5,7,8,11,16,14,18,19,15,21,4,0,10,17,1,2,9,6];
           
           //clickString += "["+filterArray + "],";
           
            sortPieces();
            
            
            for (var i = 0; i < order.length; i++){
                setImage(i,0);
            }
                
            for (var i = 0; i < csCatArray.length; i++){
            
                for (var ii = 0; ii < filterArray.length; ii++){
                
                    if (csCatArray[i]===ii && filterArray[ii]===1){
                        //console.log(order.indexOf(i), csSlideArray[i]);
                        setImage(order.indexOf(i),csSlideArray[i]);
                    }
                }
            }
            
            
            for (var i = 0; i < csCatArray2.length; i++){
            
                for (var ii = 0; ii < filterArray.length; ii++){
                
                    if (csCatArray2[i]===ii && filterArray[ii]===1){
                        //console.log(order.indexOf(i), csSlideArray2[i]);
                        setImage(order.indexOf(i),csSlideArray2[i]);
                    }
                }
            }
            
            
            // START
            //console.log(filterArray);
            //console.log(csCatArray);
            //console.log(order)
            //console.log(csSlideArray);
            //console.log(csCatArray2);
            //console.log(csSlideArray2);
            
            
            //setImage(6,2);
            // END
            
            //setImage(1,1);
    
            //setImage(2,2);
    
            //setImage(11,1);
    
           
        }
    }
    
    
    
    
    
    
    document.getElementsByClassName("copyIcon")[0].addEventListener('click', copyEmail());
	
    function copyEmail() {
		return function () {
            
            //window.clicks = window.clicks + "E";
            
            var copyText = document.getElementById("myInput");
            navigator.clipboard.writeText(copyText.value);
            //alert("Copied the text: " + copyText.value);

            var copyFadeInc = 1.5;
            
            document.getElementsByClassName("copiedMessage")[0].style.display = "block";
            
            requestAnimationFrame(copyFade);
            
            function copyFade(){
                copyFadeInc-=0.02;
                document.getElementsByClassName("copiedMessage")[0].style.opacity = copyFadeInc;
                if (copyFadeInc<0.1){
                    document.getElementsByClassName("copiedMessage")[0].style.display = "none";
                } else {
                    requestAnimationFrame(copyFade);
                }
            }
            
        }
    }
    
    
    
    
    
    
    
    
    //document.getElementsByTagName("video")[2].style.height = "100px";
    
    
    /*
    for (var i =0; i < vidNum; i++){
    
    document.getElementsByClassName("videoPlayButton")[i].addEventListener('click', clickVideo(i));
    
    document.getElementsByClassName("videoElement")[i].addEventListener('ended', checkVideoEnd(i));

	}
    
    
    function clickVideo(a) {
        
		return function () {
            
            //console.log(a);
            
            document.getElementsByClassName("videoElement")[a].play();
            //document.getElementsByClassName("videoPlayButton")[a].style.display = "none";
            
        }
    }
    
    function checkVideoEnd(a) {
        
		return function () {
            
            console.log(a);
            
            document.getElementsByClassName("videoElement")[a].currentTime = 1;
            //document.getElementsByClassName("videoPlayButton")[a].style.display = "block";
            
        }
    }
    */
    
    
    
    
    
    
    
    var scHeight = document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().height;
    var scBottom = document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().bottom;
        
    var scBottomTopVal = document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    
    //var timer = setTimeout(function() {
        //scBottomTopVal = document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().bottom;
    //}, 500);
            
            
    document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().bottom;
    
    uodateScrollInfo();
    
    //document.getElementsByClassName("pieceContainer")[0].addEventListener("scroll", function() {
    
    
    var firstScroll = true;
    
    var scrollStatus = false;
    
    var mouseStatus = false;
    
    var arrowClicks = "-";
    
    
    window.addEventListener("scroll", function() {
        
        scrollStatus = true;
        
        scHeight = document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().height;
        scBottom = document.getElementsByClassName("pieceContainer")[0].getBoundingClientRect().bottom;
        
        if (scBottomTopVal===0){
            scBottomTopVal = scBottom;
        }
        
        
        
        //if (scBottom <= (scBottomTopVal-windowHeight)/2){
            //document.getElementById("scrollNum").style.backgroundColor = "#6F0";
        //}
        
        
        
        
        if (scBottom <= windowHeight+60){
            
            if (firstScroll){
            o = fct.userData.postPageView("endScroll");
            firstScroll = false;
            }
            
            if (!sortBubbleViewed){
            
            window.bottom = "B_";
            document.getElementById("scrollNum").style.backgroundColor = "#FC0";
            
            document.getElementsByClassName("closeSeeSort")[0].style.display = "block";
            
            document.getElementsByClassName("seeSort")[0].style.display = "block";
            
            document.getElementsByClassName("sortHighlighted")[0].style.display = "block";
            
            o = fct.userData.postPageView("endScroll");
            
            sortBubbleViewed = true;
        }
        }
        
        
        if (scBottom >= windowHeight+1000){
            window.bottom = "B_";
            document.getElementById("scrollNum").style.backgroundColor = "#FC0";
            
            document.getElementsByClassName("closeSeeSort")[0].style.display = "none";
            
            document.getElementsByClassName("seeSort")[0].style.display = "none";
            
            document.getElementsByClassName("sortHighlighted")[0].style.display = "none";
            
            
            
            
        }
        
        
        
        uodateScrollInfo();
        //document.getElementById("scrollNum").innerHTML = document.getElementById("mainContainer").getBoundingClientRect().top;
        
        //document.getElementById("scrollNum").innerHTML = scrollNum;
        
        //console.log(document.getElementsByClassName("pieceContainer")[0].style.top);
        
        //console.log(document.getElementById("mainContainer").scrollTop);
        
        //console.log(document.getElementsByClassName("pieceContainer")[0].scrollTop);
        
    });
    
    
    
    window.addEventListener("mousemove", function() {
    
        mouseStatus = true;
    
    });
    
    
    function uodateScrollInfo(){
        document.getElementById("scrollNum").innerHTML =
        "h = " + scHeight + "<br>" + 
        "bt = " + scBottomTopVal + "<br>" +
        "bb = " + scBottom + "<br>" +
        "wh = " + windowHeight;
    }
    
    
    /*
    var loadInc = 0;
    
    var loadingInterval = setInterval(function(){
		
        loadInc++;
        
        console.log(loadInc);
        
        if (loadInc===10){
        
        console.log("clear interval");
        
            window.clearInterval(loadingInterval);
            
        }
        
        
	}, 100);
    */
    
    var min = 1000;//1000 = 1sec
    
    var minInc = 0;
    
    var intv = setInterval(function(){
        
        //console.log(clickString);
        
        minInc++;
        
        /*
        if (minInc===1 || minInc===2 || minInc===4 || minInc===10){
            clickString = minInc*0.5+"min=" + clickString;
            o = fct.userData.postPageView(clickString);
        }
        */
        
        var minIncArray = [5,10,15,30,60,120,180,240,300];
        
        for (var i = 0; i < minIncArray.length; i++){
            if (minInc===minIncArray[i]){
                if (minInc<60){
                o = fct.userData.postPageView(minInc+"sec="+scrollStatus+"_m="+mouseStatus+"_c="+arrowClicks);
                } else {
                o = fct.userData.postPageView(minInc/60+"min="+scrollStatus+"_m="+mouseStatus+"_c="+arrowClicks);
                }
                scrollStatus = false;
                mouseStatus = false;
                arrowClicks = "-";
            }
        }
        
        
        //clickString = "CS=";
        
        
	}, min);
    
    
    
    
    
    
    
    
    
    
}//END: window.onload



