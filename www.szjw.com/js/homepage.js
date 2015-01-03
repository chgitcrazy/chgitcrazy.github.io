
	          function addfavorite(){
                  var url = window.location.href;
                  var tname=document.title;
                  if(document.all){ 
                                try
                               {
                                   window.external.addFavorite(url, tname);
                               }catch (e)
                              {
                                   try
                                     {
                                          window.sidebar.addPanel(tname, url, "");
                                     } catch (e)
                                    {
                                            alert("请使用Ctrl+D键收藏本页");
                                     }
                                } 
                  }else if (window.sidebar){ 
                                    alert("请使用Ctrl+D键收藏本页");
                  }
         }
         
        function setHomepage()
        {
             var url = window.location.href; 
             if (document.all)
             {
                      document.body.style.behavior='url(#default#homepage)';
                      document.body.setHomePage(url);
 
              }
              else if (window.sidebar)
             {
                       if(window.netscape)
                       {
                        try
                           { 
                            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
                        } 
                         catch (e) 
                         { 
                           alert( "设为首页操作被浏览器拒绝，如果想启用设为首页功能，请选择信任此代码" ); 
                         }
               }
                 var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
                 prefs.setCharPref('browser.startup.homepage',url);
               }
          }
