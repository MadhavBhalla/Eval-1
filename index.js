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
  