let pokemonRepository = (function() {

  let modalContainer = document.querySelector('#modal-container');
  
  
  
  function showModal(title, text) { // why did we need to add these parameters ? 
    //clear content from innerHtml
    modalContainer.innerHTML = ''; 
    let modal = document.createElement('div');
    modal.classList.add('modal');

    //create close Button on Modal 
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    //create text within button 
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    //modal insert into DOM
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    //apply visibility css 
    modalContainer.classList.add('is-visible');
  }

  

  //there is, however, one big issue with this implementation—if the user closes the modal without confirming 
  //or canceling (e.g., with the Esc key or Close button), the promise will neither resolve nor reject. 
  //What you actually want, though, is for the dialog to always reject when the modal is closed.
  let dialogPromiseReject; // This can be set later, by showDialog
  // mentor is it true or flas or what 

  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
    //to check with mentor
    //When the hideModal function is called, and if that variable is set, 
    //you call it, rejecting the promise. This way, no matter how the modal is closed, it will always correctly reject.
      if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  function showDialog(title, text) {
    showModal(title, text);

    // We want to add a confirm and cancel button to the modal
    let modal = modalContainer.querySelector('.modal');

    let confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm hallo';

    let cancelButton = document.createElement('button');
    cancelButton.classList.add('modal-cancel');
    cancelButton.innerText = 'Cancel';

    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

  // We want to focus the confirmButton so that the user can simply press Enter
    confirmButton.focus();

    // Return a promise that resolves when confirmed, else rejects
    return new Promise((resolve, reject) => {
      cancelButton.addEventListener  ('click', () =>  { hideModal(); reject();  });
      confirmButton.addEventListener ('click', () =>  { dialogPromiseReject = null; hideModal(); resolve(); });
    });
    
      // This can be used to reject from other functions
      dialogPromiseReject = reject;


        
      // In the code above, you saved the reject function of the promise in the dialogPromiseReject variable. 
      // When the hideModal function is called, and if that variable is set, 
      // you call it, rejecting the promise. This way, no matter how the modal is closed, it will always correctly rejec

    }

document.querySelector('#show-dialog').addEventListener('click', () => {
  showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
    alert('confirmed!');
  }, () => {
    alert('not confirmed');
  });
});


//escape key down 
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });


})();