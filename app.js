const card = document.getElementById("card3D");

      function flipCard() {
        card.classList.toggle("flipped");

        document.getElementById("errorLogin").textContent = "";

        document.getElementById("errorRegister").textContent = "";
      }

      function handleSubmit(event, isLogin) {
        event.preventDefault();

        if (isLogin) {
          const username = document.getElementById("username").value.trim();

          const password = document.getElementById("password").value.trim();

          const error = document.getElementById("errorLogin");

          if (!username || !password) {
            error.textContent = "Please fill in all fields";

            return;
          }

          if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters";

            return;
          }

          error.textContent = "";

          alert("Login successful!");
        } else {
          const regUsername = document
            .getElementById("regUsername")
            .value.trim();

          const regEmail = document.getElementById("regEmail").value.trim();

          const regPassword = document
            .getElementById("regPassword")
            .value.trim();

          const error = document.getElementById("errorRegister");

          const emailRegex = /^[^\s@]+@gmail\.com$/;

          const phoneRegex = /^\+?\d{10,12}$/;

          if (!regUsername || !regEmail || !regPassword) {
            error.textContent = "Please fill in all fields";

            return;
          }

          if (!emailRegex.test(regEmail) && !phoneRegex.test(regEmail)) {
            error.textContent = "Invalid Email or Password";

            return;
          }

          if (regPassword.length < 6) {
            error.textContent = "Password must be at least 6 characters";

            return;
          }

          error.textContent = "";

          alert("Registration successful!");
        }
      }