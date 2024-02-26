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
            window.location.href = './loading.html';
        });
    
    } 
    if (yesButton) {
        yesButton.addEventListener('click', function () {
            window.location.href = './loading.html';
        });
    } 
    if (notSureButton) {
        notSureButton.addEventListener('click', function () {
            window.location.href = './loading.html'
        })
    }


    document.querySelector("button[type='submit']").addEventListener("click", function() {
        // Assuming each input/select has a unique ID
        const fields = ['reason', 'input-subject', 'input-firstName', 'input-lastName', 'input-email', 'input-phoneNumber', 'address', 'input-message'];
        
        const formData = {};
        fields.forEach(field => {
            // For 'address_wrapper', assuming you want to save the value of the input inside it
            if (field === 'address_wrapper') {
                const element = document.querySelector('#' + field + ' input');
                if (element) formData[field] = element.value;
            } else {
                const element = document.getElementById(field);
                if (element) formData[field] = element.value;
            }
        });

        // Store in local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Close the privacy modal
        const privacyModal = document.getElementById('privacyModal');
        if (privacyModal) {
            privacyModal.style.display = 'none';
        }

        // Show an alert message
        alert('Form data saved!');
    });



    function handleResponseClick(response) {
        // Store the response in local storage
        localStorage.setItem('Q3 response', response);

        // Optional: Redirect or perform some action after storing the response
        // Example: Redirect to another page
        // window.location.href = response === 'Yes' ? './yesPage.html' : './noPage.html';

        // Show an alert message
        // alert('Your response "' + response + '" has been saved!');
    }

    if (yesButton) {
        yesButton.addEventListener('click', function () {
            handleResponseClick('Yes');
        });
    }

    if (noButton) {
        noButton.addEventListener('click', function () {
            handleResponseClick('No');
        });
    }

    if (notSureButton) {
        notSureButton.addEventListener('click', function () {
            handleResponseClick('Not Sure');
        });
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