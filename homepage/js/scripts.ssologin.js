$(function() {
			    $.getJSON('/dify/ws/user.do', function(userInfo) {
					    var html = '';
						if (userInfo.consumerId != null) {
						$("#loginSection").removeClass( "logged-out" ).addClass( "logged-in" );
               			var firstName = userInfo.firstName;
               			if (firstName != null && firstName != 'null') {
               				$('#welcomeUser').text("Welcome " + firstName);
                		} else {
                			$('#welcomeUser').text("Welcome");
                		}
                	    $('#welcomeUser').show();
                        $('#signOutLink').attr("href", "/dify/logout.do?returnurl="+window.location);
                        $('#signOutLink').show();
                        $('#notYouLink').attr("href", "/dify/logout.do?returnurl="+window.location);
                        $('#notYouLink').show();
                        $('#myAveryLink').attr("href", "/dify" );
                        $('#myAveryLink').show();
                      
                        $('#signInLink').hide();
                        
						} else {
							$('#welcomeUser').hide();
							$('#signOutLink').hide();                     
							$('#notYouLink').hide();
							$('#myAveryLink').hide();
							$('#signInLink').attr("href", "http://tst-accounts.aws.avery.com/um/signin.do?client_id=difydev&returnUrl="+window.location );
							$('#signInLink').show();
						}
				
                
                });
			
			
        });
