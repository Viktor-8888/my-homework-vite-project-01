import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const list = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
}); //для роботи з модальним вікном

export function createGallery(images) {
  const markup = images.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      const li = document.createElement('li');
      li.classList.add('gallery-item');

      const link = document.createElement('a');
      link.classList.add('gallery-link');
      link.href = largeImageURL;
      li.append(link);
      const image = document.createElement('img');
      image.classList.add('gallery-image');
      image.src = webformatURL;
      image.alt = tags;
      link.append(image);
      const listInform = document.createElement('ul');
      listInform.classList.add('gallery-text');
      link.append(listInform);

      const itemLikes = document.createElement('li');
      itemLikes.classList.add('gallery-text-item');
      itemLikes.textContent = 'Likes';
      const spanLikes = document.createElement('span');
      spanLikes.classList.add('gallery-span-item');
      spanLikes.textContent = likes;
      listInform.append(itemLikes);
      itemLikes.append(spanLikes);

      const itemViews = document.createElement('li');
      itemViews.classList.add('gallery-text-item');
      itemViews.textContent = 'Views';
      const spanViews = document.createElement('span');
      spanViews.classList.add('gallery-span-item');
      spanViews.textContent = views;
      listInform.append(itemViews);
      itemViews.append(spanViews);

      const itemComments = document.createElement('li');
      itemComments.classList.add('gallery-text-item');
      itemComments.textContent = 'Comments';
      const spanComments = document.createElement('span');
      spanComments.classList.add('gallery-span-item');
      spanComments.textContent = comments;
      listInform.append(itemComments);
      itemComments.append(spanComments);

      const itemDownloads = document.createElement('li');
      itemDownloads.classList.add('gallery-text-item');
      itemDownloads.textContent = 'Downloads';
      const spanDownloads = document.createElement('span');
      spanDownloads.classList.add('gallery-span-item');
      spanDownloads.textContent = downloads;
      listInform.append(itemDownloads);
      itemDownloads.append(spanDownloads);
      return li;
    }
  );
  list.append(...markup);
  gallery.refresh();
}

export function clearGallery() {
  list.innerHTML = '';
}

export function showLoader() {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  list.append(loader);
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.remove();
}
