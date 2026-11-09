/* Adresses e-mail reconstituées au chargement (anti-robots) */
(function(){
  var d='xaas'+'.'+'fr',l=document.querySelectorAll('a[data-m]');
  for(var i=0;i<l.length;i++){
    var a=l[i],e=a.getAttribute('data-m')+'@'+d,s=a.getAttribute('data-s');
    a.href='mailto:'+e+(s?'?subject='+encodeURIComponent(s):'');
    if(a.hasAttribute('data-show'))a.textContent=e;
  }
})();
