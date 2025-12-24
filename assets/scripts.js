document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  function saveProfile(profileObj) {
    try {
      localStorage.setItem("misphereProfile", JSON.stringify(profileObj));
    } catch (e) {
      console.log("localStorage error:", e);
    }
  }

  function loadProfile() {
    try {
      const raw = localStorage.getItem("misphereProfile");
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      console.log("localStorage parse error:", e);
      return null;
    }
  }

  const signupForm = document.getElementById("signup-form");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = signupForm.elements["full-name"].value.trim();
      const email = signupForm.elements["school-email"].value.trim();
      const username = signupForm.elements["username"].value.trim();
      const year = signupForm.elements["year"].value.trim();
      const interests = signupForm.elements["interests"].value.trim();

      const profile = {
        name: fullName || username || "MIS Student",
        email: email || "",
        year: year || "MIS student",
        interests:
          interests ||
          "Interested in data analytics, information systems design, and digital transformation in organisations.",
      };

      saveProfile(profile);
      alert(
        "Sign up information saved for demo. You will be redirected to your profile page."
      );
      window.location.href = "profile.html";
    });
  }

  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = loginForm.elements["login-username"].value.trim();
      const email = loginForm.elements["login-email"].value.trim();

      if (!username) {
        if (loginMessage) {
          loginMessage.textContent = "Please enter your username to continue.";
        }
        return;
      }

      let profile = loadProfile();
      if (!profile) {
        profile = {
          name: username,
          email: email || "",
          year: "MIS student",
          interests:
            "Interested in management information systems and technology.",
        };
      } else {
        if (!profile.name) profile.name = username;
        if (!profile.email && email) profile.email = email;
      }

      saveProfile(profile);

      if (loginMessage) {
        loginMessage.textContent =
          "Welcome, " +
          username +
          "! Redirecting to your profile page (demo).";
      }

      setTimeout(function () {
        window.location.href = "profile.html";
      }, 800);
    });
  }

  const profileNameEl = document.getElementById("profile-name");
  const profileMetaEl = document.getElementById("profile-meta");
  const profileBioEl = document.getElementById("profile-bio");

  if (profileNameEl && profileMetaEl && profileBioEl) {
    const profile = loadProfile();

    if (profile) {
      profileNameEl.textContent = profile.name || "MIS Student";

      if (profile.year || profile.email) {
        let meta = "";
        if (profile.year) meta += profile.year;
        if (profile.email) {
          if (meta.length > 0) meta += " · ";
          meta += profile.email;
        }
        profileMetaEl.textContent =
          meta || "Management Information Systems student";
      }

      if (profile.interests) {
        profileBioEl.textContent = profile.interests;
      }
    }
  }
});