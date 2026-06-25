var _0x4a2b=["hello","4left","afford","areyouthere","busy","buy","callfrom","canispeak","canuhear","dcnmaker","dogsguns","good","goodbye","great","greatquest","greeting","holdon","howmuch","ifwegave","isthatok","iunderstand","limitedtime","mynameis","no","noint","notint2","noprob","nyc","ok","ownrent","perfect","realperson","rescue","repeat","thanks","transfer1","transfer2","upgrade1","upgrade2","whygo","wouldyou","yes"];
var _s={},_ca=null,_cs=null;
(function(_l){_l.forEach(function(_n){var _a=new Audio("sounds/"+_n+".mp3");_a.preload="auto";_s[_n]=_a;})})(_0x4a2b);
function playSound(_x){var _a=_s[_x];if(!_a)return;if(_ca&&_cs===_x&&!_ca.paused)return;if(_ca){_ca.pause();_ca.currentTime=0;}_ca=_a;_cs=_x;_ca.currentTime=0;_ca.play().catch(function(_e){});_ca.onended=function(){_ca=null;_cs=null;};}
function stopSound(){if(_ca){_ca.pause();_ca.currentTime=0;_ca=null;_cs=null;}}
