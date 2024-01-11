document.addEventListener('DOMContentLoaded', function() {
    var ctaButton = document.querySelector('.cta-button');
    var solarInfoSection = document.getElementById('solar-info-section');
    var solarInfo = document.getElementById('solar-info');
    var backBtn = document.querySelector('.back-button');
  
    ctaButton.addEventListener('click', function() {
      // Simulating getting data from Arduino or other source
      var solarPower = 5000; // in watts
      var sunDirection = 'South';
      var maxPower = 6000; // in watts
  
      // Update the solar info content
      solarInfo.innerHTML = `
        <h2>Solar Power Information</h2>
        <p><strong>Solar Power:</strong> ${solarPower} Watts</p>
        <p><strong>Sun Direction:</strong> ${sunDirection}</p>
        <p><strong>Maximum Power Today:</strong> ${maxPower} Watts</p>
      `;
  
      // Hide the hero section and show the solar info section
      var heroSection = document.getElementById('hero');
      heroSection.style.display = 'none';
      solarInfoSection.style.display = 'block';
    });
  
    backBtn.addEventListener('click', function() {
      // Show the hero section and hide the solar info section
      var heroSection = document.getElementById('hero');
      heroSection.style.display = 'block';
      solarInfoSection.style.display = 'none';
    });
  });