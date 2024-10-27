    
    export const showWarning = ():void => {
       const hiddenInput = document.querySelector('.hidden-input');
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      hiddenInput?.dispatchEvent(event);
    }

    export const backToHome = ():void => {
      location.replace('index.html');
    }
    
    const openLightBox = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const imageId = target.getAttribute('data-image-id');
      const explicitImageLink = document.getElementById(imageId!);
      explicitImageLink?.click();
    };

    const showImageButtons = document.querySelectorAll(
      '.show-image'
    ) as NodeListOf<HTMLElement>;
    showImageButtons.forEach((imageButton) => {
      imageButton.addEventListener('click', openLightBox);
    });