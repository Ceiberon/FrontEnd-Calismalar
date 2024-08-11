document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      
    
      const height = parseFloat(document.querySelector('#height').value);
      const weight = parseFloat(document.querySelector('#weight').value);
      
      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Geçersiz bir değer girdiniz.");
        return;
      }
  
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      
    
      let arrowPosition;
      if (bmi < 18.5) {
        arrowPosition = "10%";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        arrowPosition = "30%";
      } else if (bmi >= 25 && bmi < 29.9) {
        arrowPosition = "50%";
      } else if (bmi >= 30 && bmi < 34.9) {
        arrowPosition = "70%";
      } else {
        arrowPosition = "90%";
      }
    
      const arrow = document.querySelector('#bmi-arrow');
      arrow.style.left = arrowPosition;
      arrow.style.display = "block";
    });
  });


  function initMap() {
    const uluru = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('#classes h3');
    headers.forEach(header => {
        // Bootstrap collapse olayı için dinleyici ekleme
        const target = header.getAttribute('data-bs-target');

        header.addEventListener('click', function() {
            headers.forEach(h => h.classList.remove('h3-active'));
            this.classList.toggle('h3-active');
        });

        // Bootstrap collapse olaylarına dinleyici ekleme
        const collapseElement = document.querySelector(target);

        collapseElement.addEventListener('shown.bs.collapse', function() {
            header.classList.add('h3-active');
        });

        collapseElement.addEventListener('hidden.bs.collapse', function() {
            header.classList.remove('h3-active');
        });
    });

    // Sayfa yüklendiğinde gösterilen collapse elementinin arka plan renginin ayarlanması
    const activeCollapse = document.querySelector('#classes .collapse.show');
    if (activeCollapse) {
        const activeHeader = document.querySelector(`[data-bs-target="#${activeCollapse.id}"]`);
        if (activeHeader) {
            activeHeader.classList.add('h3-active');
        }
    }
});
