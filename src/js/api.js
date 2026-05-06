import axios from 'axios';

// console.dir(axios);

// // const fetchUsersBtn = document.querySelector('.btn');

// // fetchUsersBtn.addEventListener('click', () => {
// //   fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(response.status);
// //       }
// //       return response.json();
// //     })
// //     .then(users => {
// //       // Дані від бекенда
// //       console.log(users);
// //     })
// //     .catch(error => console.log(error));
// // });
// // const fetchUsersBtn = document.querySelector('.btn');
// // const userList = document.querySelector('.user-list');

// // fetchUsersBtn.addEventListener('click', () => {
// //   fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(response.status);
// //       }
// //       return response.json();
// //     })
// //     .then(users => {
// //       const markup = users
// //         .map(user => {
// //           return `<li>
// // 	          <p><b>Name</b>: ${user.name}</p>
// // 	          <p><b>Email</b>: ${user.email}</p>
// // 	          <p><b>Company</b>: ${user.company.name}</p>
// // 	        </li>`;
// //         })
// //         .join('');

// //       userList.insertAdjacentHTML('beforeend', markup);
// //     })
// //     .catch(error => console.log(error));
// // });

// const fetchUsers = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );
//   return response.data;
// };

// const foo = async () => {
//   console.log('Before await');

//   const promiseValue = await new Promise(resolve => {
//     setTimeout(() => resolve(5), 2000);
//   });

//   console.log('After await', promiseValue);
//   const users = await fetchUsers();
//   console.log('🚀 ~ foo ~ users:', users);
// };

// foo();

// console.log('Before try...catch');

// try {
//   const result = 10 / 0;
//   console.log(result); // Цей рядок не виконається через помилку
// } catch (error) {
//   // Обробимо помилку
//   console.error(error.message);
// }

// console.log('After try...catch');

const fetchPosts = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  console.log('Posts: ', response.data);
};

fetchPosts();
