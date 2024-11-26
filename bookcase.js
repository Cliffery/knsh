const g = e => decodeURIComponent(escape(atob(e))), 
      processedButtons = new Set(), 
      userData = { 
          'bG9naW5BY2NvdW50': 'bW9ja0FjY291bnQ=', 
          'dXVpZA==': 'bW9ja1VVSUQ=' 
      }, 
      viewer = { 
          'bnVsbA==': 'aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXI0VGVhY2hlci9FYm9vay5odG1sP2NvZGU9dGVhY2hlcl9wcm9fdGVzdCZpZD0=', 
          'enlvX2FuaW1hdGU=': 'aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXJhbjRUZWFjaGVyL2luZGV4Lmh0bWw/aWQ9', 
          '': 'aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXJhbjRUZWFjaGVyL2luZGV4Lmh0bWw/aWQ9' 
      };

function updateButtons() {
    if (!window.location.href.startsWith(g('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvMi9pbmRleC5odG1sP2NvZGVfZGVncmVlPQ=='))) 
        return;
    
    document.querySelectorAll(g('LmRvd25sb2FkQXNzZXQ=')).forEach(asset => {
        const button = asset.querySelector(g('LmRvd25Bc3NldEJ0bg==')), 
              label = button.querySelector(g('LmxhYmVsLWluZm8=')), 
              fileName = button.getAttribute(g('ZC1maWxlX25hbWU='));
        
        if (fileName && !processedButtons.has(button)) {
            asset.style.cssText += 'display: flex;';
            button.style.cssText += 'width: 80px;';
            
            button.onclick = () => { 
                remark = btoa(unescape(encodeURIComponent(button.getAttribute(g('ZC1yZW1hcmtfaWQ=')))));
                
                if (asset.textContent.includes(g("6Ieq54S2")) && asset.textContent.includes(g("5a6i6KO95YyW"))) { 
                    remark = "enlvX2FuaW1hdGU="; 
                } 
                else if (asset.textContent.includes(g("5ZyL5paH")) && asset.textContent.includes("PPT")) { 
                    remark = "bnVsbA=="; 
                }
                
                window.open(`${g(viewer[remark])}${fileName.split('.')[0]}`, '_blank'); 
            };
            
            label.textContent = '免登開啟';
            processedButtons.add(button);
        }
    });
}

for (const key in userData) { 
    if (userData.hasOwnProperty(key)) { 
        localStorage.setItem(g(key), g(userData[key])); 
    } 
}

new MutationObserver(updateButtons).observe(document.body, { childList: true, subtree: true });
updateButtons();
