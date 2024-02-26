document.addEventListener('DOMContentLoaded', function () {
    var openUrlBtn = document.getElementById('startButton');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var notSureButton = document.getElementById('notSureButton');

    var modal = document.getElementById('myModal');
    var termModal = document.getElementById('termModal');
    var privacyModal = document.getElementById('privacyModal');

    var openModalButton = document.getElementById('openModal');
    var termModalButton = document.getElementById('openTermModal');
    var contactModalButton = document.getElementById('openContactModal');


    var closeIcon = document.getElementById('closeIcon');
    var contactCloseIcon = document.getElementById('contactCloseIcon');

    var modalContent = document.querySelector('.modalContent'); // Ensure this selector matches your modal content's class
    // var termsCloseIcon = document.getElementById('termCloseIcon');
    var termModalContent = document.querySelector('.termModalContent');


    // privay clicks 
    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    termModalButton.addEventListener('click', function() {
        termModal.style.display = 'block';
    });

    contactModalButton.addEventListener('click', function() {
        privacyModal.style.display = 'block';
    })

    closeIcon.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    closeIcon.addEventListener('click', function() {
        termModal.style.display = 'none';
    });

    contactCloseIcon.addEventListener('click', function() {
        privacyModal.style.display = 'none';
    });

    // Event listener to close the modal if the click is outside of the modal content
    modal.addEventListener('click', function(event) {
        // Check if the click is outside the modal content
        if (!modalContent.contains(event.target)) {
            modal.style.display = 'none';
        }
    });

    termModal.addEventListener('click', function(event) {
        // Check if the click is outside the modal content
        if (!termModalContent.contains(event.target)) {
            termModal.style.display = 'none';
        }
    });
    
    // openUrlBtn.addEventListener('click', function () {
    //     window.location.href = './q1.html';
    // });

    if(noButton) {
        noButton.addEventListener('click', function () {
            window.location.href = './q3.html';
        });
    
    } else if (yesButton) {
        yesButton.addEventListener('click', function () {
            window.location.href = './q3.html';
        });
    } else if (notSureButton) {
        notSureButton.addEventListener('click', function () {
            window.location.href = './q3.html'
        })
    }


});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.input, textarea.input').forEach(input => {
      function checkContent() {
        if (input.value.trim() !== "") {
          input.classList.add('has-content');
        } else {
          input.classList.remove('has-content');
        }
      }
  
      input.addEventListener('blur', checkContent);
      // Check content on page load in case of pre-filled values
      checkContent();
    });
  });