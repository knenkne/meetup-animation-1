!function(e){e.navigation&&!e.bootstrap&&(delete e.navigation.index,delete e.navigation.operations,delete e.navigation["cards.dashboard"])}(window);var redefineBizoneApi=function(){window.bfd&&window.bfd.getEncodedData&&(window.encode_deviceprint=window.bfd.getEncodedData),window.bfd&&window.bfd.getData&&(window.add_deviceprint=window.bfd.getData),window.urlEncode=function(e){return encodeURIComponent(e).replace(/\~/g,"%7E").replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\'/g,"%27").replace(/\-/g,"%2D").replace(/\_/g,"%5F").replace(/\./g,"%2E")}};redefineBizoneApi(),XMLHttpRequest.prototype.wrappedSetRequestHeader=XMLHttpRequest.prototype.setRequestHeader,XMLHttpRequest.prototype.setRequestHeader=function(e,t){window.bfd&&"RSA-Antifraud-JS-Events"===e&&t?(redefineBizoneApi(),this.wrappedSetRequestHeader(e,"")):window.bfd&&"RSA-Antifraud-DOM-Elements"===e&&t?(redefineBizoneApi(),this.wrappedSetRequestHeader(e,"")):window.bfd&&"RSA-Antifraud-Device-Print"===e&&-1!==t.indexOf("version%3D3%2E4%2E2%2E0%5F1")?(redefineBizoneApi(),this.wrappedSetRequestHeader(e,window.encode_deviceprint())):this.wrappedSetRequestHeader(e,t)};