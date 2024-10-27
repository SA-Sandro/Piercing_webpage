
export const updateBackgroundImage = () => {
const infoContainer = document.querySelector('.info-container') as HTMLElement;
    const currentUrl:string = window.location.href;

    if (currentUrl.includes('body-piercing')) {
      infoContainer?.classList.add('body-background');
      return;
    }

    if (currentUrl.includes('ear-piercing')) {
      infoContainer?.classList.add('ear-background');
      return;
    }

    if (currentUrl.includes('face-piercing')) {
      infoContainer?.classList.add('face-background');
      return;
    }

    if (currentUrl.includes('genitals-piercing')) {
      infoContainer?.classList.add('genital-background');
      return;
    }
      
}

export const updateRightPosition = () => {
    const screenWidth: number = window.innerWidth;
    const info = document.querySelector('.info') as HTMLElement;

    if (screenWidth > 1800) {
      const extraWidth: number = screenWidth - 1800;
      const leftPercentage: number = 10 + extraWidth / 100;
      info.style.left = `${leftPercentage}%`;
    }
    if (screenWidth > 4900) {
      const extraWidth: number = screenWidth - 5000;
      const leftPercentage: number = 35 + extraWidth / 100;
      info.style.left = `${leftPercentage}%`;
    }
  };