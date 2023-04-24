// Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, 
// а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.



import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

console.log(player);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
);
