function showAdvertisement() {
    const advertisement = document.createElement('div');
    
    advertisement.style.position = 'fixed';
    advertisement.style.top = '0';
    advertisement.style.left = '0';
    advertisement.style.width = '100vw';  
    advertisement.style.height = '100vh'; 
    advertisement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; 
    advertisement.style.display = 'flex';
    advertisement.style.justifyContent = 'center';
    advertisement.style.alignItems = 'center';
    advertisement.style.zIndex = '9999';

    advertisement.innerHTML = `<div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); width: 400px; text-align: center;">
        <h2 style="margin-top: 0;">Important Update</h2>
        <p>Sign up now on EduTech for some exciting Updates!</p>
        <button id="closeAd" style="margin-top: 15px; width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">Close</button>
      </div>`;

    document.body.appendChild(advertisement);

    document.getElementById('closeAd').addEventListener('click', () => {
        advertisement.remove();
    });
}

setTimeout(showAdvertisement, 3000);
document.addEventListener("DOMContentLoaded", function() {
  const blogCards = document.querySelectorAll('.blog-card');

  blogCards.forEach((card, index) => {
    const viewsElement = card.querySelector('.fa-eye');
    const likesElement = card.querySelector('.fa-thumbs-up');

    let viewsCount = parseInt(viewsElement.nextSibling.nodeValue.trim()) || 0;
    let likesCount = parseInt(likesElement.nextSibling.nodeValue.trim()) || 0;

    viewsCount++;
    viewsElement.nextSibling.nodeValue = ` ${viewsCount} Views`;

    likesElement.addEventListener('click', function() {
      likesCount++;
      likesElement.nextSibling.nodeValue = ` ${likesCount} Likes`;
    });
  });
});
