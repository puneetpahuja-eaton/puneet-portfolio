<!DOCTYPE html>
<html lang="en">
<!--
  ============================================================
  PUNEET PAHUJA - PORTFOLIO
  ============================================================
  HOW TO DEPLOY FREE ON GITHUB PAGES:
    1. Create a GitHub repo named exactly: <your-username>.github.io
    2. Upload this file (index.html) to the repo.
    3. Go to Settings -> Pages -> select the main branch -> Save.
    4. Your site goes live at https://<your-username>.github.io
  OR use Netlify Drop (https://app.netlify.com/drop) - just drag this file in.

  !!! REMEMBER: Replace the placeholder GitHub URL "github.com/puneetpahuja"
      below with your REAL GitHub username. (Search for GITHUB-PLACEHOLDER)
  ============================================================
-->
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Puneet Pahuja | Software Engineer</title>
<style>
  :root{
    --navy:#0d1b2a; --navy2:#12263a; --card:#16324a;
    --teal:#2dd4bf; --blue:#38bdf8; --text:#e6edf3;
    --muted:#9fb3c8; --chip:#1e3a52;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    background:var(--navy); color:var(--text); line-height:1.6;
  }
  a{color:var(--blue); text-decoration:none}
  a:hover{color:var(--teal)}
  .container{max-width:1000px; margin:0 auto; padding:0 20px}

  /* NAV */
  nav{
    position:sticky; top:0; z-index:100;
    background:rgba(13,27,42,.92); backdrop-filter:blur(8px);
