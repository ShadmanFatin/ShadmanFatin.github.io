document.querySelector(".showCreateAccountForm").addEventListener
(
      "click" , function(event)
      {
            document.querySelector(".createAccountForm").style.display="block";
            document.querySelector(".loginForm").style.display="none";
      }
)

document.querySelector(".showLoginForm").addEventListener
(
      "click" , function(event)
      {
            document.querySelector(".loginForm").style.display="block";
            document.querySelector(".createAccountForm").style.display="none";
      }
)